import Main from "@/components/Main";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ua" }];
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const [common, errors, home, header] = (
    await Promise.all([
      import(`@/lib/pageTextContent/${locale}/common`),
      import(`@/lib/pageTextContent/${locale}/errors`),
      import(`@/lib/pageTextContent/${locale}/pages/home`),
      import(`@/lib/pageTextContent/${locale}/components/header`),
    ])
  ).map((texts) => texts.default);

  return (
    <div>
      <h2>
        {Object.keys(common).map((key) => (
          <p key={`${key}:${common[key]}`}>
            {key}: {common[key]}
          </p>
        ))}
      </h2>
      <h2>
        {Object.keys(errors).map((key) => (
          <p key={`${key}:${errors[key]}`}>
            {key}: {errors[key]}
          </p>
        ))}
      </h2>
      <h2>
        {Object.keys(home).map((key) => (
          <p key={`${key}:${home[key]}`}>
            {key}: {home[key]}
          </p>
        ))}
      </h2>
      <h2>
        {Object.keys(header).map((key) => (
          <p key={`${key}:${header[key]}`}>
            {key}: {header[key]}
          </p>
        ))}
      </h2>

      <Main />
    </div>
  );
}

export default async function getTextContent(locale: "en" | "ua" = "en") {
  const [common, errors, home, header] = (
    await Promise.all([
      import(`@/lib/pageTextContent/${locale}/common`),
      import(`@/lib/pageTextContent/${locale}/errors`),
      import(`@/lib/pageTextContent/${locale}/pages/home`),
      import(`@/lib/pageTextContent/${locale}/components/header`),
    ])
  ).map((texts) => texts.default);

  console.log(common);
  return {
    common,
    errors,
    home,
    header,
  };
}

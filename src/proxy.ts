import { NextRequest, NextResponse } from "next/server";

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml).*)"],
};

export function proxy(req: NextRequest) {
  const locale = req.cookies.get("locale") || "en";

  if (req.nextUrl.pathname === "/") {
    return NextResponse.redirect(new URL(`/${locale}`, req.url));
  }
}

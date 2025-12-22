import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["en", "tr"],
  defaultLocale: "tr",
});

export const config = {
  matcher: [
    "/((?!_next|favicon.ico|icon.png|images|robots.txt).*)",
  ],
};

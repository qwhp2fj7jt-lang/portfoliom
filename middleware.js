import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["tr", "en"],
  defaultLocale: "tr",
  localePrefix: "always",
});
export const config = {
  matcher: [
    "/((?!_next|favicon.ico|icon.png|images|robots.txt|sitemap.xml|google9bb6d035c1ce6bb6.html).*)",
  ],
};

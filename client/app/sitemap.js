export default function sitemap() {
  const baseUrl = "https://portfoliom-4p84.onrender.com";

  return [
    { url: `${baseUrl}`, lastModified: new Date() },
    { url: `${baseUrl}/about`, lastModified: new Date() },
    { url: `${baseUrl}/projects`, lastModified: new Date() },
    { url: `${baseUrl}/blog`, lastModified: new Date() },
    { url: `${baseUrl}/zone`, lastModified: new Date() },
  ];
}

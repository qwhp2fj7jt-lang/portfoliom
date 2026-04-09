
export async function generateMetadata() {
    const baseUrl = "https://zeynepbas.dev";
  
    return {
      metadataBase: new URL(baseUrl),
      title: {
        default: "Blog",
        template: "%s | Zeynep Baş",
      },
      description:"Yakında",
      authors: [{ name: "Zeynep Baş", url: baseUrl }],
      creator: "Zeynep Baş",
      alternates: { canonical: `${baseUrl}/about` },
      robots: { index: true, follow: true },

      openGraph: {
        title: "Blog – Zeynep Baş",
        description:
          "Yakında",
        url: `${baseUrl}/blog`,
        siteName: "Zeynep Baş",
        type: "website",
        locale: "tr_TR",
        images: [
          {
            url: "/images/avatar.png",
            width: 1200,
            height: 630,
            alt: "Zeynep Baş",
          },
        ],
      },
  
    };
  }
export default function Blog(){

    return(
        <p className="text-center text-gray-400">Yakında</p>
    )
}

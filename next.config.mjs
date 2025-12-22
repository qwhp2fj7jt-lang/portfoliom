const nextConfig = {
    async redirects() {
      return [
        {
          source: '/about',
          destination: '/tr/about',
          permanent: true,
        },
      ];
    },
  };
  
  export default nextConfig;
  
const nextConfig = {
    async redirects() {
      return [
        {
          source: '/',
          destination: '/tr',
          permanent: true,
        },
        {
          source: '/about',
          destination: '/tr/about',
          permanent: true,
        },
      ];
    },
  };
  
  export default nextConfig;
  
// next.config.js
module.exports = {
  async rewrites() {
    const rewrites = [
      {
        source: "/icons",
        destination: "/api/icons",
      },
    ];
    return rewrites;
  },
};

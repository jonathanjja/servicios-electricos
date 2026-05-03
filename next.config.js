module.exports = {
  assetPrefix: 'https://<your-github-username>.github.io/<your-repo-name>/',
  exportPathMap: async function () {
    return {
      '/': { page: '/' },
      // Add more routes here as needed
    }
  }
};
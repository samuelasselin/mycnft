module.exports = {
  future: {
    webpack5: true,
  },
  webpack: (config) => {
    const experiments = config.experiments || {};
    config.experiments = { ...experiments, asyncWebAssembly: true };
    return config;
  },
};

module.exports = {
  future: {
    webpack5: false,
  },
  webpack: (config) => {
    config.output.webassemblyModuleFilename = "static/wasm/[modulehash].wasm";
    return config;
  },
};

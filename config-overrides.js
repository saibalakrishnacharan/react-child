module.exports = function override(config, env) {
      // Remove hashes from filenames
      config.output.filename = 'static/js/[name].js';
      config.output.chunkFilename = 'static/js/[name].chunk.js';
    return config;
  };
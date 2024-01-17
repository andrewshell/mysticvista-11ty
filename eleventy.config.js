module.exports = function (eleventyConfig) {
  eleventyConfig.setServerOptions({
    watch: ['_site/**/*.css'],
  });

  eleventyConfig.addPassthroughCopy({
    "./public/": "/",
  });

  return {
    dir: {
      input: 'src',
    },
  };
};

// tailwind.config.js
module.exports = {
  // In Tailwind CSS v4, 'content' array is generally not needed as
  // Tailwind CLI automatically scans your project for classes.
  // The 'prefix' option is also not yet supported in v4.

  theme: {
    extend: {
      // You can define custom theme values here, or directly in CSS using @theme
      // Example:
      // colors: {
      //   'my-custom-blue': '#3498db',
      // },
    },
  },
  plugins: [
    // Add Tailwind plugins here if needed
  ],
  corePlugins: {
    // Disable Tailwind's base styles (Preflight) to avoid conflicts with Bootstrap's reset.
    preflight: false,
  },
};

import { defineBuildConfig } from 'unbuild';
import images from 'rollup-plugin-image-files';

export default defineBuildConfig({
  // If entries is not provided, will be automatically inferred from package.json
  // entries: [],
  hooks: {
    'rollup:options'(_ctx, options) {
      options.plugins.push(images());
    },
  },
  // Change outDir, default is 'dist'
  // outDir: 'dist',
  // Generates .d.ts declaration file
  declaration: true,
});

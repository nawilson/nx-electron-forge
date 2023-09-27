import { addProjectConfiguration, formatFiles, generateFiles, NX_VERSION, addDependenciesToPackageJson, Tree } from '@nx/devkit';
import * as path from 'path';
import { InitGeneratorSchema } from './schema';

export async function electronGenerator(tree: Tree, options: InitGeneratorSchema) {
  const projectRoot = options.directory ? `${options.directory}/${options.name}` : options.name;

  addProjectConfiguration(tree, options.name, {
    root: projectRoot,
    projectType: 'application',
    sourceRoot: `${projectRoot}/src`,
    targets: {
      build: { executor: `@nawilson/nx-electron-forge:${options.bundler}`, options: {} },
      start: { executor: '@nawilson/nx-electron-forge:start' },
      package: { executor: '@nawilson/nx-electron-forge:package' },
      make: { executor: '@nawilson/nx-electron-forge:make' },
      publish: { executor: '@nawilson/nx-electron-forge:publish' },
    },
  });

  if (options.bundler === 'webpack') {
    addDependenciesToPackageJson(tree, {}, { '@nx/webpack': NX_VERSION });
  }

  if (options.bundler === 'vite') {
    addDependenciesToPackageJson(tree, {}, { '@nx/vite': NX_VERSION });
  }

  generateFiles(tree, path.join(__dirname, 'files'), projectRoot, options);

  await formatFiles(tree);
}

export default electronGenerator;

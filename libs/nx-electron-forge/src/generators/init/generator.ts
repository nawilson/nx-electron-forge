import { addProjectConfiguration, formatFiles, generateFiles, Tree } from '@nx/devkit';
import { webpackInitGenerator } from '@nx/webpack'
import * as path from 'path';
import { InitGeneratorSchema } from './schema';

export async function initGenerator(tree: Tree, options: InitGeneratorSchema) {
  const projectRoot = `apps/${options.name}`;

  await webpackInitGenerator(tree, {compiler: 'tsc', uiFramework: 'none', skipFormat: false} )

  addProjectConfiguration(tree, options.name, {
    root: projectRoot,
    projectType: 'application',
    sourceRoot: `${projectRoot}/src`,
    targets: {},
  });
  
  generateFiles(tree, path.join(__dirname, 'files'), projectRoot, options);
  
  await formatFiles(tree);
}

export default initGenerator;

import { ExecutorContext } from '@nx/devkit';
import { api } from '@electron-forge/core';
import { PackageExecutorSchema } from './schema';

export default async function runExecutor(options: Partial<PackageExecutorSchema>, context?: ExecutorContext) {
  try {
    options = { ...DEFAULT_OPTIONS, ...options };
    await api.package(options);

    return {
      success: true,
    };
  } catch (err) {
    console.error(err);
    return {
      success: false,
    };
  }
}

const DEFAULT_OPTIONS: PackageExecutorSchema = {
  arch: '',
  dir: '',
  interactive: false,
  outDir: '',
  platform: '',
};

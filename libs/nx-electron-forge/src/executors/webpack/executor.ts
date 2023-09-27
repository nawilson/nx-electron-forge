import { ExecutorContext } from '@nx/devkit';
import { api } from '@electron-forge/core';
import { WebpackExecutorSchema } from './schema';

export default async function runExecutor(options: Partial<WebpackExecutorSchema>, context?: ExecutorContext) {
  try {
    options = { ...DEFAULT_OPTIONS, ...options };
    const results = await api.make(options);

    return {
      success: results.length > 0,
    };
  } catch (err) {
    console.error(err);
    return {
      success: false,
    };
  }
}

const DEFAULT_OPTIONS: WebpackExecutorSchema = {
  arch: '',
  dir: '',
  interactive: false,
  outDir: '',
  overrideTargets: [],
  platform: '',
  skipPackage: false,
};

import { ExecutorContext } from '@nx/devkit';
import { api } from '@electron-forge/core';
import { PackageExecutorSchema } from './schema';

export default async function runExecutor(options: PackageExecutorSchema, context: ExecutorContext) {
  try {
    await api.package(options);

    return {
      success: true,
    };
  } catch (err) {
    return {
      success: false,
    };
  }
}

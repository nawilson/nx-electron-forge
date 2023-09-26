import { ExecutorContext } from '@nx/devkit';
import { api } from '@electron-forge/core';
import { MakeExecutorSchema } from './schema';

export default async function runExecutor(options: MakeExecutorSchema, context: ExecutorContext) {
  try {
    const results = await api.make(options);

    return {
      success: results.length > 0,
    };
  } catch (err) {
    return {
      success: false,
    };
  }
}

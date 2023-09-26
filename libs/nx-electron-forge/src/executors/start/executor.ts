import { ExecutorContext } from '@nx/devkit';
import { api } from '@electron-forge/core';
import { StartExecutorSchema } from './schema';

export default async function runExecutor(options: StartExecutorSchema, context: ExecutorContext): Promise<{ success: boolean }> {
  const electronProcess = await api.start(options);

  electronProcess.on('error', (err) => {
    console.error(err);
  });

  return {
    success: true,
  };
}

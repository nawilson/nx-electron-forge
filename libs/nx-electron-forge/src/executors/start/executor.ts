import { ExecutorContext } from '@nx/devkit';
import { api } from '@electron-forge/core';
import { StartExecutorSchema } from './schema';

export default async function runExecutor(options: Partial<StartExecutorSchema>, context?: ExecutorContext): Promise<{ success: boolean }> {
  try {
    options = { ...DEFAULT_OPTIONS, ...options };
    const electronProcess = await api.start(options);

    electronProcess.on('error', (err) => {
      throw Error(err.message);
    });

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

const DEFAULT_OPTIONS: StartExecutorSchema = {
  appPath: '',
  args: [],
  dir: '',
  enableLogging: false,
  inspect: false,
  inspectBrk: false,
  interactive: false,
  runAsNode: false,
};

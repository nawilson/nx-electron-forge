import { MakeOptions } from '@electron-forge/core';

export interface MakeExecutorSchema {
  arch: string;
  dir: string;
  interactive: boolean;
  outDir: string;
  overrideTargets: any[];
  platform: MakeOptions['platform'];
  skipPackage: boolean;
}

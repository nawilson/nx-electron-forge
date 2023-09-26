export interface MakeExecutorSchema {
  arch: string;
  dir: string;
  interactive: boolean;
  outDir: string;
  overrideTargets: any[];
  platform: string;
  skipPackage: boolean;
}

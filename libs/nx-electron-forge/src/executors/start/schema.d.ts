export interface StartExecutorSchema {
  appPath: string;
  args: (string | number)[];
  dir: string;
  enableLogging: boolean;
  inspect: boolean;
  inspectBrk: boolean;
  interactive: boolean;
  runAsNode: boolean;
}

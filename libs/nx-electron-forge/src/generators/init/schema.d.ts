export interface InitGeneratorSchema {
  name: string;
  bundler?: 'vite' | 'webpack';
  compiler?: 'swc' | 'tsc';
  directory?: string;
  skipFormat?: boolean;
  js?: boolean;
}

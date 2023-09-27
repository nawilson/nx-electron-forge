import { WebpackExecutorSchema } from './schema';
import executor from './executor';

const options: Partial<WebpackExecutorSchema> = {};

describe('Webpack Executor', () => {
  it('can run', async () => {
    const output = await executor(options);
    expect(output.success).toBeDefined();
  });
});

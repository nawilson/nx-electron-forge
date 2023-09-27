import { StartExecutorSchema } from './schema';
import executor from './executor';

const options: Partial<StartExecutorSchema> = {};

describe('Start Executor', () => {
  it('can run', async () => {
    const output = await executor(options);
    expect(output.success).toBeDefined();
  });
});

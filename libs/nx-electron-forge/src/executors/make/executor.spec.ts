import { MakeExecutorSchema } from './schema';
import executor from './executor';

const options: Partial<MakeExecutorSchema> = {};

describe('Make Executor', () => {
  it('can run', async () => {
    const output = await executor(options);
    expect(output.success).toBeDefined();
  });
});

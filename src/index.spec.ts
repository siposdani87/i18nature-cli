import cli from './index';

describe('index', () => {
    it('should run cli with empty args', async () => {
        await cli([]);
    });
});

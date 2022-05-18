import cli from './index';

describe('index', () => {
    it('should run cli with empty args', async () => {
        const logSpy = jest.spyOn(console, 'log');

        await cli([]);

        expect(logSpy).not.toBeCalled();
    });
});

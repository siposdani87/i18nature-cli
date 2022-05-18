import { logError, logHeader } from './log';

describe('log', () => {
    it('should log header title', () => {
        const logSpy = jest.spyOn(console, 'log');
        const title = 'TITLE';

        logHeader(title);

        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(title));
        logSpy.mockRestore();
    });

    it('should log error message', () => {
        const logSpy = jest.spyOn(console, 'error');
        const message = 'ERROR';

        logError(message);

        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(message));
        logSpy.mockRestore();
    });
});

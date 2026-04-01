import fs from 'node:fs';

// jest.setTimeout(10000);

let writeFileSyncSpy: jest.SpyInstance | null = null;
let mkdirSyncSpy: jest.SpyInstance | null = null;

let logSpy: jest.SpyInstance | null = null;
let errorSpy: jest.SpyInstance | null = null;
let infoSpy: jest.SpyInstance | null = null;

export const mockedFetch = jest.fn();
global.fetch = mockedFetch;

beforeAll(() => {
  writeFileSyncSpy = jest.spyOn(fs, 'writeFileSync').mockImplementation(() => {
    // Empty method
  });

  mkdirSyncSpy = jest.spyOn(fs, 'mkdirSync').mockImplementation(() => {
    return '';
  });

  logSpy = jest.spyOn(console, 'log').mockImplementation(() => {
    // Empty method
  });

  errorSpy = jest.spyOn(console, 'error').mockImplementation(() => {
    // Empty method
  });

  infoSpy = jest.spyOn(console, 'info').mockImplementation(() => {
    // Empty method
  });
});

beforeEach(() => {
  // Empty method
});

afterEach(() => {
  mockedFetch.mockReset();
});

afterAll(() => {
  writeFileSyncSpy?.mockRestore();
  mkdirSyncSpy?.mockRestore();

  logSpy?.mockRestore();
  errorSpy?.mockRestore();
  infoSpy?.mockRestore();
});

export function mockFetchResponse(data: any): void {
  mockedFetch.mockResolvedValue({
    ok: true,
    json: async () => data,
  });
}

export function mockFetchError(message: string): void {
  mockedFetch.mockRejectedValue(new Error(message));
}

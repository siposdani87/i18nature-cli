import fs from 'fs';

// jest.setTimeout(10000);

let writeFileSyncSpy: jest.SpyInstance | null = null;

let logSpy: jest.SpyInstance | null = null;
let errorSpy: jest.SpyInstance | null = null;
let infoSpy: jest.SpyInstance | null = null;

beforeAll(() => {
  writeFileSyncSpy = jest.spyOn(fs, 'writeFileSync').mockImplementation(() => {
    // Empty method
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
  // Empty method
});

afterAll(() => {
  writeFileSyncSpy?.mockRestore();

  logSpy?.mockRestore();
  errorSpy?.mockRestore();
  infoSpy?.mockRestore();
});

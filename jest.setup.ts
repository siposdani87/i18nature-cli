import fs from 'fs-extra';
import axios from 'axios';

// jest.setTimeout(10000);

let writeFileSyncSpy: jest.SpyInstance | null = null;
let ensureFileSyncSpy: jest.SpyInstance | null = null;

let logSpy: jest.SpyInstance | null = null;
let errorSpy: jest.SpyInstance | null = null;
let infoSpy: jest.SpyInstance | null = null;

jest.mock('axios');
export const mockedAxios = axios as jest.Mocked<typeof axios>;

beforeAll(() => {
  writeFileSyncSpy = jest.spyOn(fs, 'writeFileSync').mockImplementation(() => {
    // Empty method
  });

  ensureFileSyncSpy = jest.spyOn(fs, 'ensureFileSync').mockImplementation(() => {
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
  ensureFileSyncSpy?.mockRestore();

  logSpy?.mockRestore();
  errorSpy?.mockRestore();
  infoSpy?.mockRestore();
});

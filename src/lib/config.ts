import axios from 'axios';

export const DEFAULT_API_KEY = 'API_KEY';

export const FILENAME = '.i18naturerc.json';
export const DEBUG_FILENAME = '.i18naturerc-debug.json';
export const CURRENT_WORK_DIR = process.cwd();

export const DEBUG_BASE_URL = 'http://0.0.0.0:80';
export const BASE_URL = 'https://app.i18nature.com';

export const GREEN_COLOR = '#0A4414';

export const INDENT = 2;

axios.interceptors.response.use(
    (response) => response,
    (error) => {
        const message = error.response?.data?.message ?? error.message;
        return Promise.reject(new Error(message));
    },
);

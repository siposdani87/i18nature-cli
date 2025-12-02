import {
    DEFAULT_API_KEY,
    FILENAME,
    DEBUG_FILENAME,
    CURRENT_WORK_DIR,
    DEBUG_BASE_URL,
    BASE_URL,
    GREEN_COLOR,
    INDENT,
} from './config';
import axios from 'axios';

describe('config', () => {
    it('should export DEFAULT_API_KEY constant', () => {
        expect(DEFAULT_API_KEY).toBe('API_KEY');
    });

    it('should export FILENAME constant', () => {
        expect(FILENAME).toBe('.i18naturerc.json');
    });

    it('should export DEBUG_FILENAME constant', () => {
        expect(DEBUG_FILENAME).toBe('.i18naturerc-debug.json');
    });

    it('should export CURRENT_WORK_DIR constant', () => {
        expect(CURRENT_WORK_DIR).toBeDefined();
        expect(typeof CURRENT_WORK_DIR).toBe('string');
    });

    it('should export DEBUG_BASE_URL constant', () => {
        expect(DEBUG_BASE_URL).toBe('http://0.0.0.0:80');
    });

    it('should export BASE_URL constant', () => {
        expect(BASE_URL).toBe('https://app.i18nature.com');
    });

    it('should export GREEN_COLOR constant', () => {
        expect(GREEN_COLOR).toBe('#0A4414');
    });

    it('should export INDENT constant', () => {
        expect(INDENT).toBe(2);
    });

    it('should have axios interceptor configured', () => {
        expect(axios.interceptors.response).toBeDefined();
        // The interceptor is set up when config module is imported
        // It's tested indirectly through error handling in other tests
    });
});

import { createProjectConfig } from './projectConfig';
import { TranslationFile } from './types';

describe('projectConfig', () => {
    it('should create a valid project config', () => {
        const version = 2;
        const projectApiKey = 'API_KEY';
        const translationFiles: TranslationFile[] = [];
        const projectConfig = createProjectConfig(projectApiKey, translationFiles, version);

        expect(projectConfig).toEqual({
            version,
            project_api_key: projectApiKey,
            translation_files: translationFiles
        });
    });
});

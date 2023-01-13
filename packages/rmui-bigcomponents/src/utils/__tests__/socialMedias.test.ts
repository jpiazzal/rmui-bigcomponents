import FacebookIcon from '@mui/icons-material/Facebook';
import LinkIcon from '@mui/icons-material/Link';

import { getSocialMediaIcon, getSocialMediaTitle, SUPPORTED_SOCIAL_MEDIAS } from '../socialMedias';

describe('getSocialMediaIcon', () => {
    it('facebook icon (name in lowercase)', () => {
        expect(getSocialMediaIcon('facebook')).toBe(FacebookIcon);
    });

    it('facebook icon (name with an uppercase)', () => {
        expect(getSocialMediaIcon('Facebook')).toBe(FacebookIcon);
    });

    it('default icon', () => {
        expect(getSocialMediaIcon('default')).toBe(LinkIcon);
    });
});

describe('getSocialMediaTitle', () => {
    it('facebook title (name in lowercase)', () => {
        expect(getSocialMediaTitle('facebook')).toBe(SUPPORTED_SOCIAL_MEDIAS.facebook.name);
    });

    it('facebook icon (name with an uppercase)', () => {
        expect(getSocialMediaTitle('Facebook')).toBe(SUPPORTED_SOCIAL_MEDIAS.facebook.name);
    });

    it('default behavior, capitalize name', () => {
        expect(getSocialMediaTitle('default')).toBe('Default');
    });
});

import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkIcon from '@mui/icons-material/Link';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';
import RedditIcon from '@mui/icons-material/Reddit';
import TelegramIcon from '@mui/icons-material/Telegram';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import YouTubeIcon from '@mui/icons-material/YouTube';
import SvgIcon from '@mui/material/SvgIcon';
import SocialMedia from 'types/SocialMedia';
import { capitalize } from 'utils/string';

export const SUPPORTED_SOCIAL_MEDIAS: { [key: string]: SocialMedia } = {
    facebook: {
        name: 'Facebook',
        url: 'https://www.facebook.com/',
        icon: FacebookIcon
    },
    github: {
        name: 'GitHub',
        url: 'https://github.com/',
        icon: GitHubIcon
    },
    instagram: {
        name: 'Instagram',
        url: 'https://www.instagram.com/',
        icon: InstagramIcon
    },
    linkedin: {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/',
        icon: LinkedInIcon
    },
    pinterest: {
        name: 'Pinterest',
        url: 'https://www.pinterest.com/',
        icon: PinterestIcon
    },
    reddit: {
        name: 'Reddit',
        url: 'https://www.reddit.com/',
        icon: RedditIcon
    },
    telegram: {
        name: 'Telegram',
        url: 'https://telegram.org/',
        icon: TelegramIcon
    },
    twitter: {
        name: 'Twitter',
        url: 'https://twitter.com/',
        icon: TwitterIcon
    },
    whatsapp: {
        name: 'WhatsApp',
        url: 'https://www.whatsapp.com/',
        icon: WhatsAppIcon
    },
    youtube: {
        name: 'YouTube',
        url: 'https://www.youtube.com/',
        icon: YouTubeIcon
    }
};

export function getSocialMediaIcon(name: string): typeof SvgIcon {
    name = name.toLowerCase();
    if (SUPPORTED_SOCIAL_MEDIAS[name]) {
        return SUPPORTED_SOCIAL_MEDIAS[name].icon || LinkIcon;
    }
    return LinkIcon;
}

export function getSocialMediaTitle(name: string): string {
    name = name.toLowerCase();
    if (SUPPORTED_SOCIAL_MEDIAS[name]) {
        return SUPPORTED_SOCIAL_MEDIAS[name].name;
    }
    return capitalize(name);
}

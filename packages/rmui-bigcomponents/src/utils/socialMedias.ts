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

export function getSocialMediaIcon(name: string): typeof SvgIcon {
    name = name.toLowerCase();

    switch (name) {
        case 'facebook': {
            return FacebookIcon;
        }
        case 'twitter': {
            return TwitterIcon;
        }
        case 'instagram': {
            return InstagramIcon;
        }
        case 'linkedin': {
            return LinkedInIcon;
        }
        case 'youtube': {
            return YouTubeIcon;
        }
        case 'pinterest': {
            return PinterestIcon;
        }
        case 'reddit': {
            return RedditIcon;
        }
        case 'telegram': {
            return TelegramIcon;
        }
        case 'whatsapp': {
            return WhatsAppIcon;
        }
        case 'github': {
            return GitHubIcon;
        }
        default: {
            return LinkIcon;
        }
    }
}

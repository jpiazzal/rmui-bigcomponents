import SvgIcon from '@mui/material/SvgIcon';

export default interface SocialMedia {
    name: string;
    url: string;
    title?: string;
    icon?: typeof SvgIcon;
}

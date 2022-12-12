import SvgIcon from '@mui/material/SvgIcon';

export default interface SocialMedia {
    /**
     * The name of the social media.
     */
    name: string;
    /**
     * The url to social media.
     */
    url: string;
    /**
     * Title attribute of the link, useful for accessibility and SEO.
     * Default is the property name starting with an uppercase.
     * @default name
     */
    title?: string;
    /**
     * The icon to display. If social media is not supported, the icon will be a Link icon.
     * @type {SvgIcon}
     * @default LinkIcon
     * @link https://mui.com/material-ui/icons/#svgicon | Create custom SVG icons
     */
    icon?: typeof SvgIcon;
}

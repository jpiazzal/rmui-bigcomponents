import SocialMedia from 'types/SocialMedia';

import Copyright from './Copyright';
import SocialMediaLinks from './SocialMediaLinks';

interface FooterProps {
    /**
     * *Optional*
     *
     * The social media links to display as icons.
     */
    socialMediaLinks?: SocialMedia[];
    /**
     * *Optional*
     *
     * Text displayed in the copyright section. It always start with "©" and the current year.
     */
    copyrightText?: string;
}

export default function Footer({ socialMediaLinks, copyrightText }: FooterProps) {
    return (
        <footer style={{ padding: '1rem' }} role="contentinfo">
            {socialMediaLinks && <SocialMediaLinks socialMedias={socialMediaLinks} />}
            {copyrightText && <Copyright text={copyrightText} />}
        </footer>
    );
}

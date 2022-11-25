import SocialMedia from 'types/SocialMedia';

import Copyright from './Copyright';
import SocialMediaLinks from './SocialMediaLinks';
import SubLinks from './SubLinks';

interface FooterProps {
    /**
     * *Optional*
     *
     * The list of sub links to display in the footer.
     */
    subLinks?: {
        /**
         * The name of the link.
         */
        name: string;
        url: string;
        title?: string;
    }[];
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

export default function Footer({ subLinks, socialMediaLinks, copyrightText }: FooterProps) {
    return (
        <footer style={{ padding: '1rem' }} role="contentinfo">
            {subLinks && <SubLinks subLinks={subLinks} />}
            {socialMediaLinks && <SocialMediaLinks socialMedias={socialMediaLinks} />}
            {copyrightText && <Copyright text={copyrightText} />}
        </footer>
    );
}

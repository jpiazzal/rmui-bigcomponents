import Copyright from './Copyright';
import SocialMediaLinks from './SocialMediaLinks';

interface FooterProps {
    socialMediaLinks?: Array<{ name: string; href: string; title?: string }>;
    copyrightText?: string;
}

export default function Footer(props: FooterProps) {
    const { socialMediaLinks, copyrightText } = props;
    return (
        <footer style={{ padding: '1rem' }} role="contentinfo">
            {socialMediaLinks && <SocialMediaLinks socialMedias={socialMediaLinks} />}
            {copyrightText && <Copyright text={copyrightText} />}
        </footer>
    );
}

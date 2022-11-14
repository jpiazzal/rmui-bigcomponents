import Copyright from './Copyright';
import SocialMediaLinks from './SocialMediaLinks';

interface FooterProps {
    socialMediaLinks: Array<{ name: string; href: string; title?: string }>;
    copyrightText: string;
}

export default function Footer(props: FooterProps) {
    return (
        <footer style={{ padding: '1rem' }} role="contentinfo">
            <SocialMediaLinks socialMedias={props.socialMediaLinks} />
            <Copyright text={props.copyrightText} />
        </footer>
    );
}

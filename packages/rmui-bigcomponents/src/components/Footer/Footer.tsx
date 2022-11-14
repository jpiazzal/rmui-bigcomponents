import Copyright from './Copyright';

interface FooterProps {
    copyrightText: string;
}

export default function Footer(props: FooterProps) {
    return (
        <footer style={{ padding: '1.25rem' }} role="contentinfo">
            <Copyright text={props.copyrightText} />
        </footer>
    );
}

interface FooterProps {
    copyrightText: string;
}

export default function Footer(props: FooterProps) {
    return (
        <footer style={{ position: 'fixed', bottom: 0, width: '100%', padding: '1.25rem' }} role="contentinfo">
            {props.copyrightText}
        </footer>
    );
}

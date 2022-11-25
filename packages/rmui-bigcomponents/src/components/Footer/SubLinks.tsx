import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

interface SubLinksProps {
    subLinks: {
        name: string;
        url: string;
        title?: string;
    }[];
    align?: 'left' | 'center' | 'right';
}

export default function SubLinks({ subLinks, align = 'center' }: SubLinksProps) {
    return (
        <Typography
            sx={{
                textAlign: align || 'center',
                py: 1,
                '& > a': {
                    m: 1,
                    px: 1
                }
            }}
        >
            {subLinks.map((item, i) => (
                <Link href={item.url} title={item.title || item.name} key={i}>
                    {item.name}
                </Link>
            ))}
        </Typography>
    );
}

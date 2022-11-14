import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import SvgIcon from '@mui/material/SvgIcon';
import { getSocialMediaIcon } from 'utils/socialMedias';
import { capitalize } from 'utils/string';

interface SocialMediaLinksProps {
    socialMedias: Array<{ name: string; href: string; title?: string; icon?: typeof SvgIcon }>;
    align?: 'left' | 'center' | 'right';
}

export default function SocialMediaLinks({ socialMedias, align = 'center' }: SocialMediaLinksProps) {
    return (
        <Box
            sx={{
                textAlign: align,
                py: 1,
                '& > a > *': {
                    m: 1,
                    px: 1
                }
            }}
        >
            {socialMedias.map((socialMedia, i) => {
                const Icon = socialMedia.icon || getSocialMediaIcon(socialMedia.name);
                return (
                    <Link href={socialMedia.href} title={capitalize(socialMedia.title || socialMedia.name)} key={i}>
                        <Icon sx={{ fontSize: '1.75rem' }} />
                    </Link>
                );
            })}
        </Box>
    );
}

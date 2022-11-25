import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import SocialMedia from 'types/SocialMedia';
import { getSocialMediaIcon, getSocialMediaTitle } from 'utils/socialMedias';

interface SocialMediaLinksProps {
    socialMedias: SocialMedia[];
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
                const title: string = socialMedia.title || getSocialMediaTitle(socialMedia.name);
                return (
                    <Link href={socialMedia.url} title={title} key={i}>
                        <Icon sx={{ fontSize: '1.75rem' }} />
                    </Link>
                );
            })}
        </Box>
    );
}

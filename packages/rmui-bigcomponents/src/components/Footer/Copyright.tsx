import Typography from '@mui/material/Typography';

interface CopyrightProps {
    text: string;
    align?: 'left' | 'center' | 'right';
}

export default function Copyright({ text, align = 'center' }: CopyrightProps) {
    return (
        <Typography align={align} sx={{ py: 1 }} variant="body2">{`© ${new Date().getFullYear()} ${text}`}</Typography>
    );
}

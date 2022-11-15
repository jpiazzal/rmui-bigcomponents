import { render, screen } from '@testing-library/react';

import Footer from '../Footer';

describe('Footer', () => {
    it('should render copyright', () => {
        render(<Footer copyrightText="All right reserved" />);

        expect(screen.getByText(/All right reserved/)).toBeInTheDocument();
    });
});

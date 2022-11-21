import { ArgsTable } from '@storybook/addon-docs';

import Footer from './Footer';

export default {
    component: Footer,
    title: 'Big Components/Footer'
};

<ArgsTable of={Footer} />;

const Template = (args: any) => <Footer {...args} />;

/**
 * Default Footer
 */
export const DefaultFooter = Template.bind({});
DefaultFooter.args = {
    copyrightText: 'Website. All right reserved',
    socialMediaLinks: [
        { name: 'facebook', href: '#' },
        { name: 'twitter', href: '#' },
        { name: 'instagram', href: '#' }
    ]
};

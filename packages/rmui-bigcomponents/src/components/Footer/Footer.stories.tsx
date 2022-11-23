import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import Footer from './Footer';

export default {
    component: Footer,
    title: 'Big Components/Footer'
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (args: any) => <Footer {...args} />;

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

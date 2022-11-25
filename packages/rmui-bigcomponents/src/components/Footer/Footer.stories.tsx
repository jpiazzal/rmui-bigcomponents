import HikingIcon from '@mui/icons-material/Hiking';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import dedent from 'ts-dedent';
import { SUPPORTED_SOCIAL_MEDIAS } from 'utils/socialMedias';

import Footer from './Footer';

const linkToSocialMediaType = '<a href="?id=types-socialmedia--page" target="_blank">🔍 SocialMedia</a>';

export default {
    title: 'Big Components/Footer',
    component: Footer,
    parameters: {
        docs: {
            description: {
                component: dedent`
                    The footer component is used to display a footer at the bottom of the page.

                    It is composed of 3 sections:
                    - Sub links
                    - Social media links
                    - Copyright

                    All sections are optional. If you don't want to display a section, just don't pass the corresponding prop.

                    ### Usage

                    ~~~js

                    import { Footer } from 'rmui-big-components';

                    ~~~

                    On each preview, a button \`Show code\` is available to display the code of the component.

                    ### Types

                    - ${linkToSocialMediaType}
                `
            }
        }
    }
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (args: any) => <Footer {...args} />;

const copyrightText = 'Website. All rights reserved.';

/**
 * Default
 */
export const Default = Template.bind({});
Default.args = {
    subLinks: [
        { name: 'Contact Us', url: '#' },
        { name: 'About Us', url: '#' },
        { name: 'Privacy Policy', url: '#' },
        { name: 'Terms of Use', url: '#' }
    ],
    socialMediaLinks: [
        { name: 'facebook', url: '#' },
        { name: 'twitter', url: '#' },
        { name: 'instagram', url: '#' }
    ],
    copyrightText
};

/**
 * SocialMediasWithIcon
 */
const socialMediaWithIcon = Object.keys(SUPPORTED_SOCIAL_MEDIAS).map((socialMediaKey) => {
    return {
        name: socialMediaKey,
        url: '#'
    };
});
export const SocialMediasWithIcon = Template.bind({});
SocialMediasWithIcon.args = {
    socialMediaLinks: socialMediaWithIcon,
    copyrightText
};
SocialMediasWithIcon.parameters = {
    docs: {
        description: {
            story: dedent`
                Here the complete list of social medias that have an icon. More information at ${linkToSocialMediaType}.
            `
        }
    }
};

/**
 * SocialMediaWithDefaultIcon
 */
export const SocialMediaWithDefaultIcon = Template.bind({});
SocialMediaWithDefaultIcon.args = {
    socialMediaLinks: [{ name: 'social media with default icon', url: '#' }],
    copyrightText
};
SocialMediaWithDefaultIcon.parameters = {
    docs: {
        description: {
            story: dedent`
                If social media name is not supported, the default icon will be used. More information at ${linkToSocialMediaType}.
            `
        }
    }
};

/**
 * SocialMediaWithDefaultIcon
 */
export const SocialMediaWithCustomIcon = Template.bind({});
SocialMediaWithCustomIcon.args = {
    socialMediaLinks: [{ name: 'social media with custom icon', url: '#', icon: HikingIcon }],
    copyrightText
};
SocialMediaWithCustomIcon.parameters = {
    docs: {
        description: {
            story: dedent`
                You can add a custom icon on social media. More information at ${linkToSocialMediaType}.
            `
        }
    }
};

/**
 * CopyrightOnly
 */
export const CopyrightOnly = Template.bind({});
CopyrightOnly.args = {
    copyrightText
};

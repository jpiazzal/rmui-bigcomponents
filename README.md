# RMUI Big Components

A React big components library using Material UI.

Big components are components that are composed of other components. They are not atomic components.

## Installation

```bash
npm install rmui-bigcomponents
```

## Quick start

The approach is to create components that are easy to use, you just need to pass the props and the component will do the rest.

```jsx
import { Footer } from "rmui-bigcomponents";

<Footer
  copyrightText="All rights reserved"
  links={[
    { text: "Terms of use", href: "/terms-of-use" },
    { text: "Privacy policy", href: "/privacy-policy" },
  ]}
/>;
```

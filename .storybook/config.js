import { configure, addDecorator } from '@storybook/react';
import { checkA11y } from '@storybook/addon-a11y';

// automatically import all files ending in *.stories.tsx
const req = require.context('../src', true, /.stories.jsx$/);

addDecorator(checkA11y);

function loadStories() {
    req.keys().forEach(req);
}

configure(loadStories, module);

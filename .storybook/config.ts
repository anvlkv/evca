import { configure } from '@storybook/react';

// automatically import all files ending in *.stories.tsx
const req = require.context('../src', true, /.stories.tsx$/);

function loadStories() {
	require('./welcome.stories.tsx');
	req.keys().forEach(req);
}

configure(loadStories, module);
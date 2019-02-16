import { configure } from '@storybook/react';

function loadStories() {
  require('../src/**/*.stroies.jsx');
}

configure(loadStories, module);

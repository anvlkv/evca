// require all the test files in the test folder that end with Spec.js or Spec.jsx
const testsContext = require.context(".", true, /test.tsx?$/);
testsContext.keys().forEach(testsContext);

// output at when the test were run
console.info(`TESTS RAN AT ${new Date().toLocaleTimeString()}`);
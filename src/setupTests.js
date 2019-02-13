// react-testing-library renders your components to document.body,
// this will ensure they're removed after each test.
import 'react-testing-library/cleanup-after-each';
// this adds jest-dom's custom assertions
import 'jest-dom/extend-expect';

if (!window.SVGElement.prototype.getBBox) {
    window.SVGElement.prototype.getBBox = function() {
        // console.log(this);
        return {x: 0, y: 0, width: 20, height: 20};
    };
}
import { configure } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';

// react-testing-library renders your components to document.body,
// this will ensure they're removed after each test.
import 'react-testing-library/cleanup-after-each';
// this adds jest-dom's custom assertions
import 'jest-dom/extend-expect';

if (!window.SVGElement.prototype.getBBox) {
    window.SVGElement.prototype.getBBox = function() {
        if (this.getAttribute('data-b-box-mock')) {
            return eval(
                `(${this.getAttribute('data-b-box-mock')})`
            )
        }
        else if (this.children && this.children[0] && this.children[0].getAttribute('data-b-box-mock')) {
            const childrenMocks = [];
            for (let i = 0; i < this.children.length; i++) {
                childrenMocks.push(
                    eval(
                        `(${this.children[i].getAttribute('data-b-box-mock')})`
                    )
                );
            }

            return childrenMocks.reduce((acc, current, at, all) => {
                if(acc.x > current.x) {
                    acc.x = current.x
                }
                if(acc.y > current.y) {
                    acc.y = current.y
                }

                if(acc.width < current.width - current.x - acc.x) {
                    acc.width = current.width - current.x - acc.x
                }

                if(acc.height < current.height - current.y - acc.y) {
                    acc.height = current.height - current.y - acc.y
                }
                return acc;
            }, {x: 0, y: 0, width: 0, height: 0})
        }
        else {
            return {x: 0, y: 0, width: 20, height: 20};
        }
    };
}

configure({ adapter: new Adapter() });
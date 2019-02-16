import ReactDOM from 'react-dom';
import { Layout } from '../../../src/containers/layout/Layout';
import {
	LayoutAlignmentHorizontal,
	LayoutAlignmentVertical,
	LayoutFlow,
} from '../../../src/containers/layout/Layout.enum';
import React from 'react';


describe('My First Test', function() {
	beforeEach(() => {
		const div = document.createElement('div');
		ReactDOM.render(<svg xmlns="http://www.w3.org/2000/svg">
			<Layout flow={LayoutFlow.COLUMN}
			        horizontalAlignment={LayoutAlignmentHorizontal.LEFT}
			        verticalAlignment={LayoutAlignmentVertical.TOP}>
				<rect width={50} height={50} fill={'red'}/>
				<circle r={15} fill={'blue'} transform="translate(15 15)"/>
				<path transform="scale(.15)"
				      d="M 10,30 A 20,20 0,0,1 50,30
                 A 20,20 0,0,1 90,30
                 Q 90,60 50,90
                 Q 10,60 10,30 z"
				      fill={'red'}/>
			</Layout>
		</svg>, div);
		ReactDOM.unmountComponentAtNode(div);
	})
	// it('Does not do much!', function() {
	// 	expect(true).to.equal(true)
	// });
});

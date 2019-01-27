import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Calendar } from './calendar';


storiesOf('Calendar', module)
	.add('with "date" date', () => (
		<Calendar date={new Date()} width={200} height={200}/>
	));
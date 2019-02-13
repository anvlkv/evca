import Page from 'react-page-object'
import React from 'react'
import { App } from './App'

describe('AppSpec', () => {
	let page;

	beforeEach(() => {
		page = new Page(<App />)
	});

	afterEach(() => {
		page.destroy()
	});

	it('should pass', () => {
		expect(page.content()).toMatch(/Welcome to React/)
	});
});
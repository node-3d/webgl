import assert from 'node:assert/strict';
import test from 'node:test';
import { classes, webgl } from '@node-3d/webgl';

test('loads the packed WebGL addon', () => {
	assert.equal(typeof webgl.getParameter, 'function');
	assert.equal(typeof webgl.createBuffer, 'function');
	assert.equal(typeof classes.WebGLRenderingContext, 'function');
});

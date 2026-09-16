import { Document } from '@node-3d/glfw';

import { webgl as gl } from '@node-3d/webgl';

Document.setWebgl(gl);

const doc = new Document();
if (!doc) {
	// reference it to make TS happy
	process.exit(1);
}

console.log('----- WebGL -----');
console.log(gl.getSupportedExtensions().toSorted().join('\n'));
console.log('----- NATIVE -----');
console.log(gl.getGLExtensions().toSorted().join('\n'));

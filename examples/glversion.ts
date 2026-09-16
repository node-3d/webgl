import { Document } from '@node-3d/glfw';

import { webgl as gl } from '@node-3d/webgl';

Document.setWebgl(gl);

const doc = new Document();
if (!doc) {
	// reference it to make TS happy
	process.exit(1);
}

console.log(`
OpenGL
	vendor    : ${gl.getParameter(gl.VENDOR) as string}
	version   : ${gl.getParameter(gl.VERSION) as string}
	glsl      : ${gl.getParameter(gl.SHADING_LANGUAGE_VERSION) as string}
	renderer  : ${gl.getParameter(gl.RENDERER) as string}
	extensions: ${gl.getSupportedExtensions().length}
`);

import type { TNativeMutable } from './overrides';

export type TExtensions = {
	ANGLE_instanced_arrays: {
		VERTEX_ATTRIB_ARRAY_DIVISOR_ANGLE: number;
		drawArraysInstancedANGLE: TNativeMutable['drawArraysInstanced'];
		drawElementsInstancedANGLE: TNativeMutable['drawElementsInstanced'];
		vertexAttribDivisorANGLE: TNativeMutable['vertexAttribDivisor'];
	};
	EXT_blend_minmax: {
		MIN_EXT: number;
		MAX_EXT: number;
	};
	EXT_color_buffer_float: Record<string, unknown>;
	EXT_color_buffer_half_float: {
		RGBA16F_EXT: number;
		RGB16F_EXT: number;
		FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE_EXT: number;
		UNSIGNED_NORMALIZED_EXT: number;
	};
	EXT_disjoint_timer_query: {
		QUERY_COUNTER_BITS_EXT: number;
		CURRENT_QUERY_EXT: number;
		QUERY_RESULT_EXT: number;
		QUERY_RESULT_AVAILABLE_EXT: number;
		TIME_ELAPSED_EXT: number;
		TIMESTAMP_EXT: number;
		GPU_DISJOINT_EXT: number;
		createQueryEXT: () => unknown;
		deleteQueryEXT: () => unknown;
		isQueryEXT: () => unknown;
		beginQueryEXT: () => unknown;
		endQueryEXT: () => unknown;
		queryCounterEXT: () => unknown;
		getQueryEXT: () => unknown;
		getQueryObjectEXT: () => unknown;
	};
	EXT_frag_depth: Record<string, unknown>;
	EXT_sRGB: {
		SRGB_EXT: number;
		SRGB_ALPHA_EXT: number;
		SRGB8_ALPHA8_EXT: number;
		FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING_EXT: number;
	};
	EXT_shader_texture_lod: Record<string, unknown>;
	EXT_texture_filter_anisotropic: {
		MAX_TEXTURE_MAX_ANISOTROPY_EXT: number;
		TEXTURE_MAX_ANISOTROPY_EXT: number;
	};
	OES_element_index_uint: Record<string, unknown>;
	OES_standard_derivatives: {
		FRAGMENT_SHADER_DERIVATIVE_HINT_OES: number;
	};
	OES_texture_float: Record<string, unknown>;
	OES_texture_float_linear: Record<string, unknown>;
	OES_texture_half_float: {
		HALF_FLOAT_OES: number;
	};
	OES_texture_half_float_linear: Record<string, unknown>;
	OES_vertex_array_object: {
		VERTEX_ARRAY_BINDING_OES: number;
		createVertexArrayOES: TNativeMutable['createVertexArray'];
		deleteVertexArrayOES: TNativeMutable['deleteVertexArray'];
		isVertexArrayOES: TNativeMutable['isVertexArray'];
		bindVertexArrayOES: TNativeMutable['bindVertexArray'];
	};
	WEBGL_color_buffer_float: {
		RGBA32F_EXT: number;
		RGB32F_EXT: number;
		FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE_EXT: number;
		UNSIGNED_NORMALIZED_EXT: number;
	};
	WEBGL_compressed_texture_astc: {
		getSupportedProfiles: () => void;
		COMPRESSED_RGBA_ASTC_4x4_KHR: number;
		COMPRESSED_RGBA_ASTC_5x4_KHR: number;
		COMPRESSED_RGBA_ASTC_5x5_KHR: number;
		COMPRESSED_RGBA_ASTC_6x5_KHR: number;
		COMPRESSED_RGBA_ASTC_6x6_KHR: number;
		COMPRESSED_RGBA_ASTC_8x5_KHR: number;
		COMPRESSED_RGBA_ASTC_8x6_KHR: number;
		COMPRESSED_RGBA_ASTC_8x8_KHR: number;
		COMPRESSED_RGBA_ASTC_10x5_KHR: number;
		COMPRESSED_RGBA_ASTC_10x6_KHR: number;
		COMPRESSED_RGBA_ASTC_10x8_KHR: number;
		COMPRESSED_RGBA_ASTC_10x10_KHR: number;
		COMPRESSED_RGBA_ASTC_12x10_KHR: number;
		COMPRESSED_RGBA_ASTC_12x12_KHR: number;
		COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR: number;
		COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR: number;
		COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR: number;
		COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR: number;
		COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR: number;
		COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR: number;
		COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR: number;
		COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR: number;
		COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR: number;
		COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR: number;
		COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR: number;
		COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR: number;
		COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR: number;
		COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR: number;
	};
	WEBGL_compressed_texture_atc: {
		COMPRESSED_RGB_ATC_WEBGL: number;
		COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL: number;
		COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL: number;
	};
	WEBGL_compressed_texture_etc: {
		COMPRESSED_R11_EAC: number;
		COMPRESSED_SIGNED_R11_EAC: number;
		COMPRESSED_RG11_EAC: number;
		COMPRESSED_SIGNED_RG11_EAC: number;
		COMPRESSED_RGB8_ETC2: number;
		COMPRESSED_RGBA8_ETC2_EAC: number;
		COMPRESSED_SRGB8_ETC2: number;
		COMPRESSED_SRGB8_ALPHA8_ETC2_EAC: number;
		COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2: number;
		COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2: number;
	};
	WEBGL_compressed_texture_etc1: {
		COMPRESSED_RGB_ETC1_WEBGL: number;
	};
	WEBGL_compressed_texture_pvrtc: {
		COMPRESSED_RGB_PVRTC_4BPPV1_IMG: number;
		COMPRESSED_RGBA_PVRTC_4BPPV1_IMG: number;
		COMPRESSED_RGB_PVRTC_2BPPV1_IMG: number;
		COMPRESSED_RGBA_PVRTC_2BPPV1_IMG: number;
	};
	WEBGL_compressed_texture_s3tc: {
		COMPRESSED_RGB_S3TC_DXT1_EXT: number;
		COMPRESSED_RGBA_S3TC_DXT1_EXT: number;
		COMPRESSED_RGBA_S3TC_DXT3_EXT: number;
		COMPRESSED_RGBA_S3TC_DXT5_EXT: number;
	};
	WEBGL_compressed_texture_s3tc_srgb: {
		COMPRESSED_SRGB_S3TC_DXT1_EXT: number;
		COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT: number;
		COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT: number;
		COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT: number;
	};
	WEBGL_debug_renderer_info: {
		UNMASKED_VENDOR_WEBGL: number;
		UNMASKED_RENDERER_WEBGL: number;
	};
	WEBGL_debug_shaders: {
		getTranslatedShaderSource: () => unknown;
	};
	WEBGL_depth_texture: {
		UNSIGNED_INT_24_8_WEBGL: number;
	};
	WEBGL_draw_buffers: {
		COLOR_ATTACHMENT0_WEBGL: number;
		COLOR_ATTACHMENT1_WEBGL: number;
		COLOR_ATTACHMENT2_WEBGL: number;
		COLOR_ATTACHMENT3_WEBGL: number;
		COLOR_ATTACHMENT4_WEBGL: number;
		COLOR_ATTACHMENT5_WEBGL: number;
		COLOR_ATTACHMENT6_WEBGL: number;
		COLOR_ATTACHMENT7_WEBGL: number;
		COLOR_ATTACHMENT8_WEBGL: number;
		COLOR_ATTACHMENT9_WEBGL: number;
		COLOR_ATTACHMENT10_WEBGL: number;
		COLOR_ATTACHMENT11_WEBGL: number;
		COLOR_ATTACHMENT12_WEBGL: number;
		COLOR_ATTACHMENT13_WEBGL: number;
		COLOR_ATTACHMENT14_WEBGL: number;
		COLOR_ATTACHMENT15_WEBGL: number;
		DRAW_BUFFER0_WEBGL: number;
		DRAW_BUFFER1_WEBGL: number;
		DRAW_BUFFER2_WEBGL: number;
		DRAW_BUFFER3_WEBGL: number;
		DRAW_BUFFER4_WEBGL: number;
		DRAW_BUFFER5_WEBGL: number;
		DRAW_BUFFER6_WEBGL: number;
		DRAW_BUFFER7_WEBGL: number;
		DRAW_BUFFER8_WEBGL: number;
		DRAW_BUFFER9_WEBGL: number;
		DRAW_BUFFER10_WEBGL: number;
		DRAW_BUFFER11_WEBGL: number;
		DRAW_BUFFER12_WEBGL: number;
		DRAW_BUFFER13_WEBGL: number;
		DRAW_BUFFER14_WEBGL: number;
		DRAW_BUFFER15_WEBGL: number;
		MAX_COLOR_ATTACHMENTS_WEBGL: number;
		MAX_DRAW_BUFFERS_WEBGL: number;
		drawBuffersWEBGL: TNativeMutable['drawBuffers'];
	};
	WEBGL_lose_context: {
		loseContext: () => unknown;
		restoreContext: () => unknown;
	};
};

// oxlint-disable-next-line max-lines-per-function
const createExtensions = (gl: TNativeMutable): TExtensions => ({
	ANGLE_instanced_arrays: {
		VERTEX_ATTRIB_ARRAY_DIVISOR_ANGLE: 0x88fe,
		drawArraysInstancedANGLE: gl.drawArraysInstanced,
		drawElementsInstancedANGLE: gl.drawElementsInstanced,
		vertexAttribDivisorANGLE: gl.vertexAttribDivisor,
	},
	EXT_blend_minmax: {
		MIN_EXT: 0x8007,
		MAX_EXT: 0x8008,
	},
	EXT_color_buffer_float: {},
	EXT_color_buffer_half_float: {
		RGBA16F_EXT: 0x881a,
		RGB16F_EXT: 0x881b,
		FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE_EXT: 0x8211,
		UNSIGNED_NORMALIZED_EXT: 0x8c17,
	},
	EXT_disjoint_timer_query: {
		QUERY_COUNTER_BITS_EXT: 0x8864,
		CURRENT_QUERY_EXT: 0x8865,
		QUERY_RESULT_EXT: 0x8866,
		QUERY_RESULT_AVAILABLE_EXT: 0x8867,
		TIME_ELAPSED_EXT: 0x88bf,
		TIMESTAMP_EXT: 0x8e28,
		GPU_DISJOINT_EXT: 0x8fbb,
		createQueryEXT() {
			/* nop */
		},
		deleteQueryEXT() {
			/* nop */
		},
		isQueryEXT() {
			/* nop */
		},
		beginQueryEXT() {
			/* nop */
		},
		endQueryEXT() {
			/* nop */
		},
		queryCounterEXT() {
			/* nop */
		},
		getQueryEXT() {
			/* nop */
		},
		getQueryObjectEXT() {
			/* nop */
		},
	},
	EXT_frag_depth: {},
	EXT_sRGB: {
		SRGB_EXT: 0x8c40,
		SRGB_ALPHA_EXT: 0x8c42,
		SRGB8_ALPHA8_EXT: 0x8c43,
		FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING_EXT: 0x8210,
	},
	EXT_shader_texture_lod: {},
	EXT_texture_filter_anisotropic: {
		MAX_TEXTURE_MAX_ANISOTROPY_EXT: 0x84ff,
		TEXTURE_MAX_ANISOTROPY_EXT: 0x84fe,
	},
	OES_element_index_uint: {},
	OES_standard_derivatives: {
		FRAGMENT_SHADER_DERIVATIVE_HINT_OES: 0x8b8b,
	},
	OES_texture_float: {},
	OES_texture_float_linear: {},
	OES_texture_half_float: {
		HALF_FLOAT_OES: 0x8d61,
	},
	OES_texture_half_float_linear: {},
	OES_vertex_array_object: {
		VERTEX_ARRAY_BINDING_OES: 0x85b5,
		createVertexArrayOES: gl.createVertexArray,
		deleteVertexArrayOES: gl.deleteVertexArray,
		isVertexArrayOES: gl.isVertexArray,
		bindVertexArrayOES: gl.bindVertexArray,
	},
	WEBGL_color_buffer_float: {
		RGBA32F_EXT: 0x8814,
		RGB32F_EXT: 0x8815,
		FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE_EXT: 0x8211,
		UNSIGNED_NORMALIZED_EXT: 0x8c17,
	},
	WEBGL_compressed_texture_astc: {
		getSupportedProfiles() {
			/* nop */
		},
		COMPRESSED_RGBA_ASTC_4x4_KHR: 0x93b0,
		COMPRESSED_RGBA_ASTC_5x4_KHR: 0x93b1,
		COMPRESSED_RGBA_ASTC_5x5_KHR: 0x93b2,
		COMPRESSED_RGBA_ASTC_6x5_KHR: 0x93b3,
		COMPRESSED_RGBA_ASTC_6x6_KHR: 0x93b4,
		COMPRESSED_RGBA_ASTC_8x5_KHR: 0x93b5,
		COMPRESSED_RGBA_ASTC_8x6_KHR: 0x93b6,
		COMPRESSED_RGBA_ASTC_8x8_KHR: 0x93b7,
		COMPRESSED_RGBA_ASTC_10x5_KHR: 0x93b8,
		COMPRESSED_RGBA_ASTC_10x6_KHR: 0x93b9,
		COMPRESSED_RGBA_ASTC_10x8_KHR: 0x93ba,
		COMPRESSED_RGBA_ASTC_10x10_KHR: 0x93bb,
		COMPRESSED_RGBA_ASTC_12x10_KHR: 0x93bc,
		COMPRESSED_RGBA_ASTC_12x12_KHR: 0x93bd,
		COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR: 0x93d0,
		COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR: 0x93d1,
		COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR: 0x93d2,
		COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR: 0x93d3,
		COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR: 0x93d4,
		COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR: 0x93d5,
		COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR: 0x93d6,
		COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR: 0x93d7,
		COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR: 0x93d8,
		COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR: 0x93d9,
		COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR: 0x93da,
		COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR: 0x93db,
		COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR: 0x93dc,
		COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR: 0x93dd,
	},
	WEBGL_compressed_texture_atc: {
		COMPRESSED_RGB_ATC_WEBGL: 0x8c92,
		COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL: 0x8c92,
		COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL: 0x87ee,
	},
	WEBGL_compressed_texture_etc: {
		COMPRESSED_R11_EAC: 0x9270,
		COMPRESSED_SIGNED_R11_EAC: 0x9271,
		COMPRESSED_RG11_EAC: 0x9272,
		COMPRESSED_SIGNED_RG11_EAC: 0x9273,
		COMPRESSED_RGB8_ETC2: 0x9274,
		COMPRESSED_RGBA8_ETC2_EAC: 0x9275,
		COMPRESSED_SRGB8_ETC2: 0x9276,
		COMPRESSED_SRGB8_ALPHA8_ETC2_EAC: 0x9277,
		COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2: 0x9278,
		COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2: 0x9279,
	},
	WEBGL_compressed_texture_etc1: {
		COMPRESSED_RGB_ETC1_WEBGL: 0x8d64,
	},
	WEBGL_compressed_texture_pvrtc: {
		COMPRESSED_RGB_PVRTC_4BPPV1_IMG: 0x8c00,
		COMPRESSED_RGBA_PVRTC_4BPPV1_IMG: 0x8c02,
		COMPRESSED_RGB_PVRTC_2BPPV1_IMG: 0x8c01,
		COMPRESSED_RGBA_PVRTC_2BPPV1_IMG: 0x8c03,
	},
	WEBGL_compressed_texture_s3tc: {
		COMPRESSED_RGB_S3TC_DXT1_EXT: 0x83f0,
		COMPRESSED_RGBA_S3TC_DXT1_EXT: 0x83f1,
		COMPRESSED_RGBA_S3TC_DXT3_EXT: 0x83f2,
		COMPRESSED_RGBA_S3TC_DXT5_EXT: 0x83f3,
	},
	WEBGL_compressed_texture_s3tc_srgb: {
		COMPRESSED_SRGB_S3TC_DXT1_EXT: 0x8c4c,
		COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT: 0x8c4d,
		COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT: 0x8c4e,
		COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT: 0x8c4f,
	},
	WEBGL_debug_renderer_info: {
		UNMASKED_VENDOR_WEBGL: 0x9245,
		UNMASKED_RENDERER_WEBGL: 0x9246,
	},
	WEBGL_debug_shaders: {
		getTranslatedShaderSource() {
			/* nop */
		},
	},
	WEBGL_depth_texture: {
		UNSIGNED_INT_24_8_WEBGL: 0x84fa,
	},
	WEBGL_draw_buffers: {
		COLOR_ATTACHMENT0_WEBGL: 0x8ce0,
		COLOR_ATTACHMENT1_WEBGL: 0x8ce1,
		COLOR_ATTACHMENT2_WEBGL: 0x8ce2,
		COLOR_ATTACHMENT3_WEBGL: 0x8ce3,
		COLOR_ATTACHMENT4_WEBGL: 0x8ce4,
		COLOR_ATTACHMENT5_WEBGL: 0x8ce5,
		COLOR_ATTACHMENT6_WEBGL: 0x8ce6,
		COLOR_ATTACHMENT7_WEBGL: 0x8ce7,
		COLOR_ATTACHMENT8_WEBGL: 0x8ce8,
		COLOR_ATTACHMENT9_WEBGL: 0x8ce9,
		COLOR_ATTACHMENT10_WEBGL: 0x8cea,
		COLOR_ATTACHMENT11_WEBGL: 0x8ceb,
		COLOR_ATTACHMENT12_WEBGL: 0x8cec,
		COLOR_ATTACHMENT13_WEBGL: 0x8ced,
		COLOR_ATTACHMENT14_WEBGL: 0x8cee,
		COLOR_ATTACHMENT15_WEBGL: 0x8cef,
		DRAW_BUFFER0_WEBGL: 0x8825,
		DRAW_BUFFER1_WEBGL: 0x8826,
		DRAW_BUFFER2_WEBGL: 0x8827,
		DRAW_BUFFER3_WEBGL: 0x8828,
		DRAW_BUFFER4_WEBGL: 0x8829,
		DRAW_BUFFER5_WEBGL: 0x882a,
		DRAW_BUFFER6_WEBGL: 0x882b,
		DRAW_BUFFER7_WEBGL: 0x882c,
		DRAW_BUFFER8_WEBGL: 0x882d,
		DRAW_BUFFER9_WEBGL: 0x882e,
		DRAW_BUFFER10_WEBGL: 0x882f,
		DRAW_BUFFER11_WEBGL: 0x8830,
		DRAW_BUFFER12_WEBGL: 0x8831,
		DRAW_BUFFER13_WEBGL: 0x8832,
		DRAW_BUFFER14_WEBGL: 0x8833,
		DRAW_BUFFER15_WEBGL: 0x8834,
		MAX_COLOR_ATTACHMENTS_WEBGL: 0x8cdf,
		MAX_DRAW_BUFFERS_WEBGL: 0x8824,
		drawBuffersWEBGL: gl.drawBuffers,
	},
	WEBGL_lose_context: {
		loseContext() {
			/* nop */
		},
		restoreContext() {
			/* nop */
		},
	},
});

export { createExtensions };

import * as esbuild from 'esbuild';

let ctx;

try {
	await esbuild.build({
		entryPoints: ['src/server/server.ts'],
		bundle: true,
		sourcemap: false,
		minify: true,
		platform: 'node',
		packages: 'external',
		define: {
			'process.env.NODE_ENV': "'production'"
		},
		outfile: 'dist/server.js'
	});
	console.log('Server bundled successfully for production!');
	process.exit(0);
} catch (error) {
	console.error('An error occurred:', error);
	process.exit(1);
}
import * as esbuild from 'esbuild';

try {
	await esbuild.build({
		entryPoints: ['src/app/index.tsx'],
		bundle: true,
		minify: false,
		sourcemap: false,
		outfile: 'public/static/app.js',
		define: {
			'process.env.NODE_ENV': "'production'"
		}
	});
	console.log(`App bundled successfully`);
	process.exit(0);
} catch (error) {
	console.error('An error occurred:', error);
	process.exit(1);
}
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');

const plugins = [];
plugins.push(tailwindcss);
// plugins.push(tailwindcss('tailwind.config.js'))
// This is if you want to include your custom config

// postcss.config.js
if (process.env.NODE_ENV === 'production') {
	const purgecssWordpress = require('purgecss-with-wordpress');
	const purgecss = require('@fullhuman/postcss-purgecss')({
		// Specify the paths to all of the template files in your project
		content: [
			'**/*.twig',
			'web/**/*.js',
			// etc.
		],
		whitelist: purgecssWordpress.whitelist,
		whitelistPatterns: purgecssWordpress.whitelistPatterns,

		// Include any special characters you're using in this regular expression
		defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
	});

	plugins.push(purgecss);
}

plugins.push(autoprefixer);

module.exports = { plugins };

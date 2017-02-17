module.exports = {
	babelrc: false,
	presets: [
		['latest', {loose: true, modules: false}],
		'stage-0',
		'react'
	],
	plugins: [
		[
			"import",
			{
				libraryName: "antd",
				style: "css"
			}
		],
		'transform-runtime',
		'babel-plugin-transform-react-constant-elements',
	]
};
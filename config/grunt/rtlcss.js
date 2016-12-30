// https://github.com/MohammadYounes/grunt-rtlcss
module.exports = {
	options: {
		swapLeftRightInUrl: false,
		swapLtrRtlInUrl: false,
		autoRename: false,
		preserveDirectives: true,
		map: true
	},
	style: {
		src: 'style.css',
		dest: 'style-rtl.css'
	}
};

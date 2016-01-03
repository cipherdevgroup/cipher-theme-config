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
		src: '<%= paths.tmp %>style.css',
		dest: '<%= paths.tmp %>style-rtl.css'
	}
};

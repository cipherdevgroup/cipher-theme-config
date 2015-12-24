// https://github.com/MohammadYounes/grunt-rtlcss
module.exports = {
	theme: {
		options: {
			swapLeftRightInUrl: false,
			swapLtrRtlInUrl: false,
			autoRename: false,
			preserveDirectives: true,
			map: true
		},
		files: [
			{
				src: '<%= paths.tmp %>style.css',
				dest: '<%= paths.tmp %>style-rtl.css'
			}
		]
	}
};

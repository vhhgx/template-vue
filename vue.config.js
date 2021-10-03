const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}
 
module.exports = {
	publicPath: process.env.PUBLIC_PATH,
	lintOnSave: false,
  chainWebpack: (config) => {   
    config.resolve.alias
    .set('@',resolve('/src/components'))
		.set('views',resolve('/src/views'));
	},
	devServer: {
		overlay: { warnings: true, errors: true },
    disableHostCheck: true,
		proxy: { 
			'/api': {
				target: process.env.VUE_APP_PROXY_URL,
				changOrigin: true,
				secure: false,
				pathRewrite: {
					'^/api': '' 
				}
			},
		}
	},
};

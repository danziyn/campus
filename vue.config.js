const path = require('path');
function resolve (dir) {
    return path.join(__dirname, dir)
}
// 项目的主要配置文件
module.exports = {
    // webpack 配置进行更细粒度的修改  https://cli.vuejs.org/zh/config/#chainwebpack
    publicPath: './',
    chainWebpack: (config)=>{
        //修改文件引入自定义路径
        config.resolve.alias
            .set('@', resolve('src'))
            .set('views', resolve('src/views'))
            .set('components', resolve('src/components'))
            .set('network', resolve('src/network'))
            .set('common', resolve('src/common'))
            .set('assets', resolve('src/assets'))
    }
}

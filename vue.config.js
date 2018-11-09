module.exports = {
    lintOnSave: process.env.NODE_ENV !== 'production',
    productionSourceMap: false, 
    devServer: {
        proxy: {
            '/api': {
                target: '119.29.33.116',
                ws: true,
                changeOrigin: true
            }
        }
    }
}
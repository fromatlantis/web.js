module.exports = {
    resolve: {
        alias: {
          'jquery': './public/halo/plugins/jquery-1.10.2.min.js'
        }
    },
    entry: "./public/halo/main.js",
    output: {
        path: './public/javascripts',
        filename: "bundle.js"
    }
};
module.exports={
    //关闭eslint语法校验
    lintOnSave:false,
    devServer:{
        proxy:{
            '/api':{
                target:'http://39.98.123.211',

            }
        }
    },
    //打包去掉map文件，上线一般不带map
    productionSourceMap:false,
}
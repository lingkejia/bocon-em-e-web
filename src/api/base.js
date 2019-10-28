/**
 * 接口域名的管理
 */
const base = {
    em: ''
}
// 环境的切换
if (process.env.NODE_ENV == 'development') {
    base.api = 'http://192.168.1.69:7102';
}
else {
    base.api = 'http://183.6.114.72:20011/p/app';
}

export default base;
/**
 * 通用接口列表
 */

import base from './base'; // 导入接口域名列表
import axios from './axios'; // 导入axios中创建的axios实例

const common = {
    //登陆接口
    login(data) {
        return axios.post(`${base.api}/api/app/login/`, data)
    },
    getExType() {
        return axios.get(`${base.api}/app/monitor/data/selectSysDict`);
    }
}

export default common;
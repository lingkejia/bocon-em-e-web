/**
 * 首页接口列表
 */

import base from './base'; // 导入接口域名列表
import axios from './axios'; // 导入axios中创建的axios实例

const dashboard = {
    // 企业总数    
    getPowerData() {
        return axios.get(`${base.api}/app/monitor/data/mprtd`, {
            params: {
                enterpriseId: sessionStorage.getItem('enterpriseId')
            }
        });
    }
}

export default dashboard;
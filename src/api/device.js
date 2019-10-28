/**
 * 客户接口列表
 */

import base from './base'; // 导入接口域名列表
import axios from './axios'; // 导入axios中创建的axios实例

const customer = {
    // 企业总数    
    getCompanyMonitorInfo() {
        return axios.get(`${base.api}/getCompanyMonitorInfo.action`);
    }
}

export default customer;
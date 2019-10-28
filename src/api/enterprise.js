/**
 * 评论接口列表
 */

import base from './base'; // 导入接口域名列表
import axios from './axios'; // 导入axios中创建的axios实例

const comment = {
    // 企业总数    
    getCommentByCustomerId(data) {
        return axios.get(`${base.api}/getCompanyMonitorInfo.action`, data);
    }
}

export default comment;
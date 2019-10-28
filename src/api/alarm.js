/**
 * 异常接口列表
 */

import base from './base'; // 导入接口域名列表
import axios from './axios'; // 导入axios中创建的axios实例

const alarm = {
    // 事件列表    
    getAlarmData(data) {
        data.enterpriseId = sessionStorage.getItem('enterpriseId')
        return axios.get(`${base.api}/app/monitor/data/selectByParams`, {
            params: data
        });
    }
}

export default alarm;
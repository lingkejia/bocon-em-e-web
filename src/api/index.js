/** 
 * api接口的统一出口
 */
// 概况模块接口
import enterprise from './enterprise';
import device from './device';
import dashboard from './dashboard';
import alarm from './alarm';
import common from './common';
// 其他模块的接口……

// 导出接口
export default {
    enterprise,
    device,
    alarm,
    dashboard,
    common
}
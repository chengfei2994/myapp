
import Qs from 'qs';
export let config={
    baseURL: 'http://192.168.10.194:8080',
    transformRequest: [function (data) {
        //console.log("transformRequest"+data)
        return data;
    }],
    transformResponse: [function (data) {
        // 这里提前处理返回的数据
        //console.log("transformResponse"+data)
        return data;
    }],
    // 请求头信息
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    //设置超时时间
    timeout: 10000,
    //返回数据类型
    responseType: 'json', // default

};
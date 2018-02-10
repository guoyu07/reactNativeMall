/**
 * @param {string} url 接口地址
 * @param {string} method 请求方法：GET、POST，只能大写
 * @param {JSON} [params=''] body的请求参数，默认为空
 * @return 返回Promise
 */

export function fetchRequest(url, method, params = {}) {
    let header = {
        "Content-Type": "application/json;charset=UTF-8",
        // "accesstoken": token //用户登陆后返回的token，某些涉及用户数据的接口需要在header中加上token
    };
    if (method == 'GET') { //如果网络请求中带有参数
        return new Promise(function(resolve, reject) {
            let dataStr = ''; //数据拼接字符串
            Object.keys(params).forEach(key => {
                dataStr += key + '=' + params[key] + '&';
            })
            if (dataStr !== '') {
                dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'));
                url = url + '?' + dataStr;
            }
            fetch(url, {
                    method: method,
                    headers: header
                }).then((response) => response.json())
                .then((responseData) => {
                    console.log('res:', url, responseData); //网络请求成功返回的数据
                    resolve(responseData);
                })
                .catch((err) => {
                    console.log('err:', url, err); //网络请求失败返回的数据        
                    reject(err);
                });
        });
    } else { //如果网络请求中没有参数
        return new Promise(function(resolve, reject) {
        	console.log(JSON.stringify(params))
            fetch(url, {
                    method: method,
                    headers: header,
                    body: JSON.stringify(params) //body参数，通常需要转换成字符串后服务器才能解析
                }).then((response) => response.json())
                .then((responseData) => {
                    console.log('res:', url, responseData); //网络请求成功返回的数据
                    resolve(responseData);
                })
                .catch((err) => {
                    console.log('err:', url, err); //网络请求失败返回的数据  
                    reject(err);
                });
        });
    }
}
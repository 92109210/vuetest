import axios from 'axios' //引入 axios

// 创建 axios 实例
const service = axios.create({
    baseURL: 'http://192.168.1.1:8088', // api 的 base_url
    timeout: 15000, // 请求超时时间
})

export default service
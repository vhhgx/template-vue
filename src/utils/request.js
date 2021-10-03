import axios from 'axios'

let baseURL = process.env.VUE_APP_REQUEST_URL

// 超时时间 & 默认请求头
axios.defaults.timeout = 10000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';


// // 请求拦截器
// axios.interceptors.request.use(
// 	config => {
// 	// 每次发送请求之前判断vuex中是否存在token        
// 	// 如果存在，则统一在http请求的header都加上token，这样后台根据token判断你的登录情况
// 	// 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断 
// 		// const token = store.state.token;
// 		// token && (config.headers.Authorization = token);
// 		// return config;
// 	},
// 	error => { return Promise.error(error); }
// )

// // 响应拦截器
// axios.interceptors.response.use(
// 	response => {
// 		if (response.status === 200) {
// 			return Promise.resolve(response);
// 		} else {
// 			return Promise.reject(response);
// 		}
// 	},
// 	error => {
// 		if (error.response.status) {
// 			switch (error.response.status) {
// 				case 401:
// 					// 未登录，跳转登录页面
// 					// 并将要浏览的页面fullpath传过去，登录成功后跳转该页面
// 					break
// 				case 403:
// 					// token过期。清除token，跳转至登录页面
// 					// 并将要浏览的页面fullpath传过去，登录成功后跳转该页面
// 					break
// 				case 404:
// 					// 请求不存在
// 					console.log('404', '网络请求不存在')
// 					break;
// 				default:
// 			}
// 			return Promise.reject(error.response);
// 		}
// 	}
// )

// get请求
export function get(url, params) {
	return new Promise((resolve, reject) =>{
		axios.get( baseURL + url, { params: params } )
		.then( res => { resolve(res.data) })
		.catch( err =>{ reject(err.data) })
	})
}

// post
export function post (url, params) {
	return new Promise((resolve, reject) => {
		axios.post( baseURL + url, params )
		.then( res => { resolve(res.data) })
		.catch( err =>{ reject(err.data) })
	})
}
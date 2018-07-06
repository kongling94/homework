// Vuex中用来修改state的函数
const mutaions = {
  // 是否登陆
  SET_LOGININFO (state, data) {
    console.log(data)
    if (data.code === '200') {
      state.userInfo = data.info
      state.isLogin = true
      localStorage.setItem('userInfo', data.info)
      localStorage.setItem('isLogin', true)
    }
    state.isLogin = false
    localStorage.setItem('isLogin', false)
  }
}
export default mutaions

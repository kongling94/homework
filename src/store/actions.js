// Vuex中用来触发mutations事件
import axios from 'axios'
const actions = {
  getUserInfo (context, data) {
    axios
      .get('/api/checklogin')
      .then(res => {
        context.commit('SET_LOGININFO', res.data)
      })
      .catch(function (err) {
        console.log(err)
      })
  }
}
export default actions

// Vuex中用来触发mutations事件
import axios from 'axios'
const actions = {
  getUserInfo (context, data) {
    axios
      .get('http://wiki.t-firefly.com/api/checklogin.php')
      .then(res => {
        context.commit('SET_LOGININFO', res.data)
      })
      .catch(function (err) {
        console.log(err)
      })
  }
}
export default actions

<template>
  <div class="wiki">
    <!-- <Header :wikiLists="wiki_list"></Header> -->
    <wiki-content :wikiLists="wiki_list"></wiki-content>
  </div>
</template>
<script>
import axios from 'axios'
import { ERROR_ID } from 'api/config'
import wikiContent from './wiki-content'

export default {
  name: 'wiki',
  components: {
    wikiContent
  },
  data () {
    return {
      wiki_list: ''
    }
  },
  methods: {
    // axios请求wiki内容
    _getWikiProducts () {
      axios.get('/api/getWikiPro').then((res) => {
        res = res.data
        if (res.code === '200') {
          const data = res.data
          if (data.error === ERROR_ID) {
            this.wiki_list = data.info
          }
        }
        // res = res.data
      }).catch((err) => {
        console.log(err)
      })
    }
  },
  created () {
    this._getWikiProducts()
  }
}
</script>
<style lang="stylus" scoped>
</style>

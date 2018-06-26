<template>
  <div class="wiki">
    <Header :headerNav="header_nav"></Header>
    <wiki-content :wikiLists="wiki_list"></wiki-content>
  </div>
</template>
<script>
import axios from 'axios'
import { ERROR_ID } from 'api/config'
import wikiContent from './wiki-content'
import Header from 'views/common/header'
// import wikiHeader from '../common/wiki-header'
// import { baseUrl } from '../../../static/base.js'

export default {
  name: 'wiki',
  components: {
    wikiContent,
    Header
    // wikiHeader
  },
  data () {
    return {
      wiki_list: '',
      header_nav: ''
    }
  },
  methods: {
    // axios请求wiki内容
    _getWikiProducts () {
      axios.get('/api/getWikiPro').then((res) => {
        res = res.data
        const data = res.data
        if (res.code === '200' && data.error === ERROR_ID) {
          this.wiki_list = data.info
        }
        // res = res.data
      }).catch((err) => {
        console.log(err)
      })
    },
    _getHeaderNav () {
      axios.get('/api/getHeader').then((res) => {
        res = res.data
        this.header_nav = res
      }).catch((err) => {
        console.log(err)
      })
    }
  },
  created () {
    this._getWikiProducts()
    this._getHeaderNav()
  }
}
</script>
<style lang="stylus" scoped>
</style>

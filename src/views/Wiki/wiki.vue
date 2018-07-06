<template>
  <div class="wiki">
    <Header :headerNav="header_nav"></Header>
    <wiki-content :wikiLists="wiki_list"></wiki-content>
  </div>
</template>
<script>

// import { ERROR_ID } from 'api/config'
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
      wiki_list: [],
      header_nav: []
    }
  },
  methods: {
    // axios请求wiki内容
    _getWikiProducts () {
      this.$api.get('/api/Nav/wiki_products_api', null, res => {
        const data = res.data
        this.wiki_list = data.info
      })
    },
    _getHeaderNav () {
      this.$api.get('/api/Nav/Common_head_nav', null, res => {
        const data = res.data
        this.header_nav = data.navmenu
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

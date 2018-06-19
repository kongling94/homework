<template>
  <div class="wiki">
    <Header></Header>
    <wiki-header :wikiLists="wiki_list"></wiki-header>
    <wiki-content :wikiLists="wiki_list"></wiki-content>
    <Footer></Footer>
  </div>
</template>
<script>
import axios from 'axios'
import { ERROR_ID } from 'api/config'
import wikiContent from './wiki-content'
import wikiHeader from './wiki-header'
import Header from 'views/common/header'
import Footer from 'views/common/footer'
export default {
  name: 'wiki',
  components: {
    wikiContent,
    wikiHeader,
    Header,
    Footer
  },
  data () {
    return {
      wiki_list: ''
    }
  },
  methods: {
    _getWikiProducts () {
      axios.get('/api/getWikiPro').then((res) => {
        res = res.data
        const data = res.data
        if (data.error === ERROR_ID) {
          this.wiki_list = data.info
        }
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

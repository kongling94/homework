'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_ROOT: '"//www.t-firefly.com/"'
  // API_ROOT: '"//168.168.100.18/t_firefly_cn/public"'
})

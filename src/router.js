module.exports = function (router) {
  router.map({
    '*': {
      component: './components/index.vue'
    },
    '/': {
      component: './components/index.vue'
    },
    '/list': {
      component: './components/list.vue'
    },
    'asi': {
      component: './components/asi.vue'
    }
  })
}

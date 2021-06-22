import Vue from 'vue'
import VueI18n from 'vue-i18n'
import CountryFlag from 'vue-country-flag'
import VueMeta from 'vue-meta'
import PortalVue from 'portal-vue'
import { App, plugin } from '@inertiajs/inertia-vue'
import { InertiaProgress } from '@inertiajs/progress/src'

Vue.config.productionTip = false
Vue.mixin({ methods: { route: window.route } })
Vue.component('country-flag', CountryFlag)
Vue.use(VueI18n)
Vue.use(plugin)
Vue.use(PortalVue)
Vue.use(VueMeta)

InertiaProgress.init()

const el = document.getElementById('app')

const i18n = new VueI18n({
  locale: 'en',
  messages: {
    en: {},
  },
})

new Vue({
  i18n,
  metaInfo: {
    titleTemplate: title => (title ? `${title} - CRM` : 'CRM'),
  },
  render: h =>
    h(App, {
      props: {
        initialPage: JSON.parse(el.dataset.page),
        resolveComponent: name => require(`./Pages/${name}`).default,
      },
    }),
}).$mount(el)

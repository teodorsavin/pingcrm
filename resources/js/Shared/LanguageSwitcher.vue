<template>
  <div id="app">
    <label for="locale">Language:</label>
    <select v-model="locale">
      <option value="en">
          <country-flag country="en" size="small" />
      </option>
      <option value="ro">
        <country-flag country="ro" size="small" />
      </option>
    </select>
  </div>
</template>

<script>
import CountryFlag from 'vue-country-flag'

export default {
  name: 'App',
  components: {
    CountryFlag,
  },
  data () {
    this.$i18n.locale = 'en'
    return { locale: 'en' }
  },
  watch: {
    locale (val) {
      this.$i18n.locale = val
    },
  },
}
</script>

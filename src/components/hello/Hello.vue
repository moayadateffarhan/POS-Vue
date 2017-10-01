<template>
  <div class="hello container">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <a href="https://vuejs.org" target="_blank">{{ 'TITLE' | translate }}</a>
      </li>
      <li>
        <a href="https://forum.vuejs.org" target="_blank">{{'SERVERS' | translate}}Forum</a>
      </li>
      <li>
        <a href="https://chat.vuejs.org" target="_blank">Community Chat</a>
      </li>
      <li>
        <a href="https://twitter.com/vuejs" target="_blank">Twitter</a>
      </li>
      <br>
      <li>
        <a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a href="http://router.vuejs.org/" target="_blank">vue-router</a>
      </li>
      <li>
        <a href="http://vuex.vuejs.org/" target="_blank">vuex</a>
      </li>
      <li>
        <a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a>
      </li>
      <li>
        <a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a>
      </li>
      <!-- <li id="example-2">
          
          <a href="" id="arabicId" v-on:click="rtl">Arabic</a>
        </li> -->
    </ul>
 <select @change="toogleLanguage($event.target.value)">
        <option value="en" selected="translatorContainer.language === 'en'">English</option>
        <option value="ar" selected="translatorContainer.language === 'ar'">عربي</option>
        <option value="ch" selected="translatorContainer.language === 'ch'">Chinese (Simplified)</option>
    </select>
  </div>
</template>

<script>
import Vue from 'vue'

import Vuex from 'vuex';
// load vuex i18n module
import vuexI18n from 'vuex-i18n';
export default {
  name: 'hello',
  methods: {
    toogleLanguage: function(lang) {
      if (lang == 'en') {
        this.dir = 'ltr';
        Vue.i18n.set('en');
        document.getElementById('htmlDir').setAttribute('dir', 'ltr');
        document.getElementById('cssId').setAttribute('href', '/app.css');
      } else if (lang == 'ch') {
        this.dir = 'ltr';
        Vue.i18n.set('ch');
        document.getElementById('htmlDir').setAttribute('dir', 'ltr');
        document.getElementById('cssId').setAttribute('href', '/app.css');
      } else {
        Vue.i18n.set('ar');
        this.dir = 'rtl';
        document.getElementById('htmlDir').setAttribute('dir', 'rtl');
        document.getElementById('cssId').setAttribute('href', '/app.rtl.css');
      }
    }
  },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import 'hello.scss';
</style>
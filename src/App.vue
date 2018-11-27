<template>
  <div id="app">
    <header-section></header-section>
    <router-view></router-view>
    <footer-section></footer-section>
  </div>
</template>

<script>

import HeaderSection from '@/components/navigation'
import FooterSection from '@/components/footer'

export default {
  name: 'App',
  components: {
    HeaderSection,
    FooterSection
  }
}
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
}
body{
  display: flex;
  flex-direction: column;
  margin: 0%;
  font-family: 'Lato', sans-serif;
  background-image: url('./assets/background.png');
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
@media only screen and (max-device-width:736px){
  #app {
  display: flex;
  flex-direction: column;
}
}
/*preventing overflow*/
html{overflow-x: hidden !important;}
@media only screen and (max-device-width:736px){html,body{overflow-x: hidden !important;}}
</style>

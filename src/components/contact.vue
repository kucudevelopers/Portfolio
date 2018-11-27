<template>
    <div class="wrapper">
      <div class="heading">
        <div class="overlay">
          <h1>{{info}}</h1>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'contact',
  // state
  data () {
    return {
      info: 'Contact'
    }
  }
}
</script>
<style scoped>
.wrapper{
    min-height: 100vh;
    background: #ffffff;
    margin-top: 70px;
}
.heading{
  min-height: 200px;
  position: relative;
  background-image: url('../assets/banner.jpg');
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
.overlay{
  background-color: rgba(0,0,0,0.6);
  position: absolute;
  z-index: 900;
  height: 100%;
  width: 100%;
}
h1{
  text-align: center;
  padding: 5%;
  color: #ffffff;
}
</style>

<template>
  <div class="home">
    <div class="welcome-content">
      <div class="col-md-12 heading">
        <h1>{{heading}}</h1>
      </div>
    </div>
    <div class="home-content">
      <home-content></home-content>
    </div>
  </div>
</template>

<script>
import homeContent from '@/components/homeContent.vue'

export default {
  name: 'Home',
  components: {
    homeContent
  },
  data () {
    return {
      heading: 'We Spread God\'s Word using CODE & Design'
    }
  }
}
</script>

<style scoped>
.home{
  margin: auto;
  width: 100%;
  min-height: 100vh;
  background:rgba(0,0,0,0.1);
  position: relative;
  font-weight: thin;
}
.welcome-content{
  min-height: 100vh;
}
.heading{
  position: absolute;
  color: #ffffff;
  margin-top: 20%;
  font-size: 50px;
  text-align: center;
}
h1{
  /* font-family: 'Merienda', cursive; */
}
a:-webkit-any-link {
    color: #ffffff;
    text-decoration: none;
    font-family: 'Quicksand', sans-serif;
}
@media only screen and (max-device-width:768px){
   p{
     /* margin-top: 20%; */
     font-size: 30px;
   }
   p,h1{
     margin-top: 30%;
   }
}
</style>

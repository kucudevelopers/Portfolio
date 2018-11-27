<template>
    <div class="wrapper">
      <div class="heading">
        <div class="overlay">
          <h1>{{projects.name}}</h1>
        </div>
    </div>
    <div class=" col-md-12 row">
        <div class=" col-md-6 item">
            <span><img :src="projects.image" alt="" class="poster"></span>
        </div>
        <div class=" col-md-6 item">
            <a :href="`${projects.link}`"><p><b>Visit Site</b></p></a>
            <span><h4>{{projects.name}}</h4></span> <br>
            <p>{{projects.details}}</p><br><br>
        </div>
    </div>
    </div>
</template>

<script>
export default {
  name: 'profile',
  // state
  data () {
    return {
      projects: null
    }
  },
  created () {
    fetch('../static/projects.json')
      .then(response => response.json())
      .then(json => {
        let projects = json.projects[this.$route.params.name]
        this.projects = projects // profile about to name of the json data
      })
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
  /* background-image: url('../assets/banner.jpg'); */
  background-color: rgb(141, 32, 32);
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
.overlay{
  background-color: rgba(0,0,0,0.1);
  position: absolute;
  z-index: 900;
  height: 100%;
  width: 100%;
}
.poster{
  width: 100%;
  padding-bottom: 3%;
}
h1{
  text-align: center;
  padding: 5%;
  color: #ffffff;
}
.row{
    margin: 3%;
}
.item{
  padding-top: 2%;
  /* text-align: center; */
  background: #ffffff;
}
.details{
  margin-top: 2%;
  padding: 2%;
  text-align: center;
  width: 60%;
  margin-left: 10%;
  margin-right: 30%;
  background: #ffffff;
  border-radius: 5px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
}
h1{
  text-align: center;
  padding: 5%;
  color: #ffffff;
}
h3{
  text-align: center;
  font-weight: bold;
  padding: 2%;
}
h4{
    font-weight: bold;
    font-size: 20px;
}
p{
  font-size: 16px;
}
@media only screen and (max-device-width:768px){
  .about{
    margin: 0%;
    width: 100%;
  }
}
</style>

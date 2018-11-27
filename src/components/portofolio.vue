<template>
    <div class="wrapper">
      <div class="heading">
        <div class="overlay">
          <h1>Portofolio</h1>
        </div>
      </div>
      <div class="col-md-12 row">
            <div class="col-md-6" v-for="(projects, index) in projects" :key="index">
                <div class="item">
                    <img :src="projects.image" alt="" class="poster"><br>
                    <span><b>{{projects.name}}</b></span><br>
                    <router-link :to="`/portofolioDetails/${index}`"><button> View Project</button></router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'portofolio',
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
        this.projects = json.projects // change portofolio to name of the json data
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
  background-color: teal;
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
.row{
  text-align: center;
  margin-top: 5%;
  margin-bottom: 5%;
}
.item{
  margin-bottom: 5%;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
}
.poster{
  width: 100%;
  padding-bottom: 3%;
}
b{
  font-size: 16px;
}
button{
  background-color: transparent;
  border: 2px #ed042c solid;
  padding: 5px;
  color: #ed042c;
  font-weight: bold;
  margin: 10px;
  width: 50%;
  border-radius: 20px;
}
h1{
  text-align: center;
  padding: 5%;
  color: #ffffff;
}
</style>

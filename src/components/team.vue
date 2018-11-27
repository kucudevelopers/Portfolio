<template>
    <div class="wrapper">
      <div class="heading">
        <div class="overlay">
          <h1>Team</h1>
        </div>
      </div>
    <div class="col-md-12 row">
            <div class="col-md-3" v-for="(teams, index) in teams" :key="index">
                <div class="item">
                    <img :src="teams.image" alt="" class="poster"><br>
                    <span>{{teams.name}}</span><br>
                    <span><b>{{teams.title}}</b></span><br>
                    <router-link :to="`/profile/${index}`"><button> View Profile</button></router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'team',
  // state
  data () {
    return {
      teams: null
    }
  },
  created () {
    fetch('../static/team.json')
      .then(response => response.json())
      .then(json => {
        this.teams = json.teams // team  to name of the json data
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
span{
    padding: 20px;
    font-size: 18px;
}
img{
    height: 300px;
}
.row{
    padding-bottom: 10%;
    padding-top: 5%;
}
.poster{
    text-align: center;
    border-radius: 50%;
    padding-bottom: 20px;
}
.item {
    margin-top: 10px;
    border: 1px solid #cccccc;
    padding: 10px;
    text-align: center;
    background-color: #ffffff;
    color: #4a4a4a;
    border-radius: 5px;
}
b{color: teal}
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

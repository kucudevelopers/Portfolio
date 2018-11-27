<template>
    <div class="wrapper">
      <div class="heading">
        <div class="overlay">
          <h1>{{info.name}}</h1>
          <span><img :src="info.image" alt="" class="avatar"></span>
        </div>
    </div>
        <div class=" col-md-12 item">
            <span>{{info.name}}</span> <br>
            <span><b>{{info.title}}</b></span><br><br>
            <a :href="`mailto:${info.social.website}`"><i class="fa fa-envelope" style="font-size:30px;"></i></a>
            <a :href="`${info.social.twitter}`"><i class="fa fa-twitter" style="font-size:30px;"></i></a>
            <a :href="`${info.social.github}`"><i class="fa fa-github" style="font-size:30px;"></i></a>
            <a :href="`${info.social.website}`"><i class="fa fa-globe" style="font-size:30px;"></i></a><br><br>
        </div>
        <div class="col-md-12 details">
            <p>{{info.details}}</p><br><br>
        </div>
    </div>
</template>

<script>
export default {
  name: 'profile',
  // state
  data () {
    return {
      info: null
    }
  },
  created () {
    fetch('../static/team.json')
      .then(response => response.json())
      .then(json => {
        let info = json.teams[this.$route.params.name]
        this.info = info // profile about to name of the json data
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
.avatar{
  margin-top: -10%;
  height: 200px;
  margin-left: 10%;
  position: absolute;
  z-index: 1000;
}
h1{
  text-align: center;
  padding: 5%;
  color: #ffffff;
}
img{
    float: left;
    font-size: 16px;
    border-radius: 50%;
    border: 5px #ffffff solid;
}
b{
    color: teal;
}
p{
  font-size: 16px;
  text-align: left;
}
a{
  padding: 10px;
}
.item{
  padding-top: 2%;
  text-align: center;
    width: 60%;
    margin-left: 10%;
    margin-right: 30%;
    background: #ffffff;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
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
span {
  padding:10px;
  font-size: 20px;
  font-weight: bolder;
}
.fa-envelope{
  color: #d34836;
}
.fa-github{
 color: black;
}
.fa-twitter{
 color: #38A1F3;
}
.globe{
  color: teal;
}
@media only screen and (max-device-width:736px){
  .item{
    width: 100%;
    padding-top: 40%;
    margin: 0%;
    box-shadow: none;
  }
  .details{
    width: 100%;
    margin: 0%;
    /* box-shadow: none; */
  }
  .avatar{
    margin-top: 2%;
    margin-left: 15%;
  }
}
@media only screen and (device-width:768px){
  .item{
    padding-top: 10%;
  }
}
</style>

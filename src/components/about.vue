<template>
    <div class="wrapper">
      <div class="heading">
        <div class="overlay">
          <h1>About us</h1>
        </div>
      </div>
      <div class="col-md-12 about">
        <h3>- Who We Are -</h3>
        <p>With advancement in technology, it is a dire need that every organization have a team responsible for technological need. We are a team of students who are members of the christian union. What brings us together are our skills that are used in the programming world. This team is managed by the Information Technology subcommittee in-charge who is under the Information Communication Committee.</p>
        <h3>- What We Do -</h3>
        <p>Basically, we take advantage of technology to suit the needs of the union. We develop softwares, both web and desktop, and mobile applications. As part of reaching out, we help members in the union interested in having dev skills to acquire them. We also help churches develop management systems to help them in their operations.</p>
      </div>
    </div>
</template>

<script>
export default {
  name: 'about',
  // state
  data () {
    return {
      about: null
    }
  },
  created () {
    fetch('')
      .then(response => response.json())
      .then(json => {
        this.about = json.about // change about to name of the json data
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
.about{
  width: 60%;
  margin-left: 20%;
  margin-right: 20%;
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

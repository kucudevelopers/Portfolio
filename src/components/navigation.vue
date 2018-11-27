<template>
<div class="nav">
    <div class="nav-header">
        <div class="nav-title">
           <a href="index.html"><img src="../assets/logo.png" alt="logo" class="logo"> <span class="name">KUCU Developers</span></a>
        </div>
    </div>
    <div class="nav-btn">
        <label for="nav-check">
            <span></span>
            <span></span>
            <span></span>
        </label>
    </div>
    <input type="checkbox" id="nav-check">
    <div class="nav-links">
        <a><router-link to="/">Home</router-link></a>
        <a><span><router-link to="/about/about">About us</router-link></span></a>
        <a><span><router-link to="/portofolio/portofolio">Portofolio</router-link></span></a>
        <a><span><router-link to="/team/team">Team</router-link></span></a>
        <a><span><router-link to="/contact/contact">Contact</router-link></span></a>
    </div>
</div>
</template>

<script>
export default {
  name: 'HeaderSection'
}
</script>

<style scoped>
.nav {
  height: 70px;
  width: 100%;
  background-color: white;
  position: relative;
  z-index: 1000;
  position: fixed;
  box-shadow: 0px 2px 8px 0px rgba(50, 50, 50, 0.08);
}

.nav > .nav-header {
  display: inline;
}

.nav > .nav-header > .nav-title {
  display: inline-block;
  font-size: 22px;
  color: black;
  padding: 10px 10px 10px 10px;
}

.nav > .nav-btn {
  display: none;
}

.nav > .nav-links {
  display: inline;
  float: right;
  font-size: 16px;
  font-family: 'Space Mono', monospace;
  margin-right: 10%;
}

.nav > .nav-links > a {
  display: inline-block;
  padding: 20px 10px 10px 20px;
  text-decoration: none;
  /* color: #333333; */
}

.nav > .nav-links > a:hover {
  color: rgb(219, 52, 52)
}

.nav > #nav-check {
  display: none;;
}
.logo{
    height: 50px;
    margin-left: 20px;
}
.name {
    padding-left: 5px;
    font-family: 'VT323', monospace;
    font-size: 26px;
}
a:-webkit-any-link {
    color: #078f46;
    text-decoration: none;
    font-weight: bold;
    margin-top: 5px;
}
a:-webkit-any-active-link {
    color: rgb(189, 3, 65);
}

/* media queries */

@media (max-width:768px) {
  .nav > .nav-btn {
    display: inline-block;
    position: absolute;
    right: 0px;
    top: 0px;
  }
  .nav > .nav-btn > label {
    display: inline-block;
    width: 50px;
    height: 50px;
    padding: 13px;
    color: black;
  }
  .nav > .nav-btn > label:hover {
    background-color: rgba(0, 0, 0, 0.3);
  }
  .nav > .nav-btn > label > span {
    display: block;
    width: 25px;
    height: 10px;
    border-top: 2px solid #ffce01;
  }
  .nav > .nav-links {
    position: absolute;
    display: block;
    width: 100%;
    background-color: white;
    height: 0px;
    transition: all 0.3s ease-in;
    overflow-y: hidden;
    top: 50px;
    left: 0px;
  }
  .nav > .nav-links > a {
    display: block;
    width: 100%;
  }
  .nav > #nav-check:not(:checked) + .nav-links {
    height: 0px;
  }
  .nav > #nav-check:checked + .nav-links {
    height: calc(100vh - 50px);
    overflow-y: auto;
    margin-left: 40%;
  }
}
</style>

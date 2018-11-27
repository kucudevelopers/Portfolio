<template>
    <div class="content">
        <div class=" col-md-12 banner">
            <hr>
            <h1>Kenyatta University Christian Union Developers</h1>
            <h3>Do you need a <b>Website, Web Application, Management System</b> or <b>Mobile App</b>?</h3>
            <h3><i>Don't worry, we'll do it for you.</i></h3>
            <img src="../assets/smile.png" style="height:50px; margin-left:47%;"><br><br>
        </div>
    <div class="row">
        <div class="col-md-3">
            <div class="item">
                <img src="../assets/webdesign.png">
                <h3>Website Design & Development</h3>
                <p>Currently with GDG because I want to see developers becoming better developers through the GDG program.</p>
            </div>
        </div>
        <div class="col-md-3">
            <div class="item">
                <img src="../assets/webapp.png">
                <h3>Web & Software Development</h3>
                <p>Currently with GDG because I want to see developers becoming better developers through the GDG program.</p>
            </div>
        </div>
        <div class="col-md-3">
            <div class="item">
                <img src="../assets/mobile.png">
                <h3>Mobile App Development</h3>
                <p>Currently with GDG because I want to see developers becoming better developers through the GDG program.</p>
            </div>
        </div>
        <div class="col-md-3">
            <div class="item">
                <img src="../assets/community.png">
                <h3>Community Outreach</h3>
                <p>Currently with GDG because I want to see developers becoming better developers through the GDG program.</p>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
export default {
  name: 'homeContent'
}
</script>

<style scoped>
.content{
    /* min-height: 100vh; */
    width: 100%;
    background-color: #ffffff;
    margin: 0%;
    display: flex;
}
.banner {
    padding: 2%;
    width: 80%;
    position:absolute;
    background: #ffffff;
    margin-left: 10%;
    margin-right: 10%;
    margin-top: -100px;
    border-radius: 10px;
    z-index: 900;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
}
.row{
    margin-top: 20%;
    padding-bottom: 10%;
}
.item{
    text-align: center;
    padding: 5%;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
}
hr{
    border: 2px #ffce01 solid;
}
img{
    height: 100px;
}
h1{
    text-align: center;
    font-size: 30px;
    color: #2196f3;
    font-weight: bold;
    font-family: 'Space Mono', monospace;
}
h3,i{
    text-align: center;
    font-size: 20px;
}
@media only screen and (max-device-width:768px){
    .banner{
        max-height: 40vh;
        margin-top: -200px;
    }
    h1,h3,i{
        font-size: 14px;
    }
    .item{
        margin-top: 20px;
    }
}
</style>

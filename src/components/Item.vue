<template>
<div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
  <div class="i-card">
      <img src="/static/img/dog.jpg" class="i-card-img"/>
      <div class="i-card-overlay">
          <div class="btn-group">
            <a href="#" class="btn"><i class="fa fa-eye"></i></a>
            <a href="#" class="btn"><i class="fa fa-download"></i></a>
        </div>
      </div>
      <div class="i-card-details">
          <h5 style="text-align: center; margin-top: 0;">Time & Money</h5>
          Name: Classic Mart<br>
          Author: Ahmed Dawuda<br>
          Type: Template<br><br>

      </div>
      <div class="i-card-footer">
          <div class="btn-group">
            <a href="#" class="btn"><span class="fa fa-heart-o"></span> <span style="font-size: 10px;">200</span></a>
            <a href="#" class="btn"><span class="fa fa-download"></span> <span style="font-size: 10px;">23</span></a>
            <!-- <button class="btn"><span class="fa fa-heart-o"></span></button> -->
            <a href="#" class="btn"><span class="fa fa-linkedin"></span></a>
            <a href="#" class="btn"><span class="fa fa-twitter"></span></a>
            <a href="mailto:test@test.com" class="btn"><span class="fa fa-envelope"></span></a>
          </div>
      </div>
  </div>
</div>
</template>
<script>
/* eslint-disable */
export default {
}
</script>
<style>
.i-card{
    background: white;
    border-radius: 5px;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.05);
    margin-bottom: 20px;
    position: relative;
}
.i-card:hover{
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
}
.i-card-img{
    display: block;
    height: 160px;
    width: 100%;
}
.i-card-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background-color: rgba(0,140,186, 0.9);
  overflow: hidden;
  width: 100%;
  height: 0;
  transition: .5s ease-out;
  text-align: center;
}
.i-card-overlay .btn-group{
    margin-top: 60px;
}
.i-card-overlay .btn{
    color: #ffffff;
    background: rgba(0,140,186, 0.9);
    border-width: 2px;
    border-color: white;
    border-radius: 50px;
    margin: 5px;
    z-index: 0;
    transition: 0.5s ease;
}
.i-card-overlay .btn:hover{
    border: 2px solid rgba(0,140,186, 0.9);
    background: rgba(255,255,255, 0.9);
    color: rgba(0,140,186, 0.9);
    z-index: 0;
}
/* .i-card-overlay .btn:hover  */

.btn i{
    /* position: relative; */
    /* left: -5px; */
    font-size: 20px;
}
.i-card:hover .i-card-overlay{
    height: 160px;
}
.i-card-details{
    padding: 20px 10px 20px 10px;
    font-family: "Open Sans", sans-serif;
    font-size: 12px;
    color: grey;
    /* margin-bottom: 30px; */
}
.i-card-footer{
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: auto;
    background: #dddddd;
    box-sizing: border-box;
}
.i-card-footer .btn-group{
    /* width: 90%; */
    /* margin: auto; */
}
.i-card-footer .btn-group .btn{
    color: #008CBA;
    border-radius: 0;
    z-index: 0;
}
.i-card-footer .btn-group .btn:hover{
    background: #008CBA;
    color: white;
}
</style>


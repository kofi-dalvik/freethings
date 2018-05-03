<template>
  <div>
      <header id="header">
          <h4 id="logo">Welcome to freethings.com</h4>
          <div class="row">
              <div class="col-md-4 col-sm-12 col-md-offset-4">
                  <div class="row">
                      <div class="col-md-6">
                        <input class="form-control" placeholder="Find a freething..." id="searchbox"/>
                      </div>
                      <div class="col-md-6">
                          <div class="form-group">
                      <select class="form-control">
                          <option>Any Thing?</option>
                          <option>Template</option>
                          <option>Full Project</option>
                      </select>
                  </div>
                      </div>
                  </div>
              </div>
          </div>
      </header>
      <div class="container">
          <div class="content">
              <div class="row">
                <app-item/>
                <app-item/>
                <app-item/>
                <app-item/>
              </div>
              <div class="row">
                <app-item/>
                <app-item/>
                <app-item/>
                <app-item/>
              </div>
        <div class="row">
            <app-item/>
            <app-item/>
            <app-item/>
            <app-item/>
        </div>
        <div class="row">
                <app-item/>
                <app-item/>
                <app-item/>
                <app-item/>
              </div>
              <div class="row">
                <app-item/>
                <app-item/>
                <app-item/>
                <app-item/>
              </div>
        <div class="row">
            <app-item/>
            <app-item/>
            <app-item/>
            <app-item/>
        </div>
        <div class="row">
                <app-item/>
                <app-item/>
                <app-item/>
                <app-item/>
              </div>
              <div class="row">
                <app-item/>
                <app-item/>
                <app-item/>
                <app-item/>
              </div>
        <div class="row">
            <app-item/>
            <app-item/>
            <app-item/>
            <app-item/>
        </div>
        <div class="row">
                <app-item/>
                <app-item/>
                <app-item/>
                <app-item/>
              </div>
              <div class="row">
                <app-item/>
                <app-item/>
                <app-item/>
                <app-item/>
              </div>
        <div class="row">
            <app-item/>
            <app-item/>
            <app-item/>
            <app-item/>
        </div>
          </div>
      </div>
  </div>
</template>
<script>
import Item from './Item.vue'
export default {
  components: {
    AppItem: Item
  }
}
</script>
<style>
header{
    width: 100%;
    height: 170px;
    transition: 0.5s ease;
    background: #ffffff;
    position: fixed;
    top: 0;
    text-align: center;
    padding: 30px;
    /* box-shadow: 1px 1px 5px rgba(160, 78, 78, 0.1); */
    z-index: 1;
    /* transition: box-shadow 1s ease; */
}
select.form-control{
    border-radius: 0;
    border: 2px solid grey;
}
select.form-control option{
    background: #eeeeee;
   margin: 20px;
}
header input.form-control{
    border-radius: 0;
    width: 100%;
    border: 2px solid grey;
    padding: 15px !important;
    /* margin-top: 20px; */
    /* background: #dddddd; */
    background-image: url(/static/img/search.png);
    background-repeat: no-repeat;
    background-size: 20px 20px;
    background-position: 99% 20%;
}
header input.form-control:focus{
    background: #ffffff;
    background-image: url(/static/img/search-blue.png);
    background-repeat: no-repeat;
    background-size: 20px 20px;
    background-position: 99% 20%;
    outline: none;
    box-shadow: none;
}
.content{
    width: 100%;
    margin-top: 200px;
}
.row{
    margin-bottom: 10px;
}
</style>

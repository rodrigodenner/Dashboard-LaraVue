<template>
  <div class="sidebar">
    <div class="top">
      <div class="avatar">
        <span><i class="fa fa-user"></i></span>
      </div>
      <div class="avatar-desc">
        <p class="name">Rodrigo Denner</p>
        <p class="status">Online</p>
      </div>
    </div>
    <div class="menu">
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name:'SidebarComponent',
  setup () {
    return {

    }
  }
}
</script>

<style  scoped>

.sidebar{
 padding: 25px 5px;
}
.top{
  width: 100%;
  display: flex;
  padding:10px ;
  margin-top: 60px;
  margin-bottom: 20px;
  align-items: center;
  
}

.avatar span{
  display: block;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #ccc;
  display: flex;
  justify-content: center;
  align-items:center ;
  font-size: 30px;
  color: #666666;
}

.avatar-desc {
  margin-left: 10px;
}
.avatar-desc p {
  margin-left: 0;
  color: #fff;
}
.avatar-desc .name{
  font-size: 13px;
}

.avatar-desc .status{
  font-size: 12px;
}


.menu{
  background-color:red;
}
</style>
<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/valid-template-root -->
<template>
  <div class="post" v-for="(작명,i) in 인스타데이터" :key="작명">
    <div class="post-header">
      <div class="profile"></div>
      <span class="profile-name">{{인스타데이터[i].name}}</span>
    </div>
    <div class="post-body"></div>
    <div class="post-content">
      <p>{{인스타데이터[i].likes}}</p>
      <p><strong>글쓴이아이디</strong> {{인스타데이터[i].content}}</p>
      <p class="date">{{인스타데이터[i].date}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name : 'postVue',
  props : {
    인스타데이터 : Array,
  }
};
</script>

<style>
.post {
  width: 100%;
}
.profile {
  background-image: url("https://picsum.photos/100?random=0");
  width: 30px;
  height: 30px;
  background-size: 100%;
  border-radius: 50%;
  float: left;
}
.profile-name {
  display: block;
  float: left;
  padding-left: 10px;
  padding-top: 7px;
  font-size: 14px;
}
.post-header {
  height: 30px;
  padding: 10px;
}
.post-body {
  background-image: url("https://picsum.photos/600?random=0");
  height: 450px;
  background-position: center;
  background-size: cover;
}
.post-content {
  padding-left: 15px;
  padding-right: 15px;
  font-size: 14px;
}
.date {
  font-size: 11px;
  color: grey;
  margin-top: -8px;
}
</style>

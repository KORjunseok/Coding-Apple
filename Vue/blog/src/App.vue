<template>

<!-- Navbar -->
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="#">Home</a>
        <router-link to="/list"><a class="nav-link" href="#">리스트 페이지</a></router-link>
        <a class="nav-link" href="#">상세페이지</a>
        <a class="nav-link disabled" aria-disabled="true">Disabled</a>
      </div>
    </div>
  </div>
</nav>

<router-link to="/">홈페이지</router-link>
<router-link to="/list">리스트페이지</router-link>
<router-link to="/detail">디테일페이지</router-link>

<router-view :블로그글="블로그글"></router-view>

<!-- <List :블로그글="블로그글"/> -->

</template>

<script>

// import List from "./components/List.vue"
import blog from "./assets/blog"

export default {
  name: 'App',
  data(){
    return {
      블로그글 : blog
    }
  },
  components: {
    // List : List

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

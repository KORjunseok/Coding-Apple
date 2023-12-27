<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <Post :인스타데이터="인스타데이터[i]" v-for="(a,i) in 인스타데이터" :key="i"/>
    <!-- <Post :인스타데이터="인스타데이터"/>
    <Post :인스타데이터="인스타데이터"/> -->
  </div>
</template>

<script>
import Post from './Post.vue'

export default {
  name : 'containerVue',
  props : {
    인스타데이터 : Array,
  },
  components : {
    Post : Post,
  }
  
}
</script>

<style>

</style>
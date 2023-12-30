<!-- eslint-disable vue/valid-template-root -->
<template>
  <div style="padding : 10px">
  <h4>팔로워</h4>
  <input placeholder="?" @input="search($event.target.value)" />
  <div class="post-header" v-for="(a,i) in follower" :key="i">
    <div class="profile" :style="`background-image:url(${a.image})`"></div>
    <span class="profile-name">{{a.name}}</span>
  </div>
</div>
</template>

<script>
import {onMounted, ref} from 'vue'
import axios from 'axios'
export default {
  name : 'mypageVue',
  props : {
    one : Number
  },
  setup(){
    let follower = ref([]);
    

    onMounted(()=>{
      axios.get('/follower.json').then((a)=>{
      follower.value = a.data
    })

    })

    return {follower}
    },
    data(){

    },
    
}
</script>

<style>

</style>
<template>
    <div v-for="(a, i) in 원룸들" :key="i">
    <img :src="원룸들[i].image" class="room-img" />
    <h4
     
    >
      {{ 원룸들[i].title }}
    </h4>
    <p>{{ 원룸들[i].price }} 원</p>
  </div>
</template>

<script>
export default {
  name : "CardVue",
  props : {
    원룸들 : Array,
    모달창열렸니 : Boolean,
    누른거 : Number
  }
}
</script>

<style>

</style>
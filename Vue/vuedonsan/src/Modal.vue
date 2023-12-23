<template>
    <div class="black-bg" v-if="모달창열렸니 == true">
    <div class="white-bg">
      <h4>{{ 원룸들[누른거].title }}</h4>
      <p>{{ 원룸들[누른거].content }}</p>
      <p>{{ 원룸들[누른거].price }} 원</p>
      <Discount />
      <button @click="close">닫기</button>
    </div>
  </div>
</template>

<script>
export default {
  name : 'ModalVue',
  props : {
    원룸들 : Array,
    누른거 : Number,
    모달창열렸니 : Boolean
  },
  methods : {
    close() {
      this.$emit('closeModal')

    }
  }
}
</script>

<style>

</style>
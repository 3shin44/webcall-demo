<template>
  <div class="chat-complete h-100 d-flex flex-column align-items-center">
    <IconCard display-msg="感謝您的來電" />
    <!-- 通話按鈕 -->
    <div class="d-flex justify-content-center align-items-center mt-3">
      <BaseButton :icon-code="4" @click="$emit('updateService', 0)" :button-width="68" />
    </div>
  </div>
</template>

<script>
  import IconCard from '../components/IconCard.vue'
  import BaseButton from '../components/BaseButton.vue'

  export default {
    name: 'ChatComplete',
    props: {
    },
    components: {
      IconCard, BaseButton
    },
    data() {
      return {

      }
    },
    methods: {

    }
  }
</script>

<style scoped>

</style>
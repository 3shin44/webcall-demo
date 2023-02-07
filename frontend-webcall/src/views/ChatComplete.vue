<template>
  <div class="chat-complete">
    <IconCard display-msg="感謝您的來電" />
    <!-- 通話按鈕 -->
    <div class="mt-5 pt-5 d-flex justify-content-center">
      <BaseButton :icon-code="4" @click="$emit('updateService', 0)" />
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
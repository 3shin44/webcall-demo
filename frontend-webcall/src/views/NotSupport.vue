<template>
  <div class="not-support h-100 d-flex flex-column align-items-center">
    <IconCard :icon-code="2" img-max-width="80" :display-msg="errorMsg" />

    <!-- 通話按鈕 -->
    <div class="d-flex justify-content-center align-items-center mt-3">
      <BaseButton :icon-code="3" @click="$emit('updateService', 6)" />
    </div>
  </div>
</template>

<script>
  import IconCard from '../components/IconCard.vue'
  import BaseButton from '../components/BaseButton.vue'
  export default {
    name: 'NotSupport',
    props: {
    },
    components: {
      IconCard, BaseButton
    },
    data() {
      return {
        errorMsg: `Sorry!  本系統不支援您使用的瀏覽器，Android建議改用Chrome，iOS請改Safari後再重新操作。`
      }
    },
    methods: {

    }
  }
</script>

<style scoped>

</style>
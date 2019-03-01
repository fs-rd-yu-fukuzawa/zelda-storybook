<template lang="pug">
  <button>
    <slot/>
  </button>
</template>

<script>
export default {
  name: 'VButton'
}
</script>

<style lang="scss" scoped>
button {
  cursor: pointer;
}
</style>

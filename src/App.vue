<script>
import { RouterView } from 'vue-router'

export default {
  components: {
    RouterView
  }
}

</script>

<template>
  <RouterView :key="$route.fullPath" />
</template>


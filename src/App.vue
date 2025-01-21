<script lang="ts">
import { defineComponent } from 'vue'
import { RouterView } from 'vue-router'

export default defineComponent({
  name: 'App',
})
</script>

<template>
  <Window :is-active="false" />

  <div>
    <RouterView />
  </div>
</template>

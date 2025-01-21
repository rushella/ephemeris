<script lang="ts">
import { defineComponent } from 'vue'
import SideBar from './components/SideBar.vue'

export default defineComponent({
  name: 'App',
  components: {
    SideBar,
  },
})
</script>

<template>
  <div class="app-bg-dark">
    <SideBar />
  </div>
</template>

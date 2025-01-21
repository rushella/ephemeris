<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SideBarItem',
  props: {
    name: {
      required: true,
      type: String,
    },
  },
})
</script>

<template>
  <li class="side-bar-item">
    <a href="#" class="side-bar-item-link">{{ name }} </a>
  </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SideBarItem from './SideBarItem.vue'

export default defineComponent({
  name: 'SideBar',
  components: {
    SideBarItem,
  },
})
</script>

<template>
  <div class="w-64 overflow-y-scroll bg-gray-900 rounded-md">
    <div class="px-6 pt-8">
      <div class="flex items-center justify-between">
        <a class="font-bold tracking-[.040em] text-4xl text-slate-500">EPHEMERIS</a>
      </div>
    </div>
    <div class="px-6 pt-4">
      <hr class="border-gray-700" />
    </div>
    <div class="px-6 pt-4">
      <ul class="flex flex-col space-y-2">
        <SideBarItem name="AUDIO" />
        <SideBarItem name="MESSAGES" />
      </ul>
    </div>
  </div>
</template>

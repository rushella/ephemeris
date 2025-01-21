<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SideBar',
})
</script>

<template>
  <div class="w-64 overflow-y-scroll bg-gray-900 rounded-md">
    <div class="px-6 pt-8">
      <div class="flex items-center justify-between">
        <a class="font-bold tracking-[.050em] lg:text-4xl text-slate-500">EPHEMERIS</a>
      </div>
    </div>
    <div class="px-6 pt-4">
      <hr class="border-gray-700" />
    </div>
  </div>
</template>

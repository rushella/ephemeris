<!-- not finished yet -->
<script lang="ts">
import { ref, defineComponent } from 'vue'
import { UseDraggable } from '@vueuse/components'

export default defineComponent({
  name: 'Window',
  components: {
    UseDraggable,
  },
  props: {
    isActive: {
      required: true,
      type: Boolean,
    },
  },
  setup() {
    let isActive = ref(true)
    return { isActive }
  },
})
</script>

<template>
  <UseDraggable
    :initialValue="{ x: 10, y: 10 }"
    :disabled="!isActive"
    v-slot="{ x, y }"
    class="window-parent"
  >
    <div class="window">
      <div
        class="header"
        :onmouseenter="() => (isActive = true)"
        :onmouseleave="() => (isActive = false)"
      >
        Content
      </div>
      <div class="content"></div>
    </div>
  </UseDraggable>
</template>

<style scoped>
.content {
  word-wrap: break-word;
  max-width: 100%;
  max-height: 100%;
  color: black;
  background-color: red;
}
.header {
  max-width: 100%;
  height: 100px;
  border-bottom: 2px solid;
  background-color: darkslategray;
}
.window {
  color: wheat;
  border: 2px solid;
  padding: 0px;
  width: 400px;
  height: 400px;
  resize: both;
  overflow: auto;
  z-index: 10;
}
.window-parent {
  position: absolute;
}
</style>

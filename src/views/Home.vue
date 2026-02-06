<script>
import Presentation from './Presentation.vue'
import Join from './Join.vue'

export default {
  name: 'Home',
  components: {
    Presentation,
    Join,
  },
}
</script>

<template>
  <div class="home">
    <div class="spacer"></div>
    <div class="overlay-content">
      <Join />
      <div class="spacer"></div>
      <Presentation />
      <div class="spacer"></div>
    </div>
  </div>
</template>

<style scoped>
.home {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
}

.overlay-content {
  width: 100%;
  text-align: center;
}

/* Spacer */
.spacer {
  height: 6vh;
}
</style>

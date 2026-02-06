<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { usePicturesStore } from '@/stores/pictures'

const route = useRoute()
const picturesStore = usePicturesStore()
const card = picturesStore.getBySlug(route.params.slug)

const subtitles = computed(() => {
  if (!card) return []
  return Object.keys(card)
    .filter(k => /^subtitle\d+$/.test(k) && k !== 'subtitle1') // garde subtitle2,3,...
    .sort((a, b) => Number(a.slice(8)) - Number(b.slice(8)))   // tri dans l’ordre
    .map(k => card[k])
    .filter(Boolean) // enlève les vides
})
</script>

<template>
  <div v-if="card">
    <div class="container">
      <h1 class="title">{{ card.title }}</h1>
      <p class="subtitle">{{ card.subtitle1 }}</p>
      <img class="image" :src="card.image" alt="" />
      <p
        v-for="(subtitle, index) in subtitles"
        :key="index"
        class="subtitle"
        v-html="subtitle"
      ></p>
    </div>
  </div>
</template>



<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 1rem;
}

.title {
  margin-top: 5vh;
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 10px;
  color: white;
  max-width: 40vw;
}

.subtitle {
  font-size: 1.2rem;
  margin-bottom: 20px;
  color: white;
  max-width: 40vw;
  white-space: pre-wrap;
}

.subsubtitle {
  font-size: 1.2rem;
  margin-bottom: 5px;
  color: white;
  max-width: 40vw;
}

.image {
  max-width: 40vw;
  width: 100%;
  height: auto;
  border-radius: 10px;
  margin-top: 1vh;
  margin-bottom: 8vh;
}

/* Responsive mobile */
@media (max-width: 768px) {
  .title {
    font-size: 1.5rem;
    max-width: 90%;
    margin-top: 5vh;
  }

  .subtitle {
    font-size: 1rem;
    max-width: 90%;
    margin-bottom: 15px;
  }

  .image {
    max-width: 95%;
    margin-bottom: 5vh;
  }
}
</style>

<script setup>
import { usePicturesStore } from '@/stores/pictures'
import { storeToRefs } from 'pinia'
import { RouterLink } from 'vue-router'

const picturesStore = usePicturesStore()
const { orderedCards } = storeToRefs(picturesStore)

function slugify(text) {
  return text
    .toString()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
}
</script>

<template>
  <div class="container">
    <h1 class="title">Nos différentes fournitures</h1>
    <div class="cards-section">
      <v-card
        v-for="card in orderedCards"
        :key="card.title"
        class="card"
        color="blue"
        variant="elevated"
        rounded="xl"
        :image="card.image"
        v-bind="card.url
          ? { href: card.url, target: '_blank', rel: 'noopener' }
          : { is: RouterLink, to: { name: 'PicturesDetails', params: { slug: slugify(card.title) } } }"
      >
        <div class="card-date">
          {{ new Intl.DateTimeFormat('fr-FR', { day: '2-digit', month: 'short', year: 'numeric' }).format(card.published) }}
        </div>
        <v-card-title class="card-title">{{ card.title }}</v-card-title>
      </v-card>
    </div>
  </div>
</template>


<style scoped>
.title {
  margin-top: 7vh;
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 10px;
  color: white;
  max-width: 40vw;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
}

.cards-section {
  margin-top: 4vh;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  justify-items: center;
  width: 100%;
}

.card {
  width: 100%;
  max-width: 25vw; /* desktop */
  min-width: 250px;
  min-height: 150px;
  height: 25vh;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  overflow: hidden;
  position: relative;
}

.card:hover {
  transform: translateY(-10px) scale(1.05);
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3);
}

.card-title {
  font-size: 1.2rem;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  color: white;
  background: rgba(0,0,0,0.5);
  text-align: center;
  padding: 5px 10px;
}

.card-date {
  position: absolute;
  top: 10px;
  left: 10px;
  background: rgba(0,0,0,0.6);
  color: white;
  font-size: 0.9rem;
  font-weight: 600;
  padding: 4px 8px;
  border-radius: 8px;
}

/* Responsive mobile */
@media (max-width: 768px) {
  .cards-section {
    grid-template-columns: 1fr;
    gap: 1rem;
    padding: 0 1rem;
  }
  .card {
    max-width: 100%;
    height: auto;
    min-height: 200px;
  }
  .card-title {
    font-size: 1rem;
    padding: 4px 8px;
  }
  .card-date {
    font-size: 0.8rem;
    padding: 2px 5px;
  }
  .title {
    font-size: 1.5rem;
    max-width: 90%;
    margin-top: 5vh;
  }
}
</style>

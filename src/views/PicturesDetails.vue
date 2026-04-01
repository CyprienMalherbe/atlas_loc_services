<script setup>
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import { usePicturesStore } from '@/stores/pictures'

const route = useRoute()
const picturesStore = usePicturesStore()
const card = picturesStore.getBySlug(route.params.slug)

// État pour l'image agrandie
const selectedImage = ref(null)

const openZoom = (url) => {
  selectedImage.value = url
  // Empêche le scroll du corps de la page quand l'image est ouverte
  document.body.style.overflow = 'hidden'
}

const closeZoom = () => {
  selectedImage.value = null
  // Réactive le scroll
  document.body.style.overflow = 'auto'
}

const subtitles = computed(() => {
  if (!card) return []
  return Object.keys(card)
    .filter(k => /^subtitle\d+$/.test(k) && k !== 'subtitle1')
    .sort((a, b) => Number(a.slice(8)) - Number(b.slice(8)))
    .map(k => card[k])
    .filter(Boolean)
})
</script>

<template>
  <div v-if="card">
    <div class="container">
      <h1 class="title">{{ card.title }}</h1>
      <p class="subtitle">{{ card.subtitle1 }}</p>

      <img
        v-if="card.images?.length"
        class="image zoom-trigger"
        :src="card.images[0]"
        alt=""
        @click="openZoom(card.images[0])"
      />

      <p
        v-for="(subtitle, index) in subtitles"
        :key="index"
        class="subtitle"
        v-html="subtitle"
      ></p>

      <div v-if="card.images?.length > 1" class="gallery">
        <h2 class="gallery-title">Plus de photos</h2>
        <div class="gallery-grid">
          <img
            v-for="(img, idx) in card.images.slice(1)"
            :key="idx"
            :src="img"
            class="gallery-item zoom-trigger"
            @click="openZoom(img)"
          />
        </div>
      </div>
    </div>

    <Transition name="fade">
      <div v-if="selectedImage" class="lightbox" @click="closeZoom">
        <button class="close-btn" @click="closeZoom">&times;</button>
        <div class="lightbox-content">
          <img :src="selectedImage" class="lightbox-img" @click.stop />
        </div>
      </div>
    </Transition>
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

.image {
  max-width: 40vw;
  width: 100%;
  height: auto;
  border-radius: 10px;
  margin-top: 1vh;
  margin-bottom: 8vh;
  transition: transform 0.3s ease;
}

.zoom-trigger {
  cursor: zoom-in;
}

.zoom-trigger:hover {
  filter: brightness(0.9);
}

.gallery {
  margin-top: 4rem;
  width: 100%;
  max-width: 80vw;
}

.gallery-title {
  color: white;
  margin-bottom: 2rem;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.gallery-item {
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 10px;
  transition: transform 0.3s;
}

.gallery-item:hover {
  transform: scale(1.03);
}

/* --- LIGHTBOX STYLES --- */

.lightbox {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  cursor: zoom-out;
  backdrop-filter: blur(5px);
}

.lightbox-content {
  position: relative;
  max-width: 90%;
  max-height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.lightbox-img {
  max-width: 100%;
  max-height: 90vh;
  object-fit: contain;
  border-radius: 4px;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);
}

.close-btn {
  position: absolute;
  top: 20px;
  right: 30px;
  background: none;
  border: none;
  color: white;
  font-size: 3rem;
  cursor: pointer;
  z-index: 10000;
  line-height: 1;
}

/* Animation Fade */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Responsive mobile */
@media (max-width: 768px) {
  .title, .subtitle {
    max-width: 90%;
  }

  .image {
    max-width: 95%;
    margin-bottom: 5vh;
  }

  .gallery-grid {
    grid-template-columns: 1fr;
  }

  .close-btn {
    top: 10px;
    right: 20px;
  }
}
</style>

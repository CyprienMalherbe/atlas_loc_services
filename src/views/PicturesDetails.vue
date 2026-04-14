<script setup>
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import { usePicturesStore } from '@/stores/pictures'

const route = useRoute()
const picturesStore = usePicturesStore()

const card = picturesStore.getBySlug(route.params.slug)

// Zoom image
const selectedImage = ref(null)

const openZoom = (url) => {
  selectedImage.value = url
  document.body.style.overflow = 'hidden'
}

const closeZoom = () => {
  selectedImage.value = null
  document.body.style.overflow = 'auto'
}

// Prix
const prices = computed(() => card?.prices ?? [])

// Subtitles dynamiques
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

      <!-- TITRE -->
      <h1 class="title">{{ card.title }}</h1>
      <p class="subtitle">{{ card.subtitle1 }}</p>

      <!-- 🔥 IMAGE + PRIX (GRID FIXE) -->
      <div class="top-section">

        <!-- IMAGE -->
        <img
          v-if="card.images?.length"
          class="image zoom-trigger"
          :src="card.images[0]"
          alt=""
          @click="openZoom(card.images[0])"
        />

        <!-- PRIX -->
        <ul v-if="prices.length" class="price-list">
          <li
            v-for="p in prices"
            :key="p.title"
            class="price-card"
          >
            <div class="price-title">
              {{ p.title }}
            </div>

            <div class="price-value">
              {{ p.price }}
            </div>
          </li>
        </ul>

      </div>

      <!-- SUBTITLES -->
      <p
        v-for="(subtitle, index) in subtitles"
        :key="index"
        class="subtitle"
        v-html="subtitle"
      ></p>

      <!-- GALERIE -->
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

    <!-- LIGHTBOX -->
    <Transition name="fade">
      <div v-if="selectedImage" class="lightbox" @click="closeZoom">
        <button class="close-btn" @click="closeZoom">&times;</button>

        <div class="lightbox-content">
          <img
            :src="selectedImage"
            class="lightbox-img"
            @click.stop
          />
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
  color: white;
}

/* TITRE */
.title {
  margin-top: 5vh;
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 10px;
  max-width: 40vw;
}

.subtitle {
  font-size: 1.2rem;
  margin-bottom: 20px;
  max-width: 40vw;
  white-space: pre-wrap;
}

/* 🔥 GRID FIX */
.top-section {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 2rem;
  align-items: start;

  width: 100%;
  max-width: 1100px;
  margin: 2vh auto 6vh auto;
}

/* IMAGE */
.image {
  width: 100%;
  border-radius: 10px;
}

/* PRIX */
.price-list {
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
}

.price-card {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  background: rgba(255, 255, 255, 0.08);
  padding: 1rem 1.2rem;
  margin-bottom: 1rem;
  border-radius: 12px;
}

.price-title {
  font-weight: 600;
  font-size: 0.95rem;
  line-height: 1.4;
  white-space: normal;
  word-break: break-word;
}

.price-value {
  font-style: italic;
  opacity: 0.9;
}

/* ZOOM */
.zoom-trigger {
  cursor: zoom-in;
}

.zoom-trigger:hover {
  filter: brightness(0.9);
}

/* GALERIE */
.gallery {
  margin-top: 4rem;
  width: 100%;
  max-width: 80vw;
}

.gallery-title {
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

/* LIGHTBOX */
.lightbox {
  position: fixed;
  inset: 0;
  background-color: rgba(0,0,0,0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  cursor: zoom-out;
  backdrop-filter: blur(5px);
}

.lightbox-content {
  max-width: 90%;
  max-height: 90%;
}

.lightbox-img {
  max-width: 100%;
  max-height: 90vh;
  object-fit: contain;
  border-radius: 4px;
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
}

/* FADE */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* MOBILE */
@media (max-width: 768px) {
  .top-section {
    grid-template-columns: 1fr;
  }

  .title,
  .subtitle {
    max-width: 90%;
  }

  .image {
    max-width: 95%;
  }
}
</style>

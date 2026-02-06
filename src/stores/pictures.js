import { defineStore } from 'pinia'
import tentImg from '@/assets/full-tent.jpeg'
import crocoImg from '@/assets/outside-croco.jpeg'
import tableImg from '@/assets/table.jpeg'
import silveryImg from '@/assets/silvery.jpg'
import chairImg from '@/assets/chair.jpeg'

function slugify(text) {
  return text
    .toString()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
}

export const usePicturesStore = defineStore('pictures', {
  state: () => ({
    cards: [
      {
        title: "Tentes",
        image: tentImg,
        published: new Date("2026-01-01T03:24:00"),
        subtitle1: "On loue des tentes.",
        subtitle2: "Cette section manque quand même encore un peu de photos 😊.",
      },
      {
        title: "Structures gonflables",
        image: crocoImg,
        published: new Date("2025-11-18T03:24:00"),
        subtitle1: "On loue des structures gonflables",
        subtitle2: "Cette section manque quand même encore un peu de photos 😊.",
      },
      {
        title: "Tables",
        image: tableImg,
        published: new Date("2024-12-10T03:24:00"),
        subtitle1: "On loue des tables",
        subtitle2: "Cette section manque quand même encore un peu de photos 😊.",
      },
      {
        title: "Vaisselle",
        image: silveryImg,
        published: new Date("2025-04-24T03:24:00"),
        subtitle1: "On loue de la vaisselle",
        subtitle2: "Cette section manque quand même encore un peu de photos 😊.",
      },
      {
        title: "Chaises",
        image: chairImg,
        published: new Date("2024-09-17T03:24:00"),
        subtitle1: `On loue des chaises`,
        subtitle2: "Cette section manque quand même encore un peu de photos 😊.",
      },
    ],
  }),

  getters: {
    orderedCards: (state) =>
      [...state.cards].sort((a, b) => b.published - a.published),

    getBySlug: (state) => {
      return (slug) => state.cards.find(c => slugify(c.title) === slug)
    }
  }
})

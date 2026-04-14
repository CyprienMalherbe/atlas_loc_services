import { defineStore } from "pinia";
import tentImg from "@/assets/full-tent.jpeg";
import tentImg1 from "@/assets/empty-tent.jpeg";
import tentImg2 from "@/assets/inside-tent.jpeg";
import tentImg3 from "@/assets/outside-tent.jpeg";
import crocoImg from "@/assets/outside-croco.jpeg";
import crocoImg2 from "@/assets/inside-croco.jpeg";
import crocoImg3 from "@/assets/backside-croco.jpeg";
import crocoImg4 from "@/assets/side-croco.jpeg";
import tableImg from "@/assets/table.jpeg";
import silveryImg from "@/assets/silvery.jpg";
import silveryImg1 from "@/assets/silvery1.jpg";
import silveryImg2 from "@/assets/silvery2.jpg";
import silveryImg3 from "@/assets/silvery3.jpg";
import silveryImg4 from "@/assets/silvery4.jpg";
import silveryImg5 from "@/assets/silvery5.jpg";
import silveryImg6 from "@/assets/silvery6.jpg";
import chairImg from "@/assets/chair.jpeg";
import chauffePlat from "@/assets/chauffe-plat.jpg";

function slugify(text) {
  return text
    .toString()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "");
}

export const usePicturesStore = defineStore("pictures", {
  state: () => ({
    cards: [
      {
        title: "Chapiteaux",
        images: [tentImg, tentImg1, tentImg2, tentImg3],
        published: new Date("2026-01-01T03:24:00"),
        subtitle1:
          "Chapiteau élégant Basic 500 avec une bâche robuste et de grandes fenêtres pour une belle luminosité – parfait pour toutes sortes de fêtes nécessitant un espace supplémentaire. Structure stable en tubes d’acier galvanisé. Les parois d’extrémité sont dotées de fermetures éclair pour pouvoir les ouvrir facilement et assurer une bonne ventilation.",
        subtitle2:
          " Le chapiteau Basic 500 est une alternative fonctionnelle et économique à nos chapiteaux en PVC. Les dimensions des chapiteaux sont 5 x 10 m.",
        prices: [
          { title: "Location journée", price: "120 €" },
          { title: "Location week-end", price: "200 €" },
          {
            title: "Frais de livraison",
            price: "Offerts si rayon < 10 km autour de Gailon",
          },
        ],
      },
      {
        title: "Structures gonflables",
        images: [crocoImg, crocoImg2, crocoImg3, crocoImg4],
        published: new Date("2025-11-18T03:24:00"),
        subtitle1:
          "Structure gonflable en forme de crocodile pour ravir les jeunes et les moins jeunes enfants 😊.",
        subtitle2:
          "C'est une solution idéale pour proposer une animation enfants spectaculaire. Cette structure gonflable plonge immédiatement les participants dans un univers fun et aventurier, très apprécié lors des événements familiaux, fêtes, anniversaires, campings, bases de loisirs, centres de vacances, collectivités et événements publics.",
        prices: [
          { title: "Location journée", price: "120 €" },
          { title: "Location week-end", price: "180 €" },
          {
            title: "Frais de livraison",
            price: "Offerts si rayon < 10 km autour de Gailon",
          },
        ],
      },
      {
        title: "Vaisselle",
        images: [
          silveryImg,
          silveryImg1,
          silveryImg2,
          silveryImg3,
          silveryImg4,
          silveryImg5,
          silveryImg6,
        ],
        published: new Date("2025-04-24T03:24:00"),
        subtitle1:
          "Ensemble de vaisselle prête à être utilisée, en céramique blanche, et prête à vous acommpagner tout au long du repas.",
        prices: [
          {
            title:
              "Forfait 1 : 1 assiette plate + 1 petite assiette + 1 verre à vin + 1 verre à eau + couverts (couteau, fourchette, petite cuillère",
            price: "1,90 €",
          },
          {
            title:
              "Forfait 2 : Forfait 1 + 1 verre à cocktail + 1 flûte à champagne + 1 tasse + sous-tasse à café",
            price: "2,60 €",
          },
          {
            title: "Frais de livraison",
            price: "Offerts si rayon < 10 km autour de Gailon",
          },
        ],
      },
      {
        title: "Tables",
        images: [tableImg],
        published: new Date("2024-12-10T03:24:00"),
        subtitle1:
          "Table pliante en matériaux robustes et légers pour tous les évènements. La table pliante robuste est facile à ouvrir et à fermer et ne prendra que peu de place lorsqu’elle est pliée. Idéale pour tous les genres d’évènements où il est nécessaire d’assoir de nombreux invités.",
        subtitle2: "Dimensions : 180x74x74cm",
        prices: [
          { title: "Location journée / unité", price: "8 €" },
          {
            title: "Frais de livraison",
            price: "Offerts si rayon < 10 km autour de Gailon",
          },
        ],
      },
      {
        title: "Chaises",
        images: [chairImg],
        published: new Date("2024-09-17T03:24:00"),
        subtitle1: `Chaise pliante pratique et robuste, idéale pour la location. La chaise pliante et légère est facile à manipuler, à transporter et ne nécessite que très peu d’espace lorsqu’elle est pliée et non utilisée. La chaise pliante est parfaite pour les fêtes d’été sous une tente de réception, les événements scolaires, les clubs sportifs ou les locations commerciales. Grand soutien dorsal et confort d’assise en général.`,
        subtitle2: "Dimensions : 44x44x80cm",
        prices: [
          { title: "Location journée / unité", price: "2,50 €" },
          {
            title: "Frais de livraison",
            price: "Offerts si rayon < 10 km autour de Gailon",
          },
        ],
      },
      {
        title: "Chauffe-plat",
        images: [chauffePlat],
        published: new Date("2024-09-17T03:24:00"),
        subtitle1: `Ustensile de cuisine très pratique, le chauffe-plat permet de garder vos plats au chaud sans les assécher ni altérer leur goût. Vos mets sont conservés à la température idéale tout au long du repas.`,
        subtitle2:
          "Capacité de 9L. Principe de bain-marie avec alcool à brûler",
        prices: [
          { title: "Location journée / unité", price: "15 €" },
          {
            title: "Frais de livraison",
            price: "Offerts si rayon < 10 km autour de Gailon",
          },
        ],
      },
    ],
  }),

  getters: {
    orderedCards: (state) =>
      [...state.cards].sort((a, b) => b.published - a.published),

    getBySlug: (state) => {
      return (slug) => state.cards.find((c) => slugify(c.title) === slug);
    },
  },
});

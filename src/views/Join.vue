<script>
export default {
  name: 'Join',
}
</script>

<template>
  <div class="join-wrapper">
    <div class="join-container">
      <!-- Image à gauche -->
      <div class="image-container">
        <img src="@/assets/outside-croco.jpeg" alt="Croco" />
      </div>

      <!-- Texte dans le fond sombre -->
      <v-card variant="flat" class="join-card">
        <v-card-title class="card-title">🎉 Atlas loc & services</v-card-title>

        <v-card-text class="text">
          <p class="intro">
            Bonjour, pour vos cérémonies, mariages, anniversaires et fêtes en tout genre, vous pouvez louer votre vaisselle avec Atlas loc & services.
          </p>

          <ul class="advantages">
            <li><span class="bullet">🟢</span><span>Vaisselle</span></li>
            <li><span class="bullet">🟢</span><span>Tente</span></li>
            <li><span class="bullet">🟢</span><span>Structure gonflable</span></li>
          </ul>

          <p class="outro">
            Contactez-moi dès maintenant pour réserver votre matériel.
          </p>
        </v-card-text>

        <v-card-actions class="actions">
          <v-btn
            color="rgb(33, 150, 243)"
            variant="elevated"
            class="cta-btn"
            :to="'contact'"
          >
            Réservez votre matériel
          </v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </div>
</template>

<style scoped>
.join-wrapper {
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 2rem 0;
}

/* Container principal */
.join-container {
  display: flex;
  justify-content: space-around;
  align-items: center;      /* centre verticalement image et texte */
  gap: 4rem;                /* espace entre image et texte */
  width: 100%;
  max-width: 90vw;
}

/* Image à gauche */
.image-container {
  flex: 0 0 600px;          /* largeur fixe pour image */
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.image-container img {
  width: 100%;              /* remplit la largeur du container */
  height: auto;
  display: block;
  border-radius: 12px;
}

/* Texte dans le fond sombre */
.join-card {
  flex: 1;                  /* prend tout l’espace restant */
  min-width: 400px;         /* largeur minimale pour le texte */
  max-width: 700px;
  padding: 1.5rem;
  border-radius: 12px;
  background-color: rgba(0,0,0,0.4);
  color: white;
  box-shadow: 0 4px 12px rgba(0,0,0,0.3);
}

/* Titres et texte */
.card-title {
  font-size: clamp(1.5rem, 2.5vw, 1.8rem);
  font-weight: 700;
  text-align: left;
  margin-bottom: 1rem;
}

.text {
  text-align: left;
  line-height: 1.6;
  font-weight: 500;
  font-size: clamp(0.9rem, 1.5vw, 1.1rem);
}

.intro, .outro {
  margin-bottom: 1rem;
}

.advantages {
  list-style: none;
  padding: 0;
  margin: 1rem 0;
}

.advantages li {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  margin: 0.5rem 0;
}

.bullet {
  flex-shrink: 0;
  line-height: 1.6;
}

.actions {
  display: flex;
  justify-content: flex-start;
}

.cta-btn {
  margin-top: 1rem;
  transition: all 0.2s ease;
}

.cta-btn:hover {
  background-color: rgba(33, 150, 243, 0.9);
  color: white;
  transform: translateY(-1px);
}

/* Responsive : tablette et mobile */
@media (max-width: 1024px) {
  .join-container {
    flex-direction: column; /* empile image et texte */
    align-items: center;
    gap: 2rem; /* moins d’espace sur tablette */
  }

  .image-container {
    justify-content: center;
    flex: 0 0 auto;
    width: 80%; /* réduit l'image sur tablette */
    margin-bottom: 1rem;
  }

  .join-card {
    width: 90%;
    min-width: unset;
  }

  .actions {
    justify-content: center;
  }

  .advantages li {
    display: block;       /* bullets empilés pour ne pas casser le texte */
    margin: 0.5rem 0;
  }

  .advantages li .bullet {
    display: inline-block; /* bullet devant le texte */
    margin-right: 0.5rem;
  }

  .text {
    width: 100%;           /* prend toute la largeur du card */
  }
}

@media (max-width: 768px) {
  .join-card {
    width: 95%;
    padding: 1rem;
  }

  .card-title {
    font-size: 1.5rem;
  }

  .text {
    font-size: 0.95rem;
  }
}
</style>

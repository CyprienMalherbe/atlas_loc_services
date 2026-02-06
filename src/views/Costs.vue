<script>
export default {
  name: 'Costs',
  data () {
    return {
      formulas: [
        { title: "Formule 'classique'", price: '200 €' },
        { title: "Formule 'classique longue'", price: '250 €' },
        { title: 'Formule personnalisée (durée et / ou thèmes)', price: 'À convenir ensemble' },
      ],
    }
  },
}
</script>

<template>
  <div class="container">
    <h1 class="title">Les tarifs</h1>

    <!-- Section Tarifs -->
    <div class="section-card">
      <div class="two-columns">
        <div class="text-column">
          <p class="subtitle">
            Ma force réside dans ma capacité à adapter la durée des jeux, les thèmes,
            leur difficulté ou encore leur originalité en fonction de vos envies
            et de votre événement.
          </p>

          <p class="subtitle">
            Le tarif peut donc varier selon plusieurs critères : le temps de déplacement,
            le temps de préparation des jeux, ainsi que la durée de l’animation sur place.
            Je vous invite à
            <router-link to="/contact" class="contact-link">me contacter</router-link>
            pour un devis personnalisé ou pour toute demande d’information.
          </p>
        </div>
      </div>
    </div>

    <!-- Section Formules -->
    <h1 class="title">Les formules</h1>

    <div class="section-card">
      <div class="two-columns">
        <div class="text-column">
          <p class="subtitle">
            Globalement, je propose des animations composées de plusieurs manches,
            avec l’ensemble du matériel nécessaire.
          </p>

          <p class="subtitle">
            <strong>Formule « classique »</strong> :
            4 jeux avec 3 pauses, pour une durée d’animation d’environ 2 heures (hors installation / désinstallation).
          </p>

          <p class="subtitle">
            <strong>Formule « classique longue »</strong> :
            6 jeux avec 5 pauses, pour une durée d’animation d’environ 3 heures (hors installation / désinstallation).
          </p>

          <p class="subtitle">
            L’animation « classique » correspond à une sélection de jeux prédéfinis.
            En cas de personnalisation plus poussée (thèmes spécifiques, formats particuliers,
            contraintes spécifiques), une formule personnalisée sera proposée.
          </p>
        </div>

        <ul class="formula-list">
          <li v-for="formula in formulas" :key="formula.title" class="formula-item">
            <span class="formula-title">{{ formula.title }}</span>
            <span class="formula-price">{{ formula.price }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  color: white;
}

.title {
  font-size: 2rem;
  font-weight: bold;
  margin: 2rem 0;
  text-align: center;
}

/* Section avec fond */
.section-card {
  background: rgba(255, 255, 255, 0.05);
  padding: 2rem;
  border-radius: 16px;
  margin-bottom: 3rem;
  width: 90%;
  max-width: 1000px;
}

/* Conteneur 2 colonnes */
.two-columns {
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  flex-wrap: wrap;
  align-items: flex-start;
}

/* Colonne texte */
.text-column {
  flex: 1 1 55%;
  text-align: left;
}

.subtitle {
  font-size: 1.2rem;
  margin-bottom: 1rem;
  line-height: 1.5;
}

/* Liste des prix */
.formula-list {
  flex: 1 1 40%;
  list-style: none;
  padding: 0;
  margin: 0;
}

.formula-item {
  display: flex;
  justify-content: space-between;
  background: rgba(255,255,255,0.1);
  padding: 1rem 1.5rem;
  margin-bottom: 1rem;
  border-radius: 12px;
  font-size: 1.2rem;
  transition: transform 0.2s ease, background 0.2s ease;
}

.formula-title {
  font-weight: bold;
}

.formula-price {
  font-style: italic;
}

/* Lien contact */
.contact-link {
  color: #4fc3f7;
  font-weight: bold;
  text-decoration: underline;
  cursor: pointer;
}

.contact-link:hover {
  color: #81d4fa;
}

/* Mobile */
@media (max-width: 768px) {
  .two-columns {
    flex-direction: column;
    align-items: center;
  }

  .text-column, .formula-list {
    flex: 1 1 100%;
    text-align: center;
  }

  .formula-item {
    flex-direction: column;
    align-items: center;
  }

  .formula-price {
    margin-top: 0.3rem;
  }
}
</style>

<script>
export default {
  name: 'About',
}
</script>

<template>
  <div class="container">
    <h1 class="title">Qui sommes-nous ?</h1>

    <p class="subtitle">
      Nous sommes une société de loueurs de matériel Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis non dolores veniam consequuntur soluta at totam, nesciunt sequi sit, aperiam commodi. Consequatur amet in excepturi optio eligendi. Magni, itaque architecto!
    </p>

    <p class="subtitle">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt ea unde sed molestiae enim aliquid fuga expedita fugiat necessitatibus? Laborum suscipit impedit reprehenderit a. Maxime vero esse fugit ducimus voluptatibus.
    </p>

    <h1 class="second-title">Pourquoi ?</h1>

    <p class="subtitle">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui quaerat accusantium eligendi? Et, repellendus! Tempore sit accusamus, delectus quae debitis autem. Neque harum architecto, quisquam in reprehenderit incidunt nam mollitia!
    </p>

    <img class="image" src="@/assets/outside-tent.jpeg" alt="Tente extérieure">

    <p class="subtitle">
      N’hésitez pas à parcourir les différentes rubriques du site, et notamment
      la section <RouterLink to="/pictures" class="link">Galerie</RouterLink>,
      pour vous faire une idée des services proposés 😊.
    </p>
  </div>
</template>

<style scoped>
.link {
  font-weight: bold;
  text-decoration: underline;
  color: #4fc3f7;
  cursor: pointer;
  transition: color 0.3s ease;
}

.link:hover {
  color: #82e9de;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 1rem;
}

.title,
.second-title {
  margin-top: 4vh;
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
}

.image {
  max-width: 45vw;
  width: 100%;
  max-height: 45vh;
  border-radius: 10px;
  margin-top: 1vh;
  margin-bottom: 4vh;
}

/* Mobile */
@media (max-width: 768px) {
  .title,
  .second-title {
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

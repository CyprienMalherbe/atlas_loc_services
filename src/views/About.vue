<script>
export default {
  name: 'About',
}
</script>

<template>
  <div class="container">
    <h1 class="title">Qui sommes-nous ?</h1>

    <p class="subtitle">
      Nous sommes une société de loueurs de matériel située dans la commune de Saint-Aubin-sur-Gaillon dans l'Eure.
    </p>

    <p class="subtitle">
      Nous proposons à la location tout un matériel de fête et de réception, comme de la vaisselle, des structures gonflables ou même des chapiteaux.
    </p>

    <img class="image" src="@/assets/outside-tent.jpeg" alt="Chapiteau extérieur">

    <p class="subtitle">
      N’hésitez pas à aller voir la section <RouterLink to="/pictures" class="link">Prestations</RouterLink>,
      pour vous faire une idée des services proposés ainsi que les tarifs associés 😊.
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

<script>
export default {
  name: 'Footer',
}
</script>

<template>
  <v-footer color="black">
    <v-container>
      <v-row class="footer-row" align="center" justify="space-between">

        <!-- Section 1: Suivez-moi -->
        <v-col class="footer-col text-left">
          <h4 class="white--text">Suivez-nous</h4>
          <v-btn
            icon
            href="https://www.facebook.com/profile.php?id=100049211323535"
            target="_blank"
            class="white--text hover-zoom"
          >
            <v-icon>mdi-facebook</v-icon>
          </v-btn>
          <v-btn
            icon
            href="https://www.instagram.com/atlaslocetservice/"
            target="_blank"
            class="white--text hover-zoom"
          >
            <v-icon>mdi-instagram</v-icon>
          </v-btn>
        </v-col>

        <!-- Section 3: Droite -->
        <v-col class="footer-col text-right">
          <p class="developped-by">
            ☎️ 06 79 93 93 65
          </p>
          <p class="developped-by">
            📧 atlaslocetservices@orange.fr
          </p>
          <p class="developped-by">
            N° SIRET : 81286147400011
          </p>
          <p class="developped-by">
            Ce site a été développé par Cyprien Malherbe, développeur web
          </p>
        </v-col>

      </v-row>
    </v-container>
  </v-footer>
</template>

<style scoped>
.developped-by {
  color: white;
  font-size: xx-small;
}

.hover-zoom {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border-radius: 50%;
}

.hover-zoom:hover {
  transform: scale(1.2);
  box-shadow: 0px 4px 12px rgba(255, 255, 255, 0.4);
  border-radius: 50%;
}

/* Responsive mobile */
@media (max-width: 768px) {
  .footer-row {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }

  .footer-col {
    text-align: center !important;
    margin-bottom: 0.5rem;
  }

  .developped-by {
    font-size: small;
  }

  .footer-col v-img {
    max-width: 80px !important;
  }
}
</style>

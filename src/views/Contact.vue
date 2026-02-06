<script>
import emailjs from 'emailjs-com'
const EMAILJS_KEY = import.meta.env.VITE_EMAIL_JS_KEY
const SERVICE_ID = import.meta.env.VITE_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID

export default {
  name: "Contact",
  data() {
    return {
      names: "",
      mail: "",
      message: "",
      loading: false,
      namesRules: [
        v => !!v || "Le nom est obligatoire",
        v => (v && v.length >= 3) || "Le nom doit contenir au moins 3 caractères",
      ],
      mailRules: [
        v => !!v || "L’email est obligatoire",
        v => /.+@.+\..+/.test(v) || "Adresse email invalide",
      ],
      messageRules: [
        v => !!v || "Le message est obligatoire",
        v => (v && v.length >= 10) || "Le message doit contenir au moins 10 caractères",
      ],
    };
  },
  methods: {
    async send() {
      const { valid } = await this.$refs.contactForm.validate()
      if (!valid) return
      this.loading = true
      const templateParams = {
        names: this.names,
        email: this.mail,
        message: this.message,
      };
      try {
        await emailjs.send(
          SERVICE_ID,
          TEMPLATE_ID,
          templateParams,
          EMAILJS_KEY
        )
        alert("✅ Message envoyé avec succès !")
        this.names = ""
        this.mail = ""
        this.message = ""
        this.$refs.contactForm.resetValidation()
      } catch (error) {
        console.error(error)
        alert("❌ Une erreur est survenue, réessaie plus tard.")
      } finally {
        this.loading = false
      }
    },
  },
}
</script>

<template>
  <div class="main-content">
    <v-container class="d-flex justify-center align-center" fluid>
      <v-card width="600" elevation="8" class="pa-6 rounded-xl form-card">
        <v-card-title class="text-h5 font-weight-bold text-center mb-4">
          ✉️ Nous contacter
        </v-card-title>
        <v-form ref="contactForm" @submit.prevent="send">
          <v-text-field
            v-model="names"
            :rules="namesRules"
            label="Nom et prénom"
            prepend-inner-icon="mdi-account"
            outlined
            clearable
          />
          <v-text-field
            v-model="mail"
            :rules="mailRules"
            label="Adresse email"
            prepend-inner-icon="mdi-email"
            outlined
            clearable
          />
          <v-textarea
            v-model="message"
            :rules="messageRules"
            label="Votre message (Type d'événement, nb personnes, lieu...)"
            rows="6"
            outlined
            prepend-inner-icon="mdi-message-text"
          />
          <v-btn
            type="submit"
            block
            class="mt-4"
            color="blue"
            variant="flat"
            size="large"
            :loading="loading"
          >
            🚀 Envoyer
          </v-btn>
        </v-form>
      </v-card>
    </v-container>
  </div>
</template>

<style scoped>
.main-content {
  background-color: rgb(33,150,243);
  height: calc(100vh - 48px);
  display: flex;
  justify-content: center;
  align-items: center;
}
.form-card {
  background-color: #fff;
  color: #333;
}
</style>

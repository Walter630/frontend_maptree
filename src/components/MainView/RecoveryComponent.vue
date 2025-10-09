<script setup lang="ts">
import { ref } from 'vue'

const email = ref('')

const sendVerificationCode = () => {
  alert('Código de verificação enviado para ' + email.value)
}
</script>

<template>
  <v-container class="login-container">
    <v-row class="fill-height">
      <v-col cols="12">
        <v-card class="form-card" flat style="max-width: 400px; margin: 0 auto;">
          <v-card-title>Recuperar Senha</v-card-title>
          <v-card-text class="text-center">
            <p>Insira o seu email cadastrado para receber o código de verificação.</p>
            <v-text-field  placeholder="Digite o email de registro" v-model="email"></v-text-field>
            <v-btn color="#C6F513" block @click="sendVerificationCode">Proximo <v-icon right>mdi-arrow-right</v-icon></v-btn>
            <v-btn color="black" block style="margin-top: 10px;" @click="sendVerificationCode">Cancelar</v-btn>
          </v-card-text>

        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.form-card {
  max-width: 400px;
  margin: 0 auto;
}
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;
}
</style>

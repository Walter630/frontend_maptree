<template>
  <v-container fluid class="login-container">
    <v-row class="fill-height " style="margin: 0; padding: 0; height: 100vh; ">
      <!-- Coluna do formulário (esquerda) -->
      <v-col cols="12" md="4" class="form-section">
        <v-card flat class="form-card">
        <v-img text="MapTree"  alt="Logo" contain max-width="100" class="mb-4" />
          <v-card-title class="botton-logo">MapTree</v-card-title>

          <h2 class="title">Bem Vindo(a)!</h2>

          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field
              v-model="username"
              label="Email"
              placeholder="Digite seu email"
              outlined
              dense
              color="green"
              class="mb-4"
              hide-details
              required
            ></v-text-field>

            <v-text-field
              v-model="password"
              label="Senha"
              outlined
              dense
              placeholder="Digite sua senha"

              type="password"
              color="green"
              class="mb-2"
              :append-icon="mdiEye"
              hide-details
              required

              @click:append="showPassword = !showPassword"
                :type="showPassword ? 'text' : 'password'"
            ></v-text-field>

            <v-btn block color="#C6F513" dark class="mb-4" @click="login">
              ENTRAR <v-spacer> </v-spacer> <v-icon right>mdi-arrow-right</v-icon>
            </v-btn>

            <div class="text-left mb-2">
              <a href="#" class="forgot-password">Esqueceu sua senha?</a>
            </div>

            <div class="text-center">-----------------------------  ou  ---------------------------------</div>

            <v-btn block  class="mb-2" @click="loginWithGoogle()">
              <v-icon>mdi-google</v-icon> Continuar com Google
            </v-btn>
            <v-btn block class="mb-2" @click="loginWithFacebook()">
              <v-icon>mdi-facebook</v-icon>  Continuar com Facebook
            </v-btn>

            <div class="text-center mt-4">
              Não possui uma conta?
              <a href="#" class="register-link">Cadastre-se</a>
            </div>
          </v-form>

          <div class="terms-privacy">termos e condicoes <v-icon>mdi-circle-small</v-icon>Politica de privacidade</div>
        </v-card>
      </v-col>

      <!-- Coluna do texto verde (direita) -->
      <v-col cols="12" md="8"  class="info-section">
        <div class="info-text">
          <h1>Gestão<br />inteligente de<br />vegetação</h1>
        </div>
        <div class="bottom-logo">MapTree</div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
        import { ref } from 'vue'
        import { VIcon } from 'vuetify/components'

        const username = ref('')
        const password = ref('')
        const valid = ref(true)
        const showPassword = ref(true)

        const form = ref()

        const mdiEye = 'mdi-eye'

        const login = () => {
            if (form.value.validate()) {
                alert('Login realizado com sucesso!')
            } else {
                alert('Por favor, preencha todos os campos corretamente.')
            }

        }

        const loginWithGoogle = () => {
            alert("Login com Google")
        }

        const loginWithFacebook = () => {
            alert("Login com Facebook")
        }


</script>

<style scoped>
.login-container {
  height: 100vh;
    padding: 0;
    margin: 0;
    display: flex;
}

.form-section {
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}

.form-card {
  width: 100%;
  max-width: 400px;
  padding: 40px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    border-radius: 8px;

}

.title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 24px;
}

.forgot-password,
.register-link {
  color: blue;
  font-weight: bold;

}

.info-section {
  background-color: #C6F513;
  display: flex;
  justify-content: center;
  position: relative;
  flex-direction: initial;
  padding: 20px;
  text-align: center;
    align-items: center;
}

.info-text h1 {
  font-size: 49px;
  font-weight: bold;
  color: #000;

}

.bottom-logo {
  position: absolute;
  bottom: 20px;
  right: 20px;
  font-weight: bold;
  color: #000;
}
.terms-privacy {
  font-size: 12px;
  margin-top: 20px;
  color: gray;
  text-align: center;

}
</style>

<template>
  <v-container class="login-container" fluid>
    <v-row class="fill-height" style="margin: 0; padding: 0; height: 100vh;">
      <!-- Coluna do formulário -->
      <v-col class="form-section" cols="12" md="4">
        <v-card class="form-card" flat>
          <!-- Logo -->
          <v-img
            alt="Logo"
            class="mb-4 mx-auto"
            contain
            max-width="10"
          />
          <v-card-title class="font-weight-bold text-h5 mb-4">
            MapTree
          </v-card-title>

          <h2 class="title">Bem-vindo(a)!</h2>

          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field
              v-model="username"
              class="mb-4"
              color="green"
              dense
              hide-details
              label="Email"
              outlined
              placeholder="Digite seu email"
              required
            />

            <v-text-field
              v-model="password"
              :append-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
              class="mb-2"
              color="green"
              dense
              hide-details
              label="Senha"
              outlined
              placeholder="Digite sua senha"
              required
              :type="showPassword ? 'text' : 'password'"
              @click:append="showPassword = !showPassword"
            />

            <v-btn
              block
              class="mb-4"
              color="#C6F513"
              dark
              @click="login"
            >
              ENTRAR
              <v-icon right>mdi-arrow-right</v-icon>
            </v-btn>

            <div class="text-left mb-2">
              <a class="forgot-password" @click="$router.push('/recovery')">Esqueceu sua senha?</a>
            </div>

            <hr class="hr">

            <!-- Botão Google -->
            <v-btn block class="mb-2 google-btn" @click="loginWithGoogle">
              <img
                alt="Google Icon"
                class="mr-2"
                height="24"
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                width="24"
              >
              Continuar com Google
            </v-btn>

            <v-btn block class="mb-2 facebook-btn" @click="loginFacebook">
              <img class="mr-2" height="22" src="https://www.svgrepo.com/show/475656/facebook-color.svg" width="22">
              Continuar com Facebook
            </v-btn>

            <div class="text-center mt-4">
              Não possui uma conta?
              <a class="register-link" href="#">Cadastre-se</a>
              <v-icon color="blue">mdi-chevron-right</v-icon>
            </div>
          </v-form>

          <div class="terms-privacy">
            Termos e Condições
            <v-icon small>mdi-circle-small</v-icon>
            Política de Privacidade
          </div>
        </v-card>
      </v-col>

      <!-- Coluna direita -->
      <v-col
        class="info-section"
        cols="12"
        md="8"
        :style="isMobile ? 'display: none;' : 'padding: 20px; text-align: center;'"
      >
        <div class="info-text">
          <h1>Gestão<br>inteligente de<br>vegetação</h1>
        </div>
        <div class="bottom-logo">MapTree</div>
      </v-col>

    </v-row>
  </v-container>
</template>

<script>
  import { onAuthStateChanged } from 'firebase/auth'
  import { auth, loginWithGooglePopup } from '@/plugins/firebase/config'
  import { useAppStore } from '@/stores/app'

  export default {
    name: 'LoginComponent',

    data () {
      return {
        username: '',
        password: '',
        showPassword: false,
        valid: true,
        isMobile: window.innerWidth < 768, // inicializa com largura atual
      }
    },

    mounted () {
      const store = useAppStore()

      // Mantém sessão se já estiver logado
      onAuthStateChanged(auth, user => {
        if (user) {
          console.log('✅ Sessão restaurada:', user.email)
          store.setUser(user)
          this.$router.push('/')
        } else {
          console.log('🔴 Nenhum usuário autenticado.')
        }
      })

      // Atualiza isMobile quando a tela é redimensionada
      window.addEventListener('resize', this.checkMobile)
    },

    beforeUnmount () {
      // Remove listener ao destruir o componente
      window.removeEventListener('resize', this.checkMobile)
    },

    methods: {
      async loginWithGoogle () {
        try {
          const user = await loginWithGooglePopup()
          if (user) {
            console.log('✅ Usuário logado:', user.email)
            this.$store.setUser(user)
            this.$router.push('/')
          }
        } catch (error) {
          console.error('Erro ao logar com Google:', error)
        }
      },

      loginFacebook () {
        alert('Login com Facebook ainda não implementado.')
      },

      checkMobile () {
        this.isMobile = window.innerWidth < 768
      },
    },
  }
</script>

<style scoped>
/* Layout principal */
.login-container {
  height: 100vh;
  display: flex;
  padding: 0;
  margin: 0;
}

/* Linha divisória estilizada */
.hr {
  border: none;
  height: 2px;
  background: linear-gradient(to right, #ccc, #999, #ccc);
  border-radius: 2px;
  margin: 20px 0;
}

/* Seção esquerda (formulário) */
.form-section {
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}

.facebook-btn {
  text-transform: none;
  font-weight: 500;
  letter-spacing: 0.3px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;
}

.facebook-btn:hover {
  background-color: #145dbb;
}

.form-card {
  width: 100%;
  max-width: 400px;
  padding: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

/* Títulos */
.title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 24px;

}

/* Links */
.forgot-password,
.register-link {
  color: #1e88e5;
  font-weight: 500;
  text-decoration: none;
}
.forgot-password:hover,
.register-link:hover {
  text-decoration: underline;
}

/* Seção direita */
.info-section {
  background-color: #C6F513;
  display: flex;
  justify-content: center;
  position: relative;
  align-items: center;
  padding: 20px;
  text-align: center;
}
.info-text h1 {
  font-size: 49px;
  font-weight: bold;
  color: #000;
  line-height: 1.2;
}
.bottom-logo {
  position: absolute;
  bottom: 20px;
  right: 20px;
  font-weight: bold;
  color: #000;
}

/* Botões sociais */
.google-btn {
  border: 1px solid #ddd;
  background-color: #fff;
  color: #444;
  text-transform: none;
  font-weight: 500;
}
.google-btn:hover {
  background-color: #C6F513;
}

.facebook-btn {
  text-transform: none;
  font-weight: 500;
}

/* Termos */
.terms-privacy {
  font-size: 12px;
  margin-top: 20px;
  color: gray;
  text-align: center;
}
</style>

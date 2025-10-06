<template>
    <v-container style=" background-color: green; height: 90vh; display: flex; align-items: center; justify-content: center; ">
        <v-layout align-center justify-center fill-height>
            <v-flex xs12 sm8 md4>
                <v-card class="pa-5" elevation="2" style=" max-width: 400px; margin: auto; height: 90vh; width: 1000px; border-radius: 8px; background-color: white; justify-content: center; display: flex; flex-direction: column;">
                    <v-card-title class="headline;" style="color: black;">Bem Vindo(a)</v-card-title>
                    
                        <v-form ref="form" v-model="valid" lazy-validation style="color: black; align-items: left; text-align: left;">
                        <v-card-text style="color: black; align-items: left; text-align: left;">
                            email
                        </v-card-text>
                            <v-text-field
                                
                                v-model="username"
                                color="black"
                                required
                            ></v-text-field>
                            <v-card-text style="color: black; align-items: left; text-align: left;">
                                password
                            </v-card-text>
                            <v-text-field
                                
                                type="password"
                                v-model="password"
                                color="black"
                                required
                            ></v-text-field>
                        </v-form>
                    <v-card-actions style="justify-content: center; Background-color: green;">
                        <v-btn color="primary" style="background-color: darkgreen; width: 100%;" @click="login">Login</v-btn>
                    </v-card-actions>

                    <v-card-text style="color: black; align-items: left; text-align: left;">
                         <a href="/register" style="color: blue;">Esqueceu sua senha?</a>
                    </v-card-text>
                    <v-card-text style="color: black; align-items: left; text-align: left;">
                         ou
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
    
    </v-container>
</template>
<script lang="ts" setup>
  //
    import { ref } from 'vue'

    const username = ref('')
    const password = ref('')

</script>
<style>
  /* Add global styles here */
  
</style>
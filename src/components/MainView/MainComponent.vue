<script setup lang="ts">
  import { useRouter } from 'vue-router'
  import { logoutGoogle } from '@/plugins/firebase/config'
  import { useAppStore } from '@/stores/app'
  const router = useRouter()
  const store = useAppStore()

  async function logout () {
    await logoutGoogle()
    router.push('/login')
  }

</script>

<template>
  <v-btn @click="logout()">Botão</v-btn>
</template>

<style scoped>

</style>

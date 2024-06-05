<script lang="ts" setup>
import { ref } from 'vue';
import LoginForm from '../components/LoginForm.vue';
import { useRouter } from 'vue-router';
import Alert from '../components/Alert.vue';
const email = ref('');
const password = ref('');
const valid = ref(false);
const router = useRouter();
const fazerLogin = () => {
  router.push('dashboard')
  // if (email.value !== '' && password.value !== '') {
  //   valid.value = true;
  //   router.push('dashboard');
  // } else {
  //   valid.value = false;
  //   console.log('Por favor preencha os campos');
  // }

}

</script>

<template>
  <div class="d-flex justify-center mt-15">
    <h2 class="text-h2">Bem vindo ao Supermercado Vuetify</h2>
  </div>
  <v-row no-gutters class="mt-12">
    <v-col>
      <Alert v-show="valid" text="por favor preencha os campos" title="Erro" type="error"></Alert>
      <LoginForm v-model:valid="valid" v-model:email="email" v-model:password="password" @login="fazerLogin">
      </LoginForm>
    </v-col>
  </v-row>
</template>

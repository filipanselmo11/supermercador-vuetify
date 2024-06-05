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
  // console.log('Email: ', email.value);
  // console.log('Password: ', password.value);
  router.push('/dashboard')
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
    <h2 class="text-h2">Supermercado Vuetify</h2>
  </div>
  <v-row no-gutters class="mt-12">
    <v-col>
      <Alert v-show="valid" text="por favor preencha os campos" title="Erro" type="error"></Alert>
      <LoginForm v-model:valid="valid" v-model:email="email" v-model:password="password" @login="fazerLogin">
      </LoginForm>
      <span class="d-flex justify-center">Não tem conta ? <a
          class="ml-3"
          href="/cadastro">Clique aqui para criar uma</a></span>
    </v-col>
  </v-row>
</template>

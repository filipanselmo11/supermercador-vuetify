<script lang="ts" setup>
import { ref } from 'vue';
import CadastroForm from '../components/CadastroForm.vue';
import { useRouter } from 'vue-router';

const nome = ref('');
const email = ref('');
const password = ref('');
const valid = ref(false);
const router = useRouter();

const fazerCadastro = () => {
  // console.log('Nome ', nome.value);
  // console.log('Email ', email.value);
  // console.log('Password ', password.value);
  router.go(-1);
}

</script>

<template>
  <div class="d-flex justify-center mt-15">
    <h2 class="text-h2">Supermercado Vuetify</h2>
  </div>
  <v-row no-gutters class="mt-12">
    <v-col>
      <CadastroForm
        v-model:valid="valid"
        v-model:nome="nome"
        v-model:email="email"
        v-model:password="password"
        @cadastrar="fazerCadastro"
      />
    </v-col>
  </v-row>
</template>

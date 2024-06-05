<script lang="ts" setup>
import TextField from './TextField.vue';
import Button from './Button.vue';

const props = defineProps<{
  nome: string,
  email: string,
  password: string,
  valid: boolean
}>();

const emit = defineEmits(['cadastrar', 'update:nomeValue', 'update:emailValue', 'update:passwordValue', 'update:validValue']);

const updateNomeValue = (event) => {
  emit('update:nomeValue', event.target.value);
}

const updateEmailValue = (event) => {
  emit('update:emailValue', event.target.value);
}

const updatePasswordValue = (event) => {
  emit('update:passwordValue', event.target.value);
}

const updateValidValue = (event) => {
  emit('update:validValue', event.target.value);
}

const realizarCadastro = () => {
  emit('cadastrar');
}

</script>

<template>
  <v-form
    :value="props.valid"
    @update:value="updateValidValue">
      <v-row>
        <v-col cols="12">
          <TextField
            :value="props.nome"
            @input="updateNomeValue"
            label="Nome"
            placeholder="Digite seu nome"
            type="text"
          />
        </v-col>
        <v-col cols="12">
          <TextField
            :value="props.email"
            @input="updateEmailValue"
            label="Email"
            placeholder="usuario@email.com"
            type="email"
          />
        </v-col>
        <v-col cols="12">
          <TextField
            :value="props.password"
            @input="updatePasswordValue"
            label="Password"
            placeholder="Digite seu password"
            type="password"
          />
        </v-col>
        <v-col cols="12">
          <Button
            @click="realizarCadastro"
            textButton="Realizar Cadastro"
            size="large"
          />
        </v-col>
      </v-row>
  </v-form>
</template>

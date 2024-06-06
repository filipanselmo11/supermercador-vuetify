<script lang="ts" setup>
import { ref, watchEffect, defineProps, defineEmits } from 'vue';
import TextField from './TextField.vue';
import Button from './Button.vue';
const props = defineProps<{
  email: string,
  password: string,
  valid: boolean
}>();

// const loginFields = ref({
//   email: props.email,
//   password: props.password,
//   valid: props.valid
// });

const emailLocal = ref(props.email);
const passwordLocal = ref(props.password);
const validLocal = ref(props.valid);

// watchEffect(() => {
//   loginFields.value.email = props.email,
//   loginFields.value.password = props.password,
//   loginFields.value.valid = props.valid
// });

watchEffect(() => {
  emailLocal.value = props.email;
});

watchEffect(() => {
  passwordLocal.value = props.password;
});

watchEffect(() => {
  validLocal.value = props.valid;
});


const emit = defineEmits(['login', 'update:emailValue', 'update:passwordValue', 'update:validValue']);

watchEffect(() => {
  if (emailLocal.value !== props.email) {
    emit('update:emailValue', emailLocal.value);
  }
});

watchEffect(() => {
  if (passwordLocal.value !== props.password) {
    emit('update:passwordValue', passwordLocal.value);
  }
});

watchEffect(() => {
  if (validLocal.value !== props.valid) {
    emit('update:validValue', emailLocal.value);
  }
});


const realizarLogin = () => {
  emit('login');
}

</script>

<template>
  <v-form v-model="validLocal">
    <v-container>
      <v-row>
        <v-col cols="12">
          <TextField
            v-model="emailLocal"
            label="Email"
            placeholder="fulano@email.com"
            type="email"
          />
        </v-col>
        <v-col cols="12">
          <TextField
            v-model="passwordLocal"
            label="Senha"
            placeholder="*****"
            type="password" />
        </v-col>
        <v-col cols="12">
          <Button
            @click="realizarLogin"
            textButton="Realizar Login"
            size="large" />
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

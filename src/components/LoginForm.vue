<script lang="ts" setup>
import TextField from './TextField.vue';
import Button from './Button.vue';
const props = defineProps<{
  email: string,
  password: string,
  valid: boolean
}>();
const emit = defineEmits(['login', 'update:emailValue', 'update:passwordValue', 'update:validValue']);

const updateEmailValue = (event) => {
  emit('update:emailValue', event.target.value)
}

const updatePasswordValue = (event) => {
  emit('update:passwordValue', event.target.value)
}

const updateValidValue = (event) => {
  emit('update:validValue', event.target.value)
}

const realizarLogin = () => {
  emit('login')
}

</script>

<template>
  <v-form :value="props.valid" @update:value="updateValidValue">
    <v-container>
      <v-row>
        <v-col cols="12">
          <TextField
            :value="props.email"
            @input="updateEmailValue"
            label="Email"
            placeholder="fulano@email.com"
            type="email"
          />
        </v-col>
        <v-col cols="12">
          <TextField
            :value="props.password"
            @input="updatePasswordValue"
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

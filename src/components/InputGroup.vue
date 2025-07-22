<template>
  <div class="fixed-center-left
  q-gutter-md
  q-pa-md
  bg-white
  text-black
  q-mt-md
  q-mb-md
  q-mx-md
  q-px-md
  q-py-sm
  q-shadow-3
  q-pa-md
  border-radius-lg">
    <q-item-label class="text-subtitle1
    text-black
    ">Motorista</q-item-label>
    <q-input standout bottom-slots v-model="text" label="Label" counter maxlength="12" :dense="dense">

      <template v-slot:append>
        <q-icon v-if="text !== ''" name="close" @click="text = ''" class="cursor-pointer" />
        <q-icon name="schedule" />
      </template>

      <template v-slot:after>
        <q-btn color="primary" label="Salvar" @click="submit" />
      </template>
    </q-input>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const name = ref('')
function submit() {
  console.log(name.value)
}
</script>

<!--
  - scoped: usado para dizer que o style é desse componente
-->
<style lang="scss" scoped></style>

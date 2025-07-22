<template>
  <q-input
    outlined
    dense
    :label="label"
    :model-value="modelValue"
    @update:model-value="val => $emit('update:modelValue', val)"
    :type="type"
    :rules="rules"
    :mask="type === 'time' ? '##:##' : undefined"
    fill-mask
  >
  </q-input>
</template>

<script setup>
defineProps({
  label: String,
  modelValue: String,
  type: {
    type: String,
    default: 'date' // Pode ser 'date' ou 'time'
  },
  rules: {
    type: Array,
    default: () => []
  }
});

defineEmits(['update:modelValue']);
</script>

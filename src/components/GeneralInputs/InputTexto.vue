<template>
  <q-input
    outlined
    dense
    :label="label"
    :model-value="modelValue"
    @update:model-value="val => $emit('update:modelValue', val)"
    :type="type"
    :rules="rules"
  />
</template>

<script setup>
defineProps({
  label: String,
  modelValue: [String, Number],
  type: {
    type: String,
    default: 'text'
  },
  rules: {
    type: Array,
    default: () => []
  }
});

defineEmits(['update:modelValue']);
</script>

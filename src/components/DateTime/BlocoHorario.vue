<template>
  <div class="q-gutter-md">
    <div class="text-subtitle2">{{ titulo }}</div>
    <TimeInputs v-model="localHorario.entrada" label="Hora Entrada" type="time" />
    <TimeInputs v-model="localHorario.saida" label="Hora Saída" type="time" />
    <!-- Campos de intervalo (opcionais) -->
    <InputDataHora v-if="mostrarIntervalo" v-model="localHorario.intervaloManha" label="Intervalo Manhã" type="time" />
    <InputDataHora v-if="mostrarIntervalo" v-model="localHorario.intervaloTarde" label="Intervalo Tarde" type="time" />
  </div>
</template>

<script setup>
import { reactive, watch } from 'vue';
import TimeInputs from './TimeInputs.vue';
import InputDataHora from './TimeInputs.vue';

const props = defineProps({
  titulo: String,
  horario: Object,
  mostrarIntervalo: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['update:horario']);

// Criamos uma cópia reativa local do horário recebido
const localHorario = reactive({ ...props.horario });

// Sempre que o local for alterado, emitimos a mudança pro pai
watch(
  localHorario,
  (novo) => {
    emit('update:horario', { ...novo });
  },
  { deep: true }
);

// Se o pai atualizar a prop, atualizamos a cópia local
watch(
  () => props.horario,
  (novo) => {
    Object.assign(localHorario, novo);
  },
  { deep: true }
);
</script>

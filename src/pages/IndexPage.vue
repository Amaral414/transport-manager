<template>
  <q-page class="q-pa-md bg-grey-1">
    <q-form @submit="enviarFormulario" class="q-gutter-md">

      <q-card flat bordered class="q-pa-md q-mb-md">
        <!-- Campo: Nome do Motorista -->
        <InputTexto
          label="Nome do Motorista"
          v-model="form.motorista"
        />

        <q-separator/>

        <!-- Campo: Data -->
        <InputDataHora
          label="Data da Viagem"
          type="date"
          v-model="form.data"
        />
        
        <!-- Placa -->
        <InputTexto
          label="Placa do Veículo"
          v-model="form.placa"
        />

        <!-- KM -->
        <div >
          <div class="col">
            <InputTexto
              label="KM Saída"
              v-model="form.kmSaida"
              type="number"
            />
          </div>
        </div>

      <!-- Destino -->
        <InputTexto
          label="Destino"
          v-model="form.destino"
        />
      </q-card>

      <!-- Botão Salvar -->
      <q-btn
        label="SALVAR"
        type="submit"
        color="primary"
        icon="save"
        class="full-width"
        unelevated
      />
    </q-form>
  </q-page>
</template>

<script setup>
import InputTexto from 'components/GeneralInputs/InputTexto.vue';
import InputDataHora from 'components/DateTime/TimeInputs.vue';
import { reactive } from 'vue';

const form = reactive({
  motorista: '',
  data: '',
  placa: '',
  kmSaida: '',
  kmChegada: '',
  destino: '',
  turnoManha: {
    entrada: '',
    saida: ''
  },
  intervalo: {
    intervaloManha: '',
    intervaloTarde: ''
  },
  turnoTarde: {
    entrada: '',
    saida: ''
  }
});

function enviarFormulario() {
  console.log('Form enviado:', form);
  // Aqui vai a lógica de envio, validação ou salvamento local
}
</script>

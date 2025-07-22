<template>
  <q-page class="q-pa-md bg-grey-1">

    <h3>Check-In</h3>

    <q-form @submit="enviarFormulario" class="q-gutter-md">

      <q-card flat bordered class="q-pa-md q-mb-md">
        <!-- Turno da Manhã -->
        <q-card flat bordered class="q-pa-md q-mb-md">

          <div class="text-subtitle2 text-primary">
            <q-icon name="wb_sunny" class="q-mr-sm" />
            Turno da Manhã
          </div>
          <BlocoHorario
            v-model:horario="form.turnoManha"
          />
        </q-card>

        <!-- Intervalo -->
        <q-card flat bordered class="q-pa-md q-mb-md">
          <div class="text-subtitle2 text-indigo-7">
            <q-icon name="coffee" class="q-mr-sm" />
            Intervalos
          </div>
          <BlocoHorario
            v-model:horario="form.intervalo"
            :mostrarIntervalo="true"
          />
        </q-card>

        <!-- Turno da Tarde -->
        <q-card flat bordered class="q-pa-md q-mb-md">
          <div class="text-subtitle2 text-orange-8">
            <q-icon name="nights_stay" class="q-mr-sm" />
            Turno da Tarde
          </div>
          <BlocoHorario
            v-model:horario="form.turnoTarde"
          />
        </q-card>
          <!-- KM -->
          <div >
            <div class="col">
              <InputTexto
                label="KM Chegada"
                v-model="form.kmChegada"
                type="number"
              />
            </div>
          </div>
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
import BlocoHorario from 'components/DateTime/BlocoHorario.vue';
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

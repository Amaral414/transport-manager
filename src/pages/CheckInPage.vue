<template>
  <q-page class="q-pa-md bg-grey-1">
    <h3>Check-In</h3>

    <q-card
      flat
      bordered
      class="q-pa-md q-mb-md"
    >
      <q-expansion-item
        expand-separator
        icon="wb_sunny"
        label="Inicio do dia"
        caption="Dados de começo da viajem"
      >
        <q-card>
          <!-- Componente BlocoHorario -->
          <q-form
            @submit="enviarFormulario"
            class="q-gutter-md"
          >
            <q-card-section class="q-gutter-md">
              <q-input
                type="date"
                outlined
                dense
                label="Data da viagem"
              ></q-input>
              <InputTexto label="KM Saída" v-model="form.kmSaida" type="number" />
              <TimeInputs v-model="form.entrada" label="Hora Entrada" type="time" />
              <TimeInputs v-model="form.saida" label="Saída para o intervalo" type="time" />

            </q-card-section>

            <q-card-section>
              <q-item>
                <q-item-section class="">
                  <q-btn
                    color="primary"
                    label="Salvar"
                    type="submit"
                  />
                </q-item-section>
              </q-item>
            </q-card-section>
          </q-form>
        </q-card>
      </q-expansion-item>
    </q-card>

    <q-card
      flat
      bordered
      class="q-pa-md q-mb-md"
    >
      <q-expansion-item
        expand-separator
        icon="nights_stay"
        label="Turno da Tarde"
        caption="Entrada e saída do turno da tarde"
      >
        <q-card>
          <!-- Componente BlocoHorario -->
          <q-form
            @submit="enviarFormulario"
            class="q-gutter-md"
          >
            <q-card-section class="q-gutter-md">
              <TimeInputs v-model="form.entrada" label="Volta do intervalo" type="time" />
              <TimeInputs v-model="form.saida" label="Término de viajem" type="time" />
              <InputTexto label="KM de chegada" v-model="form.kmSaida" type="number" />
            </q-card-section>

            <q-card-section>
              <q-item>
                <q-item-section class="">
                  <q-btn
                    color="primary"
                    label="Salvar"
                    type="submit"
                  />
                </q-item-section>
              </q-item>
            </q-card-section>
          </q-form>
        </q-card>
      </q-expansion-item>
    </q-card>


      <q-form>
        <!-- KM -->
        <div>
          <div class="col">
          </div>
        </div>
      </q-form>
  </q-page>
    <q-page class="q-pa-md bg-grey-1">
  </q-page>
</template>

<script setup>
import TimeInputs from 'components/DateTime/TimeInputs.vue';
import InputTexto from 'components/GeneralInputs/InputTexto.vue';
import { reactive } from 'vue';

const form = reactive({
  data: '',
  entrada: '',
  saida: '',
  kmSaida: '',
  kmChegada: '',
  intervalo: {
    entradaIntervalo: '',
    saidaIntervalo: ''
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

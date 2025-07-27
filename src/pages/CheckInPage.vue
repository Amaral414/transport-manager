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
        label="Turno da Manhã"
        caption="Dados de inicio do dia"
      >
        <q-card>
          <!-- Componente BlocoHorario -->
          <q-form
            @submit="enviarFormulario"
            class="q-gutter-md"
          >
            <q-card-section>
              <InputTexto label="KM Saída" v-model="form.kmSaida" type="number" />
            </q-card-section>

            <q-card-section>
              <BlocoHorario v-model:horario="form.turnoManha"/>
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
            <q-card-section>
              <BlocoHorario v-model:horario="form.turnoManha"/>
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

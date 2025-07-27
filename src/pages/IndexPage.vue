<template>
  <q-page class="q-pa-md bg-grey-1">
      <!-- Campo: Nova Viajem -->
      <q-card flat bordered class="q-pa-md q-mb-md">
        <q-expansion-item
          expand-separator
          icon="directions_bus"
          label="Nova Viagem"
          caption="Iniciar uma nova viagem"
        >
          <q-card flat bordered class="q-pa-md q-mb-md">
            <q-card-section>
              <q-item>
                <q-item-section>
                  <q-input
                    outlined
                    dense
                    label="Motorista"
                    v-model="dados.motorista"
                  ></q-input>
                </q-item-section>
                <q-item-section>
                  <q-input
                    outlined
                    dense
                    label="Destino"
                    v-model="dados.destino"
                  ></q-input>
                </q-item-section>
                <q-item-section>
                <q-input
                  outlined
                  dense
                  label="Placa"
                  v-model="dados.placa"
                ></q-input>
              </q-item-section>
            </q-item>
          </q-card-section>

          <q-card-actions>
            <q-btn
              label="Iniciar Viagem"
              color="primary"
              @click="enviarNome"
              class="full-width"
            />
          </q-card-actions>

          </q-card>
        </q-expansion-item>

        <q-separator></q-separator>

        <!-- Campo: Viajens anteriores -->
        <q-expansion-item
          expand-separator
          icon="view_timeline"
          label="Histórico de Viagens"
          caption="Visualizar e editar informações de viajens anteriores"
        >
          <q-card>
            <q-card-section>
              <q-item>
                <q-item-section class="">
                  <q-btn
                    :to="'checkin/dashboard'"
                    color="primary"
                    label="Visualizar" />
                </q-item-section>
              </q-item>
            </q-card-section>
          </q-card>
        </q-expansion-item>
        <q-separator></q-separator>
      </q-card>
  </q-page>
</template>

<script setup>
import { reactive } from 'vue';
//import { ref } from 'vue';
//import {useRouter} from 'vue-router';


const dados = reactive({
  motorista: '',
  destino: '',
  placa: '',
});
//const router = useRouter();

function enviarNome() {
  // Aqui você pode implementar a lógica para enviar o formulário
  console.log('Formulário enviado:', dados.destino, dados.motorista, dados.placa);

//  router.push({
//    path: `/checkin/${motorista.value}`
//  });
}

</script>

<template>
  <!-- Painel principal do topo-->
  <div>
   </div>


  <!-- Cartão DASHBOARD-->
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card" flat bordered style="width: 100%;">
      <q-card-section horizontal>
        <q-card-section class="q-pt-xs">
          <div class="text-h5 q-mt-sm q-mb-xs">OPERACIONAL</div>
          <div class="text-caption text-grey">
            Atualizar de dados de viajem
          </div>
        </q-card-section>
      </q-card-section>

      <q-separator />

      <q-card-actions>
        <q-btn to="/operations" flat color="primary">
          ENTRAR
        </q-btn>
      </q-card-actions>
    </q-card>


  </div>

  <!-- Segundo cartão de informação-->
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card
    class="my-card"
    flat
    bordered
    style="width: 100%;"
    >
      <q-card-section horizontal>
        <q-card-section class="q-pt-xs">
          <div class="text-h5 q-mt-sm q-mb-xs">DASHBOARD</div>
          <div class="text-caption text-grey">
            Informações de viajens
          </div>
          <div class="text-caption text-grey">
          </div>
        </q-card-section>
      </q-card-section>

      <q-separator />

      <q-card-actions>
        <q-btn to="/operations/dashboard" flat color="primary">
          VISUALIZAR
        </q-btn>
      </q-card-actions>
    </q-card>
  </div>


</template>

<script setup>
</script>

<style></style>

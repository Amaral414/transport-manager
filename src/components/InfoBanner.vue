<template>
  <div class="banner-container">
    <div class="banner">
      <div>
        <strong>Ordem de serviço:</strong> {{ osData.numero }}<br>
        <strong>Cliente:</strong> {{ osData.nomeCliente }}
      </div>
      <div class="botoes">
        <button @click="modoEdicao = true; mostrarModal = true">Editar</button>
        <button @click="modoEdicao = false; mostrarModal = true">Mais detalhes</button>
      </div>
    </div>

    <!-- Modal -->
    <div v-if="mostrarModal" class="overlay">
      <div class="modal">
        <div class="modal-header">
          <h3>{{ modoEdicao ? 'Editar OS' : 'Detalhes da OS' }}</h3>
          <button class="fechar" @click="mostrarModal = false">X</button>
        </div>

        <div class="modal-body">
          <div v-if="modoEdicao">
            <!-- Inputs para edição -->
            <label>Viajante: <input v-model="dadosEdit.viajante" /></label>
            <label>Nº OS: <input v-model="dadosEdit.numero" /></label>
            <label>Cliente: <input v-model="dadosEdit.nomeCliente" /></label>
            <label>Empresa: <input v-model="dadosEdit.empresa" /></label>
            <label>Local de início: <input v-model="dadosEdit.localInicio" /></label>
            <label>Destino final: <input v-model="dadosEdit.destinoFinal" /></label>
            <label>Detalhes: <input v-model="dadosEdit.detalhes" /></label>
            <label>Partida: <input v-model="dadosEdit.partida" /></label>
            <label>Chegada: <input v-model="dadosEdit.chegada" /></label>
            <label>Refeição: <input v-model="dadosEdit.refeicao" /></label>
            <label>Intrajornada: <input v-model="dadosEdit.intrajornada" /></label>
            <label>Abastecimento: <input v-model="dadosEdit.abastecimento" /></label>
            <label>Status: <input v-model="dadosEdit.status" /></label>
            <label>Observações: <input v-model="dadosEdit.observacoes" /></label>
          </div>

          <div v-else>
            <!-- Visualização -->
            <p><strong>Viajante:</strong> {{ dadosEdit.viajante }}</p>
            <p><strong>Nº OS:</strong> {{ dadosEdit.numero }}</p>
            <p><strong>Cliente:</strong> {{ dadosEdit.nomeCliente }}</p>
            <p><strong>Empresa:</strong> {{ dadosEdit.empresa }}</p>
            <p><strong>Local de início:</strong> {{ dadosEdit.localInicio }}</p>
            <p><strong>Destino final:</strong> {{ dadosEdit.destinoFinal }}</p>
            <p><strong>Detalhes:</strong> {{ dadosEdit.detalhes }}</p>
            <p><strong>Partida:</strong> {{ dadosEdit.partida }}</p>
            <p><strong>Chegada:</strong> {{ dadosEdit.chegada }}</p>
            <p><strong>Refeição:</strong> {{ dadosEdit.refeicao }}</p>
            <p><strong>Intrajornada:</strong> {{ dadosEdit.intrajornada }}</p>
            <p><strong>Abastecimento:</strong> {{ dadosEdit.abastecimento }}</p>
            <p><strong>Status:</strong> {{ dadosEdit.status }}</p>
            <p><strong>Observações:</strong> {{ dadosEdit.observacoes }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, watch } from 'vue'

// Recebe os dados como props
const props = defineProps({
  osData: {
    type: Object,
    required: true
  }
})

const mostrarModal = ref(false)
const modoEdicao = ref(false)

// Cópia local e reativa dos dados recebidos
const dadosEdit = reactive({ ...props.osData })

// Atualiza dados locais se a prop mudar
watch(() => props.osData, (newData) => {
  Object.assign(dadosEdit, newData)
})
</script>

<style scoped>
/* Estilos iguais ao anterior, só manter */
.banner-container {
  margin: 20px;
}

.banner {
  background-color: #c1c1c1;
  padding: 12px 20px;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

.botoes button {
  margin-left: 10px;
  padding: 6px 12px;
  cursor: pointer;
  border: none;
  background: #1976d2;
  color: white;
  border-radius: 5px;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal {
  background: white;
  padding: 20px;
  width: 90%;
  max-width: 600px;
  border-radius: 12px;
  overflow-y: auto;
  max-height: 90%;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.modal-header .fechar {
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
}

.modal-body label {
  display: block;
  margin-bottom: 10px;
  background-color: #ffffff;
}

.modal-body input {
  width: 100%;
  padding: 6px;
  margin-top: 4px;
  margin-bottom: 10px;
}
</style>

<template>
  <div class="q-pa-md">
    <q-input class="bg-primary" v-model="text" :dense="dense">
      <template v-slot:append>
        <button class="border">
          <q-avatar>
            <q-icon name="search" />
          </q-avatar>
        </button>
      </template>
    </q-input>
    <q-table class="shadow-10" title="Informações gerais" :rows="rows" :columns="columns" row-key="name" />
    <div class="botoes">
    </div>
  </div>
</template>

<script>
// Definição das colunas
const columns = [
  {
    name: 'name',
    required: true,
    label: 'Viajante',
    align: 'left',
    field: row => row.name,
    format: val => `${val}`,
    sortable: true
  },
  { name: 'ordemDeServico', align: 'center', label: 'Ordem de Serviço', field: 'ordemDeServico', sortable: true },
  { name: 'nomeDoCliente', align: 'center', label: 'Nome do Cliente', field: 'nomeDoCliente', sortable: true },
  { name: 'empresa', align: 'center', label: 'Empresa', field: 'empresa' },
  { name: 'localDeInicio', align: 'center', label: 'Local (Partida)', field: 'localDeInicio' },
  { name: 'destino', align: 'center', label: 'Destino', field: 'destino' },
  { name: 'detalhes', align: 'center', label: 'Detalhes', field: 'detalhes', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) },
  { name: 'horárioPartida', align: 'center', label: 'Horário (Partida)', field: 'horárioPartida', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) },
  { name: 'horárioChegada', align: 'center', label: 'Horário (Chegada)', field: 'horárioChegada', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) },
  { name: 'intervaloRefeicao', align: 'center', label: 'Intervalo (Refeição)', field: 'intervaloRefeicao', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) },
  { name: 'intervaloIntrajornada', align: 'center', label: 'Intervalo (Jornadas)', field: 'intervaloIntrajornada', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) },
  { name: 'abastecimento', align: 'center', label: 'Abastecimento', field: 'abastecimento', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) },
  { name: 'status', align: 'center', label: 'Status', field: 'status', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) },
  { name: 'observacoes', align: 'left', label: 'Observacoes', field: 'observacoes', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) },
]
/*
  Lógica para as colunas
  - Repetição para o número de usuários

*/
const rows = [
  //  Informações cadastradas
  {
    name: 'Jhordana',
    ordemDeServico: '0659/2025',
    nomeDoCliente: 'Marina Iara Espina',
    empresa: 'TRANSTUR',
    localDeInicio: 'Porto Alegre',
    destino: 'São Gabriel',
    detalhes: '- - - ',
    horárioPartida: '26/06/2025 08:45',
    horárioChegada: '26/06/2025 14:25:00',
    intervaloRefeicao: 'Sim',
    intervaloIntrajornada: 'sim',
    abastecimento: 'Sem passageiro',
    status: 'Concluidas',
    observacoes: 'meia diária sem necessidade de intervalo para refeições inicio as 13:00 e fim as 17:45'
  }, {
    name: 'Gabriel ',
    ordemDeServico: '0689/2025',
    nomeDoCliente: 'Gabriel da Silva Amaral',
    empresa: 'TRANSTUR',
    localDeInicio: 'Porto Alegre',
    destino: 'Cachoeira do Sul',
    detalhes: '- - - ',
    horárioPartida: '24/09/2025 09:30',
    horárioChegada: '24/09/2025 14:25',
    intervaloRefeicao: 'Sim',
    intervaloIntrajornada: 'Sim',
    abastecimento: 'Sem passageiro',
    status: 'Pendente',
    observacoes: '- - -'
  }, {
    name: 'Ismael',
    ordemDeServico: '0764/2025',
    nomeDoCliente: 'Ismael Paz Amaral',
    empresa: 'TRANSTUR',
    localDeInicio: 'Cachoeirinha',
    destino: 'Porto Alegre',
    detalhes: '- - - ',
    horárioPartida: '12/05/2025 16:00',
    horárioChegada: '12/05/2025 18:42',
    intervaloRefeicao: 'Sim',
    intervaloIntrajornada: 'Não',
    abastecimento: 'Sem passageiro',
    status: 'Pendente',
    observacoes: '- - - '
  },
  {
    name: 'Pedro',
    ordemDeServico: '0764/2025',
    nomeDoCliente: 'Marcia Albuquerque',
    empresa: 'TRANSTUR',
    localDeInicio: 'Porto Alegre',
    destino: 'Canoas',
    detalhes: '- - - ',
    horárioPartida: '25/10/2025 19:30',
    horárioChegada: '25/10/2025 21:20',
    intervaloRefeicao: 'Sim',
    intervaloIntrajornada: 'Não',
    abastecimento: 'Sem passageiro',
    status: 'Pendente',
    observacoes: '- - - '
  }
]

export default {
  setup() {
    return {
      columns,
      rows
    }
  }
}
</script>

<template>
  <q-item
    clickable
    class="text-white"
    tag="a"
    :to="props.link"
  >
    <q-item-section
    v-if="props.icon"
    avatar
    >
      <q-icon :name="props.icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ props.title }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script setup>
  defineOptions({
    name: 'NavLink'
  })

  const props = defineProps({
    title: {
      type: String,
      required: true
    },

    icon: {
      type: String,
      default: ''
    },

    link: {
      type: String,
      required: true
    }
  })
</script>

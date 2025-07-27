<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />
        <div class="absolute-center">
          <q-toolbar-title>
            <q-avatar>
              <q-icon name="directions_bus" />
            </q-avatar>
            Gerenciador
          </q-toolbar-title>
        </div>

      </q-toolbar>
    </q-header>

    <q-drawer
    class="bg-primary text-white"
    show-if-above
    v-model="leftDrawerOpen"
    bordered
    >
      <!-- drawer content -->
      <q-list>
        <q-item>
          <q-item-section>
            <q-item-label class="text-h6">Menu</q-item-label>
          </q-item-section>
          <q-item-section side>
            <q-btn flat round icon="close" @click="leftDrawerOpen = false" />
          </q-item-section>
        </q-item>

      </q-list>

      <NavLink
        v-for="link in navLinks"
        :key="link.name"
        v-bind="link"
      />

    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <div>Title</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

<script setup>
  import { ref } from 'vue'
  import NavLink from 'src/components/Nav/NavLink.vue'

  const navLinks = [
   {
      title: 'Início',
      caption: 'Informações gerais',
      icon: 'home',
      to: '/'
    },
    {
      title: 'Check-in',
      caption: 'Gerenciar operações',
      icon: 'directions_bus',
      to: '/checkin'
    },
    {
      title: 'Dashboard',
      caption: 'Informações gerais',
      icon: 'dashboard',
      to: '/checkin/dashboard'
    }
  ]

  const leftDrawerOpen = ref(false)

  function toggleLeftDrawer () {
    leftDrawerOpen.value = !leftDrawerOpen.value
  }
</script>

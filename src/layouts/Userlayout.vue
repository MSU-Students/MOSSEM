<template>
  <q-layout>
    <q-header reveal class="bg-transparent text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
          </q-avatar>
          Landing Page
        </q-toolbar-title>
        <q-space />
        <q-btn
          icon="person"
          flat
          color="orange"
          label="Sining Pananadem"
          text-color="white"
          to="repositorypage">
        </q-btn>

        <q-btn icon="person" flat label="Login" text-color="white" to="login">
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-footer class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
          </q-avatar>
          Landing Page
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>

    <q-page-container class="user-layout">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {};
</script>

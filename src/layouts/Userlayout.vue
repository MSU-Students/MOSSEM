<template>
  <q-layout view="hHh lpR fff">
    <q-header class="backdrop-filter text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar style="font-size: 4.3em">
            <img src="~assets/logo/splogo.png" />
          </q-avatar>
          Home
        </q-toolbar-title>
        <q-space />
        <q-btn
          icon="dashboard"
          flat
          dense
          style="font-size: 1.2em"
          color="orange"
          label="Sining Pananadem"
          text-color="white"
          to="Dances"
        >
        </q-btn>

        <q-btn
          style="font-size: 1.2em"
          icon="person"
          flat
          label="Login"
          text-color="white"
          to="login"
        >
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-footer
      class="backdrop-filter"
    >
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="~assets/logo/splogo.png" />
          </q-avatar>
          Home
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

<style scoped>
.backdrop-filter {
  -webkit-backdrop-filter: blur(7px);
  backdrop-filter: blur(7px);
  background-color: #fe7a1500;
}
</style>

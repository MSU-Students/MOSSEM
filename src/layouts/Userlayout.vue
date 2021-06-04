<template>
  <q-layout view="hhh lpR fff" >

    <q-header reveal class="bg-transparent text-orange" height-hint="98">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>
          Landing Page
        </q-toolbar-title>
      </q-toolbar>

      <!-- <q-tabs align="left" >
        <q-route-tab 
        to="/page1" 
        label="Page One" 
        
        />
        <q-route-tab to="/page2" label="Page Two" />
        <q-route-tab to="/page3" label="Page Three" />
      </q-tabs> -->
      <!-- <q-card-actions>
          <q-btn
            class="full-width"
            label="login"
            color="white"
            text-color="red"
            to="/"
          >
          </q-btn>
        </q-card-actions> -->
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>
          Landing Page
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>
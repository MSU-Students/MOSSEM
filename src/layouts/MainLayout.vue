<template>
  <q-layout>
    <!-- header -->
    <q-header class="bg-red">
      <q-toolbar>
        <q-btn icon="menu" flat round size="md"> </q-btn>
        <!-- Title -->
        <q-toolbar-title>Log in</q-toolbar-title>
        <!-- Menu -->
          <q-btn 
            v-if="this.$route.name != 'login-page'"
            icon="person" 
            label="Account" 
            color="white" 
            text-color="red">
        <q-menu fit :offset="[0, 10]">
            <q-btn
              class="full-width"
              label="logout"
              color="red"
              text-color="white"
              to="/login"
            >
            </q-btn>
          </q-menu>
        </q-btn>
        <!-- menu end -->
      </q-toolbar>
    </q-header>
    This Is MainLayout
    <q-page-container>
      <router-view> </router-view>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {};
</script>

<style></style>

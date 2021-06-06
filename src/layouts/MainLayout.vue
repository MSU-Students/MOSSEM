<template>
  <q-layout>
    <!-- header -->
    <q-header class="bg-red">
      <q-toolbar>
        <q-btn flat @click="drawer = !drawer" round dense icon="menu"> </q-btn>
        <!-- Title -->
        <q-toolbar-title>Log in</q-toolbar-title>
        <!-- Menu -->
        <q-btn
          v-if="this.$route.name != 'login-page'"
          icon="person"
          label="Account"
          color="white"
          text-color="red"
        >
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

        <q-btn
          v-if="this.$route.name != 'login-page'"
          icon="person"
          label="Home"
          color="white"
          text-color="red"
          to="/"
        >
        </q-btn>
        <!-- menu end -->
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="drawer"
      show-if-above
      :mini="miniState"
      @mouseover="miniState = false"
      @mouseout="miniState = true"
      :width="200"
      :breakpoint="500"
      bordered
      content-class="bg-red"
    >
      <q-scroll-area class="fit">
        <q-list padding>
          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="inbox"               />
            </q-item-section>

            <q-item-section>
              Videos
            </q-item-section>
          </q-item>

          <q-separator />

          <q-item active clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="star" />
            </q-item-section>

            <q-item-section>
              Songs
            </q-item-section>
          </q-item>

          <q-separator />

          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="send" />
            </q-item-section>

            <q-item-section>
              Instruments
            </q-item-section>
          </q-item>

          <q-separator />

          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="drafts" />
            </q-item-section>

            <q-item-section>
              Pictures
            </q-item-section>
          </q-item>
          <q-separator />
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view> </router-view>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      miniState: true
    };
  }
};
</script>

<style></style>

<template>
  <q-layout view="hHh LpR fFf">
    <!-- header -->
    <q-header v-if="this.$route.name != 'login-page'" elevated class="bg-red">
      <q-img
        src="~assets/Tribal Pattern.jpg"
        :style="
          $q.screen.lt.md ? 'height: 100vh' : 'height: calc(17.5vh - 50px);'
        "
      >
        <q-toolbar>
          <q-btn flat @click="drawer = !drawer" round dense icon="menu">
          </q-btn>
          <!-- Title -->
          <q-toolbar-title>Sining Pananadem</q-toolbar-title>
          <!-- Menu -->
          <q-btn
            outline 
            v-if="this.$route.name != 'login-page'"
            icon="person"
            label="Account"
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
            flat
            v-if="this.$route.name != 'login-page'"
            icon="home"
            label="Home"
            color="orange"
            text-color="white"
            to="/"
          >
          </q-btn>
          <!-- menu end -->
        </q-toolbar>
      </q-img>
    </q-header>

    <q-drawer
      v-if="this.$route.name != 'login-page'"
      v-model="drawer"
      show-if-above
      :mini="miniState"
      @mouseover="miniState = false"
      @mouseout="miniState = true"
      :width="250"
      :breakpoint="500"
      elevated
    >
      <q-scroll-area class="fit">
        <q-img
          class="absolute-top"
          src="~assets/Tribal Pattern.jpg"
          :style="
            $q.screen.lt.md ? 'height: 100vh' : 'height: calc(99vh - 50px)'
          "
        >
          <div
            class="absolute-bottom "
            style="height: calc(100% - 0px); margin-top: 0px; border-right: 0px solid #ddd"
          >
            <q-list padding>
              <q-item dense to="" clickable v-ripple>
                <q-item-section avatar>
                   <q-img style="height: 70px; width: 70px" src="~assets/icon.png" />
                </q-item-section>

                <q-item-section class="text-h6"> 
                  Dances
                </q-item-section>
              </q-item>

              <q-separator />

              <q-item active clickable v-ripple>
                <q-item-section avatar>
                   <q-img style="height: 70px; width: 70px" src="~assets/icon.png" />
                </q-item-section>

                <q-item-section class="text-h6">
                  Songs
                </q-item-section>
              </q-item>

              <q-separator />

              <q-item clickable v-ripple>
                <q-item-section avatar class="justify-start">
                   <q-img style="height: 70px; width: 70px" src="~assets/icon.png" />
                </q-item-section>

                <q-item-section  class="text-h6">
                  Instruments
                </q-item-section>
              </q-item>

              <q-separator />

              <q-item clickable v-ripple>
                <q-item-section avatar>
                   <q-img style="height: 70px; width: 70px" src="~assets/icon.png" />
                </q-item-section>

                <q-item-section class="text-h6">
                  Pictures
                </q-item-section>
              </q-item>
              <q-separator />
            </q-list>
          </div>
        </q-img>
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

<style scoped></style>

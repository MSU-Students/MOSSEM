<template>
  <q-layout class="bg-img" view="hHh LpR fFf">
    <!-- header -->
    <q-header
      v-if="this.$route.name != 'login-page'"
      elevated
      class="header-bg"
    >
      <q-toolbar>
        <q-btn flat @click="drawer = !drawer" round dense icon="menu" />

        <!-- Title -->
        <q-avatar size="42px">
          <img src="~assets/logo/splogo.png" />
        </q-avatar>

        <q-toolbar-title>Sining Pananadem</q-toolbar-title>
        <q-input
          dark
          dense
          outline
          standout
          label="Search"
          v-model="text"
          input-class="text-right"
          class="q-mr-md"
        >
          <template v-slot:append>
            <q-icon v-if="text === ''" name="search" />
            <q-icon
              v-else
              name="clear"
              class="cursor-pointer"
              @click="text = ''"
            />
          </template>
        </q-input>
        <!-- Menu -->
        <q-btn
          outline
          v-if="this.$route.name != 'login-page'"
          icon="person"
          label="Account"
          text-color="white"
        >
          <q-menu fit :offset="[0, 10]">
            <q-btn
              class="full-width"
              label="logout"
              color="primary"
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
      <q-scroll-area class="fit drawer-bg text-white">
        <div>
          <q-list padding>
            <q-item
              dense
              to="Dances"
              clickable
              v-ripple
              @click="link = 'Dances'"
              active-class="my-menu-link"
            >
              <q-item-section avatar>
                <q-img
                  style="height: 48px; width: 38px"
                  src="~assets/logo/icon.png"
                />
              </q-item-section>

              <q-item-section class="text-h6">
                Dances
              </q-item-section>
            </q-item>

            <q-separator />

            <q-item
              to="Songs"
              clickable
              v-ripple
              @click="link = 'Songs'"
              active-class="my-menu-link"
            >
              <q-item-section avatar>
                <q-img
                  style="height: 48px; width: 38px"
                  src="~assets/logo/icon.png"
                />
              </q-item-section>

              <q-item-section class="text-h6">
                Songs
              </q-item-section>
            </q-item>

            <q-separator />

            <q-item
              to="Instruments"
              clickable
              v-ripple
              @click="link = 'Instruments'"
              active-class="my-menu-link"
            >
              <q-item-section avatar>
                <q-img
                  style="height: 48px; width: 38px"
                  src="~assets/logo/icon.png"
                />
              </q-item-section>

              <q-item-section class="text-h6">
                Instruments
              </q-item-section>
            </q-item>

            <q-separator />

            <q-item
              to="Pictures"
              clickable
              v-ripple
              @click="link = 'Pictures'"
              active-class="my-menu-link"
            >
              <q-item-section avatar>
                <q-img
                  style="height: 48px; width: 38px"
                  src="~assets/logo/icon.png"
                />
              </q-item-section>

              <q-item-section class="text-h6">
                Pictures
              </q-item-section>
            </q-item>
            <q-separator />
          </q-list>
        </div>
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
      miniState: true,
      link: "Songs",
      link: "Pictures",
      link: "Instruments",
      link: "Dances",
      text: ""
    };
  }
};
</script>

<style scoped>
.my-menu-link {
  color: orange;
}
.bg-img {
  background-image: url("~assets/background/BackgroundSarimanok.png");
  padding: 0px;
}
.header-bg {
  background-image: url("~assets/background/TribalPattern.jpg");
  background-position: center;
  box-shadow: 0 0 0 1000px rgb(0 0 0 / 45%) inset;
}
.drawer-bg {
  background-image: url("~assets/background/TribalPattern.jpg");
  background-position-y: center;
  box-shadow: 0 0 0 1000px rgb(0 0 0 / 45%) inset;
}
</style>

<template>
  <q-layout view="hHh lpR fff">
    <transition appear enter-active-class="animated fadeInDown">
      <q-header
        v-if="this.$route.name != 'login-page'"
        class="backdrop-filter text-white"
      >
        <div :class="$q.screen.lt.md ? '' : 'row'">
          <div
            :class="
              $q.screen.lt.md
                ? 'col text-center text-h4 text-white text-weight-bolder q-pl-md q-pt-md'
                : 'col text-left text-h4 text-white text-weight-bolder q-pl-md q-pt-lg'
            "
          >
            <q-icon size="xl">
              <img src="~assets/logo/splogo.png" />
            </q-icon>
            MOSSEM
          </div>
          <div
            :class="
              $q.screen.lt.md ? 'col q-pl-md q-pt-md' : 'col q-pl-md q-pt-lg'
            "
          >
            <q-toolbar>
              <q-toolbar-title> </q-toolbar-title>
              <q-btn
                icon="dashboard"
                outline
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
          </div>
        </div>
      </q-header>
    </transition>

    <q-footer v-if="this.$route.name != 'login-page'" class="backdrop-filter">
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
      <transition appear leave-active-class="animated fadeOut">
        <router-view />
      </transition>
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

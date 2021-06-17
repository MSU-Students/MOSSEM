<template>
  <q-page class="flex flex-center bg-img q-px-md">
    <q-card
      class="__card shadow-24 text-white flex flex-center"
      style="background: linear-gradient(to top right, #fe7a15 55%, #d9d9d9 110%);"
      :class="$q.screen.lt.md ? '' : 'row'"
      :style="$q.screen.lt.md ? '' : 'width: 800px;'"
    >
      <q-img
        transition = "slide-left"
        v-if="!$q.screen.lt.md"
        src="~assets/SP Login1.jpg"
        class="col-6 login-photo"
      />

      <div class="q-px-xl" :class="$q.screen.lt.md ? ' q-pa-xl' : 'login-field'">
        <q-img
        transition="slide-up"
        style="max-width: 400px; height: 170px;"
        src="~assets/SP logo1.png"
      />
        <div class="text-center text-h3">
          Login
        </div>

        <q-card-section class='q-gutter-y-md'>
          <q-input
            v-model="user.username"
            label="Username"
            bg-color="white"
            color="red"
            rounded
            standout="bg-primary text-white"
          >
            <template v-slot:prepend>
              <q-icon name="person" />
            </template>
          </q-input>

          <q-input
            v-model="user.password"
            label="Password"
            bg-color="white"
            color="red"
            :type="hidePassword ? '' : 'password'"
            rounded
            standout="bg-primary text-white"
          >
            <template v-slot:prepend>
              <q-icon name="lock" />
            </template>

            <template v-slot:append>
              <q-icon
                :name="hidePassword ? 'visibility' : 'visibility_off'"
                class="cursor-pointer"
                @click="hidePassword = !hidePassword"
              />
            </template>
          </q-input>
        </q-card-section>

        <q-card-actions>
          <q-btn
            class="full-width"
            label="login"
            color="white"
            text-color="primary"
            to="/Dances"
          >
          </q-btn>
        </q-card-actions>
      </div>
    </q-card>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      user: {},
      hidePassword: false
    };
  }
};
</script>

<style scoped>
.login-photo {
  height: 100%;
  width: 50%;
}
.login-field {
  height: 100%;
  width: 50%;
}
.bg-img {
 Background-image: url("~assets/Background.jpg");
}
</style>

<template>
  <q-page class="flex flex-center bg-img q-px-md">
    <q-card
      class="shadow-24 text-white flex flex-center Glassmorphismlogin"
      style="background: linear-gradient(to top right, #fe7a15 55%, #d9d9d9 110%);"
      :class="$q.screen.lt.md ? '' : 'row'"
      :style="$q.screen.lt.md ? '' : 'width: 800px;'"
    >
      <transition
        appear
        enter-active-class="animated fadeInRight"
      >
      <q-img
        v-if="!$q.screen.lt.md"
        src="~assets/background/splogincover.jpg"
        class="col-6 login-photo"
              />
      </transition>

      <div
        class="q-px-xl"
        :class="$q.screen.lt.md ? ' q-pa-xl' : 'login-field'"
      >
        <transition appear enter-active-class="animated fadeInUp">
          <q-img
            style="max-width: 400px; height: 170px;"
            src="~assets/logo/splogo1.png"
          />
        </transition>
        <div class="text-center text-h3">
          Login
        </div>

        <q-card-section class="q-gutter-y-md">
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
            rounded
            icon="login"
            class="full-width"
            label="login"
            color="white"
            text-color="primary"
            to="/Homeadmin"
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
  background-image: url("~assets/background/loginbackground.jpg");
  height: 100%;
  width: 100%;
}

.Glassmorphismlogin
{
backdrop-filter: blur(5px);
-webkit-backdrop-filter:blur(5px);
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
background-image: linear-gradient(155deg, rgba(255, 255, 255, 0.36) 0%, rgba(255, 255, 255, 0) 100%);
border-bottom: 1.8px solid rgba( 255, 255, 255, 0.79 );
border-right: 1.8px solid rgba( 255, 255, 255, 0.79 );
text-shadow: 2px 2px 10px #000000;
}

</style>

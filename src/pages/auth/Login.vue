<template>
  <q-page class="flex flex-center q-px-md">
    <q-card
      class="__card bg-red text-white flex flex-center "
      :class="$q.screen.lt.md ? '' : 'row'"
      :style="$q.screen.lt.md ? '' : 'width: 800px;'"
    >
      <q-img
        v-if="!$q.screen.lt.md"
        src="~assets/Login Pic.png"
        class="col-6 login-photo"
      />

      <div class="q-px-xl" :class="$q.screen.lt.md ? ' q-pa-xl' : 'login-field'">
        <div class="text-center text-h4">
          This is Login!
        </div>

        <q-card-section class='q-gutter-y-md'>
          <q-input
            v-model="user.username"
            label="Username"
            bg-color="white"
            color="red"
            rounded
            standout="bg-red text-white"
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
            standout="bg-red text-white"
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
            text-color="red"
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
</style>

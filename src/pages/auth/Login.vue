<template>
  <q-page class="fixed-center q-pt-xl">
    <q-card class="__card row bg-red text-white q-pa-xl">
      <div class="col-6">
        <q-card-section>
           <q-img src="~assets/Login Pic.png"
           class="login-photo"
           style="position:relative; right :65px; top:-64px; bottom: 400px"
           />
        </q-card-section>
      </div>

      <div 
        class="col-6"
        style="position:relative; left:40px; top:-64px; bottom: 400px;"

      >
        <div class="text-center text-h4">
          This is Login!
        </div>

        <q-card-section class="q-gutter-y-md">
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
            to="/"
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
.__card {
  height: 85vh;
  width: 750px;
  display: flex;
  align-items: center;
  justify-items: center;
}
.login-photo {
  height: 85vh;
  width: 29vw;   
}
</style>


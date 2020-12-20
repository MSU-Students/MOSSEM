<template>
  <q-page>
    <div class="fullscreen sarimanok-img" :class="$q.screen.lt.md ? '' : 'row'">
      <div v-if="!$q.screen.lt.md" class="col-7" />
      <div class="login col-5 flex flex-center">
        <q-card
          flat
          class="my-card bg-transparent q-pr-xl"
          :class="$q.screen.lt.md ? 'absolute-center q-px-sm' : ''"
          :style="$q.screen.lt.md ? 'width: 400px' : 'width: 450px'"
        >
          <q-card-section class="text-center">
            <!-- <q-img
              src="~assets/citlogo.png"
              style="height: 170px; max-width: 190px"
            /> -->
          </q-card-section>

          <q-card-section class="text-center">
            <div class="text-h3 text-grey-9 text-weight-bold">Mossem</div>
            <div class="text-h5 text-grey-7 text-weight-light q-pt-lg">
              Log in to your account
            </div>
          </q-card-section>
          <q-card-section class="q-gutter-md">
            <q-input            
              label="ID Number"
              mask="#########"
              color="red"
            >
              <template v-slot:append>
                <q-icon name="person" />
              </template>
            </q-input>
            <q-input
              label="Password"
              v-model="password"
              :type="isPwd ? 'password' : 'text'"
              hint="Password with toggle"
              color="red"
            >
              <template v-slot:append>
                <q-icon
                  :name="isPwd ? 'visibility_off' : 'visibility'"
                  class="cursor-pointer"
                  @click="isPwd = !isPwd"
                />
              </template>
            </q-input>
          </q-card-section>
          <q-card-actions class="q-mx-sm q-pt-md" align="center">
            <q-btn
              class="full-width"
              label="Login"
              color="red"
              size="lg"
              to="/s/home"
              push
            />
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "LoginPage",

  data() {
    return {
      password: "",
      isPwd: true
    };
  }
};
</script>

<style scoped>
.sarimanok-img {
  background-image: url("../../assets/sarimanokfullnew.png");
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;
}
</style>

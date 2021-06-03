<template>
  <q-page>
    <div class="q-gutter-md">
      <div class="row justify-between">
        <q-parallax
          src="~assets/SP logo44(cover).jpg"
          class="cover-photo"
          :height="screenHeight"
        >
          <h1 class="text-white">
            Sining Pananadem
            
          </h1>
        </q-parallax>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      screenHeight: 0
    };
  },
  created() {
      this.screenHeight = screen.height - 107;
      console.log(this.screenHeight)
  }
};
</script>

<style scopes>
.cover-photo {
  height: 100vh;
  width: 100vw;
}
</style>

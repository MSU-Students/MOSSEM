<template>
  <q-scroll-area style="height: 750px; max-width: 3000px;">
    <div class="q-pa-md">
      <div class="row justify-center q-gutter-sm">
        <q-intersection
          v-for="index in 60"
          :key="index"
          transition="scale"
          class="example-item"
        >
          <q-card
            clickable
            v-ripple
            persistent
            transition-show="flip-down"
            transition-hide="flip-up"
            class="q-ma-sm radius"
            @click="showDialog(index)"
          >
            <img src="~assets/background/TribalPattern.jpg" />

            <q-card-section>
              <div class="text-h6">Tribal Pattern #{{ index }}</div>
              <div class="text-subtitle2"></div>
            </q-card-section>
          </q-card>
        </q-intersection>
      </div>

      <q-dialog
        class="shadow-24"
        v-model="showImage"
        transition-show="flip-down"
        transition-hide="flip-up"
        @hide="showImage = false"
      >
        <q-card class="bg-primary text-white">
          <q-btn dense flat icon="close" v-close-popup>
            <q-tooltip content-class="bg-white text-primary">Close</q-tooltip>
          </q-btn>

          <q-card-section>
            <div class="text-h6">Card # {{ description }}</div>
            <div class="text-subtitle2">by John De</div>
          </q-card-section>

          <q-card-section>
            <div class="text-h6">Alert</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            <img
              src="~assets/background/TribalPattern.jpg"
              style="max-width:100%"
            />
          </q-card-section>
        </q-card>
      </q-dialog>
    </div>
  </q-scroll-area>
</template>

<script>
export default {
  data() {
    return {
      showImage: false,
      description: ""
    };
  },
  methods: {
    showDialog(index) {
      this.showImage = true;
      this.description = index;
    }
  }
};
</script>

<style scoped>
.example-item {
  height: 290px;
  width: 290px;
}
</style>

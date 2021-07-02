<template>
  <q-page class="q-px-lg flex flex-center">
    <div class="q-gutter-md">
      <transition appear enter-active-class="animated fadeInRight">
        <q-carousel
          v-model="slide"
          transition-prev="slide-down"
          transition-next="slide-up"
          swipeable
          animated
          control-color="primary"
          navigation
          padding
          arrows
          infinite
          :fullscreen.sync="fullscreen"
          height="310px"
          class=" text-white shadow-24 transparent rounded-borders"
        >
          <template v-slot:navigation-icon="{ active, btnProps, onClick }">
            <q-btn
              v-if="active"
              size="lg"
              icon="home"
              color="yellow"
              flat
              round
              dense
              @click="onClick"
            />
            <q-btn
              v-else
              size="sm"
              :icon="btnProps.icon"
              color="dark"
              flat
              round
              dense
              @click="onClick"
            />
          </template>
          <q-carousel-slide
            v-for="(dances, index) in dancesContent"
            :key="index"
            :name="dances.videoName"
          >
            <div class="q-pa-md">
              <q-video class="absolute-full" :src="dances.video" />
            </div>
          </q-carousel-slide>

          <template v-slot:control>
            <q-carousel-control position="bottom-right" :offset="[18, 18]">
              <q-btn
                push
                round
                dense
                color="white"
                text-color="primary"
                :icon="fullscreen ? 'fullscreen_exit' : 'fullscreen'"
                @click="fullscreen = !fullscreen"
              />
            </q-carousel-control>
          </template>
        </q-carousel>
      </transition>
      <template v-for="(dances, index) in dancesContent">
        <transition
          appear
          enter-active-class="animated fadeInLeft"
          leave-active-class="animated fadeOutRight"
        >
          <q-card
            class="bg-img"
            v-if="dances.videoName == slide"
            :key="index"
            style="width: 80vw"
          >
            <q-card-section>
              <div class="text-h2 text-center text-white">
                {{ dances.videoName }}
              </div>
              <div style="font-size: 1.5em" class=" text-center text-white">
                {{ dances.videoDesc }}
              </div>
            </q-card-section>
          </q-card>
        </transition>
      </template>
    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      slide: "Maranao",
      fullscreen: false,
      dancesContent: [
        {
          video: "https://www.youtube.com/embed/k3_tw44QsZQ?rel=0",
          videoName: "Maranao",
          videoBy: "Matin",
          videoDesc:
            "1Maranao Tribe in particular is known to be a Culture that is maintaining their ethnic identity until now in this modern generation, some of Maranao people know their Culture and they know some of its practices and distinct things, the Culture of the Maranao tribe and  its practices is being passed down from generation to generation to the young Maranaos. "
        },
        {
          video: "https://www.youtube.com/embed/k3_tw44QsZQ?rel=0",
          videoName: "Map",
          videoBy: "Matz",
          videoDesc:
            "2Maranao Tribe in particular is known to be a Culture that is maintaining their ethnic identity until now in this modern generation, some of Maranao people know their Culture and they know some of its practices and distinct things, the Culture of the Maranao tribe and  its practices is being passed down from generation to generation to the young Maranaos. "
        }
      ]
    };
  },
  methods: {
    moveCarousel(newVal, oldVal) {
      console.log(newVal, oldVal);
      this.title = newVal;
    }
  }
};
</script>

<style scoped>
.page-pos {
  position: fixed;
}

.bg-img {
  background-image: url("~assets/background/TribalPatternWithEffect.jpg");
}
</style>

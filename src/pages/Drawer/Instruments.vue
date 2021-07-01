<template>
  <q-page class="q-pa-md ">
    <q-scroll-area style="height: 650px; max-width: 3000px;">
      <div :class="$q.screen.lt.md ? '' : 'row'">
        <template>
          <div class=" col-6 flex flex-center text-center">
            <template v-for="(instrument, index) in instruments">
              <!-- <transition appear enter-active-class="animated fadeInUp"> -->
              <div class="absolute-top text-white text-h2 text-center">
                INSTRUMENTS
              </div>
              <q-card
                v-if="instrument.title == slide"
                :key="index"
                class="abosulute no-shadow bg-transparent"
              >
                <q-card-section class="bg-card" horizontal>
                  <q-card-section class="q-pt-xs text-white">
                    <div class="text-overline">Overline</div>
                    <div
                      class="text-h2 text-white text-capitalize q-mt-sm q-mb-xs"
                    >
                      {{ instrument.title }}
                    </div>
                    <div class="text-subtitle1 text-white">
                      {{ instrument.description }}
                    </div>
                  </q-card-section>
                </q-card-section>
              </q-card>
              <!-- </transition> -->
            </template>
          </div>
          <div class="col-6">
            <transition
              appear
              enter-active-class="animated fadeInRight"
              leave-active-class="animated fadeOutRight"
            >
              <q-carousel
                v-model="slide"
                transition-prev="jump-left"
                transition-next="jump-right"
                swipeable
                infinite
                animated
                control-color="white"
                navigation
                padding
                arrows
                width="100px"
                height="500px"
                class="bg-transparent text-white rounded-borders"
                @transition="moveCarousel(slide)"
              >
                <template v-for="(instrument, index) in instruments">
                  <q-carousel-slide
                    :name="instrument.title"
                    class="column no-wrap flex-center"
                    :key="index"
                  >
                    <img
                      :src="require(`../../assets/${instrument.img}`)"
                      style="max-width: 350px; height: 250px;"
                    />
                  </q-carousel-slide>
                </template>
              </q-carousel>
            </transition>
          </div>
        </template>
      </div>
    </q-scroll-area>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      slide: "sarimanok",
      instruments: [
        {
          title: "sarimanok",
          description: `2Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo consectetur
          doloribus autem, sit officiis adipisci nostrum quisquam quam vel
          cupiditate repudiandae voluptatibus ea! Impedit, numquam eius tempore
          autem iste quod!`,
          img: "landingpage.jpg"
        },
        {
          title: "debakan",
          description: ` 1Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo consectetur
          doloribus autem, sit officiis adipisci nostrum quisquam quam vel
          cupiditate repudiandae voluptatibus ea! Impedit, numquam eius tempore
          autem iste quod!`,
          img: "sarimanok.png"
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
.bg-img {
  background-image: url("~assets/background/BackGroundBlur.jpg");
  padding: 0px;
}
</style>

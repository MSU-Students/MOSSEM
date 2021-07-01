<template>
  <q-page class="q-pa-md">
    <q-scroll-area style="height: 650px; max-width: 3000px;">
      <div :class="$q.screen.lt.md ? '' : 'row'">
        <template>
          <div class="col-6">
            <div class="absolute-top text-white text-h2 text-center">
                SONGS
              </div>
            <transition
              appear
              enter-active-class="animated fadeInLeft"
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
                <template v-for="(Song, index) in Songs">
                  <q-carousel-slide
                    :name="Song.title"
                    class="column no-wrap flex-center"
                    :key="index"
                  >
                    <img
                      :src="require(`../../assets/${Song.img}`)"
                      style="max-width: 350px; height: 250px;"
                    />
                   
                      <q-media-player
                        style="max-width: 380px; width: 100%;"
                        class="bg-transparent shadow-24"
                        color="orange"
                        shadow-color= "green"
                        type="audio"
                        source="https://raw.githubusercontent.com/quasarframework/quasar-ui-qmediaplayer/dev/demo/public/media/Scott_Holmes_-_04_-_Upbeat_Party.mp3"
                      />
                    
                  </q-carousel-slide>
                </template>
              </q-carousel>
            </transition>
          </div>
          <div class="col-6 flex flex-center text-center">
            <template v-for="(Song, index) in Songs">
                <q-card
                  v-if="Song.title == slide"
                  :key="index"
                  class="no-shadow bg-transparent"
                >
                  <q-card-section class="bg-card" horizontal>
                    <q-card-section class="q-pt-xs text-white">
                      <div class=" text-h5-outlined">Lyrics</div>
                      <div
                        class="text-h2 text-white text-capitalize q-mt-sm q-mb-xs"
                      >
                        {{ Song.title }}
                      </div>
                      <div class="text-subtitle1 text-white">
                        {{ Song.description }}
                      </div>
                    </q-card-section>
                  </q-card-section>
                </q-card>
              </transition>
            </template>
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
      slide: "“INIYA-I”",
      Songs: [
        {
          title: "“INIYA-I”",
          description: `Iniya-I anda ka song? Nasaya bo sa siringan. Na oba ka pakawatan, ka maylay ka so gadong 
          a manisan a di sakun. Na kalipatan na akongka, a
          gaganatan sa walay, ka aya pusana angko ka oba ka kalipati so kiya ginawa-ita.
          Bolawan ko dika kawan ka suka man so gadong ko, a pinalotan ko sa bo’k, adi ko pakisasambur ko
          pisarimbara n’ndo. Bolawan ko sarig kadun, ka suka man so liyamin, a bologa kalombayan, a tihaya ko
          mata ko, ko gagawi-I dawn-daw.`,
          img: "landingpage.jpg"
        },
        {
          title: "“TAW KO MAGI’NGUD”",
          description: ` Hmmmm….Hmmmmm…. Ahhhhh…. Ahhhh…. Suka kami so taw ko magi’ngud ilaya niyo ka pipiya-piya,
          Barasin niyo so taw ko magi’ngud ilaya niyo ka tatagompiya. Sukami so taw ko magi’ngud ilaya niyo ka
          giginawa-i. Sukami so taw ko magi’ngud…. Makagaganat sa mipapantaw a ingud(2x). Ahhhhh…..
          ahah…ahhhh….`,
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

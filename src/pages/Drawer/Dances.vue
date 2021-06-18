<template>
  <div class="q-pa-md">
    <div class="q-gutter-md">
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
        class=" text-white shadow-24 rounded-borders"
        style="background: linear-gradient(to top right, #fe7a15 35%, #d9d9d9 110%);"
      >
      <template v-slot:navigation-icon="{ active, btnProps, onClick }">
        <q-btn v-if="active" size="lg" icon="home" color="yellow" flat round dense @click="onClick" />
        <q-btn v-else size="sm" :icon="btnProps.icon" color="dark" flat round dense @click="onClick" />
      </template>
        <q-carousel-slide name="style">
            <div class="q-pa-md">
              <q-video
              class="absolute-full"
              src="https://www.youtube.com/embed/k3_tw44QsZQ?rel=0" />
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="tv" class="column no-wrap flex-center">
          <div class="q-pa-md">
              <q-video
              class="absolute-full"
              src="https://www.youtube.com/embed/k3_tw44QsZQ?rel=0" />
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="layers" class="column no-wrap flex-center">
          <div class="q-pa-md">
              <q-video
              class="absolute-full"
              src="https://www.youtube.com/embed/k3_tw44QsZQ?rel=0" />
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="map" class="column no-wrap flex-center">
          <div class="q-pa-md">
              <q-video
              class="absolute-full"
              src="https://www.youtube.com/embed/k3_tw44QsZQ?rel=0" />
          </div>
        </q-carousel-slide>
        <template v-slot:control>
        <q-carousel-control
          position="bottom-right"
          :offset="[18, 18]"
        >
          <q-btn
            push round dense color="white" text-color="primary"
            :icon="fullscreen ? 'fullscreen_exit' : 'fullscreen'"
            @click="fullscreen = !fullscreen"
          />
        </q-carousel-control>
      </template>
      </q-carousel>

      <q-carousel
        v-model="slide"
        transition-prev="jump-right"
        transition-next="jump-left"
        swipeable
        animated
        navigation-icon="radio_button_unchecked"
        padding
        height="150px"
        class="bg-transparent- text-dark rounded-borders"
      >
        <q-carousel-slide name="style" class="column no-wrap flex-center">
          <div class="q-mt-md text-center" style="font-size: 1.5em">
            {{ lorem }}
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="tv" class="column no-wrap flex-center">
          <div class="q-mt-md text-center" style="font-size: 1.5em">
            {{ lorem }}
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="layers" class="column no-wrap flex-center">
          <div class="q-mt-md text-center " style="font-size: 1.5em">
            {{ lorem }}
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="map" class="column no-wrap flex-center">
          <div class="q-mt-md text-center" style="font-size: 1.5em">
            {{ lorem }}
          </div>
        </q-carousel-slide>
      </q-carousel>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slide: "style",
      lorem:
        "Maranao Tribe in particular is known to be a Culture that is maintaining their ethnic identity until now in this modern generation, some of Maranao people know their Culture and they know some of its practices and distinct things, the Culture of the Maranao tribe and  its practices is being passed down from generation to generation to the young Maranaos. ",
      fullscreen: false
    };
  }
};
</script>

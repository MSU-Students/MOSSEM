<template>
  <q-page class="bg-img">
    <div class="q-gutter-md">
      <div class="row justify-between ">
        <div class="col">
          <q-img
            :class="$q.screen.lt.md ? '' : ''"
            src="~assets/background/landingpage.jpg"
            :ratio="16 / 9"
          >
            <div class="transparent q-mt-xl">
              <div
                data-aos="zoom-out"
                data-aos-duration="1500"
                :class="
                  $q.screen.lt.md
                    ? 'font1 full text-center text-h6 text-white text-weight-bolder'
                    : 'font1 col text-left text-h4 text-white text-weight-bolder q-mt-xl q-pt-lg'
                "
              >
                <h1 v-if="!$q.screen.lt.md" class="text-center text-white ">
                  Sining Pananadem
                </h1>
                <div v-else="$q.screen.lt.md" class="q-mt-xl q-pt-md">
                  Sining pananadem
                </div>
                <h3 v-if="!$q.screen.lt.md" class="text-white text-center">
                  A Web-Based Musical Arts Repository System for Sining
                  Pananadem Cultural Group of MSU-MARAWI
                </h3>
                <div v-else="$q.screen.lt.md" class="text-h6">
                  A Web-Based Musical Arts Repository System for Sining
                  Pananadem Cultural Group of MSU-MARAWI
                </div>
              </div>
            </div>
          </q-img>
        </div>
      </div>
      <div class="row">
        <div
          class="q-pl-xl q-pt-xl col"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <q-img
            src="~assets/background/landingpage.jpg"
            style="max-width: 1000px; height: 400px; "
            :fit="mode"
          >
          </q-img>
        </div>
        <div data-aos="fade-up" data-aos-duration="2500"
        data-aos-delay="500">
          <q-card class="my-card Glassmorphismright col">
            <q-card-section class="q-gutter-md text-white">
              <div class="font3 text-bold text-h4 ">What Is Culture?</div>
              <div class="font1 text-subtitle2">
                Culture is the characteristics and knowledge of a particular
                group of people, encompassing language, religion, cuisine,
                social habits, music and arts. Culture is where people come
                from, who they are now, and where they are going. culture is
                what makes people unique, interesting individuals.
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
      <div class="row">
        <div class="q-pl-xl q-pt-xl col">
          <q-img
            data-aos="flip-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            src="~assets/background/landingpage.jpg"
            style="max-width: 1000px; height: 400px; position: relative; top: 10px; left: 450px;"
            :fit="mode"
          >
          </q-img>
        </div>
        <div data-aos="fade-up" data-aos-duration="2000"
        data-aos-delay="500">
          <q-card class="my-card-next Glassmorphism col">
            <q-card-section class="q-gutter-md text-white">
              <div class="font3 text-h4 ">What Is Sining Pananadem?</div>
              <div class="font1 text-subtitle2">
                Sining Pananadem is composed of young M’ranao artists, and its
                primary objectives are: to Preserve, Promote, to Protect and to
                Popularize the M’ranao indigenous culture of the south, it was
                established to counter act the effects of the exploitative force
                of westernization, moreover, the Sining Pananadem is aimed at
                promoting a culture of peace through cultural solidarity among
                all Filipino and the rest of the citizens of the world.
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>

      <div class="q-pt-xl text-white">
        <q-timeline :layout="layout" color="primary">
          <q-timeline-entry heading>
            Sining Pananadem
            <br />
            (History and Events)
          </q-timeline-entry>

          <q-timeline-entry
            title="Event Title"
            subtitle="February 22, 1986"
            side="left"
          >
            <div>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </q-timeline-entry>

          <q-timeline-entry
            title="Event Title"
            subtitle="February 21, 1986"
            side="right"
            icon="delete"
          >
            <div>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </q-timeline-entry>

          <q-timeline-entry heading>November, 2017</q-timeline-entry>

          <q-timeline-entry
            title="Event Title"
            subtitle="February 22, 1986"
            side="left"
          >
            <div>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </q-timeline-entry>

          <q-timeline-entry
            title="Event Title"
            subtitle="February 22, 1986"
            side="right"
          >
            <div>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </q-timeline-entry>

          <q-timeline-entry
            title="Event Title"
            subtitle="February 22, 1986"
            side="left"
            color="orange"
            icon="done_all"
          >
            <div>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </q-timeline-entry>

          <q-timeline-entry
            title="Event Title"
            subtitle="February 22, 1986"
            side="right"
          >
            <div>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </q-timeline-entry>

          <q-timeline-entry
            title="Event Title"
            subtitle="February 22, 1986"
            side="left"
          >
            <div>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </q-timeline-entry>
        </q-timeline>
      </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  computed: {
    layout() {
      return this.$q.screen.lt.sm
        ? "dense"
        : this.$q.screen.lt.md
        ? "comfortable"
        : "loose";
    }
  }
};
</script>

<style scopes>
.landing-bg {
  background-image: url("~assets/background/landingpage.jpg");
  background-position: center;
}

.my-card-next {
  background: transparent;
  width: 100%;
  max-width: 550px;
  position: relative;
  top: 150px;
  left: -750px;
}

.my-card {
  background: transparent;
  width: 100%;
  max-width: 500px;
  position: relative;
  top: 140px;
  left: -200px;
}
.bg-img {
  background-image: url("~assets/background/BackGroundBlur.jpg");
  padding: 0px;
}
.radius
{
  border-radius: 28px;
}
.Glassmorphism
{
backdrop-filter: blur(1px);
-webkit-backdrop-filter:blur(1px);
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
background-image: linear-gradient(155deg, rgba(255, 255, 255, 0.36) 0%, rgba(255, 255, 255, 0) 100%);
border-radius: 28px;
border-bottom: 1.8px solid rgba( 255, 255, 255, 0.79 );
border-left: 1.8px solid rgba( 255, 255, 255, 0.79 );
text-shadow: 2px 2px 10px #000000;
}
.Glassmorphismright
{
backdrop-filter: blur(1px);
-webkit-backdrop-filter:blur(1px);
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
background-image: linear-gradient(155deg, rgba(255, 255, 255, 0.36) 0%, rgba(255, 255, 255, 0) 100%);
border-radius: 28px;
border-bottom: 1.8px solid rgba( 255, 255, 255, 0.79 );
border-right: 1.8px solid rgba( 255, 255, 255, 0.79 );
text-shadow: 2px 2px 10px #000000;
}
</style>

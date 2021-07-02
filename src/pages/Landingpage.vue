<template>
  <q-page>
    <div class="q-gutter-md">
      <div class="row justify-between ">
        <div class="col">
          <q-img
            :class="$q.screen.lt.md ? '' : ''"
            src="~assets/background/landingpage.jpg"
            :ratio="16 / 9"
          >
            <transition appear enter-active-class="animated fadeInUp">
              <div class="transparent q-mt-xl">
                <div
                  :class="
                    $q.screen.lt.md
                      ? 'col text-center text-h6 text-white text-weight-bolder'
                      : 'col text-left text-h4 text-white text-weight-bolder q-mt-xl q-pt-lg'
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
            </transition>
          </q-img>
        </div>
      </div>
      <div class="q-pl-xl q-pt-xl ">
        <q-img
          src="~assets/background/landingpage.jpg"
          style="max-width: 900px; height: 400px;"
          :fit="mode"
        >
        </q-img>
        <transition appear enter-active-class="animated fadeInUp">
        <div>
          <q-card class="my-card">
            <q-card-section class="bg-primary text-white">
              <div class="text-h6">Our Changing Planet</div>
              <div class="text-subtitle2">by John Doe</div>
            </q-card-section>
          </q-card>
        </div>
        </transition>
      </div>
      <div>
        <q-timeline :layout="layout" color="secondary">
          <q-timeline-entry heading>
            Timeline heading
            <br />
            ({{
              $q.screen.lt.sm
                ? "Dense"
                : $q.screen.lt.md
                ? "Comfortable"
                : "Loose"
            }}
            layout)
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
  </q-page>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style scopes>
.landing-bg {
  background-image: url("~assets/background/landingpage.jpg");
  background-position: center;
}
.my-card {
  width: 100%;
  max-width: 350px;
}
</style>

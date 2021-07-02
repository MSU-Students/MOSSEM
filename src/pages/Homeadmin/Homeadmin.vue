<template>
  <q-page class="text-center text-h4 q-pa-lg">
    <q-card class=" q-pa-md">
      <div class="row">
        <div class="col">
          <q-avatar>
            <img src="~assets/logo/splogo.png" />
          </q-avatar>
        </div>
        <div class="col">
          <q-btn label="Edit Account"> </q-btn>
        </div>
      </div>
      <q-separator color="black" horizontal />
      <q-tabs
        v-model="tab"
        dense
        class="text-grey"
        active-color="primary"
        indicator-color="primary"
        align="justify"
        narrow-indicator
      >
        <q-tab name="dances" label="Dances" />
        <q-tab name="instruments" label="Instruments" />
        <q-tab name="pictures" label="Pictures" />
        <q-tab name="songs" label="Songs" />
      </q-tabs>

      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="dances">
          <div class="q-pa-md">
            <div class="q-pa-md">
              <q-input v-model="search" filled type="search" hint="Search">
                <template v-slot:append>
                  <q-icon name="search" />
                </template>
              </q-input>
            </div>
            <div class="row q-pa-xm">
              <div class="col-2">
                <span class="text-h3">Dances</span>
              </div>
              <div class="col-8">
                <q-btn label="Add Dances"> </q-btn>
              </div>
            </div>
            <div class="q-pa-md">
              <q-list
                class="no-borders"
              >
                <q-item>
                  <q-item-section top class="col-2 gt-sm">
                    <q-item-label class="q-mt-sm">ID</q-item-label>
                  </q-item-section>

                  <q-item-section top>
                    <q-item-label lines="1">
                      <span class="text-weight-medium"
                        >NAME</span
                      >
                    </q-item-label>
                  </q-item-section>
                  <q-item-section top side>
                    <div class="text-black q-gutter-xs">
                      <span class="text-weight-medium"
                        >ACTIONS</span
                      >
                    </div>
                  </q-item-section>
                </q-item>

              </q-list>
              <q-list
                v-for="(dance, index) in dancelist"
                :name="dance.Name"
                :key="index"
                bordered
                class="rounded-borders"
              >
                <q-item>
                  <q-item-section top class="col-2 gt-sm">
                    <q-item-label class="q-mt-sm">{{dance.Id}}</q-item-label>
                  </q-item-section>

                  <q-item-section top>
                    <q-item-label lines="1">
                      <span class="text-weight-medium"
                        >{{dance.Name}}</span
                      >
                    </q-item-label>
                  </q-item-section>
                  <q-item-section top side>
                    <div class="text-grey-8 q-gutter-xs">
                      <q-btn
                        class="gt-xs"
                        size="12px"
                        flat
                        dense
                        round
                        icon="delete"
                      />
                      <q-btn
                        class="gt-xs"
                        size="12px"
                        flat
                        dense
                        round
                        icon="done"
                      />
                      <q-btn size="12px" flat dense round icon="more_vert" />
                    </div>
                  </q-item-section>
                </q-item>

                <q-separator spaced />
              </q-list>
            </div>
          </div>
        </q-tab-panel>

        <q-tab-panel name="instruments">
          <div class="q-pa-md">
            <div class="q-pa-md">
              <q-input v-model="search" filled type="search" hint="Search">
                <template v-slot:append>
                  <q-icon name="search" />
                </template>
              </q-input>
            </div>
            <div class="row q-pa-xm">
              <div class="col-2">
                <span class="text-h3">Instruments</span>
              </div>
              <div class="col-8">
                <q-btn label="Add Instruments"> </q-btn>
              </div>
            </div>
            <div class="q-pa-md">
              <q-list bordered class="rounded-borders">
                <q-item>
                  <q-item-section avatar top>
                    <q-icon name="account_tree" color="black" size="34px" />
                  </q-item-section>

                  <q-item-section top class="col-2 gt-sm">
                    <q-item-label class="q-mt-sm">GitHub</q-item-label>
                  </q-item-section>

                  <q-item-section top>
                    <q-item-label lines="1">
                      <span class="text-weight-medium"
                        >[quasarframework/quasar]</span
                      >
                      <span class="text-grey-8"> - GitHub repository</span>
                    </q-item-label>
                    <q-item-label caption lines="1">
                      @rstoenescu in #3: > Generic type parameter for props
                    </q-item-label>
                    <q-item-label
                      lines="1"
                      class="q-mt-xs text-body2 text-weight-bold text-primary text-uppercase"
                    >
                      <span class="cursor-pointer">Open in GitHub</span>
                    </q-item-label>
                  </q-item-section>

                  <q-item-section top side>
                    <div class="text-grey-8 q-gutter-xs">
                      <q-btn
                        class="gt-xs"
                        size="12px"
                        flat
                        dense
                        round
                        icon="delete"
                      />
                      <q-btn
                        class="gt-xs"
                        size="12px"
                        flat
                        dense
                        round
                        icon="done"
                      />
                      <q-btn size="12px" flat dense round icon="more_vert" />
                    </div>
                  </q-item-section>
                </q-item>

                <q-separator spaced />

                <q-item>
                  <q-item-section avatar top>
                    <q-icon name="account_tree" color="black" size="34px" />
                  </q-item-section>

                  <q-item-section top class="col-2 gt-sm">
                    <q-item-label class="q-mt-sm">GitHub</q-item-label>
                  </q-item-section>

                  <q-item-section top>
                    <q-item-label lines="1">
                      <span class="text-weight-medium"
                        >[quasarframework/quasar]</span
                      >
                      <span class="text-grey-8"> - GitHub repository</span>
                    </q-item-label>
                    <q-item-label caption lines="1">
                      @rstoenescu in #1: > The build system
                    </q-item-label>
                    <q-item-label
                      lines="1"
                      class="q-mt-xs text-body2 text-weight-bold text-primary text-uppercase"
                    >
                      <span class="cursor-pointer">Open in GitHub</span>
                    </q-item-label>
                  </q-item-section>

                  <q-item-section top side>
                    <div class="text-grey-8 q-gutter-xs">
                      <q-btn
                        class="gt-xs"
                        size="12px"
                        flat
                        dense
                        round
                        icon="delete"
                      />
                      <q-btn
                        class="gt-xs"
                        size="12px"
                        flat
                        dense
                        round
                        icon="done"
                      />
                      <q-btn size="12px" flat dense round icon="more_vert" />
                    </div>
                  </q-item-section>
                </q-item>
              </q-list>
            </div>
          </div>
        </q-tab-panel>

        <q-tab-panel name="pictures">
          <div class="q-pa-md">
            <div class="q-pa-md">
              <q-input v-model="search" filled type="search" hint="Search">
                <template v-slot:append>
                  <q-icon name="search" />
                </template>
              </q-input>
            </div>
            <div class="row q-pa-xm">
              <div class="col-2">
                <span class="text-h3">Pictures</span>
              </div>
              <div class="col-8">
                <q-btn label="Add Pictures"> </q-btn>
              </div>
            </div>
            <div class="q-pa-md">
              <q-list bordered class="rounded-borders">
                <q-item>
                  <q-item-section avatar top>
                    <q-icon name="account_tree" color="black" size="34px" />
                  </q-item-section>

                  <q-item-section top class="col-2 gt-sm">
                    <q-item-label class="q-mt-sm">GitHub</q-item-label>
                  </q-item-section>

                  <q-item-section top>
                    <q-item-label lines="1">
                      <span class="text-weight-medium"
                        >[quasarframework/quasar]</span
                      >
                      <span class="text-grey-8"> - GitHub repository</span>
                    </q-item-label>
                    <q-item-label caption lines="1">
                      @rstoenescu in #3: > Generic type parameter for props
                    </q-item-label>
                    <q-item-label
                      lines="1"
                      class="q-mt-xs text-body2 text-weight-bold text-primary text-uppercase"
                    >
                      <span class="cursor-pointer">Open in GitHub</span>
                    </q-item-label>
                  </q-item-section>

                  <q-item-section top side>
                    <div class="text-grey-8 q-gutter-xs">
                      <q-btn
                        class="gt-xs"
                        size="12px"
                        flat
                        dense
                        round
                        icon="delete"
                      />
                      <q-btn
                        class="gt-xs"
                        size="12px"
                        flat
                        dense
                        round
                        icon="done"
                      />
                      <q-btn size="12px" flat dense round icon="more_vert" />
                    </div>
                  </q-item-section>
                </q-item>

                <q-separator spaced />

                <q-item>
                  <q-item-section avatar top>
                    <q-icon name="account_tree" color="black" size="34px" />
                  </q-item-section>

                  <q-item-section top class="col-2 gt-sm">
                    <q-item-label class="q-mt-sm">GitHub</q-item-label>
                  </q-item-section>

                  <q-item-section top>
                    <q-item-label lines="1">
                      <span class="text-weight-medium"
                        >[quasarframework/quasar]</span
                      >
                      <span class="text-grey-8"> - GitHub repository</span>
                    </q-item-label>
                    <q-item-label caption lines="1">
                      @rstoenescu in #1: > The build system
                    </q-item-label>
                    <q-item-label
                      lines="1"
                      class="q-mt-xs text-body2 text-weight-bold text-primary text-uppercase"
                    >
                      <span class="cursor-pointer">Open in GitHub</span>
                    </q-item-label>
                  </q-item-section>

                  <q-item-section top side>
                    <div class="text-grey-8 q-gutter-xs">
                      <q-btn
                        class="gt-xs"
                        size="12px"
                        flat
                        dense
                        round
                        icon="delete"
                      />
                      <q-btn
                        class="gt-xs"
                        size="12px"
                        flat
                        dense
                        round
                        icon="done"
                      />
                      <q-btn size="12px" flat dense round icon="more_vert" />
                    </div>
                  </q-item-section>
                </q-item>
              </q-list>
            </div>
          </div>
        </q-tab-panel>

        <q-tab-panel name="songs">
          <div class="q-pa-md">
            <div class="q-pa-md">
              <q-input v-model="search" filled type="search" hint="Search">
                <template v-slot:append>
                  <q-icon name="search" />
                </template>
              </q-input>
            </div>
            <div class="row q-pa-xm">
              <div class="col-2">
                <span class="text-h3">Songs</span>
              </div>
              <div class="col-8">
                <q-btn label="Add Songs"> </q-btn>
              </div>
            </div>
            <div class="q-pa-md">
              <q-list bordered class="rounded-borders">
                <q-item>
                  <q-item-section avatar top>
                    <q-icon name="account_tree" color="black" size="34px" />
                  </q-item-section>

                  <q-item-section top class="col-2 gt-sm">
                    <q-item-label class="q-mt-sm">GitHub</q-item-label>
                  </q-item-section>

                  <q-item-section top>
                    <q-item-label lines="1">
                      <span class="text-weight-medium"
                        >[quasarframework/quasar]</span
                      >
                      <span class="text-grey-8"> - GitHub repository</span>
                    </q-item-label>
                    <q-item-label caption lines="1">
                      @rstoenescu in #3: > Generic type parameter for props
                    </q-item-label>
                    <q-item-label
                      lines="1"
                      class="q-mt-xs text-body2 text-weight-bold text-primary text-uppercase"
                    >
                      <span class="cursor-pointer">Open in GitHub</span>
                    </q-item-label>
                  </q-item-section>

                  <q-item-section top side>
                    <div class="text-grey-8 q-gutter-xs">
                      <q-btn
                        class="gt-xs"
                        size="12px"
                        flat
                        dense
                        round
                        icon="delete"
                      />
                      <q-btn
                        class="gt-xs"
                        size="12px"
                        flat
                        dense
                        round
                        icon="done"
                      />
                      <q-btn size="12px" flat dense round icon="more_vert" />
                    </div>
                  </q-item-section>
                </q-item>

                <q-separator spaced />

                <q-item>
                  <q-item-section avatar top>
                    <q-icon name="account_tree" color="black" size="34px" />
                  </q-item-section>

                  <q-item-section top class="col-2 gt-sm">
                    <q-item-label class="q-mt-sm">GitHub</q-item-label>
                  </q-item-section>

                  <q-item-section top>
                    <q-item-label lines="1">
                      <span class="text-weight-medium"
                        >[quasarframework/quasar]</span
                      >
                      <span class="text-grey-8"> - GitHub repository</span>
                    </q-item-label>
                    <q-item-label caption lines="1">
                      @rstoenescu in #1: > The build system
                    </q-item-label>
                    <q-item-label
                      lines="1"
                      class="q-mt-xs text-body2 text-weight-bold text-primary text-uppercase"
                    >
                      <span class="cursor-pointer">Open in GitHub</span>
                    </q-item-label>
                  </q-item-section>

                  <q-item-section top side>
                    <div class="text-grey-8 q-gutter-xs">
                      <q-btn
                        class="gt-xs"
                        size="12px"
                        flat
                        dense
                        round
                        icon="delete"
                      />
                      <q-btn
                        class="gt-xs"
                        size="12px"
                        flat
                        dense
                        round
                        icon="done"
                      />
                      <q-btn size="12px" flat dense round icon="more_vert" />
                    </div>
                  </q-item-section>
                </q-item>
              </q-list>
            </div>
          </div>
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      tab: "dances",
      dancelist: [
        {
          Id: "1",
          Name: "Malong-Malong"
        },
        {
          Id: "2",
          Name: "Sagayan"
        },
        {
          Id: "3",
          Name: "Kapag-apir"
        }
      ]
    };
  }
};
</script>

<template>
  <v-container fluid class="py-6">
    <v-row>
      <v-col md="8" class="me-auto text-start">
        <h5 class="text-h5 text-typo font-weight-bold mb-2">
          Some of Our Awesome Projects
        </h5>
        <p class="text-body">
          This is the paragraph where you can write more details about your
          projects. Keep you user engaged by providing meaningful information.
        </p>
      </v-col>
    </v-row>
    <v-row>
      <v-col lg="4" md="6" cols="12" v-for="card in cards" :key="card.title">
        <v-card class="card-shadow border-radius-xl">
          <div class="px-4 py-4">
            <div class="d-flex">
              <v-avatar
                size="74"
                class="border-radius-md bg-gradient-default pa-2"
              >
                <v-img :src="card.image" width="50" height="50"> </v-img>
              </v-avatar>
              <div class="ms-4 my-auto">
                <h6 class="text-h6 text-typo font-weight-bold mb-2">
                  {{ card.title }}
                </h6>
                <span class="avatar-group d-flex">
                  <v-avatar
                    size="24"
                    class="border border-white"
                    v-for="avatar in card.avatars"
                    :key="avatar.image"
                  >
                    <img :src="avatar.image" alt="Avatar" />
                  </v-avatar>
                </span>
              </div>
              <v-menu
                transition="slide-y-transition"
                offset-y
                offset-x
                min-width="150"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    icon
                    :ripple="false"
                    class="text-secondary ms-auto mt-3"
                    v-bind="attrs"
                    v-on="on"
                    small
                  >
                    <v-icon size="16">fas fa-ellipsis-v</v-icon>
                  </v-btn>
                </template>

                <v-list class="py-0">
                  <v-list-item class="list-item-hover-active">
                    <v-list-item-content class="pa-0">
                      <v-list-item-title
                        class="ls-0 text-body font-weight-600 mb-0"
                      >
                        Action
                      </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item class="list-item-hover-active">
                    <v-list-item-content class="pa-0">
                      <v-list-item-title
                        class="ls-0 text-body font-weight-600 mb-0"
                      >
                        Another Action
                      </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item class="list-item-hover-active">
                    <v-list-item-content class="pa-0">
                      <v-list-item-title
                        class="ls-0 text-body font-weight-600 mb-0"
                      >
                        Something else here
                      </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                  <hr class="horizontal dark" />
                </v-list>
              </v-menu>
            </div>
            <p class="text-sm mt-4 text-body">
              {{ card.description }}
            </p>
            <hr class="horizontal dark mb-3" />
            <v-row>
              <v-col cols="6">
                <h6 class="text-sm font-weight-bold text-typo mb-0">
                  {{ card.participants }}
                </h6>
                <p class="text-secondary text-sm font-weight-bold mb-0">
                  Participants
                </p>
              </v-col>
              <v-col cols="6" class="text-end">
                <h6 class="text-sm text-typo mb-0">{{ card.date }}</h6>
                <p class="text-secondary text-sm font-weight-bold mb-0">
                  Due date
                </p>
              </v-col>
            </v-row>
          </div>
        </v-card>
      </v-col>
      <v-col lg="4" md="6" cols="12">
        <v-card class="border-radius-xl overflow-hidden card-shadow h-100">
          <div
            class="
              px-4
              py-4
              d-flex
              flex-column
              justify-center
              text-center
              h-100
            "
          >
            <a href="javascript:;" class="text-decoration-none">
              <i
                class="fa fa-plus text-secondary text-sm mb-4"
                aria-hidden="true"
              ></i>
              <h5 class="text-h5 text-secondary font-weight-bold">
                New project
              </h5>
            </a>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "Projects",
  data: function () {
    return {
      cards: [
        {
          image: require("@/assets/img/small-logos/logo-slack.svg"),
          title: "Slack Bot",
          description:
            "If everything I did failed - which it doesn't, I think that it actually succeeds.",
          participants: "5",
          date: "02.03.22",
          avatars: [
            {
              image: require("@/assets/img/team-1.jpg"),
            },
            {
              image: require("@/assets/img/team-2.jpg"),
            },
            {
              image: require("@/assets/img/team-3.jpg"),
            },
            {
              image: require("@/assets/img/team-4.jpg"),
            },
            {
              image: require("@/assets/img/team-3.jpg"),
            },
          ],
        },
        {
          image: require("@/assets/img/small-logos/logo-spotify.svg"),
          title: "Premium support",
          description:
            "Pink is obviously a better color. Everyone’s born confident, and everything’s taken away from you.",
          participants: "3",
          date: "22.11.21",
          avatars: [
            {
              image: require("@/assets/img/team-4.jpg"),
            },
            {
              image: require("@/assets/img/team-3.jpg"),
            },
            {
              image: require("@/assets/img/team-2.jpg"),
            },
          ],
        },
        {
          image: require("@/assets/img/small-logos/logo-xd.svg"),
          title: "Design tools",
          description:
            "Constantly growing. We’re constantly making mistakes from which we learn and improve.",
          participants: "4",
          date: "06.03.20",
          avatars: [
            {
              image: require("@/assets/img/team-4.jpg"),
            },
            {
              image: require("@/assets/img/team-3.jpg"),
            },
            {
              image: require("@/assets/img/team-5.jpg"),
            },
            {
              image: require("@/assets/img/team-2.jpg"),
            },
          ],
        },
        {
          image: require("@/assets/img/small-logos/logo-asana.svg"),
          title: "Looking great",
          description:
            "You have the opportunity to play this game of life you need to appreciate every moment.",
          participants: "6",
          date: "14.03.24",
          avatars: [
            {
              image: require("@/assets/img/team-5.jpg"),
            },
            {
              image: require("@/assets/img/team-4.jpg"),
            },
            {
              image: require("@/assets/img/team-2.jpg"),
            },
            {
              image: require("@/assets/img/team-3.jpg"),
            },
            {
              image: require("@/assets/img/team-5.jpg"),
            },
            {
              image: require("@/assets/img/team-2.jpg"),
            },
          ],
        },
        {
          image: require("@/assets/img/small-logos/logo-invision.svg"),
          title: "Developer first",
          description:
            "For standing out. But the time is now to be okay to be the greatest you.",
          participants: "4",
          date: "16.01.22",
          avatars: [
            {
              image: require("@/assets/img/team-5.jpg"),
            },
            {
              image: require("@/assets/img/team-4.jpg"),
            },
            {
              image: require("@/assets/img/team-5.jpg"),
            },
            {
              image: require("@/assets/img/team-2.jpg"),
            },
          ],
        },
      ],
    };
  },
};
</script>

<template>
  <v-navigation-drawer
    width="100%"
    fixed
    app
    floating
    :expand-on-hover="mini"
    :value="drawer"
    :right="$vuetify.rtl"
    class="my-4 ms-1 border-radius-lg border-right-c"
    :class="!$vuetify.breakpoint.mobile ? '' : 'bg-white'"
    :data-color="sidebarColor"
    :data-theme="sidebarTheme"
  >
    <v-list-item class="pa-1">
      <v-img
      src="@/assets/img/hoseomember/logo.png"
      class="navbar-brand-img ms-5"
      width="150"
      >
    </v-img>
    </v-list-item>
    
    <hr class="horizontal dark mb-4" />
      <hr class="horizontal dark my-4" />

    <h5
      class="
        text-uppercase text-caption
        ls-0
        font-weight-bolder
        p-0
        text-muted
        mx-4
        mt-4
        mb-2
        ps-2
        d-none-mini
        white-space-nowrap
      "
    >
      호서 MOT 프로필
    </h5>
    <v-list>
      <v-list-item-group>
        <div v-for="(item, i) in itemsDocs" :key="i">
          <v-list-item
            link
            :to="item.link"
            class="pb-1 mx-2 no-default-hover"
            :ripple="false"
            active-class="item-active"
            v-if="!item.external"
          >
            <v-list-item-icon class="shadow border-radius-md mx-1 align-center" style="padding:2px 5px">
              <div v-html="item.action">
                {{ item.action }}
              </div>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title
                v-text="item.title"
                class="ms-1"
              ></v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item
            link
            :href="item.link"
            class="pb-1 mx-2 no-default-hover"
            :ripple="false"
            active-class="item-active"
            v-if="item.external"
            target="_blank"
          >
            <v-list-item-icon class="shadow border-radius-md mx-2 align-center">
              <div v-html="item.action">
                {{ item.action }}
              </div>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title
                v-text="item.title"
                class="ms-1"
              ></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </div>
      </v-list-item-group>
    </v-list>

    
  </v-navigation-drawer>
</template>
<script>
export default {
  name: "drawer",
  props: {
    drawer: {
      type: Boolean,
      default: null,
    },
    sidebarColor: {
      type: String,
      default: "success",
    },
    sidebarTheme: {
      type: String,
      default: "transparent",
    },
  },
  data: () => ({
    mini: false,
    togglerActive: false,
    thirdLevelSimple: [
      "Third level menu",
      "Just another link",
      "One last link",
    ],
    itemsDocs: [
      {

        action:
        '<svg width="24px" height="24px" viewBox="0 0 44 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title>customer-support</title><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-1717.000000, -291.000000)" fill="#FFFFFF" fill-rule="nonzero"><g transform="translate(1716.000000, 291.000000)"><g transform="translate(1.000000, 0.000000)"><path class="color-background" d="M45,0 L26,0 C25.447,0 25,0.447 25,1 L25,20 C25,20.379 25.214,20.725 25.553,20.895 C25.694,20.965 25.848,21 26,21 C26.212,21 26.424,20.933 26.6,20.8 L34.333,15 L45,15 C45.553,15 46,14.553 46,14 L46,1 C46,0.447 45.553,0 45,0 Z" opacity="0.59858631"></path><path class="color-background" d="M22.883,32.86 C20.761,32.012 17.324,31 13,31 C8.676,31 5.239,32.012 3.116,32.86 C1.224,33.619 0,35.438 0,37.494 L0,41 C0,41.553 0.447,42 1,42 L25,42 C25.553,42 26,41.553 26,41 L26,37.494 C26,35.438 24.776,33.619 22.883,32.86 Z"></path><path class="color-background" d="M13,28 C17.432,28 21,22.529 21,18 C21,13.589 17.411,10 13,10 C8.589,10 5,13.589 5,18 C5,22.529 8.568,28 13,28 Z"></path></g></g></g></g></svg>',
        title: "내 프로필",
        prefix: "D",
        link: "/hoseomember/hoseoprofile/profilemain",
      },     
      {

        action:
          '<svg width="24px" height="24px" viewBox="0 0 44 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title>settings</title><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-2020.000000, -442.000000)" fill="#FFFFFF" fill-rule="nonzero"><g transform="translate(1716.000000, 291.000000)"><g transform="translate(304.000000, 151.000000)"><polygon class="color-background" opacity="0.596981957" points="18.0883333 15.7316667 11.1783333 8.82166667 13.3333333 6.66666667 6.66666667 0 0 6.66666667 6.66666667 13.3333333 8.82166667 11.1783333 15.315 17.6716667"></polygon><path class="color-background" d="M31.5666667,23.2333333 C31.0516667,23.2933333 30.53,23.3333333 30,23.3333333 C29.4916667,23.3333333 28.9866667,23.3033333 28.48,23.245 L22.4116667,30.7433333 L29.9416667,38.2733333 C32.2433333,40.575 35.9733333,40.575 38.275,38.2733333 L38.275,38.2733333 C40.5766667,35.9716667 40.5766667,32.2416667 38.275,29.94 L31.5666667,23.2333333 Z" opacity="0.596981957"></path><path class="color-background" d="M33.785,11.285 L28.715,6.215 L34.0616667,0.868333333 C32.82,0.315 31.4483333,0 30,0 C24.4766667,0 20,4.47666667 20,10 C20,10.99 20.1483333,11.9433333 20.4166667,12.8466667 L2.435,27.3966667 C0.95,28.7083333 0.0633333333,30.595 0.00333333333,32.5733333 C-0.0583333333,34.5533333 0.71,36.4916667 2.11,37.89 C3.47,39.2516667 5.27833333,40 7.20166667,40 C9.26666667,40 11.2366667,39.1133333 12.6033333,37.565 L27.1533333,19.5833333 C28.0566667,19.8516667 29.01,20 30,20 C35.5233333,20 40,15.5233333 40,10 C40,8.55166667 39.685,7.18 39.1316667,5.93666667 L33.785,11.285 Z"></path></g></g></g></g></svg>',
        title: "내 프로필 등록",
        prefix: "D",
        link: "/hoseomember/setting/setting",
      },
      {

        action:
        '<svg width="24px" height="24px" viewBox="0 0 44 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title>office</title><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-1869.000000, -293.000000)" fill="#FFFFFF" fill-rule="nonzero"><g transform="translate(1716.000000, 291.000000)"><g id="office" transform="translate(153.000000, 2.000000)"><path class="color-background" d="M12.25,17.5 L8.75,17.5 L8.75,1.75 C8.75,0.78225 9.53225,0 10.5,0 L31.5,0 C32.46775,0 33.25,0.78225 33.25,1.75 L33.25,12.25 L29.75,12.25 L29.75,3.5 L12.25,3.5 L12.25,17.5 Z" opacity="0.6"></path><path class="color-background" d="M40.25,14 L24.5,14 C23.53225,14 22.75,14.78225 22.75,15.75 L22.75,38.5 L19.25,38.5 L19.25,22.75 C19.25,21.78225 18.46775,21 17.5,21 L1.75,21 C0.78225,21 0,21.78225 0,22.75 L0,40.25 C0,41.21775 0.78225,42 1.75,42 L40.25,42 C41.21775,42 42,41.21775 42,40.25 L42,15.75 C42,14.78225 41.21775,14 40.25,14 Z M12.25,36.75 L7,36.75 L7,33.25 L12.25,33.25 L12.25,36.75 Z M12.25,29.75 L7,29.75 L7,26.25 L12.25,26.25 L12.25,29.75 Z M35,36.75 L29.75,36.75 L29.75,33.25 L35,33.25 L35,36.75 Z M35,29.75 L29.75,29.75 L29.75,26.25 L35,26.25 L35,29.75 Z M35,22.75 L29.75,22.75 L29.75,19.25 L35,19.25 L35,22.75 Z"></path></g></g></g></g></svg>',
        title: "원우 프로필 검색",
        prefix: "D",
        link: "/hoseomember/setting/profilelist",
      },    
    ],
    items: [
    ],
    itemsPages: [
    ],
  }),
  methods: {
    listClose(event) {
      let items;
      let headers;
      let groups;
      let currentEl;

      if (
        document.querySelectorAll(
          ".mb-0.v-list-item.v-list-item--link.item-active"
        )
      ) {
        items = document.querySelectorAll(
          ".mb-0.v-list-item.v-list-item--link.item-active"
        );
      }

      if (
        document.querySelectorAll(
          ".mb-0.v-list-item.v-list-item--link .v-list-group__header.v-list-item--active"
        )
      ) {
        headers = document.querySelectorAll(
          ".mb-0.v-list-item.v-list-item--link .v-list-group__header.v-list-item--active"
        );
      }

      if (
        document.querySelectorAll(
          ".mb-0.v-list-item.v-list-item--link .v-list-group .v-list .v-list-group.v-list-group--active, .mb-0.v-list-item.v-list-item--link .v-list-group.v-list-group--active"
        )
      ) {
        groups = document.querySelectorAll(
          ".mb-0.v-list-item.v-list-item--link .v-list-group .v-list .v-list-group.v-list-group--active, .mb-0.v-list-item.v-list-item--link .v-list-group.v-list-group--active"
        );
      }

      if (
        event.target.closest(
          ".mb-0.v-list-item.v-list-item--link .v-list-item__content.ms-6 .v-list-group"
        )
      ) {
        currentEl = event.target.closest(
          ".mb-0.v-list-item.v-list-item--link .v-list-item__content.ms-6 .v-list-group"
        );
      }

      if (items != null) {
        for (var i = 0; i < items.length; i++) {
          items[i].classList.remove("item-active");
        }
      }

      if (headers != null) {
        for (var j = 0; j < headers.length; j++) {
          headers[j].classList.remove(
            "v-list-item--active",
            "item-active",
            "primary--text"
          );
          headers[j].setAttribute("aria-expanded", false);
        }
      }

      if (groups != null) {
        for (var k = 0; k < groups.length; k++) {
          groups[k].classList.remove("v-list-group--active", "primary--text");
        }
      }

      if (event.target.closest(".mb-0.v-list-item.v-list-item--link")) {
        event.target
          .closest(".mb-0.v-list-item.v-list-item--link")
          .classList.add("item-active");
      }

      if (currentEl != null) {
        currentEl
          .querySelector(".v-list-group__header")
          .classList.add("v-list-item--active", "item-active");
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.border-right-c{
  border-right: 1px solid #dedede;
}

</style>
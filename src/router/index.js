import Vue from "vue";
import VueRouter from "vue-router";
import DashboardLayout from "../views/Layout/DashboardLayout.vue";
import DashboardLayoutVr from "../views/Layout/DashboardLayoutVr.vue";

// Dashboard pages
const Dashboard = () => import("../views/Dashboard/Dashboard.vue");

const HoseoMemberSetting = () =>
  import(/* webpackChunkName: "pages" */ "@/views/HoseoMember/Setting/Setting.vue");

const HoseoMemberProfileList = () =>
  import(/* webpackChunkName: "pages" */ "@/views/HoseoMember/Setting/ProfileList.vue");

const HoseoProfileMain = () =>
  import(/* webpackChunkName: "pages" */ "@/views/HoseoMember/HoseoProfile/ProfileMain.vue");

Vue.use(VueRouter);



let accountPages = {
  path: "/",
  component: DashboardLayout,
  name: "Account",
  children: [
    
    {
      path: "/hoseomember/hoseoprofile/profilemain",
      name: "HoseoProfileMain",
      component: HoseoProfileMain,
      meta: {
        groupName: "Pages",
      },
    },
    {
      path: "/hoseomember/setting/setting",
      name: "HoseoMemberSetting",
      component: HoseoMemberSetting,
      meta: {
        groupName: "Pages",
      },
    },
    {
      path: "/hoseomember/setting/profilelist",
      name: "HoseoMemberProfileList",
      component: HoseoMemberProfileList,
      meta: {
        groupName: "Pages",
      },
    },


  ],
};

const routes = [
  accountPages,
];



const router = new VueRouter({
  routes,
});

export default router;

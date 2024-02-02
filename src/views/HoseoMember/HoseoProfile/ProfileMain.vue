<template>
  <div>
    <v-container fluid class="px-6 py-0">
      <profile-component v-if="$utils.user" :student_id="$utils.myMemberInfo.student_id"></profile-component>
    </v-container>
  </div>
</template>
<script>
import ProfileComponent from "./ProfileComponent.vue";

export default {
  name: "profilemain",
  components: {
    ProfileComponent,
  },
  methods: {
    async getUserInfo(token) {
      let params = {
        token: token
      };
      let { data } = await this.$http.post("userinfo", params);
      if (data.status == true && data.reason == 0) {
        this.$utils.user = data.user
        // this.$utils.myMemberInfo.student_id = data.user.user_id
        this.$utils.myMemberInfo.student_id = '20215403'
      } else {
        alert("정보조회 실패!!!(관리자에게 문의해주세요~)");
        window.close()
      }
    },
  },
  mounted() {
    var token = window.atob(this.$route.query.data)
    this.getUserInfo(token)
  },   
  data() {
    return {

    };
  },  
};
</script>

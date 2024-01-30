<template>
  <div>
    <v-container fluid class="px-6 py-0">
      <profile-component :student_id="$utils.myMemberInfo.student_id"></profile-component>
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
  mounted() {
  },   
};
</script>

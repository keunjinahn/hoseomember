<template>
  <div>
    <v-container fluid class="px-6 py-0">
      <v-row class="mt-8">
        <v-col cols="12">
          <profile-component></profile-component>
        </v-col>
      </v-row>
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
};
</script>

<template>
  <div>
    <v-container fluid class="px-6 py-6">
      <v-row class="mt-8">
        <v-col cols="12">
          <profile-list-search></profile-list-search>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import ProfileListSearch from "./ProfileListSearch.vue";

export default {
  name: "profilelist",
  components: {
    ProfileListSearch,
  },
};
</script>

<template>
  <v-card class="card-shadow border-radius-xl mt-6" id="advertisementinfo">
    <div class="px-6 py-6">
      <h5 class="text-h5 font-weight-bold text-typo">광고 및 소개 URL</h5>
    </div>
    <div class="px-6 pb-6 pt-0">
        <v-row class="mt-2">
        <v-col cols="12">
      
          <div
            class="d-flex flex-column bg-gray-100 pa-6 border-radius-lg"
          >
            <span class="mb-2 text-body text-xs">
              <span class="text-dark  ms-2">개인 소유의 홈페이지 혹은 광고하고자 하는 URL이 있다면 첨부해주세요.</span>
            </span>            
            <span class="mb-2 text-body text-xs">
              <span class="text-dark  ms-2">URL은 전용 홈페이지 또는 관련 정보를 찾는 사람에게 노출됩니다.</span>
            </span>            
          </div>          
      
          <html-editor :toolbar_show="true" @input="updateSiteUrl" :value="memberInfo.advertisement_info_json.site_url"></html-editor>
        </v-col>                       
        <v-btn
          color="#cb0c9f"
          class="
            font-weight-bolder
            btn-default
            bg-gradient-default
            py-4
            px-8
            ms-auto
            mt-sm-auto mt-4
          "
          small
          :loading="loading"
          @click="updateMemberInfo"
          
        >
          저장하기
        </v-btn>
      </v-row>        
    </div>
  </v-card>
</template>
<script>
import HtmlEditor from "../Components/HtmlEditor.vue";
export default {
  props: ['memberInfo'],
  name: "advertisement-info",
  components: {
    HtmlEditor,
  },  
  methods: {
    async updateMemberInfo() {
      
      this.loading = true
      await this.$emit("updateMemberInfo")
      this.loading = false
    },
    updateSiteUrl(contents) {
      this.memberInfo.advertisement_info_json.site_url = contents
    }       

  },
  mounted() {
  },
  data() {
    return {
      loading: false,
    };
  },
};
</script>

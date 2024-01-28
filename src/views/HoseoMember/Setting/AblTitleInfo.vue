<template>
  <v-card class="card-shadow border-radius-xl mt-6" id="abltitleinfo">
    <div class="px-6 py-6">
      <h5 class="text-h5 font-weight-bold text-typo">ABL 주제</h5>
    </div>
    <div class="px-6 pb-6 pt-0">
        <v-row class="mt-2">
        <v-col cols="12">
     
          <div
            class="d-flex flex-column bg-gray-100 pa-6 border-radius-lg"
          >
            <span class="mb-2 text-body text-xs">
              <span class="text-dark  ms-2">예) 업무에서 사용 가능한 통합 인적관리 시스템 개발</span>
            </span>            
          </div>          
      
          <html-editor @input="updateAblTitle" :value="memberInfo.abl_title_info_json.abl_title"></html-editor>
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
  name: "abl-title",
  components: {
    HtmlEditor,
  },  
  methods: {
    async updateMemberInfo() {
      
      this.loading = true
      await this.$emit("updateMemberInfo")
      this.loading = false
    },
    updateAblTitle(contents) {
      this.memberInfo.abl_title_info_json.abl_title = contents
    },
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

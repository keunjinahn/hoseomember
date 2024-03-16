<template>
  <v-card class="card-shadow border-radius-xl mt-6" id="provideinfo">
    <div class="px-6 py-6">
      <h5 class="text-h5 font-weight-bold text-typo">제공 정보</h5>
    </div>
    <div class="px-6 pb-6 pt-0">
        <v-row class="mt-2">
          <v-col cols="12">
          <h6 class="text-typo mb-4 text-sm">
            1. 제공 가능한 정보(Give)
          </h6>          
          <div
            class="d-flex flex-column bg-gray-100 pa-6 border-radius-lg"
          >
            <span class="mb-2 text-body text-xs">
              <span class="text-dark  ms-2">본인이 제공 가능한 정보를 키워드로 작성해주세요.</span>
            </span>            
            <span class="mb-2 text-body text-xs">
              <span class="text-dark  ms-2">예)</span>
            </span>
            <span class="mb-2 text-body text-xs"
              >
              <span class="text-dark ms-2 "
                >제조, 양산 경험 자문</span
              ></span
            >
            <span class="text-xs text-body"
              >
              <span class="text-dark ms-2 "
                >반도체 공정, 설비 관련 자문</span
              ></span
            >
          </div>          
      
          <html-editor :toolbar_show="true" @input="updateGiveInfo" :value="memberInfo.provide_info_json.give_info"></html-editor>
        </v-col>    
        <v-col cols="12">
          <h6 class="text-typo mb-4 text-sm">
            3. 제공받고자 하는 정보(Take)
          </h6>          
          <div
            class="d-flex flex-column bg-gray-100 pa-6 border-radius-lg"
          >
            <span class="mb-2 text-body text-xs">
              <span class="text-dark  ms-2">본인이 제공받고자 하는 정보를 키워드로 작성해주세요.</span>
            </span>            
            <span class="mb-2 text-body text-xs">
              <span class="text-dark  ms-2">예)</span>
            </span>
            <span class="mb-2 text-body text-xs">
              <span class="text-dark ms-2 ">1.프로그램 제작</span>
            </span>
            <span class="text-xs text-body">
              <span class="text-dark ms-2 ">2.사내 시스템 구축</span>
            </span>
          </div>          
      
          <html-editor :toolbar_show="true" @input="updateTakeInfo" :value="memberInfo.provide_info_json.take_info"></html-editor>
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
        임시 저장
        </v-btn>
      </v-row>        
    </div>
  </v-card>
</template>
<script>
import HtmlEditor from "../Components/HtmlEditor.vue";
export default {
  props: ['memberInfo'],
  name: "basic-info",
  components: {
    HtmlEditor,
  },  
  methods: {
    async updateMemberInfo() {
      
      this.loading = true
      var params = {
        "cate_key":"provide_info_json",
        "cate_value":this.memberInfo.provide_info_json
      }
      await this.$emit("updateMemberInfo",params)
      this.loading = false
    },
    updateGiveInfo(contents) {
      this.memberInfo.provide_info_json.give_info = contents
    },
    updateTakeInfo(contents) {
      this.memberInfo.provide_info_json.take_info = contents
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

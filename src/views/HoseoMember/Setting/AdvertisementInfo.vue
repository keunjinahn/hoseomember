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
                <span class="text-dark  ms-2">개인 소유의 홈페이지 혹은 광고하고자 하는 사진이나 정보가 있다면 첨부해주세요.</span>
              </span>            
              <span class="mb-2 text-body text-xs">
                <span class="text-dark  ms-2">사진이나 정보는 관련 정보를 찾는 사람에게 노출됩니다.</span>
              </span>            
            </div>          
            <v-row class="mt-2">
              <v-col cols="6" >
                <html-editor :toolbar_show="true" @input="updateProduct_1" :value="memberInfo.advertisement_info_json.product_1"></html-editor>
              </v-col>
              <v-col cols="6">
                <html-editor :toolbar_show="true" @input="updateProduct_2" :value="memberInfo.advertisement_info_json.product_2"></html-editor>
              </v-col>
            </v-row>
            <v-row class="mt-2">
              <v-col cols="6">
                <html-editor :toolbar_show="true" @input="updateProduct_3" :value="memberInfo.advertisement_info_json.product_3"></html-editor>
              </v-col>
              <v-col cols="6">
                <html-editor :toolbar_show="true" @input="updateProduct_4" :value="memberInfo.advertisement_info_json.product_4"></html-editor>
              </v-col>
            </v-row>
            
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
  name: "advertisement-info",
  components: {
    HtmlEditor,
  },  
  methods: {
    async updateMemberInfo() {
      
      this.loading = true
      var params = {
        "cate_key":"advertisement_info_json",
        "cate_value":this.memberInfo.advertisement_info_json
      }
      await this.$emit("updateMemberInfo",params)
      this.loading = false
    },
    updateSiteUrl(contents) {
      this.memberInfo.advertisement_info_json.site_url = contents
    },       
    updateProduct_1(contents) {
      this.memberInfo.advertisement_info_json.product_1 = contents
    },
    updateProduct_2(contents) {
      this.memberInfo.advertisement_info_json.product_2 = contents
    }, 
    updateProduct_3(contents) {
      this.memberInfo.advertisement_info_json.product_3 = contents
    }, 
    updateProduct_4(contents) {
      this.memberInfo.advertisement_info_json.product_4 = contents
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

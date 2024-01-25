<template>
  <v-card class="card-shadow border-radius-xl mt-6" id="career">
    <div class="px-6 py-6">
      <h5 class="text-h5 font-weight-bold text-typo">주요경력</h5>
    </div>
    <div class="px-6 pb-6 pt-0">
        <v-row class="mt-2">
          <!-- <v-col sm="6" cols="12" class="mb-sm-0 mb-16">
          <label class="text-xs text-typo font-weight-bolder ms-1"
            >한글이름</label
          >
          <p class="form-text text-muted text-xs ms-1 d-inline">
          (optional)
          </p>         
          <html-editor></html-editor>
        </v-col> -->
         <v-col cols="12">
          <h1 class="text-typo mb-4 text-sm">
            (자신의 이력 및 주요 경력을 줄 단위로 서술해주세요.)     
          </h1>           

          <div
            class="d-flex flex-column bg-gray-100 pa-6 border-radius-lg"
          >
            <span class="mb-2 text-body text-xs">
              <span class="text-dark  ms-2">1. 주요경력</span>
            </span>     
            <span class="mb-2 text-body text-xs">
              <span class="text-dark  ms-2">&nbsp- 반도체 Front/Back-end/PKG 공정및 설비, 제조 생산라인</span>
            </span>     
            <span class="mb-2 text-body text-xs">
              <span class="text-dark  ms-2">&nbsp&nbsp1)OOOO(주)(1992~1994): 진공 증착 설비 개발, 기능성 박막 개발</span>
            </span>                      
            <span class="mb-2 text-body text-xs">
              <span class="text-dark  ms-2">&nbsp&nbsp2)삼성전자 DS(반도체부문)(1995~2002)</span>
            </span>                      
            <span class="mb-2 text-body text-xs">
              <span class="text-dark  ms-2">&nbsp- FAB 기술 엔지니어 / 기술 그룹장(METAL 박막 설비/공정~2013.02)</span>
            </span>                      
            <span class="mb-2 text-body text-xs">
              <span class="text-dark  ms-2">2. 주요 업무</span>
            </span>                      
            <span class="mb-2 text-body text-xs">
              <span class="text-dark  ms-2">&nbsp1) 신제품 양산 이전(신제품 양산화 프로세스, 제품의 Spec 표준화)</span>
            </span>                      
            <span class="mb-2 text-body text-xs">
              <span class="text-dark  ms-2">&nbsp2) 생산 관리(제조 업무 표준화, 업무 효율화, 시스템화)</span>
            </span>                      
            <span class="mb-2 text-body text-xs">
              <span class="text-dark  ms-2">3. 현재 소속</span>
            </span>                      
            <span class="mb-2 text-body text-xs">
              <span class="text-dark  ms-2">&nbsp- 평택소재(주)에이블대표(2022~)</span>
            </span>                      
            <span class="mb-2 text-body text-xs">
              <span class="text-dark  ms-2">&nbsp- 사업내용 : 삼성전자 평택1/2 라인설비 PM</span>
            </span>                      

          </div>        
          <html-editor @input="updateMainCareer" :value="memberInfo.career_info_json.main_career"></html-editor>
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
import HtmlEditor from "./HtmlEditor.vue";
export default {
  props: ['memberInfo'],
  name: "career",
  components: {
    HtmlEditor,
  },  
  methods: {
    async updateMemberInfo() {
      
      this.loading = true
      await this.$emit("updateMemberInfo")
      this.loading = false
    },
    updateMainCareer(contents) {
      this.memberInfo.career_info_json.main_career = contents
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

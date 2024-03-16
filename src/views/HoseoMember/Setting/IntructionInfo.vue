<template>
  <v-card class="card-shadow border-radius-xl mt-6" id="intructioninfo">
    <div class="px-6 py-6">
      <h5 class="text-h5 font-weight-bold text-typo">자기소개</h5>
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
         <v-col cols="6">
          <label class="text-xs text-typo font-weight-bolder ms-1"
            >개인 특기</label
          >
          <v-text-field
            hide-details
            outlined
            color="rgba(0,0,0,.6)"
            light
            placeholder="예) 속독하기, 암산하기 등"
            class="
              font-size-input
              placeholder-lighter
              border border-radius-md
              text-light-input
              mt-2
            "
            v-model="memberInfo.introduction_info_json.specialty"
          >
          </v-text-field>
        </v-col>       
        <v-col cols="6">
          <label class="text-xs text-typo font-weight-bolder ms-1"
            >취미</label
          >
          <v-text-field
            hide-details
            outlined
            color="rgba(0,0,0,.6)"
            light
            placeholder="예) 경영 관련 도서 읽기, 명상하기 등"
            class="
              font-size-input
              placeholder-lighter
              border border-radius-md
              text-light-input
              mt-2
            "
            v-model="memberInfo.introduction_info_json.hobby"
          >
          </v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6">
          <label class="text-xs text-typo font-weight-bolder ms-1">좌우명</label>
          <v-text-field
            hide-details
            outlined
            color="rgba(0,0,0,.6)"
            light
            placeholder="예) 진인사대천명"
            class="
              font-size-input
              placeholder-lighter
              text-light-input
              border border-radius-md
              mt-2
            "
            v-model="memberInfo.introduction_info_json.motto"
          >
          </v-text-field>
        </v-col>
        <v-col cols="6">
          <label class="text-xs text-typo font-weight-bolder ms-1"
            >현재직업</label
          >
          <v-text-field
            hide-details
            outlined
            color="rgba(0,0,0,.6)"
            light
            placeholder="예) 반도체 전공정 설비 업체 대표"
            class="
              font-size-input
              placeholder-lighter
              text-light-input
              border border-radius-md
              mt-2
            "
            v-model="memberInfo.introduction_info_json.job"
          >
          </v-text-field>
        </v-col>
      </v-row>  
      <v-row>
        <v-col cols="12">
          <label class="text-xs text-typo font-weight-bolder ms-1">대학원 진학 동기</label>
          <v-text-field
            hide-details
            outlined
            color="rgba(0,0,0,.6)"
            light
            placeholder="예) 더 나은 내일을 위한 도약"
            class="
              font-size-input
              placeholder-lighter
              text-light-input
              border border-radius-md
              mt-2
            "
            v-model="memberInfo.introduction_info_json.motivation"
          >
          </v-text-field>
        </v-col>
        <v-col cols="12">
          <label class="text-xs text-typo font-weight-bolder ms-1"
            >대학원 과정에서 이루고자 하는 목표</label
          >
          <v-text-field
            hide-details
            outlined
            color="rgba(0,0,0,.6)"
            light
            placeholder="예) 논문 2편 작성"
            class="
              font-size-input
              placeholder-lighter
              text-light-input
              border border-radius-md
              mt-2
            "
            v-model="memberInfo.introduction_info_json.goal"
          >
          </v-text-field>
        </v-col>
        <v-col cols="12">
          <label class="text-xs text-typo font-weight-bolder ms-1"
            >졸업 후에 원하는 자신의 모습</label
          >
          <v-text-field
            hide-details
            outlined
            color="rgba(0,0,0,.6)"
            light
            placeholder="목표를 이룬 스스로의 모습을 상상하여 작성해주세요."
            class="
              font-size-input
              placeholder-lighter
              text-light-input
              border border-radius-md
              mt-2
            "
            v-model="memberInfo.introduction_info_json.figure"
          >
          </v-text-field>
        </v-col>        
        <v-col cols="12">

          <label class="text-xs text-typo font-weight-bolder ms-1"
            >자기소개용 슬라이드</label
          >
          <v-row>
            <v-col cols="6">          

              <v-file-input
                truncate-length="50"
                color="deep-purple accent-4"
                :placeholder="slide_file"
                class="
                  font-size-input
                  placeholder-lighter
                  text-light-input
                  border border-radius-md
                  mt-2
                "              
                @change="onChangeFile"  
                :loading="loading"
             ></v-file-input>

              <!-- <v-text-field
                hide-details
                outlined
                color="rgba(0,0,0,.6)"
                light
                placeholder=""
                class="
                  font-size-input
                  placeholder-lighter
                  text-light-input
                  border border-radius-md
                  mt-2
                "
                v-model="memberInfo.introduction_info_json.slide_file"
              >
              </v-text-field> -->
               
            </v-col> 
            <!-- <v-col cols="2">
              <v-btn
                elevation="0"
                :ripple="false"
                height="30"
                class="
                  font-weight-bold
                  text-uppercase
                  btn-default btn-outline-default
                  py-2
                  px-6
                  me-2
                "
                color="transparent"
                small
                style="margin-top: 10px;"
              >
                <v-icon>ni ni-archive-2 me-1</v-icon>
                파일선택
              </v-btn>             
            </v-col>              -->
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
export default {
  props: ['memberInfo'],
  name: "basic-info",
  components: {
  },  
  methods: {
    async updateMemberInfo() {
      
      this.loading = true
      var params = {
        "cate_key":"introduction_info_json",
        "cate_value":this.memberInfo.introduction_info_json
      }
      await this.$emit("updateMemberInfo",params)
      this.loading = false
    },
    async onChangeFile(content) {
      if(content != '' && content != null) {
          this.loading = true
          const fd = new FormData()
          fd.append('student_id', this.memberInfo.student_id)
          fd.append('file', content)
          
          let {data} = await this.$http.post('introduction_upload_file', fd)
          if (!data || !data.result || !data.filename)
            return this.$utils.$emit("modal-alert", "개인소개 자료 업로드 실패");
          this.memberInfo.introduction_info_json.slide_file = data.filename
          this.memberInfo.introduction_info_json.slide_file_src = data.filesource
          this.slide_file = this.memberInfo.introduction_info_json.slide_file.replace(this.memberInfo.student_id + "_",'')
          this.loading = false
      }       
    }
  },
  mounted() {
    this.slide_file = this.memberInfo.introduction_info_json.slide_file.replace(this.memberInfo.student_id + "_",'')
  },
  data() {
    return {
      loading: false,
      slide_file:null,
      gender: ["Female", "Male"],
      months: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "Octomber",
        "November",
        "December",
      ],
      days: [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
        "17",
        "18",
        "19",
        "20",
        "21",
        "22",
        "23",
        "24",
        "25",
        "26",
        "27",
        "28",
        "29",
        "30",
        "31",
      ],
      years: ["2021", "2020", "2019"],
      languages: ["English", "French", "Spanish"],
      skills: ["vuejs", "angular", "react"],
    };
  },
};
</script>

<template>
  <v-card class="card-shadow border-radius-xl mt-6" id="allowinfo">
    <div class="px-6 py-6">
      <h5 class="text-h5 font-weight-bold text-typo">정보 공개 여부</h5>
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
          <h6 class="text-typo mb-4 text-sm">
            개인정보 공개 수준
          </h6>        
          <h1 class="text-typo mb-4 text-sm">
            기초 인적사항은 주소록에 기재됩니다. 공개를 원하지 않는 항목이 있다면 선택해주세요.
          </h1>       
          <v-list>
              <v-list-item-group class="border-radius-sm">
                <v-list-item
                  :ripple="false"
                  v-for="setting in accountSettings"
                  :key="setting.text"
                  class="px-2 border-radius-sm mb-3"
                >
                  <v-switch
                    :ripple="false"
                    class="d-inline-flex mt-0 pt-0 switch ms-auto"
                    v-model="setting.switchState"
                    hide-details
                    color="#3a416ff2"
                    inset
                    @change="updateState()"
                  ></v-switch>
                  <v-list-item-content class="py-0">
                    <div class="ms-4 text-body text-sm">
                      {{ setting.text }}
                    </div>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>        
          <!-- <h6 class="text-typo mb-4 text-sm">
            개인정보 수집·이용 동의서
          </h6>        
          <div
            class="d-flex flex-column bg-gray-100 pa-6 border-radius-lg"
          >
            <span class="mb-2 text-body text-xs">
              <span class="text-dark  ms-2">호서대학교 경영대학원 학생정보 공유 프로그램의 개인정보 수집 이용 목적은 다음과 같습니다.
              </span>
            </span>            
            <span class="mb-2 text-body text-xs">
              <span class="text-dark  ms-2">1. 수집 목적: 학생 소개 PPT 제작, 학생 찾기가 가능한 DB 구축</span>
            </span>
            <span class="mb-2 text-body text-xs">
              <span class="text-dark ms-2 ">2. 필수 항목: 이름, 연락처, 이메일 주소</span>
            </span>
            <span class="text-xs text-body">
              <span class="text-dark ms-2 ">3. 선택 항목: 그 외</span>
            </span>
            <span class="text-xs text-body">
              <span class="text-dark ms-2 ">4. 보유·이용 기간: 수집일부터 본인 요청 시까지</span>
            </span>   
            <span class="text-xs text-body">
              <span class="text-dark ms-2 ">귀하는 위와 같이 개인정보를 수집·이용하는데 동의를 거부할 권리가 있습니다. 필수 수집 항목에 대한 동의를 거절하는 경우 이용이 제한될 수 있습니다. 선택 수집 항목에 동의를 하지 않으시는 경우 일부 항목에 대한 알림을 받지 못할 수 있습니다.</span>
            </span>                        
          </div>                  
          <v-switch
            :ripple="false"
            class="d-inline-flex mt-0 pt-0 switch ms-auto"
            v-model="myInfo.switchState"
            hide-details
            color="#3a416ff2"
            inset
            @change="updateState()"
          ></v-switch>
          <v-list-item-content class="py-0">
            <div class="ms-4 text-body text-sm">
              동의여부
            </div>
          </v-list-item-content>           -->
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
export default {
  props: ['memberInfo'],
  name: "allow-info",
  components: {
  },  
  methods: {
    async updateMemberInfo() {
      
      this.loading = true
      var params = {
        "cate_key":"allow_info_json",
        "cate_value":this.memberInfo.allow_info_json
      }
      await this.$emit("updateMemberInfo",params)
      this.loading = false
    },
    updateState() {
      this.memberInfo.allow_info_json.allow_phone_number = (this.accountSettings[0].switchState == true) ? 'Y' : 'N'
      this.memberInfo.allow_info_json.allow_email = (this.accountSettings[1].switchState == true)? 'Y' : 'N'
      this.memberInfo.allow_info_json.allow_job = (this.accountSettings[2].switchState == true)? 'Y' : 'N'
      this.memberInfo.allow_info_json.allow_my_info = (this.myInfo.switchState == true) ? 'Y' : 'N'
    },
    async getMemberData() {
      // let filters = [];
      // filters.push({ name: "student_id", op: "eq", val: this.memberInfo.student_id });
      // let q = JSON.stringify({ filters });
      // let params = { q };
      
      // let { data } = await this.$http.get("member", { params });    
      // let memberInfo = data.objects.find(v => v.student_id == this.memberInfo.student_id)
      // if (memberInfo.allow_info_json != undefined && memberInfo.allow_info_json.length > 5) {
      //   this.memberInfo.allow_info_json = JSON.parse(memberInfo.allow_info_json)  
      // }          
      this.accountSettings[0].switchState = (this.memberInfo.allow_info_json.allow_phone_number == 'Y')? true: false
      this.accountSettings[1].switchState = (this.memberInfo.allow_info_json.allow_email == 'Y')? true: false
      this.accountSettings[2].switchState = (this.memberInfo.allow_info_json.allow_job == 'Y')? true: false
      this.myInfo.switchState = (this.memberInfo.allow_info_json.allow_my_info == 'Y') ? true : false

    }
  },
  mounted() {
    this.getMemberData()
   
  },
  data() {
    return {
      loading: false,
      accountSettings: [
        {
          switchState: false,
          text: "연락처",
        },
        {
          switchState: false,
          text: "이메일 주소",
        },
      ],      
      myInfo: {
          switchState: false,
          text: "동의여부",
      }
      
    };
  },
};
</script>

<template>
  <v-card class="card-shadow border-radius-xl mt-6" id="basicinfo">
    <div class="px-6 py-6">
      <h5 class="text-h5 font-weight-bold text-typo">기본정보</h5>
    </div>
    <div class="px-6 pb-6 pt-0">
      <v-row>
        <v-col cols="6">
          <label class="text-xs text-typo font-weight-bolder ms-1"
            >한글이름</label
          >
          <v-text-field
            hide-details
            outlined
            color="rgba(0,0,0,.6)"
            light
            placeholder=""
            class="
              font-size-input
              placeholder-lighter
              border border-radius-md
              text-light-input
              mt-2
            "
            v-model="memberInfo.basic_info_json.name"
          >
          </v-text-field>
        </v-col>
        <v-col cols="6">
          <label class="text-xs text-typo font-weight-bolder ms-1"
            >영문이름</label
          >
          <v-text-field
            hide-details
            outlined
            color="rgba(0,0,0,.6)"
            light
            placeholder=""
            class="
              font-size-input
              placeholder-lighter
              border border-radius-md
              text-light-input
              mt-2
            "
            v-model="memberInfo.basic_info_json.ename"
          >
          </v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6">
          <label class="text-xs text-typo font-weight-bolder ms-1">전화번호</label>
          <v-text-field
            hide-details
            outlined
            color="rgba(0,0,0,.6)"
            light
            placeholder="010-000-0000"
            class="
              font-size-input
              placeholder-lighter
              text-light-input
              border border-radius-md
              mt-2
            "
            v-model="memberInfo.basic_info_json.phone_number"
          >
          </v-text-field>
        </v-col>
        <v-col cols="6">
          <label class="text-xs text-typo font-weight-bolder ms-1"
            >이메일</label
          >
          <v-text-field
            hide-details
            outlined
            color="rgba(0,0,0,.6)"
            light
            placeholder="example@email.com"
            class="
              font-size-input
              placeholder-lighter
              text-light-input
              border border-radius-md
              mt-2
            "
            v-model="memberInfo.basic_info_json.email"
          >
          </v-text-field>
        </v-col>
      </v-row>  
      <v-row>
        <v-col cols="6">
          <label class="text-xs text-typo font-weight-bolder ms-1">회사명</label>
          <v-text-field
            hide-details
            outlined
            color="rgba(0,0,0,.6)"
            light
            placeholder="(주)회사명"
            class="
              font-size-input
              placeholder-lighter
              text-light-input
              border border-radius-md
              mt-2
            "
            v-model="memberInfo.basic_info_json.company"
          >
          </v-text-field>
        </v-col>
        <v-col cols="6">
          <label class="text-xs text-typo font-weight-bolder ms-1"
            >직급</label
          >
          <v-text-field
            hide-details
            outlined
            color="rgba(0,0,0,.6)"
            light
            placeholder="대표(CEO)"
            class="
              font-size-input
              placeholder-lighter
              text-light-input
              border border-radius-md
              mt-2
            "
            v-model="memberInfo.basic_info_json.department"
          >
          </v-text-field>
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
  methods: {
    async updateMemberInfo() {
      this.loading = true
      var params = {
        "cate_key":"basic_info_json",
        "cate_value":this.memberInfo.basic_info_json
      }     
      await this.$emit("updateMemberInfo",params)
      this.loading = false
    }
  },
 
  mounted () {
  },
  data() {
    return {
      loading: false,
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

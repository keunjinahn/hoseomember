<template>
  <div>
    <v-card class="card-shadow border-radius-xl">
      <div class="card-header-padding">
        <h5 class="font-weight-bold text-h5 text-typo mb-0">
          호서대 MOT 원우 프로필 검색
        </h5>
        <p class="text-sm text-body mb-0">
          검색 대상 원우 이름이나 학번 또는 회사명을 입력하여 검색하세요
        </p>
      </div>
      <v-row style="margin-top:10px">
        <v-col cols="2">
          <v-select outlined dense hide-details
            v-model="selected_grade_type"
            :items="$utils.array_grade_type"
            label="기수선택"
            background-color="white"
            item-text="name"
            item-value="code"
            class="boder-1"
            @change="onChangeaGradeType"
          />
        </v-col>        
        <v-col cols="2">
          <v-select outlined dense hide-details
            v-model="selected_degree_type"
            :items="$utils.array_degree_type"
            label="학위선택"
            background-color="white"
            item-text="name"
            item-value="code"
            class="boder-1"
            @change="onChangeaDegreeType"
          />
        </v-col>      
        <v-col cols="2">
          <v-select outlined dense hide-details
            v-model="selected_regist_type"
            :items="$utils.array_regist_type"
            label="작성상태"
            background-color="white"
            item-text="name"
            item-value="code"
            class="boder-1"
            @change="onChangeaRegistType"
          />
        </v-col>                
        <v-col cols="4">
            <v-text-field
                outlined
                dense
                hide-details
                autofocus
                v-model="filter.querystring"
                background-color="white"
                class="boder-1"
                placeholder="검색어를 입력하세요"
                prepend-inner-icon="mdi-magnify"
                @keydown.enter="getMemberList()" />
        </v-col>
        <v-col cols="2">
          <v-btn
            color="#cb0c9f"
            class="
              font-weight-bolder
              btn-default
              bg-gradient-default
              py-5
              px-12
              ms-auto
              mt-sm-auto mt-4
            "
            small
            @click="getMemberList()"
          >
          검색
          </v-btn>          
        </v-col>

        <!-- <v-col cols="1.5">
            <v-btn
                depressed
                tile
                v-show="isAdminPermission()"
                class="flex-grow-1 ml-1"
                color="primary"
                @click="dialog.status_show=true;status_loading=false"
            >진행상황</v-btn>
        </v-col> -->
      </v-row>

      <v-card-text class="px-0 py-0">
        <v-data-table
          :headers="table.headers"
          :items="table.users"
          class="table"
          :page.sync="page"
          hide-default-footer
          @page-count="pageCount = $event"
          :items-per-page="itemsPerPage"
          mobile-breakpoint="0"
        >
          <!-- <template v-slot:top>
            <v-toolbar flat height="80">
              <v-row>
                <v-col cols="12" md="12">
                  <v-text-field
                    hide-details
                    class="
                      input-style
                      font-size-input
                      text-light-input
                      placeholder-light
                      input-icon
                    "
                    dense
                    flat
                    filled
                    solo
                    height="43"
                    v-model="search"
                    placeholder="조회"
                  >
                    <template slot="prepend-inner">
                      <v-icon color="#adb5bd" size=".875rem"
                        >fas fa-search</v-icon
                      >
                    </template>
                  </v-text-field>
                </v-col>
              </v-row>

              <v-spacer></v-spacer>

              
            </v-toolbar>
          </template> -->

          <template v-slot:item.name="{ item }">
            <div class="d-flex align-center">
              <v-avatar width="32" height="32" class="shadow border-radius-lg">
                <img v-if="JSON.parse(item.basic_info_json) !='' && JSON.parse(item.basic_info_json).profile_image != ''"
                  :src="$utils.parse_img_data(JSON.parse(item.basic_info_json).profile_image)"
                  alt="Avatar"
                  class="border-radius-lg"
                />
                <img v-else
                  src="@/assets/img/hoseomember/vface.jpg"
                  alt="Avatar"
                  class="border-radius-lg"
                />                
              </v-avatar>              
              <span class="text-sm font-weight-normal text-body text-left-margin-5">
                {{ item.name}}
              </span>
            </div>
          </template>

          <template v-slot:item.email="{ item }">
            <span class="text-sm font-weight-normal text-body">
              {{ (JSON.parse(item.allow_info_json).allow_email == 'Y' || selected_regist_type.code == 1)? item.email :'****'}}
            </span>
          </template>

          <template v-slot:item.phone_number="{ item }">
            <span class="text-sm font-weight-normal text-body">
              {{ (JSON.parse(item.allow_info_json).allow_phone_number == 'Y' || selected_regist_type.code == 1 )? item.phone_number :'****'}}
            </span>
          </template>
          <template v-slot:item.degree_type="{ item }">
            <span class="text-sm font-weight-normal text-body">
              {{ (item.degree_type == 1)? '석사':'박사'}}
            </span>
          </template>          
          <template v-slot:item.actions="{ item }">
            <v-btn
              outlined
              color="#fff"
              class="font-weight-bolder bg-gradient-primary py-4 px-7"
              small
              :disabled="selected_regist_type.code == 1 || item.basic_info_json == ''"
              @click="showProfileDialog(item)"
            >
              <v-icon size="12">fa-solid fa-address-card pe-2</v-icon> 프로필보기
            </v-btn>
          </template>
        </v-data-table>
      </v-card-text>
      <v-card-actions class="card-padding">
        <v-row>
          <v-col cols="6" lg="3" class="d-flex align-center">
            <span class="text-body me-3 text-sm">Items per page:</span>
            <v-text-field
              hide-details
              type="number"
              outlined
              min="-1"
              max="15"
              background-color="rgba(255,255,255,.9)"
              color="rgba(0,0,0,.6)"
              light
              :value="itemsPerPage"
              @input="itemsPerPage = parseInt($event, 10)"
              placeholder="Items per page"
              class="
                font-size-input
                placeholder-lighter
                text-color-light
                input-alternative input-focused-alternative input-icon
              "
            >
            </v-text-field>
            전체개수 : {{table.total}}
          </v-col>
          
          <v-col cols="6" class="ml-auto d-flex justify-end">
            <v-pagination
              prev-icon="fa fa-angle-left"
              next-icon="fa fa-angle-right"
              class="pagination"
              color="#cb0c9f"
              v-model="page"
              :length="pageCount"
              circle
            ></v-pagination>
          </v-col>
        </v-row>
      </v-card-actions>
    </v-card>

    <v-dialog v-model="profileDialog.show" max-width="1800px">
      <v-btn fab x-big dark depressed color="grey darken-1" class="school-detail-close" @click="onCloseProfile">
        <!-- <v-icon size="12">fas fa-times</v-icon>X -->
         <v-icon size="20">fas fa-times</v-icon>
      </v-btn>      
      <v-card class="card-shadow border-radius-xl">
        
        <profile-component :student_id="this.profileDialog.student_id" :key="this.profileDialog.student_id"></profile-component>
      </v-card>
    </v-dialog>

    <v-dialog v-model="dialogDelete" max-width="500px">
      <v-card class="card-shadow card-padding border-radius-xl">
        <v-card-title class="pt-0 text-h5 text-typo justify-center"
          >Are you sure you want to delete this item?</v-card-title
        >
        <v-card-actions class="pb-0">
          <v-spacer></v-spacer>
          <v-btn
            @click="closeDelete"
            elevation="0"
            :ripple="false"
            height="43"
            class="
              font-weight-bold
              text-capitalize
              btn-ls
              bg-gradient-light
              py-3
              px-6
            "
            >Cancel</v-btn
          >

          <v-btn
            @click="deleteItemConfirm"
            elevation="0"
            :ripple="false"
            height="43"
            class="
              font-weight-bold
              text-capitalize
              btn-ls btn-primary
              bg-gradient-primary
              py-3
              px-6
            "
            >Ok</v-btn
          >
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-dialog>    
  </div>
</template>
<script>
import ProfileComponent from "../HoseoProfile/ProfileComponent.vue";
export default {
  name: "paginated-tables",
  components: {
    ProfileComponent,
  },  
  data() {
    return {
      page: 1,
      pageCount: 0,
      itemsPerPage: 10,
      dialog: false,
      dialogDelete: false,
      editedIndex: -1,
      profileDialog: {
        show: false,
        student_id:null
      },
      filter:{
        querystring:''
      },
      selected_grade_type:null,
      selected_degree_type:null,
      selected_regist_type:null,
      editedItem: {
        name: "",
        email: "",
        age: "",
        salary: "",
      },
      defaultItem: {
        name: "",
        email: "",
        age: "",
        salary: "",
      },
      table: {
        users: [],
        loading: false,
        total: 0,
        options: {},
        headers: [
          {
            text: "순번",
            align: "start",
            cellClass: "border-bottom",
            sortable: false,
            value: "_index",
            class: "text-secondary font-weight-bolder opacity-7 border-bottom",
          },        
          {
            text: "원우이름",
            align: "start",
            cellClass: "border-bottom",
            sortable: true,
            value: "name",
            class: "text-secondary font-weight-bolder opacity-7 border-bottom",
          },
          {
            text: "소속회사",
            value: "company",
            sortable: false,
            class: "text-secondary font-weight-bolder opacity-7",
          },
          {
            text: "기수",
            value: "grade",
            sortable: true,
            class: "text-secondary font-weight-bolder opacity-7",
          },
          {
            text: "학위",
            sortable: true,
            value: "degree_type",
            class: "text-secondary font-weight-bolder opacity-7",
          },         
          {
            text: "전화번호",
            value: "phone_number",
            sortable: false,
            class: "text-secondary font-weight-bolder opacity-7",
          },
          {
            text: "이메일",
            value: "email",
            sortable: false,
            class: "text-secondary font-weight-bolder opacity-7",
          },        
          {
            text: "Actions",
            value: "actions",
            sortable: false,
            class: "text-secondary font-weight-bolder opacity-7",
          },
        ],        
      }
      
     };
  },
  mounted () {
    this.selected_grade_type = this.$utils.array_grade_type[0]
    this.selected_degree_type = this.$utils.array_degree_type[0]
    this.selected_regist_type = this.$utils.array_regist_type[2]
    this.getMemberList()
  },
  methods: {
    async getMemberList() {
      try {
        let filters = [];
        this.table.loading = true

        let params = {
          offset: ((this.page-1) * this.itemsPerPage),
          limit: this.itemsPerPage,
          querystring:this.filter.querystring,
          grade_type:this.selected_grade_type.code,
          degree_type:this.selected_degree_type.code,
          regist_type:this.selected_regist_type.code
        };
        let { data } = await this.$http.post("member_list", params);     
        this.table.total = data.num_results
        this.table.users = data.objects.map((v, i) => {
            v._index = i + (this.page - 1) * this.itemsPerPage + 1;
            return v;
        });
        this.pageCount =  Math.trunc(data.num_results / this.itemsPerPage) + 1
        this.table.loading = false
        this.$utils.setSessionTmot()
      } catch (ex) {
        console.error('member Update Error:')
        console.error(ex)        
      }

    },      
    showProfileDialog(item) {
      this.profileDialog.student_id = item.student_id
      this.profileDialog.show = true;
    },

    deleteItem(item) {
      this.editedIndex = this.users.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      this.users.splice(this.editedIndex, 1);
      this.closeDelete();
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.users[this.editedIndex], this.editedItem);
      } else {
        this.users.push(this.editedItem);
      }
      this.close();
    },
    onChangeaGradeType(grade_type){
      this.selected_grade_type = this.$utils.array_grade_type.find(v=>v.code == grade_type)
      this.getMemberList()
    },
    onChangeaDegreeType(degree_type){
      this.selected_degree_type = this.$utils.array_degree_type.find(v=>v.code == degree_type)
      this.getMemberList()
    },
    onChangeaRegistType(regist_type){
      this.selected_regist_type = this.$utils.array_regist_type.find(v=>v.code == regist_type)
      this.getMemberList()
    },
    onCloseProfile(){
      this.profileDialog.show = false;
      document.exitFullscreen()
    }
  },
  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
    'table.options': {
        handler () {
            this.getMemberList()
        },
        deep: true
    },    
  },
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
    },
    pages() {
      return this.pagination.rowsPerPage
        ? Math.trunc(Math.ceil(this.table.total / this.pagination.rowsPerPage))
        : 0;
    },
  },
};
</script>
<style lang="scss" scoped>
.school-detail-close {
  position: absolute;
  top: 70px; left: 7%;
  z-index: 10;
}
.school-detail-container {
  position: relative;
}
.text-left-margin-5 {
  margin-left:5px;
}
.boder-1{
  border: 1px solid gray;
  margin:0px 20px;
}
</style>
<template>
  <div>
    <input type="text" ref="idInput"  style="border: 0px solid;width:0px;"/>
    <v-container fluid class="py-6 " v-if="show">
      <div>
        <v-row>
          <v-col cols="9">

          </v-col>
          <v-col cols="2">
            <div class="ms-4 text-body text-sm t-align-right">
              프로필 화면 전환
            </div>   
          </v-col>      
          <v-col cols="1">
        
            <v-switch 
                  :ripple="false"
                  class="d-inline-flex mt-0 pt-0 switch ms-auto"
                  v-model="layoutType"
                  hide-details
                  color="#3a416ff2"
                  inset
                  @change="switchChange"
            ></v-switch> 
            
          </v-col>      
        </v-row>
    
      </div>
      <div v-if="layoutType">
        <div
        class="
          overflow-hidden
          position-relative
          mt-6
          title-height
        "
        :style="`background-image: url(${require('../../../assets/img/\hoseomember/title.png')}); background-position: 100%; background-size: cover;`"
        >   
          <h5 class="mb-1 text-h2 font-weight-bold  main-title">
            1. 자기소개 : {{this.memberInfo.basic_info_json.name}}
          </h5>   
        </div>
        <div  class="sub-block" >    
        </div>  
        <div  class="body-1-block overflow-hidden" >    
          <v-row>
            <v-col cols="6">
              <div class="body-1-title ">
                <h5 class="mb-1 text-h5 text-typo font-weight-bold  ">
                  개인 소개 정보
                </h5>              
              </div>
              <div class="body-introduce-block border-radius-lg">
                <v-card class="card-shadow border-radius-xl h-100" >
                  <div class="px-4 pt-4">
                    <h3 class="mb-0 text-h6 text-typo font-weight-bold">
                      * 내 프로필 기본 정보
                    </h3>
                  </div>
                  <div class="px-2 py-1">
                    <hr class="horizontal gray-light mt-1 mb-1" />
                    <v-list>
                      <v-list-item-group class="border-radius-sm">
                        <v-list-item :ripple="false" class="px-0 border-radius-sm">
                          <v-list-item-content class="py-0">
                            <div class="ms-4 text-body text-sm">
                              <strong class="text-dark">전화번호:</strong>
                              &nbsp; {{(memberInfo.allow_info_json.allow_phone_number == 'Y')? memberInfo.basic_info_json.phone_number:'***'}}
                            </div>
                          </v-list-item-content>
                        </v-list-item>
                        <v-list-item :ripple="false" class="px-0 border-radius-sm">
                          <v-list-item-content class="py-0">
                            <div class="ms-4 text-body text-sm">
                              <strong class="text-dark">이메일:</strong>
                              &nbsp; {{(memberInfo.allow_info_json.allow_email == 'Y')? memberInfo.basic_info_json.email:'***'}}
                            </div>
                          </v-list-item-content>
                        </v-list-item>
                      </v-list-item-group>
                    </v-list>
                  </div>              
                  <div class="px-4 pt-4">
                    <h3 class="mb-0 text-h6 text-typo font-weight-bold">
                      * 자기소개
                    </h3>
                  </div>
                  <div class="px-2 py-1">
                    <hr class="horizontal gray-light mt-1 mb-1" />
                    <v-list>           
                      <v-list-item-group class="border-radius-sm">
                        <v-list-item :ripple="false" class="px-0 border-radius-sm">
                          <v-list-item-content class="py-0">
                            <div class="ms-4 text-body text-sm">
                              <strong class="text-dark">특기:</strong>
                              &nbsp; {{memberInfo.introduction_info_json.specialty}}
                            </div>
                          </v-list-item-content>
                        </v-list-item>
                        <v-list-item :ripple="false" class="px-0 border-radius-sm">
                          <v-list-item-content class="py-0">
                            <div class="ms-4 text-body text-sm">
                              <strong class="text-dark">취미:</strong>
                              &nbsp; {{memberInfo.introduction_info_json.hobby}}
                            </div>
                          </v-list-item-content>
                        </v-list-item>         
                        <v-list-item :ripple="false" class="px-0 border-radius-sm">
                          <v-list-item-content class="py-0">
                            <div class="ms-4 text-body text-sm">
                              <strong class="text-dark">좌우명:</strong>
                              &nbsp; {{memberInfo.introduction_info_json.motto}}
                            </div>
                          </v-list-item-content>
                        </v-list-item>               
                        <v-list-item :ripple="false" class="px-0 border-radius-sm">
                          <v-list-item-content class="py-0">
                            <div class="ms-4 text-body text-sm">
                              <strong class="text-dark">현재직업:</strong>
                              &nbsp; {{memberInfo.introduction_info_json.job}}
                            </div>
                          </v-list-item-content>
                        </v-list-item>                             
                        <v-list-item :ripple="false" class="px-0 border-radius-sm">
                          <v-list-item-content class="py-0">
                            <div class="ms-4 text-body text-sm">
                              <strong class="text-dark">대학원 진학 동기:</strong>
                              &nbsp;{{memberInfo.introduction_info_json.motivation}}
                            </div>
                          </v-list-item-content>
                        </v-list-item>
                        <v-list-item :ripple="false" class="px-0 border-radius-sm">
                          <v-list-item-content class="py-0">
                            <div class="ms-4 text-body text-sm">
                              <strong class="text-dark">대학원 과정에서 이루고자 하는 목표:</strong>
                              &nbsp;{{memberInfo.introduction_info_json.goal}}
                            </div>
                          </v-list-item-content>
                        </v-list-item>       
                        <v-list-item :ripple="false" class="px-0 border-radius-sm">
                          <v-list-item-content class="py-0">
                            <div class="ms-4 text-body text-sm">
                              <strong class="text-dark">졸업 후에 원하는 자신의 모습:</strong>
                              &nbsp;{{memberInfo.introduction_info_json.figure}}
                            </div>
                          </v-list-item-content>
                        </v-list-item>                                          
                      </v-list-item-group>
                    </v-list>
                  </div>
                </v-card>              
              </div>        
              <div class="body-1-title">
                <h5 class="mb-1 text-h5 text-typo font-weight-bold  ">
                  주요경력 및 소속/기관정보
                </h5> 
              </div>
              <div class="body-career-block border-radius-lg">
                <div class="px-4 py-4">
                  <p class="text-sm text-body">
                    <html-editor  :toolbar_show="false" :value="memberInfo.career_info_json.main_career"></html-editor>
                  </p>
                </div>             
              </div>                 
            </v-col >
            <v-col cols="6">
                <div class="body-1-title ">
                  <h5 class="mb-1 text-h5 text-typo font-weight-bold  ">
                    ABL 주제
                  </h5>              
                </div>   
              <div class="body-abl-block border-radius-lg">
                <div class="px-4 py-4">
                  <p class="text-sm text-body">
                    <html-editor  :toolbar_show="false" :value="memberInfo.abl_title_info_json.abl_title"></html-editor>
                  </p>
                </div>                
              </div>                         
            </v-col>         
          </v-row>
        </div>      
        <div>
          <div
            class="
              overflow-hidden
              position-relative
              mt-6
              title-height
              
            "
            :style="`background-image: url(${require('../../../assets/img/\hoseomember/title.png')}); background-position: 100%; background-size: cover;`"
            >   
              <h5 class="mb-1 text-h2 font-weight-bold  main-title">
                3. GIVE & TAKE
              </h5>   
          </div>
          <div  class="sub-block" >    
          </div>  
          <div  class="body-1-block overflow-hidden" >    
            <v-row>
              <v-col cols="12">
                <div class="body-1-title ">
                  <h5 class="mb-1 text-h5 text-typo font-weight-bold  ">
                    TAKE (내가 받고자 하는 도움)
                  </h5>              
                </div>
                <div class="body-introduce-block border-radius-lg">
                  <div class="px-4 py-4">
                    <p class="text-sm text-body">
                      <html-editor  :toolbar_show="false" :value="memberInfo.provide_info_json.give_info"></html-editor>
                    </p>
                  </div>                        
                </div>        
                <div class="body-1-title">
                  <h5 class="mb-1 text-h5 text-typo font-weight-bold  ">
                    GIVE (내가 줄 수 있는 도움)
                  </h5> 
                </div>
                <div class="body-career-block border-radius-lg">
                  <div class="px-4 py-4">
                    <p class="text-sm text-body">
                      <html-editor  :toolbar_show="false" :value="memberInfo.provide_info_json.take_info"></html-editor>
                    </p>
                  </div>             
                </div>                 
              </v-col >        
            </v-row>
          </div>      
        </div>
        <div>
          <div
            class="
              overflow-hidden
              position-relative
              mt-6
              title-height
              
            "
            :style="`background-image: url(${require('../../../assets/img/\hoseomember/title.png')}); background-position: 100%; background-size: cover;`"
            >   
              <h5 class="mb-1 text-h2 font-weight-bold  main-title">
                3. 광고 및 소개
              </h5>   
          </div>
          <div  class="sub-block" >    
          </div>  
          <div  class="body-1-block overflow-hidden" >    
            <v-row>
              <v-col cols="6">
                <html-editor  :toolbar_show="false" :value="memberInfo.advertisement_info_json.product_1"></html-editor>           
              </v-col >     
              <v-col cols="6">
                <html-editor  :toolbar_show="false" :value="memberInfo.advertisement_info_json.product_2"></html-editor>           
              </v-col >                  
            </v-row>
            <v-row>
              <v-col cols="6">
                <html-editor  :toolbar_show="false" :value="memberInfo.advertisement_info_json.product_3"></html-editor>           
              </v-col >     
              <v-col cols="6">
                <html-editor  :toolbar_show="false" :value="memberInfo.advertisement_info_json.product_4"></html-editor>           
              </v-col >                  
            </v-row>           
          </div>      
        </div>      
      </div>
      <div v-else>
        <div 
          class="
            min-height-200
            border-radius-xl
            overflow-hidden
            position-relative
            mt-6
          "
          :style="`background-image: url(${require('../../../assets/img/curved-images/curved0.jpg')}); background-position: 50%; background-size: cover;`"
        >
          <span class="mask bg-gradient-primary opacity-6"></span>
          <app-bar-profile
            background="bg-transparent"
            has-bg
            @drawer-toggle="drawer = $event"
            :toggle-active="drawer"
          ></app-bar-profile>
        </div>    
        <v-card
          class="
            px-4
            py-4
            mx-6
            overflow-hidden
            border-radius-xl
            blur
            shadow-blur
            mt-n16
          "
          
        >
          <v-row :key="student_id" >
            <v-col cols="auto">
              <v-avatar width="74" height="74" class="shadow border-radius-lg">
                <img v-if="this.memberInfo.basic_info_json.profile_image"
                  :src="$utils.parse_img_data(this.memberInfo.basic_info_json.profile_image)"
                  alt="Avatar"
                  class="border-radius-lg"
                />
                 <img v-else
                  src="@/assets/img/hoseomember/vface.jpg"
                  alt="Avatar"
                  class="border-radius-lg"
                />               
              </v-avatar>
            </v-col>
            <v-col cols="auto" class="my-auto">
              <div class="h-100">
                <h5 class="mb-1 text-h5 text-typo font-weight-bold">
                  {{this.memberInfo.basic_info_json.name}}
                </h5>
                <p class="mb-0 font-weight-bold text-body text-sm">
                 <span>{{this.memberInfo.basic_info_json.department + '/' + this.memberInfo.basic_info_json.company}}</span>
                 <span>
                  &nbsp; <v-icon size="16" class="me-1">fa-solid fa-phone</v-icon>       
                  {{(memberInfo.allow_info_json.allow_phone_number == 'Y')? memberInfo.basic_info_json.phone_number:'***'}}         
                 </span>
                 <span>
                  &nbsp; <v-icon size="16" class="me-1">fa-regular fa-envelope</v-icon>       
                  {{(memberInfo.allow_info_json.allow_email == 'Y')? memberInfo.basic_info_json.email:'***'}}
                 </span>                 
                </p>
              </div>
            </v-col>
            <v-col>
              <div class="pos-right" v-if="!$utils.isMyProfile(memberInfo.student_id)">
                <v-btn
                  :ripple="false"
                  color="transparent"
                  class="text-dark font-weight-bolder text-h6 py-6 px-15 shadow-0"
                  small
                  simple
                  @click="openMessageInfoPopup"
                >
                  <v-icon size="16" class="me-1">fas fa-envelope me-1</v-icon>
                  편지 쓰기
                </v-btn>    
              </div>
         
            </v-col>
          </v-row>
        </v-card>  
        <p></p>
        <v-row >
          <v-col :cols="page_type" >
            <v-card class="card-shadow border-radius-xl h-100" >
              <div class="px-4 pt-4">
                <h3 class="mb-0 text-h6 text-typo font-weight-bold">
                  * 자기소개
                </h3>
              </div>
              <div class="px-2 py-1">
                <hr class="horizontal gray-light mt-1 mb-1" />
                <v-list>           
                  <v-list-item-group class="border-radius-sm">
                    <v-list-item :ripple="false" class="px-0 border-radius-sm">
                      <v-list-item-content class="py-0">
                        <div class="ms-4 text-body text-sm">
                          <strong class="text-dark">특기:</strong>
                          &nbsp; {{this.memberInfo.introduction_info_json.specialty}}
                        </div>
                      </v-list-item-content>
                    </v-list-item>
                    <v-list-item :ripple="false" class="px-0 border-radius-sm">
                      <v-list-item-content class="py-0">
                        <div class="ms-4 text-body text-sm">
                          <strong class="text-dark">취미:</strong>
                          &nbsp; {{this.memberInfo.introduction_info_json.hobby}}
                        </div>
                      </v-list-item-content>
                    </v-list-item>         
                    <v-list-item :ripple="false" class="px-0 border-radius-sm">
                      <v-list-item-content class="py-0">
                        <div class="ms-4 text-body text-sm">
                          <strong class="text-dark">좌우명:</strong>
                          &nbsp; {{this.memberInfo.introduction_info_json.motto}}
                        </div>
                      </v-list-item-content>
                    </v-list-item>               
                    <v-list-item :ripple="false" class="px-0 border-radius-sm">
                      <v-list-item-content class="py-0">
                        <div class="ms-4 text-body text-sm">
                          <strong class="text-dark">현재직업:</strong>
                          &nbsp; {{this.memberInfo.introduction_info_json.job}}
                        </div>
                      </v-list-item-content>
                    </v-list-item>                             
                    <v-list-item :ripple="false" class="px-0 border-radius-sm">
                      <v-list-item-content class="py-0">
                        <div class="ms-4 text-body text-sm">
                          <strong class="text-dark">대학원 진학 동기:</strong>
                          &nbsp;{{this.memberInfo.introduction_info_json.motivation}}
                        </div>
                      </v-list-item-content>
                    </v-list-item>
                    <v-list-item :ripple="false" class="px-0 border-radius-sm">
                      <v-list-item-content class="py-0">
                        <div class="ms-4 text-body text-sm">
                          <strong class="text-dark">대학원 과정에서 이루고자 하는 목표:</strong>
                          &nbsp;{{this.memberInfo.introduction_info_json.goal}}
                        </div>
                      </v-list-item-content>
                    </v-list-item>       
                    <v-list-item :ripple="false" class="px-0 border-radius-sm">
                      <v-list-item-content class="py-0">
                        <div class="ms-4 text-body text-sm">
                          <strong class="text-dark">졸업 후에 원하는 자신의 모습:</strong>
                          &nbsp;{{this.memberInfo.introduction_info_json.figure}}
                        </div>
                      </v-list-item-content>
                    </v-list-item>                                          
                  </v-list-item-group>
                </v-list>
              </div>
              <div class="px-4 pt-4">
                <h6 class="mb-0 text-h6 text-typo font-weight-bold">
                  * 주요경력
                </h6>
              </div>
              <div class="px-4 py-4">
                <p class="text-sm text-body">
                  <html-editor  :toolbar_show="false" :value="memberInfo.career_info_json.main_career"></html-editor>
                </p>
              </div>              
            </v-card>
          </v-col>
          <v-col :cols="page_type" >
            <v-card class="card-shadow border-radius-xl h-100" >
              <div class="px-4 pt-4">
                <h6 class="mb-0 text-h6 text-typo font-weight-bold">
                  * 제공 가능한 정보(Give)
                </h6>
              </div>
              <div class="px-4 py-4">
                
                <p class="text-sm text-body">
                  <html-editor  :toolbar_show="false" :value="memberInfo.provide_info_json.give_info"></html-editor>
                </p>
              </div>       
              <div class="px-4 pt-4">
                <h6 class="mb-0 text-h6 text-typo font-weight-bold">
                  * 제공받고자 하는 정보(Take)
                </h6>
              </div>
              <div class="px-4 py-4">
                <p class="text-sm text-body">
                  <html-editor  :toolbar_show="false" :value="memberInfo.provide_info_json.take_info"></html-editor>
                </p>
              </div>              
            </v-card>
          </v-col>
          <v-col :cols="page_type" v-show="$utils.isMyProfile(memberInfo.student_id)">
            <v-card class="card-shadow border-radius-xl h-100">
              <div class="px-4 pt-4">
                <h6 class="mb-0 text-h6 text-typo font-weight-bold">
                  수신 메시지
                </h6>
              </div>
              <div class="px-4 py-4">
                <v-data-table
                  :headers="table.headers"
                  :items="table.messages"
                  class="table"
                  :page.sync="page"
                  hide-default-footer
                  @page-count="pageCount = $event"
                  :items-per-page="itemsPerPage"
                  mobile-breakpoint="0"
                >         
                  <template v-slot:item="row">
                    <tr class="clickable-row" @click="onRecvMessageOpen(row.item)">
                      <td>
                        <div class="table-item-t-size">
                          {{row.item.send_name}}
                        </div>
                      </td>
                      <td >
                        <div class="table-item-t-size">
                          {{row.item.message.slice(0,20) + "..."}}
                        </div>
                      </td>
                      <td >
                        <div class="table-item-t-size">
                          {{row.item.created.slice(0,10)}}
                        </div>
                      </td>
                    </tr>
                  </template>
                </v-data-table>       
                <v-card-actions class="card-padding">
                  <v-row>
                    <v-col cols="6" lg="3" class="d-flex align-center">
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
                <!-- <v-list>
                  <v-list-item-group class="border-radius-sm">
                    <v-list-item
                      :ripple="false"
                      v-for="conversation in conversations"
                      :key="conversation.text"
                      class="px-0 border-radius-sm mb-2"
                    >
                      <v-avatar
                        width="48"
                        height="48"
                        class="shadow border-radius-lg me-4"
                      >
                        <img
                          :src="conversation.avatar"
                          alt="Avatar"
                          class="border-radius-lg"
                        />
                      </v-avatar>
                      <v-list-item-content>
                        <div class="d-flex align-center">
                          <div>
                            <h6
                              class="
                                mb-0
                                text-sm text-sm text-typo
                                font-weight-bold
                              "
                            >
                              {{ conversation.user }}
                            </h6>
                            <p class="mb-0 text-xs text-body">
                              {{ conversation.message }}
                            </p>
                          </div>
                          <div class="ms-auto">
                            <v-btn
                              :ripple="false"
                              small
                              text
                              width="auto"
                              class="pe-4 ps-0 mb-0 text-primary font-weight-bolder"
                            >
                              Reply
                            </v-btn>
                          </div>
                        </div>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list-item-group>
                </v-list> -->
              </div>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6">
            <v-card class="card-shadow border-radius-xl min-height-550">
              <div class="px-4 pt-4">
                <h6 class="mb-1 text-typo text-h6 font-weight-bold">ABL 주제</h6>
              </div>
              <div class="px-1 py-1">
                <html-editor  :toolbar_show="false" :value="memberInfo.abl_title_info_json.abl_title"></html-editor>
              </div>
            </v-card>
          </v-col>
          <v-col cols="6">
            <v-card class="card-shadow border-radius-xl  min-height-300">
              <div class="px-4 pt-4">
                <h6 class="mb-1 text-typo text-h6 font-weight-bold">광고 및 소개</h6>
              </div>
              <v-row>
                <v-col cols="6">
                  <div class="px-1 py-1" >
                    <html-editor  :toolbar_show="false" :value="memberInfo.advertisement_info_json.product_1" :auto_scale="true"></html-editor>
                  </div>
                </v-col>
                <v-col cols="6">
                  <div class="px-1 py-1" >
                    <html-editor  :toolbar_show="false" :value="memberInfo.advertisement_info_json.product_2" :auto_scale="true"></html-editor>
                  </div>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="6">
                  <div class="px-1 py-1" >
                    <html-editor  :toolbar_show="false" :value="memberInfo.advertisement_info_json.product_3" :auto_scale="true"></html-editor>
                  </div>
                </v-col>
                <v-col cols="6">
                  <div class="px-1 py-1" >
                    <html-editor  :toolbar_show="false" :value="memberInfo.advertisement_info_json.product_4" :auto_scale="true"></html-editor>
                  </div>
                </v-col>
              </v-row>             

            </v-card>
          </v-col>      
        </v-row>
        <v-dialog v-model="messageInfo.show" max-width="500px">
          <v-card class="card-shadow card-padding border-radius-xl" v-if="messageInfo.type == 'WRITE'" >
            <v-card-title class="pt-0 text-h5 text-typo justify-center"
              >원우에게 보낼 메시지를 입력하세요~</v-card-title
            >
            <v-card>
              <div>
                <v-row class="mt-2">
                  <v-col sm="6" cols="12">
                    <label class="text-xs text-typo font-weight-bolder ms-1"
                      >보내는 사람</label
                    >
                    <v-text-field
                      hide-details
                      outlined
                      color="rgba(0,0,0,.6)"
                      light
                      placeholder="보내는이"
                      class="
                        font-size-input
                        placeholder-lighter
                        text-light-input
                        border border-radius-md
                        mt-2
                      "
                      disabled
                      v-model="messageInfo.sendName"
                    >
                    </v-text-field>
                  </v-col>
                  <v-col sm="6" cols="12">
                    <label class="text-xs text-typo font-weight-bolder ms-1"
                      >받는 사람</label
                    >
                    <v-text-field
                      hide-details
                      outlined
                      color="rgba(0,0,0,.6)"
                      light
                      placeholder="받는이"
                      class="
                        font-size-input
                        placeholder-lighter
                        text-light-input
                        border border-radius-md
                        mt-2
                      "
                      disabled
                      v-model="messageInfo.recvName"
                    >
                    </v-text-field>
                  </v-col>
                </v-row>

                <v-row class="mt-2">
                 
                  <v-col sm="12" cols="12" >
                     <label class="text-xs text-typo font-weight-bolder ms-1"
                      >보낼 메시지</label
                    >
                    <textarea
                      type="text"
                      class="abl-input"
                      placeholder="여기에 메시지를 입력하세요..."
                      v-model="messageInfo.message"
                    ></textarea>                                 
                  </v-col>
                </v-row>
              </div>
            </v-card>            
            <v-card-actions class="pb-0">
              <v-spacer></v-spacer>
              <v-btn
                @click="messageInfo.show=false"
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
                >닫기</v-btn
              >

              <v-btn
                @click="sendMessage"
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
                >보내기</v-btn
              >
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
          <v-card class="card-shadow card-padding border-radius-xl" v-else >
            <v-card-title class="pt-0 text-h5 text-typo justify-center"
              >받은메시지</v-card-title
            >
            <v-card>
              <div>
                <v-row class="mt-2">
                  <v-col sm="12" cols="12">
                    <label class="text-xs text-typo font-weight-bolder ms-1"
                      >보낸사람</label
                    >
                    <v-text-field
                      hide-details
                      outlined
                      color="rgba(0,0,0,.6)"
                      light
                      placeholder="보내는이"
                      class="
                        font-size-input
                        placeholder-lighter
                        text-light-input
                        border border-radius-md
                        mt-2
                      "
                      disabled
                      v-model="messageInfo.sendName"
                    >
                    </v-text-field>
                  </v-col>
                  
                </v-row>

                <v-row class="mt-2">
                 
                  <v-col sm="12" cols="12" >
                     <label disabled class="text-xs text-typo font-weight-bolder ms-1"
                      >받은 메시지</label
                    >      
                    <textarea
                      type="text"
                      class="abl-input"
                      placeholder="여기에 메시지를 입력하세요..."
                      v-model="messageInfo.message"
                    ></textarea>                                 
                  </v-col>
                </v-row>
              </div>
            </v-card>            
            <v-card-actions class="pb-0">
              <v-spacer></v-spacer>
              <v-btn
                @click="messageInfo.show=false"
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
                >닫기</v-btn
              >

              
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>          
        </v-dialog>         
      </div>
    </v-container>
    <div  v-else>
      정보 조회중...
    </div>  
  </div>


</template>
<script>
import HtmlEditor from "../Components/HtmlEditor.vue";
import moment from "moment";
export default {
  name: "Profile-Overview",
  props: ['student_id'],  
  components: {
    HtmlEditor,
  },    
  methods: {
    async getMemberInfo() {
      try {
        let filters = [];
        filters.push({ name: "student_id", op: "eq", val: this.memberInfo.student_id });
        let q = JSON.stringify({ filters });
        let params = { q };
        let { data } = await this.$http.get("member", { params });
        
        let memberInfo = data.objects.find(v => v.student_id == this.memberInfo.student_id)
        if (memberInfo.basic_info_json != undefined && memberInfo.basic_info_json.length > 5) {
          this.memberInfo.basic_info_json = JSON.parse(memberInfo.basic_info_json)
        }
        if (memberInfo.introduction_info_json != undefined && memberInfo.introduction_info_json.length > 5) {
          this.memberInfo.introduction_info_json = JSON.parse(memberInfo.introduction_info_json)
        }
        if (memberInfo.career_info_json != undefined && memberInfo.career_info_json.length > 5) {
          this.memberInfo.career_info_json = JSON.parse(memberInfo.career_info_json)
        }
        if (memberInfo.provide_info_json != undefined && memberInfo.provide_info_json.length > 5) {
          this.memberInfo.provide_info_json = JSON.parse(memberInfo.provide_info_json)
          
        }
        if (memberInfo.abl_title_info_json != undefined && memberInfo.abl_title_info_json.length > 5) {
          this.memberInfo.abl_title_info_json = JSON.parse(memberInfo.abl_title_info_json)
        }
        if (memberInfo.allow_info_json != undefined && memberInfo.allow_info_json.length > 5) {
          this.memberInfo.allow_info_json = JSON.parse(memberInfo.allow_info_json)
        }
        if (memberInfo.advertisement_info_json != undefined && memberInfo.advertisement_info_json.length > 5) {
          this.memberInfo.advertisement_info_json = JSON.parse(memberInfo.advertisement_info_json)
        }
        this.memberInfo.id = memberInfo.id

      } catch (ex) {
        console.error('member Update Error:')
        console.error(ex)
      } finally{
        this.show = true
        this.switchChange()
      }

    },
    switchChange() {
      if (!document.fullscreenElement) {
          document.documentElement.requestFullscreen();
      } else {
          document.exitFullscreen();
      }
      setTimeout(() => {
        this.$refs.idInput.focus()
      }, 1000);
    },
    openMessageInfoPopup() {
      this.messageInfo.show = true
      this.messageInfo.sendStudentId = this.$utils.myMemberInfo.student_id
      this.messageInfo.recvStudentId = this.student_id
      this.messageInfo.message = ''
      this.messageInfo.sendName = this.$utils.myMemberInfo.name
      this.messageInfo.recvName = this.memberInfo.basic_info_json.name
      this.messageInfo.type = 'WRITE'
    },
    updateMessageInfo(contents) {
      this.messageInfo.message = contents
    },
    async sendMessage() {
      var params = {
        "created": moment().format("YYYY-MM-DD HH:mm:ss"),
        "send_student_id": this.messageInfo.sendStudentId,
        "recv_student_id": this.messageInfo.recvStudentId,
        "send_name": this.messageInfo.sendName,
        "recv_name": this.messageInfo.recvName,
        "message": this.messageInfo.message,
        
      }
      try {
        let new_res = await this.$http.post('message', params)
        if (new_res.status == 202) {
          this.$utils.$emit("modal-alert","잘못된 호출입니다.");                  
          return
        }
        this.$utils.$emit(
          "modal-alert",
          "메시지가 전송되었습니다."
        );           
      }
      catch (ex) {
        this.$utils.$emit("modal-alert","신규입력 Error:" + ex.message);                  
          
      }
      finally {
        this.messageInfo.show = false
     
      }      

    },
    async getMessageList() {
      try {
        this.table.loading = true
        // let filters_or = []
        // let filters_and = []
        // let order_by = []
        // order_by.push({field: 'id', direction: 'desc'})
        // filters_and.push({name:'recv_student_id', op:'eq', val:this.$utils.myMemberInfo.student_id})
        // let q = {
        //     filters: [{or: filters_or}, {and: filters_and}],
        //     order_by
        // }
        // let params = {
        //     q: q,
        //     results_per_page: this.itemsPerPage,
        //     page: this.page,
        // };

        let order_by = []
        order_by.push({field: 'id', direction: 'desc'})
        let q = JSON.stringify({
          filters: [{ name: "recv_student_id", op: "eq", val: this.$utils.myMemberInfo.student_id }],
          order_by
        });
        let params = {
            q: q,
            results_per_page: 1000,
            page: this.page,
        };

        let { data } = await this.$http.get("message", { params });     
        this.table.total = data.num_results
        this.table.messages = data.objects.map((v, i) => {
            v._index = i + (this.page - 1) * this.itemsPerPage + 1;
            return v;
        });
        this.pageCount = (data.num_results / this.itemsPerPage) + 1
        this.table.loading = false
      } catch (ex) {
        console.error('member Update Error:')
        console.error(ex)        
      }      
    },
    onRecvMessageOpen(item) {
      this.messageInfo.type = 'READ'
      this.messageInfo.show = true
      this.messageInfo.sendName = item.send_name
      this.messageInfo.message = item.message
    }
  },
  mounted() {
      
    this.show = false

    this.memberInfo = Object.assign({},this.$utils.memberInfo)
    this.memberInfo.student_id = this.student_id
    this.page_type = (this.$utils.isMyProfile(this.memberInfo.student_id) == true) ? 4 : 6;
    this.getMemberInfo()
    if(this.$utils.isMyProfile(this.memberInfo.student_id))
      this.getMessageList()

  },    
  computed: {
    pages() {
      return this.pagination.rowsPerPage
        ? Math.ceil(this.table.total / this.pagination.rowsPerPage)
        : 0;
    },
  },  
  data: function () {
    return {
      fullscreen:true,
      page_type:6,
      page: 1,
      pageCount: 0,
      itemsPerPage: 10,      
      scrollInterval:null,
      show: false,
      memberInfo: this.$utils.memberInfo,
      layoutType: false,
      messageInfo: {
        show: false,
        sendStudentId: null,
        recvStudentId: null,
        sendName: '',
        recvName:'',
        message: '',
        type:'READ'
      },
      table: {
        messages: [],
        loading: false,
        total: 0,
        options: {},
        headers: [
          {
            text: "원우",
            align: "start",
            cellClass: "border-bottom",
            sortable: false,
            value: "send_name",
            class: "mb-0 text-sm text-typo font-weight-bolder opacity-7 border-bottom",
          },
          {
            text: "메시지",
            value: "message",
            class: "mb-0  text-sm text-typo font-weight-bolder opacity-7",
          },
          {
            text: "보낸일",
            value: "created",
            class: "mb-0  text-sm text-typo font-weight-bolder opacity-7",
          },
        ],        
      },
      accountSettings: [
        {
          switchState: true,
          text: "Email me when someone follows me",
        },
        {
          switchState: false,
          text: "Email me when someone answers on...",
        },
        {
          switchState: true,
          text: "Email me when someone mentions me...",
        },
      ],
      applicationSettings: [
        {
          switchState: false,
          text: "New launches and projects",
        },
        {
          switchState: true,
          text: "Monthly product updates",
        },
        {
          switchState: false,
          text: "Subscribe to newsletter",
        },
      ],
      conversations: [
        {
          avatar: require("@/assets/img/kal-visuals-square.jpg"),
          user: "Sophie B.",
          message: "Hi! I need more information..",
        },
        {
          avatar: require("@/assets/img/marie.jpg"),
          user: "Anne Marie",
          message: "Awesome work, can you..",
        },
        {
          avatar: require("@/assets/img/ivana-square.jpg"),
          user: "Ivanna",
          message: "About files I can..",
        },
        {
          avatar: require("@/assets/img/team-4.jpg"),
          user: "Peterson",
          message: "Have a great afternoon..",
        },
        {
          avatar: require("@/assets/img/team-3.jpg"),
          user: "Nick Daniel",
          message: "Hi! I need more information..",
        },
      ],
      cards: [
        {
          image: require("@/assets/img/home-decor-1.jpg"),
          title: "Project #2",
          style: "Modern",
          description:
            "As Uber works through a huge amount of internal management turmoil.",
          avatars: [
            {
              image: require("@/assets/img/team-1.jpg"),
              name: "Elena Morison",
            },
            {
              image: require("@/assets/img/team-2.jpg"),
              name: "Ryan Milly",
            },
            {
              image: require("@/assets/img/team-3.jpg"),
              name: "Nick Daniel",
            },
            {
              image: require("@/assets/img/team-4.jpg"),
              name: "Peterson",
            },
          ],
        },
        {
          image: require("@/assets/img/home-decor-2.jpg"),
          title: "Project #1",
          style: "Scandinavian",
          description:
            "Music is something that every person has his or her own specific opinion about.",
          avatars: [
            {
              image: require("@/assets/img/team-3.jpg"),
              name: "Nick Daniel",
            },
            {
              image: require("@/assets/img/team-4.jpg"),
              name: "Peterson",
            },
            {
              image: require("@/assets/img/team-1.jpg"),
              name: "Elena Morison",
            },
            {
              image: require("@/assets/img/team-2.jpg"),
              name: "Ryan Milly",
            },
          ],
        },
        {
          image: require("@/assets/img/home-decor-3.jpg"),
          title: "Project #3",
          style: "Minimalist",
          description:
            "Different people have different taste, and various types of music.",
          avatars: [
            {
              image: require("@/assets/img/team-4.jpg"),
              name: "Peterson",
            },
            {
              image: require("@/assets/img/team-3.jpg"),
              name: "Nick Daniel",
            },
            {
              image: require("@/assets/img/team-2.jpg"),
              name: "Ryan Milly",
            },
            {
              image: require("@/assets/img/team-1.jpg"),
              name: "Elena Morison",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
$control-width: 170px;
.title-height {
  min-height: 50px;
}
.main-title{
  margin-left:50px;
  color: white;
}
.sub-block {
  background-color: #c7c3bd;
  margin:5px 0px;
  height:20px;

}
.body-1-block{
  min-height: 600px;
  border: 3px solid black ;
  padding: 5px 3px;
}
.body-1-title{
  border: 2px solid rgb(71, 20, 100) ;
  width:50%;
  line-height: 40px;
  vertical-align: auto;
  padding: 5px 5px;
}
.body-introduce-block{
  border: 2px solid rgb(71, 20, 100) ;
  min-height: 200px;
  margin:5px 0px;
}
.body-career-block{
  border: 2px solid rgb(71, 20, 100) ;
  min-height: 300px;
  margin:5px 0px;
}
.body-abl-block{
  border: 2px solid rgb(71, 20, 100) ;
  min-height: 93%;
  margin:5px 0px;
}
.centered-element {
  margin: 0;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
.t-align-right{
  text-align: right;
}
.pos-right{
  float: right;  
}
.msg-box-h {
  min-height: 200px;
}
.abl-input {
    padding: 5px 5px;
    width: 100%;
    outline: none;
    font-size: 12px;
    border : 1px solid #c7c3bd;
    min-height:200px;
    &:hover, &:focus {
        background-color: #ffffff;
    }
}
.table-item-t-size{
  font-size: 10px;
}
.clickable-row {
  user-select: none;
  cursor: pointer;

}
tr {
  &:hover, &:focus {
      border:1px solid blue;
  }  
}
.min-height-550{
  min-height: 550px;
}
.home {
  width: 100vw;
  height: 100vh;
  left: 0;
  z-index: -1;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
#wrap {
    	width: 100%;
        height: 100vh;
        overflow: auto;
        scroll-snap-type: mandatory;}
        
#wrap .page {
    	scroll-snap-align: center;
        display: inline-block;
        width: 100%;
        height: 100vh;
        padding: 100px;
        font-size: 70px;
        text-align: center;
        box-sizing: border-box;
        color: #fff;}
</style>

<template>
  <v-app>
    <router-view></router-view>
    <modal />
    <v-dialog v-model="dialog.show" max-width="500px">
      <v-card>
        <v-card-title>{{dialog.message}}</v-card-title>
        <v-card-actions>
          <v-btn tile depressed class="flex-grow-1" @click="dialog.show = false">확인</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>  
  </v-app>    
</template>

<script>
import Modal from './views/HoseoMember/Components/Modal'
export default {
  components: {Modal},
  mounted () {
    this.$utils.$on('dialog', params => {
      this.dialog.show = params.show
      this.dialog.message = params.message || ''
    })
  },
  data () {
    return {
      dialog: {
        show: false,
        message: ''
      }
    }
  }
}
</script>

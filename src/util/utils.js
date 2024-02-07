import Vue from 'vue'
import hljs from "highlight.js";
const uitls = new Vue({
    methods: {
        splitProfessor(names) {
            let res = names ? names.split(',').map(v => v.trim()) : ['', '', '', '']
            if (res.length < 4) {
                let stub = Array.apply(null, Array(4 - res.length)).map(() => '')
                res = res.concat(stub)
            }
            return res
        },
        parse_img_data(html_img_data) {
            if (html_img_data == null || html_img_data == undefined)
                return ''
            var img_data = html_img_data.slice(13, html_img_data.length - 6)
            return img_data
        },
        getWebURL() {
            // return (process.env.LOCAL_SERVER === 'Y') ? 'http://localhost:8080' : 'http://118.128.43.7:30443'
            // return 'http://localhost:8080'
            return 'https://abrain.hoseo.ac.kr'
            // return 'http://118.128.43.7:30443'
        },
        scrollToTop() {
            // window.scrollTo(x좌표, y좌표)
            window.scrollTo(0, 0);
        },
        isMyProfile(student_id) {
            if (this.myMemberInfo.student_id == student_id)
                return true
            return false
        },
        parse_img_data(html_img_data) {
            if (!html_img_data || html_img_data == null || html_img_data == undefined || html_img_data == '')
                return "@/assets/img/hoseomember/vface.jpg"
            var img_data = html_img_data.slice(13, html_img_data.length - 6)
            return img_data
        },
    },
    created() {
    },
    data() {
        return {
            user: null,
            myMemberInfo: {
                student_id: '',
                name: ''
            },
            memberInfo: {
                id: null,
                student_id: '',
                basic_info_json: {
                    name: '',
                    ename: '',
                    phone_number: '',
                    email: '',
                    company: '',
                    department: '',
                    profile_image: ''
                },
                introduction_info_json: {
                    specialty: '',
                    hobby: '',
                    motto: '',
                    motivation: '',
                    goal: '',
                    job: '',
                    figure: '',
                    slide_file: ''
                },
                career_info_json: {
                    main_career: '',
                },
                provide_info_json: {
                    give_info: '',
                    take_info: '',
                },
                abl_title_info_json: {
                    abl_title: '',
                },

                allow_info_json: {
                    allow_phone_number: '',
                    allow_email: '',
                    allow_job: '',
                    allow_my_info: '',
                },
                advertisement_info_json: {
                    site_url: '',
                    product_1:'',
                    product_2:'',
                    product_3:'',
                    product_4:'',
                }
            },
            array_grade_type: [
                { name: '전체', code: 0 },
                { name: '9기', code: 9 },
                { name: '8기', code: 8 },
                { name: '7기', code: 7 },
                { name: '6기', code: 6 },
                { name: '5기', code: 5 },
                { name: '4기', code: 4 },
                { name: '3기', code: 3 },
                { name: '2기', code: 2 },
                { name: '1기', code: 1 },
              ],       
            array_degree_type: [
                { name: '전체', code: 0 },
                { name: '석사', code: 1 },
                { name: '박사', code: 2 },
              ],     
            array_regist_type: [
                { name: '전체', code: 0 },
                { name: '미작성', code: 1 },
                { name: '작성', code: 2 },
              ],                  
                  
        }
    }
})

export default {
    install(Main) {
        Main.prototype.$utils = uitls
    }
}
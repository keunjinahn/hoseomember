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
        }
    },
    created() {
    },
    data() {
        return {
            myMemberInfo: {
                student_id: '20215403',
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
                    department: ''
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
                    site_url: ''
                }
            },
        }
    }
})

export default {
    install(Main) {
        Main.prototype.$utils = uitls
    }
}
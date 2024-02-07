<template>
  <div
    class="quill mt-3"
  > 
    <div :id="toolbarId" :class="{'toolbar-hide':toolbar_show == false}">
      <div class="ql-formats" v-show="toolbar_show">
        <div v-if="only_image==false">
          <button class="ql-bold"></button>
          <button class="ql-italic"></button>
          <button class="ql-underline"></button>
          <button class="ql-link"></button>
          <button class="ql-blockquote"></button>
          <button class="ql-code"></button>
          <button class="ql-image"></button>
          <button type="button" class="ql-list" value="ordered"></button>
          <button type="button" class="ql-list" value="bullet"></button>
        </div>
        <div v-else>
          <button class="ql-image"></button>

        </div>        
      </div>
    </div>
    <div :id="editorId" :name="name" class="edit-h" ref="editor"></div>
  </div>
</template>
<script>
import "quill/dist/quill.snow.css";
// :class="{'auto-scale':auto_scale == true}" 
export default {
  name: "html-editor",
  props: {
    value: {
      type: String,
      default: "",
    },
    toolbar_show: {
      type: Boolean,
      default:true,
    },  
    only_image: {
      type: Boolean,
      default:false,
    },      
    auto_scale:{
      type:Boolean,
      default:false,
    },
    name: String,
  },
  data() {
    return {
      editor: null,
      content: null,
      lastHtmlValue: "",
      editorId: null,
      toolbarId: null,
    };
  },
  methods: {
    initialize(Quill) {
      this.editor = new Quill(`#${this.editorId}`, {
        theme: "snow",
        modules: {
          toolbar: `#${this.toolbarId}`,
        },
      });
      if (this.value.length > 0) {
        this.editor.pasteHTML(this.value);
      }
      let editorRef = this.$refs.editor;
      let node = editorRef.children[0];
      this.editor.on("text-change", () => {
        let html = node.innerHTML;
        if (html === "<p><br></p>") {
          html = "";
        }
        this.content = html;
        this.$emit("input", this.content);
      });
      console.log("toolbar_show :",this.toolbar_show)
      this.editor.enable(this.toolbar_show);    
    },
    pasteHTML() {
      if (!this.editor) {
        return;
      }
      this.editor.pasteHTML(this.value);
    },
    randomString() {
      let text = "";
      let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      for (let i = 0; i < 5; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
      return text;
    },
  },
  async mounted() {
    let Quill = await import("quill");
    Quill = Quill.default || Quill;
    this.editorId = this.randomString();
    this.toolbarId = this.randomString();
    this.$nextTick(() => {
      this.initialize(Quill);
    });
  },
  watch: {
    value(newVal) {
      if (newVal !== this.content) {
        this.pasteHTML(newVal);
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.toolbar-hide {
  border-bottom: 0px !important;
}
.edit-h {
  min-height: 200px;
}
.auto-scale {
  
}
</style>
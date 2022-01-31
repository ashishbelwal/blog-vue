<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="pr-60">
        <div class="pageHeader">
          <div class="title">
            <h2> Edit Blog </h2>
              
          </div>
          
          <div class="quickButtons">
             
          </div>
        </div>
        <div class="blogList">
          <div class="blogTemplate">
            <div class="blogWrapper">
              <v-row>
                
                <v-col cols="12">
                    <v-form
                        ref="form"
                        v-model="valid"
                        lazy-validation
                    >
                        <v-text-field
                        v-model="title"
                        :rules="titleRules"
                        label="Title of Blog"
                        required
                        > </v-text-field>

                        <v-text-field
                        v-model="author"
                        :rules="authorRules"
                        label="Author"
                        required
                        ></v-text-field>

                        <v-textarea
                        v-model="body"
                        :rules="bodyRules"
                        label="Whats on your mind...."
                        required
                        >
                        </v-textarea>

                        <v-btn
                        color="green"
                        elevation="0"
                        rounded
                        dark
                        @click="validate"
                        class="mr-2"
                        >save</v-btn>

                        <v-btn
                        color="red"
                        elevation="0"
                        rounded
                        dark
                        @click="reset"
                        >Reset</v-btn>
                    </v-form>
                </v-col>
              </v-row>
            </div>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
    name: 'EditBlog',

    data: () => ({
        valid: true,
        title: '',
        titleRules: [
            v => !!v || 'Title is required',
            v => (v && v.length >= 5) || 'Title must be greater than 5 characters',
        ],
        author: "this.blogWithId[0].author",
        authorRules: [
            v => !!v || 'Name is required',
            v => (v && v.length <= 5) || 'Author name must be greater than 5 characters',
        ],
        body: "this.blogWithId[0].title",
        bodyRules: [
            v => !!v || 'Blog content is required',
        ],
      
    }),
    methods: {
      ...mapActions(["fetchBlogWithId", "updateBlog"]),
      validate () {
        this.$refs.form.validate()
        let content = {
            body: this.body,
            id: this.$route.params.id,
            title: this.title,
            userId: 1
        }
        this.updateBlog(content);
        alert("New Blog has been edited");
        this.$router.push('/blogDetail/' + this.$route.params.id)
      },
      reset () {
        this.$refs.form.reset()
      },
      setData(){
        this.title = this.$store.state.blogs.blog[0].title;
        if(this.$store.state.blogs.blog[0].author){
          this.author = this.$store.state.blogs.blog[0].author;
        }
        else{
          this.author = "Ashish Belwal"
        }
        this.body = this.$store.state.blogs.blog[0].body;
      }
      

      
    },
    computed: mapGetters(["blogWithId"]),
    
    created() {
      this.fetchBlogWithId(this.$route.params.id);
      this.setData()
      
    }
  }
</script>

<style lang="scss">
.v-application .elevation-16 {
    box-shadow: 0px 8px 10px -5px rgb(0 0 0 / 0%), 0px 16px 24px 2px rgb(0 0 0 / 0%), 0px 6px 30px 5px rgb(0 0 0 / 2%) !important;
}
.pr-60{
  padding-right: 60px;
}
.pageHeader{
  margin-top: 48px;
  .timeStamp{
        font-size: 12px;
        color: #8d8d8d;
    }
  .title{
    h2{
      font-size: 48px;
    display: flex;
    align-items: center;
    margin-bottom: 36px;
    line-height: normal;
      .v-icon.v-icon{
            background: #ededed;
            border-radius: 50%;
            padding: 5px;
            margin-right: 10px;
      }
      .v-icon__svg {
          height: 18px;
          width: 18px;
          fill: currentColor;
      }
    }
  }
  .quickButtons{
    margin: 20px 0px;
    .v-btn{
      margin-right: 10px;
    }
  }
  .quickLink{
    .v-btn:not(.v-btn--round).v-size--default {
        height: 36px;
        min-width: 64px;
        padding: 0;
        margin-right: 16px
    }
  }
}

</style>

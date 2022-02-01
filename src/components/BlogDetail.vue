<template>
  <v-container @click="bodyClick">
    <v-row>
      <v-col cols="12" class="pr-60">
        <div class="pageHeader">
          <div class="title">
            <h2> {{blogWithId[0].title}} </h2>
              <strong v-if="blogWithId[0].author"> {{ blogWithId[0].author }}</strong>
            <strong v-else> Ashish Belwal</strong>
          </div>
          <div class="timeStamp">
            <p>1 day ago  -  1 min ago</p>
          </div>
          
          <div class="quickButtons">
             <v-btn
              color="green"
              elevation="0"
              rounded
              dark
              small
              @click="$router.push('/editBlog/' +  blogWithId[0].id)"
            >Edit</v-btn>
            <v-btn
              color="red"
              elevation="0"
              rounded
              dark
              small
              @click="deleteThisBlog"
            >Delete</v-btn>
          </div>
        </div>
        <div class="blogList">
          <div class="blogTemplate">
            <div class="blogWrapper">
              <v-row>
                
                <v-col cols="12">
                    <div class="blogImg">
                      <img src="https://picsum.photos/seed/picsum/700/300?random=2" alt="">
                    </div>
                  <div class="blogContent">
                    <div class="blogDesc">
                      
                      <p @mouseup = "textHigh" v-html="highlight()"> </p>
                      
                    </div>
                  </div>
                </v-col>
              </v-row>
            </div>
          </div>
        </div>
      </v-col>
    </v-row>
    <v-btn
      color="red"
      elevation="0"
      rounded
      dark
      small
      class="highLightBtn"
      id="highLightBtn"
      @click="textHighlightClick"
    >Highlight</v-btn>
    <v-btn
      color="green"
      elevation="0"
      rounded
      dark
      small
      class="highLightBtn"
      id="addWord"
      @click="addToWordlist"
    >Add to Wordlist</v-btn>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { mdiLabelMultiple, mdiCommentEyeOutline, mdiExportVariant, mdiBookmarkOutline, mdiDotsHorizontal, mdiHandClap } from '@mdi/js';
  export default {
    name: 'BlogDetail',

    data: () => ({
      icons: {
        mdiLabelMultiple,
        mdiCommentEyeOutline,
        mdiExportVariant,
        mdiBookmarkOutline,
        mdiDotsHorizontal,
        mdiHandClap
      },
      cursorX: 0,
      cursorY: 0,
      query: "",
      body:""
    }),
    methods: {
      ...mapActions(["fetchBlogWithId", "deleteBlog", "addWord"]),
      deleteThisBlog(){
        alert("This blog is deleted")
        this.deleteBlog(this.$route.params.id)
        this.$router.push('/')
      },
      bodyClick(){
        
          if(!document.getSelection().toString()){
          document.getElementById('highLightBtn').style.opacity = "0";
          document.getElementById('highLightBtn').style.top = 0 +'px';
          document.getElementById('highLightBtn').style.left = 0 +'px';
          document.getElementById('addWord').style.opacity = "0";
          document.getElementById('addWord').style.top = 0 +'px';
          document.getElementById('addWord').style.left = 0 +'px';
        }
      },
      textHigh(event){
        
        if(document.getSelection().toString()){
          document.getElementById('highLightBtn').style.opacity = "1";
          document.getElementById('highLightBtn').style.top = (event.clientY - 50)+'px';
          document.getElementById('highLightBtn').style.left = (event.clientX - 75)+'px';
          document.getElementById('addWord').style.opacity = "1";
          document.getElementById('addWord').style.top = (event.clientY - 80)+'px';
          document.getElementById('addWord').style.left = (event.clientX - 75)+'px';
        }
        
        console.log(this.cursorX, this.cursorY)
        
      },
      textHighlightClick(){
        // console.log()
        this.query = document.getSelection().toString()
        this.highlight()
      },
      highlight() {
        this.body = this.$store.state.blogs.blog[0].body;
        if(!this.query) {
            return this.body;
        }
        this.query = this.query.replace(/[^a-zA-Z0-9]/g, '');
        return this.body.replace(new RegExp(this.query, "gi"), match => {
            return '<span class="highlightText">' + match + '</span>';
        });
      },
      addToWordlist(){
        let word = document.getSelection().toString().replace(/[^a-zA-Z0-9]/g, '');
        console.log(word);
        this.addWord(word);
        document.getElementById('highLightBtn').style.opacity = "0";
        document.getElementById('highLightBtn').style.top = 0 +'px';
        document.getElementById('highLightBtn').style.left = 0 +'px';
        document.getElementById('addWord').style.opacity = "0";
        document.getElementById('addWord').style.top = 0 +'px';
        document.getElementById('addWord').style.left = 0 +'px';
      }
    },
    computed: mapGetters(["blogWithId"]),
    created() {
      this.fetchBlogWithId(this.$route.params.id);
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
.highlightText {
    background: yellow;
}
.highLightBtn{
  position: fixed;
  opacity: 0;
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
.blogList{
  .blogTemplate{
    border-top: 1px solid #d3d3d354;
    padding: 40px 0px;
    .clapWrapper{
      display: flex;
      flex-direction: column;
      justify-content: center;
      .clap{
        display: flex;
        justify-content: center;
      }
      .clapNumber{
        text-align: center;
        margin: 5px;
      }
      .imgCluster{
            padding-left: 25px;
        img{
          border-radius: 50%;
          margin-left: -10px;
          border: 3px solid #fff;
        }
      }
    }
    .blogContent{
      display: flex;
      cursor: pointer;
      width: 100%;
    justify-content: space-between;
      .blogDesc{
          p{
            font-size: 18px;
            color: #585858;
            margin-bottom: 5px;
            padding-right: 16px;
            margin-top: 40px;
            cursor: initial;
          }
        
      }
      .blogImg{
        margin-top: 40px;
      }
    }
    .blogBtn{
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 10px;
      .v-btn{
        padding: 0;
        min-width: 0;
      }
      .right{
        .v-btn{
          margin-left: 16px;
        }
      }
    }
  }
}
.sidebar{
  padding: 60px 0px 0px 60px;
  border-left: 1px solid #d3d3d354;
  .imgCluster{
        padding-left: 25px;
        padding-top: 0px;
        border-bottom: 1px solid #d3d3d354;
        padding-bottom: 40px;
    img{
      border-radius: 50%;
      margin-left: -10px;
      border: 3px solid #fff;
    }
  }
  .relatedTopics{
    margin-top: 30px;
    h3{
      font-size: 18px;
      margin-bottom: 20px;
    }
    .v-btn{
      margin-right: 10px;
      margin-bottom: 20px;
    }
  }
  .sidebarWriters{
    margin-top: 30px;
    h3{
      font-size: 18px;
      margin-bottom: 20px;
    }
    .writers{
      .writer{
        display: flex;
        margin-bottom: 20px;
        div{
          padding-right: 15px;
          img{
            border-radius: 50%;
            margin-top: 6px;
          }
          .v-btn{
            margin-top: 12px;
          }
        }
      }
    }
  }
}
</style>

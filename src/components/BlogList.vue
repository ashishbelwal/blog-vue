<template>
  <v-container>
    <v-row>
      <v-col cols="8" class="pr-60">
        <div class="pageHeader">
          <div class="title">
            <h2> 
              <v-icon 
              aria-hidden="false"
              color="black"
              >
                {{ icons.mdiLabelMultiple }}
              </v-icon>
              Technology</h2>
          </div>
          <div class="quickButtons">
            <v-btn
              color="green"
              elevation="0"
              rounded
              dark
              small
            >Follow</v-btn>
            <v-btn
              color="green"
              elevation="0"
              outlined
              rounded
              light
              small
              @click="addBlog"
            >Start writing</v-btn>
          </div>
          <div class="quickLink">
            <v-btn
              plain
            >Trending</v-btn>
            <v-btn
              plain
            >Latest</v-btn>
            <v-btn
              plain
            >Best</v-btn>
          </div>
        </div>
        <div class="blogList">
          <div class="blogTemplate" v-for="blog in allBlogs" :key="blog.id">
            <div class="blogWrapper">
              <v-row>
                <v-col cols="2" class="clapWrapper">
                  <div class="clap">
                    <v-btn
                      plain
                    >
                      <v-icon 
                      aria-hidden="false"
                      color="black"
                      >
                        {{ icons.mdiHandClap }}
                      </v-icon>
                    </v-btn>
                  </div>
                  <div class="clapNumber">
                    36
                  </div>
                  <div class="imgCluster">
                    <img src="https://picsum.photos/seed/picsum/25/25?random=1" alt="" srcset="">
                    <img src="https://picsum.photos/seed/picsum/25/25?random=1" alt="" srcset="">
                    <img src="https://picsum.photos/seed/picsum/25/25?random=1" alt="" srcset="">
                  </div>
                </v-col>
                <v-col cols="10">
                  <div class="blogContent" @click="goToBlogDetail(blog.id)">
                    <div class="blogDesc">
                      <div class="author">
                        <img src="https://picsum.photos/seed/picsum/25/20?random=1" alt="" srcset="">
                        <strong v-if="blog.author"> {{ blog.author }}</strong>
                        <strong v-else> Ashish Belwal</strong>
                      </div>
                      <div class="blogTitle">
                        <h3>{{ blog.title }}</h3>
                      </div>
                      <div class="blogPreview">
                        <p>{{ blog.body }}</p>
                      </div>
                      <div class="timeStamp">
                        <p>1 day ago  -  1 min ago</p>
                      </div>
                    </div>
                    <div class="blogImg">
                      <img src="https://picsum.photos/seed/picsum/200/134?random=2" alt="">
                    </div>
                  </div>
                  <div class="blogBtn">
                    <div class="left">
                      <v-btn
                        plain
                      >
                        <v-icon 
                        aria-hidden="false"
                        color="black"
                        >
                          {{ icons.mdiCommentEyeOutline }}
                        </v-icon>
                      </v-btn>
                      
                    </div>
                    <div class="right">
                      <v-btn
                        plain
                      >
                        <v-icon 
                        aria-hidden="false"
                        color="black"
                        >
                          {{ icons.mdiExportVariant }}
                        </v-icon>
                      </v-btn>
                      <v-btn
                        plain
                      >
                        <v-icon 
                        aria-hidden="false"
                        color="black"
                        >
                          {{ icons.mdiBookmarkOutline }}
                        </v-icon>
                      </v-btn>
                      <v-btn
                        plain
                      >
                        <v-icon 
                        aria-hidden="false"
                        color="black"
                        >
                          {{ icons.mdiDotsHorizontal }}
                        </v-icon>
                      </v-btn>
                    </div>
                  </div>
                </v-col>
              </v-row>
            </div>
          </div>
        </div>
      </v-col>
      <v-col cols="4" class="sidebar">
        <v-row>
          <v-col cols="12">
            <v-row>
              <v-col cols="6">
                <h2>411K</h2>
                <p>Stories</p>
              </v-col>
              <v-col cols="6">
                <h2>151K</h2>
                <p>Writers</p>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12" class="imgCluster">
            <img src="https://picsum.photos/seed/picsum/36/36?random=1" alt="" srcset="">
            <img src="https://picsum.photos/seed/picsum/36/36?random=2" alt="" srcset="">
            <img src="https://picsum.photos/seed/picsum/36/36?random=3" alt="" srcset="">
            <img src="https://picsum.photos/seed/picsum/36/36?random=4" alt="" srcset="">
            <img src="https://picsum.photos/seed/picsum/36/36?random=5" alt="" srcset="">
            <img src="https://picsum.photos/seed/picsum/36/36?random=6" alt="" srcset="">
            <img src="https://picsum.photos/seed/picsum/36/36?random=1" alt="" srcset="">
            
          </v-col>
          <v-col cols="12" class="relatedTopics">
            <h3>Related Topics</h3>
            <div class="buttonCluster">
              <v-btn rounded elevation="0" >Programing</v-btn>
              <v-btn rounded elevation="0">Startup</v-btn>
              <v-btn rounded elevation="0">Tech</v-btn>
              <v-btn rounded elevation="0">Biotech</v-btn>
              <v-btn rounded elevation="0">Software</v-btn>
              <v-btn rounded elevation="0">Javascript</v-btn>
              <v-btn rounded elevation="0">Blockchain</v-btn>
            </div>
          </v-col>
          <v-col cols="12" class="sidebarWriters">
            <h3>Top Writers</h3>
            <div class="writers">
              <div class="writer">
                <div class="img">
                <img src="https://picsum.photos/seed/picsum/50/50?random=1" alt="" srcset="">
                </div>
                <div class="aboutWriter">
                  <h4>Mark Ellis</h4>
                  <p>Entrepreneur, coder, husband, father...</p>
                </div>
                <div class="follow">
                  <v-btn
                  elevation="0"
                  outlined
                  rounded
                  light
                  small
                >Follow</v-btn>
                </div>
              </div>
              <div class="writer">
                <div class="img">
                <img src="https://picsum.photos/seed/picsum/50/50?random=1" alt="" srcset="">
                </div>
                <div class="aboutWriter">
                  <h4>Mark Ellis</h4>
                  <p>Entrepreneur, coder, husband, father...</p>
                </div>
                <div class="follow">
                  <v-btn
                  elevation="0"
                  outlined
                  rounded
                  light
                  small
                >Follow</v-btn>
                </div>
              </div>
              <div class="writer">
                <div class="img">
                <img src="https://picsum.photos/seed/picsum/50/50?random=1" alt="" srcset="">
                </div>
                <div class="aboutWriter">
                  <h4>Mark Ellis</h4>
                  <p>Entrepreneur, coder, husband, father...</p>
                </div>
                <div class="follow">
                  <v-btn
                  elevation="0"
                  outlined
                  rounded
                  light
                  small
                >Follow</v-btn>
                </div>
              </div>
              <div class="writer">
                <div class="img">
                <img src="https://picsum.photos/seed/picsum/50/50?random=1" alt="" srcset="">
                </div>
                <div class="aboutWriter">
                  <h4>Mark Ellis</h4>
                  <p>Entrepreneur, coder, husband, father...</p>
                </div>
                <div class="follow">
                  <v-btn
                  elevation="0"
                  outlined
                  rounded
                  light
                  small
                >Follow</v-btn>
                </div>
              </div>
              
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { mdiLabelMultiple, mdiCommentEyeOutline, mdiExportVariant, mdiBookmarkOutline, mdiDotsHorizontal, mdiHandClap } from '@mdi/js';
  export default {
    name: 'BlogList',

    data: () => ({
      icons: {
        mdiLabelMultiple,
        mdiCommentEyeOutline,
        mdiExportVariant,
        mdiBookmarkOutline,
        mdiDotsHorizontal,
        mdiHandClap
      },
    }),
    methods: {
      ...mapActions(["fetchBlogs"]),
      goToBlogDetail(id){
        this.$router.push('/blogDetail/' + id)
      },
      addBlog(){
        this.$router.push('/addBlog')
      }
    },
    computed: mapGetters(["allBlogs"]),
    created() {
      this.fetchBlogs();
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
  .title{
    h2{
      font-size: 48px;
      display: flex;
      align-items: center;
      margin-bottom: 36px;
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
      .blogDesc{
        .author{
          display: flex;
          img{
            margin-right: 10px;
            border-radius: 4px;
          }
          strong{
            font-size: 14px;
            font-weight: 500;
            color: #383838;
          }
        }
        .blogTitle{
          margin: 12px 0;
          h3{
            font-size: 24px;
          }
        }
        .blogPreview{
          p{
            font-size: 14px;
            color: #585858;
            margin-bottom: 5px;
            padding-right: 16px;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;;
          }
        }
        .timeStamp{
          font-size: 12px;
          color: #8d8d8d;
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

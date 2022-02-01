<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="pr-60">
        <div class="pageHeader">
          <div class="title">
            <h2> Word List</h2>
              
          </div>
          
          <div class="quickButtons">
             
          </div>
        </div>
        <div class="blogList">
          <div class="blogTemplate">
            <div class="blogWrapper">
              <v-row>
                
                <v-col cols="12">
                    <p v-if="allWordList.length == 0"> No word has been added yet! </p>
                    <template v-else>
                        <div v-for="word in allWordList" :key="word">
                            <p>{{word}}</p>
                        </div>
                    </template>
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
import { mapGetters } from "vuex";
export default {
    name: 'WordList',

    data: () => ({
        
      
    }),
    methods: {
       
    },
    computed: mapGetters(["allWordList"]),
    
    created() {

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

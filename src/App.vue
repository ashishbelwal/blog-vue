<template>
  <v-app>
    <v-app-bar
      app
      color="white"
      elevation="16"
      height="80"
    >
      <v-container>
        <v-row>
        <div class="d-flex align-center home" @click="$router.push('/')">
          <v-img
            alt="Vuetify Logo"
            class="shrink mr-2"
            contain
            src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
            transition="scale-transition"
            width="30"
          />
          <h1>Vuetify Blogs</h1>
      </div>

      <v-spacer></v-spacer>

      <v-btn
        target="_blank"
        text
        @click="$router.push('/addBlog')"
      >
        <span class="mr-2">New Blog</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
        </v-row>
      </v-container>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
<style lang="scss">
  .v-application .elevation-16 {
      box-shadow: 0px 8px 10px -5px rgb(0 0 0 / 0%), 0px 16px 24px 2px rgb(0 0 0 / 0%), 0px 6px 30px 5px rgb(0 0 0 / 2%) !important;
  }
  .home{
    cursor: pointer;
  }
</style>

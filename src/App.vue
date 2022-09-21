<template>
  <div id="app">
    <v-app>
    <v-app-bar
        elevation="0"
        color="#F5C7A9"
        style="display: flex; justify-content : center; align-items : center;"
      >
      <v-list-item
            v-for="item in items"
            :key="item.title"
            :to="{ name : item.route}"
            link
        >
            <v-list-item-icon style="margin-right: 10px;">
                <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
                <v-list-item-title>
                    {{ item.title }}
                </v-list-item-title>
            </v-list-item-content>
        </v-list-item>
      </v-app-bar>

      <router-view></router-view>
      </v-app>
  </div>
</template>
<script>
  export default{
    data(){
      return{
        items: [
          { title: 'About', icon: 'mdi-help-circle', route : 'about' },
          { title: 'Projects', icon: 'mdi-view-dashboard', route : 'projects' },
          { title: 'NFTs', icon: 'mdi-image-multiple', route : 'nft' },
        ],
        right: null,
      }
    }
  }
</script>
<style scoped>
.v-list-item{
  flex: none !important;
  background-color: transparent !important;
  margin: 10px;
  text-decoration: none !important;
  color: white;
}
</style>
<style src="@/assets/bootstrap.scss">
</style>

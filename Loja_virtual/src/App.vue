<template>
  <v-layout>
    <v-app-bar color="red-darken-2" flat>
      <v-app-bar-title
        ><router-link
          to="/"
          class="ml-5"
          style="color: white; font-size: 24px; text-decoration: none"
          >Funko Lab</router-link
        ></v-app-bar-title
      >
      <v-btn icon>
        <router-link
          to="/carrinho"
          class="mr-10"
          style="color: white; font-size: 20px; text-decoration: none"
        >
          <v-icon color="#FFF">mdi-cart</v-icon>
          {{ this.$store.state.produtosCarrinho.length }}
        </router-link>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-layout>
</template>

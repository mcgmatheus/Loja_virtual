<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <h1 class="ma-5" style="color: #d32f2f">Produtos</h1>

  <div class="list-products">
    <v-card width="300px" class="pa-2 mb-2" v-for="product in produtosRestantes" :key="product.id">
      <v-img
        :src="product.imagem"
        class="align-end"
        width="300px"
        hidden="200px"
        cover
        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
      >
        <v-card-title class="text-white">{{ product.nome }} </v-card-title>
      </v-img>
      <v-card-subtitle class="pt-4">
        {{
          new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
            product.preco
          )
        }}
        ou até 10x de
        {{
          new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
            product.parcela
          )
        }}
      </v-card-subtitle>

      <v-card-actions>
        <v-btn
          color="red-darken-2"
          @click="() => this.$store.dispatch('adicionarProduto', { product })"
        >
          Comprar
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      products: []
    }
  },
  computed: {
    produtosRestantes() {
      return this.products.filter((product) => {
        this.$store.state.produtosCarrinho.find((item) => item.id === product.id)
        return true
      })
    }
  },
  mounted() {
    this.loadProducts()
  },
  methods: {
    loadProducts() {
      axios({
        url: 'http://localhost:3000/produtos',
        method: 'GET'
      })
        .then((response) => {
          this.products = response.data
        })
        .catch(() => {
          alert('Houve um erro ao carregar os produtos')
        })
    }
  }
}
</script>

<style>
.list-products {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>

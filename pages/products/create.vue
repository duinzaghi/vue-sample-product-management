<template>
  <div class="h-full">
    <h1 class="text-3xl">Create product</h1>
    <div class="block p-6 rounded-lg shadow-lg bg-white h-full">
    <div>
      <div class="form-group mb-6">
        <label for="category">Category:</label>
        <select class="form-select form-select-lg mb-3
        appearance-none
        block
        w-full
        px-4
        py-2
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding bg-no-repeat
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label=".form-select-lg example" id="category"
        v-model="newProduct.categoryId">
          <option v-for="(category, index) in categories" :key="index" :value="category._id">{{category.name}}</option>
      </select>
      </div>
      <div class="form-group mb-6">
        <label for="name">Name:</label>
        <input type="text" class="form-control block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="name"
          v-model="newProduct.name"
          name="name"
          placeholder="Name">
      </div>
      <div class="form-group mb-6">
        <label for="price">Price:</label>
        <input type="number" class="form-control block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="price"
          name="price"
          v-model="newProduct.price"
          placeholder="Price">
      </div>
      <div class="form-group mb-6">
        <label for="description">Description:</label>
        <textarea
        class="
          form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
        "
        id="description"
        rows="3"
        v-model="newProduct.description"
        name="description"
        placeholder="Description"
      ></textarea>
      </div>
      <div class="flex justify-center">
        <button class="
        px-6
        py-2.5
        bg-green-500
        text-white
        font-medium
        text-xs
        leading-tight
        uppercase
        rounded
        shadow-md
        hover:bg-green-700 hover:shadow-lg
        focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0
        active:bg-green-900 active:shadow-lg
        transition
        duration-150
        ease-in-out" @click="create()">Create</button>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: 'CreatePageProduct',
  layout: 'home',
  data(){
    return {
      newProduct: {
        name: "",
        price: 0,
        description: "",
        categoryId: []
      },
    }
  },
  fetch({ store }) {
    return store.dispatch("categories/fetchAll");
  },
  computed: {
    ...mapGetters({
      categories: "categories/getAll",
    }),
  },
  methods: {
    async create(){
      this.newProduct.price = Number(this.newProduct.price)
      await this.$store.dispatch('products/create', this.newProduct).then(res => {
        this.$toaster.success(`Created ${res.name} success!`, {timeout: 3000});
        this.$router.push('/products');
      }).catch(err => {
        console.log(err)
        this.$toaster.error('Create failed!', {timeout: 3000});
      })
    },

  }
}
</script>

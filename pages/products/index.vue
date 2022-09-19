<template>
  <div>
    <h1 class="text-3xl">Products</h1>
    <div class="flex space-x-2 justify-start mt-4">
      <button @click="create" type="button" class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Create New</button>
    </div>
    <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
        <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
          <table class="min-w-full leading-normal">
            <thead>
              <tr>
                <th
                  class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xl font-semibold text-gray-600 uppercase tracking-wider"
                >
                  Name
                </th>
                <th
                  class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xl font-semibold text-gray-600 uppercase tracking-wider"
                >
                  Description
                </th>
                <th
                  class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xl font-semibold text-gray-600 uppercase tracking-wider"
                >
                  Category
                </th>
                <th
                  class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xl font-semibold text-gray-600 uppercase tracking-wider"
                >
                  Price
                </th>
                <th
                  class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xl font-semibold text-gray-600 uppercase tracking-wider"
                >
                  Created At
                </th>
                <th
                  class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xl font-semibold text-gray-600 uppercase tracking-wider"
                >
                  Updated At
                </th>
                <th
                  class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xl font-semibold text-gray-600 uppercase tracking-wider"
                >
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in products" :key="index">
                <td class="px-2 py-2 text-xl border-b border-gray-200 bg-white text-sm">
                  <div class="flex items-center">
                      <p class="text-gray-900 whitespace-no-wrap pl-2">
                        {{item.name}}
                      </p>
                  </div>
                </td>
                <td class="px-2 py-2 text-xl border-b border-gray-200 bg-white text-sm">
                  <p class="text-gray-900 whitespace-no-wrap">
                    {{item.description}}
                  </p>
                </td>
                <td class="px-2 py-2 text-xl border-b border-gray-200 bg-white text-sm">
                  <p class="text-gray-900 whitespace-no-wrap">
                    {{item.categoryId.name}}
                  </p>
                </td>
                <td class="px-2 py-2 text-xl border-b border-gray-200 bg-white text-sm">
                  <p class="text-gray-900 whitespace-no-wrap">
                    {{item.price}}
                  </p>
                </td>
                <td class="px-2 py-2 text-xl border-b border-gray-200 bg-white text-sm">
                  <p class="text-gray-900 whitespace-no-wrap">
                    {{(moment(item.createdAt).format('MM/DD/YYYY - h:mm a')).toUpperCase()}}
                  </p>
                </td>
                <td class="px-2 py-2 text-xl border-b border-gray-200 bg-white text-sm">
                  <p class="text-gray-900 whitespace-no-wrap">
                    {{(moment(item.updatedAt).format('MM/DD/YYYY - h:mm a')).toUpperCase()}}
                  </p>
                </td>

                <td class="px-2 py-2 text-xl border-b border-gray-200 bg-white text-sm text-center">
                  <button>
                    <span
                      class="relative inline-block px-3 py-1 font-semibold text-blue-900 leading-tight"
                    >
                      <span
                        aria-hidden
                        class="absolute inset-0 bg-blue-200 opacity-50 rounded-full"
                      ></span>
                      <span class="relative">Edit</span>
                    </span>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <div
            class="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between"
          >
            <span class="text-xs xs:text-sm text-gray-900">
              Page {{pagination.currentPage+1}} to {{pagination.totalPage}} - Showing {{pagination.currentPage*pagination.pageSize + 1 +" - " + (pagination.currentPage*pagination.pageSize + products.length)}} of {{pagination.totalRow}} Entries
            </span>
            <div class="inline-flex mt-2 xs:mt-0">
              <button
                class="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-l"
                :disabled = "pagination.currentPage === 0"
                @click="paginationPage(pagination.currentPage-1)"
              >
                Prev
              </button>
              &nbsp; &nbsp;
              <button
                class="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-r"
                :disabled = "pagination.currentPage+1 === pagination.totalPage"
                @click="paginationPage(pagination.currentPage+1)"
              >
                Next
              </button>
            </div>

            </div>
        </div>
      </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: 'ProductsPage',
  layout: 'home',
  fetch({ store }) {
    return store.dispatch("products/fetch");
  },
  computed: {
    ...mapGetters({
      products: "products/getAll",
      pagination: "products/pagination"
    }),
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 500)
    });
  },
  methods: {
    create() {
      this.$router.push('/products/create');
    },
    async paginationPage(index){
      await this.$store.dispatch("products/pagination", {page: index});
      },
  }
}
</script>

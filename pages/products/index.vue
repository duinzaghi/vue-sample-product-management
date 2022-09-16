<template>
  <div>
    <h1 class="text-3xl">Categories</h1>
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
    }),
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 500)
    });
  }
}
</script>

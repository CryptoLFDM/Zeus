<!--./src/components/NavBar.vue -->

<template>
  <header class="bg-gray-900">
    <div class="flex flex-col flex-wrap p-5 w-full">
      <nav>
        <ul class="flex flex-wrap items-center justify-center text-base">
          <li class="mx-3 text-sm font-semibold hover:text-blue-600 text-white">
            <router-link to="/" active-class="text-blue-500"
              >Polygon</router-link
            >
          </li>
          <li class="mx-3 text-sm font-semibold hover:text-blue-600 text-white">
            <router-link to="/polygon_testnet" active-class="text-blue-500"
            >Polygon Testnet</router-link
            >
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

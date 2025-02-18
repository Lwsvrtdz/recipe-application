<script setup lang="ts"></script>

<template>
  <header class="py-4 border-b">
    <nav class="flex container items-center">
      <NuxtLink to="/" class="flex gap-1 items-center">
        <NuxtImg width="56" src="/icon-green.png" alt="" />
        <span class="text-3xl font-bold">Nuxtcipes</span>
      </NuxtLink>
      <ul class="flex gap-6 ml-auto text-xl font-bold capitalize">
        <li>
          <NuxtLink 
            to="/" 
            class="nav-link"
            active-class="text-green-600"
            exact-active-class="text-green-600">Home</NuxtLink>
        </li>
        <li>
          <NuxtLink 
            to="/about" 
            class="nav-link"
            active-class="text-green-600"
            exact-active-class="text-green-600">About</NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
.nav-link {
  transition: color 0.2s ease;
}

.nav-link:hover {
  color: #16a34a; /* text-green-600 */
}
</style>
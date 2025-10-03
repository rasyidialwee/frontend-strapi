<template>
  <header class="bg-white shadow-sm">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <div class="flex items-center space-x-3">
          <div class="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center">
            <span class="text-white font-bold text-lg">B</span>
          </div>
          <span class="text-xl font-semibold text-gray-900">Brooklyn</span>
        </div>

        <!-- Navigation -->
        <nav class="hidden md:flex items-center space-x-8">
          <a 
            href="#" 
            class="px-4 py-2 bg-primary-600 text-white rounded-lg font-medium transition-colors duration-200"
          >
            Home
          </a>
          <a 
            href="#" 
            class="px-4 py-2 text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200"
          >
            About
          </a>
          <a 
            href="#" 
            class="px-4 py-2 text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200"
          >
            Process
          </a>
          <a 
            href="#" 
            class="px-4 py-2 text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200"
          >
            Portfolio
          </a>
          <a 
            href="#" 
            class="px-4 py-2 text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200"
          >
            Blog
          </a>
          <a 
            href="#" 
            class="px-4 py-2 text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200"
          >
            Services
          </a>
          <a 
            href="#" 
            class="px-4 py-2 bg-primary-600 text-white rounded-lg font-medium transition-colors duration-200"
          >
            Contact
          </a>
        </nav>

        <!-- Mobile menu button -->
        <div class="md:hidden">
          <button 
            @click="toggleMobileMenu"
            class="text-gray-700 hover:text-primary-600 focus:outline-none focus:text-primary-600"
          >
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile menu -->
      <div v-if="isMobileMenuOpen" class="md:hidden">
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
          <a href="#" class="block px-3 py-2 bg-primary-600 text-white rounded-md font-medium">Home</a>
          <a href="#" class="block px-3 py-2 text-gray-700 hover:text-primary-600 font-medium">About</a>
          <a href="#" class="block px-3 py-2 text-gray-700 hover:text-primary-600 font-medium">Process</a>
          <a href="#" class="block px-3 py-2 text-gray-700 hover:text-primary-600 font-medium">Portfolio</a>
          <a href="#" class="block px-3 py-2 text-gray-700 hover:text-primary-600 font-medium">Blog</a>
          <a href="#" class="block px-3 py-2 text-gray-700 hover:text-primary-600 font-medium">Services</a>
          <a href="#" class="block px-3 py-2 bg-primary-600 text-white rounded-md font-medium">Contact</a>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}
</script>

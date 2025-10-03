<template>
  <div id="app" class="min-h-screen bg-white">
    <!-- Loading state -->
    <div v-if="loading" class="min-h-screen flex items-center justify-center">
      <div class="text-center">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
        <p class="text-gray-600">Loading...</p>
      </div>
    </div>
    
    <!-- Error state -->
    <div v-if="error" class="min-h-screen flex items-center justify-center">
      <div class="text-center">
        <p class="text-red-600 mb-4">Error loading page data: {{ error }}</p>
        <button 
          @click="fetchPageData" 
          class="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700"
        >
          Retry
        </button>
      </div>
    </div>

    <!-- Main Content -->
    <div v-if="!loading && !error">
      <!-- Header Section -->
      <header class="bg-white shadow-sm">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between items-center h-16">
            <!-- Logo -->
            <div class="flex items-center space-x-3">
              <div class="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center">
                <span class="text-white font-bold text-lg">
                  {{ pageData?.header?.logo?.initial || 'B' }}
                </span>
              </div>
              <span class="text-xl font-semibold text-gray-900">
                {{ pageData?.header?.logo?.text || 'Brooklyn' }}
              </span>
            </div>

            <!-- Navigation -->
            <nav class="hidden md:flex items-center space-x-8">
              <a 
                v-for="(item, index) in pageData?.header?.MainMenu?.MenuItem || defaultNavigation"
                :key="item.id || index"
                :href="item.href || '#'" 
                :target="item.isExternal ? '_blank' : '_self'"
                :rel="item.isExternal ? 'noopener noreferrer' : ''"
                :class="[
                  'px-4 py-2 font-medium transition-colors duration-200',
                  item.isButton 
                    ? 'bg-primary-600 text-white rounded-lg hover:bg-primary-700' 
                    : 'text-gray-700 hover:text-primary-600'
                ]"
              >
                {{ item.label }}
                <span v-if="item.isExternal" class="ml-1 text-xs">↗</span>
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
              <a 
                v-for="(item, index) in pageData?.header?.MainMenu?.MenuItem || defaultNavigation"
                :key="item.id || index"
                :href="item.href || '#'" 
                :target="item.isExternal ? '_blank' : '_self'"
                :rel="item.isExternal ? 'noopener noreferrer' : ''"
                :class="[
                  'block px-3 py-2 font-medium',
                  item.isButton 
                    ? 'bg-primary-600 text-white rounded-md' 
                    : 'text-gray-700 hover:text-primary-600'
                ]"
              >
                {{ item.label }}
                <span v-if="item.isExternal" class="ml-1 text-xs">↗</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      <!-- Hero Section -->
      <section class="min-h-screen bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            <!-- Left side - Text content -->
            <div class="space-y-8">
              <h1 class="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                {{ pageData?.hero?.greeting || "Hello, I'm" }} <br>
                <span class="text-primary-600">{{ pageData?.hero?.name || "Brooklyn Gilbert" }}.</span>
              </h1>
              
              <p class="text-xl text-gray-600 leading-relaxed max-w-lg">
                {{ pageData?.hero?.description || "I'm a Freelance UI/UX Designer and Developer based in London, England. I strives to build immersive and beautiful web applications through carefully crafted code and user-centric design." }}
              </p>
              
              <button 
                v-if="pageData?.hero?.button"
                :class="[
                  'px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 transform hover:scale-105',
                  pageData.hero.button.style || 'bg-primary-600 hover:bg-primary-700 text-white'
                ]"
              >
                {{ pageData.hero.button.text || 'Say Hello!' }}
              </button>
            </div>

            <!-- Right side - Image and background -->
            <div class="relative">
              <!-- Background gradient -->
              <div class="absolute inset-0 gradient-bg rounded-3xl transform rotate-3"></div>
              
              <!-- Image container -->
              <div class="relative z-10 bg-white rounded-2xl p-8 shadow-2xl transform -rotate-1">
                <div class="aspect-square rounded-xl overflow-hidden">
                  <img 
                    :src="pageData?.hero?.image?.url || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop&crop=face&auto=format'"
                    :alt="pageData?.hero?.image?.alt || 'Brooklyn Gilbert'"
                    class="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Stats Section -->
      <section class="bg-white py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <!-- Dynamic Stats Boxes -->
            <div 
              v-for="(stat, index) in pageData?.stats?.items || defaultStats"
              :key="index"
              class="bg-primary-50 rounded-2xl p-8 text-center transform hover:scale-105 transition-transform duration-200"
            >
              <div class="text-4xl font-bold text-gray-900 mb-2">
                {{ stat.value }}
              </div>
              <div class="text-lg text-gray-600 font-medium">
                {{ stat.label }}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { apiService } from './services/api.js'

// Reactive data
const pageData = ref(null)
const loading = ref(true)
const error = ref(null)
const isMobileMenuOpen = ref(false)

// Page ID from your Strapi route
const PAGE_ID = 'pyisgqv48fka801zaoiurta5'

// Default navigation fallback
const defaultNavigation = [
  { label: 'Home', url: '#', isActive: true },
  { label: 'About', url: '#', isActive: false },
  { label: 'Process', url: '#', isActive: false },
  { label: 'Portfolio', url: '#', isActive: false },
  { label: 'Blog', url: '#', isActive: false },
  { label: 'Services', url: '#', isActive: false },
  { label: 'Contact', url: '#', isActive: true }
]

// Default stats fallback
const defaultStats = [
  { value: '15 Y.', label: 'Experience' },
  { value: '250+', label: 'Projects Completed' },
  { value: '58', label: 'Happy Clients' }
]

// Toggle mobile menu
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

// Fetch page data from Strapi
const fetchPageData = async () => {
  try {
    loading.value = true
    error.value = null
    
    const response = await apiService.getPageData(PAGE_ID)
    
    console.log('API Response:', response.data)
    
    // Strapi wraps data in response.data.data
    pageData.value = response.data.data || response.data
  } catch (err) {
    console.error('API Error:', err.message)
    error.value = err.message || 'Failed to load page data'
  } finally {
    loading.value = false
  }
}

// Load data when component mounts
onMounted(() => {
  fetchPageData()
})
</script>

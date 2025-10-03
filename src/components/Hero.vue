<template>
  <section class="min-h-screen bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
        <!-- Left side - Text content -->
        <div class="space-y-8">
          <h1 class="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Hello, I'm <br>
            <span class="text-primary-600">Brooklyn Gilbert.</span>
          </h1>
          
          <p class="text-xl text-gray-600 leading-relaxed max-w-lg">
            I'm a Freelance 
            <span class="relative">
              <span class="text-gray-900 font-semibold">UI/UX Designer</span>
              <span class="absolute bottom-0 left-0 w-full h-0.5 bg-pink-400"></span>
            </span>
            and 
            <span class="relative">
              <span class="text-gray-900 font-semibold">Developer</span>
              <span class="absolute bottom-0 left-0 w-full h-0.5 bg-pink-400"></span>
            </span>
            based in London, England. I strives to build immersive and beautiful web applications through carefully crafted code and user-centric design.
          </p>
          
          <button class="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 transform hover:scale-105">
            Say Hello!
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
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop&crop=face&auto=format"
                alt="Brooklyn Gilbert"
                class="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// No additional logic needed for this component
</script>

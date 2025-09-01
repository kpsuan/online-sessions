<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const navigateTo = (path: string) => {
  router.push(path)
}
</script>

<template>
  <div class="fixed top-4 left-4 z-50 bg-white rounded-lg shadow-lg p-4 border">
    <h3 class="text-sm font-semibold text-neutral-800 mb-3">Navigation</h3>
    <div class="space-y-2">
      <button 
        @click="navigateTo('/session/done')"
        :class="[
          'px-3 py-2 rounded text-sm transition-colors',
          route.path === '/session/done' 
            ? 'bg-blue-500 text-white' 
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        ]"
      >
        Session Done
      </button>
      <button 
        @click="navigateTo('/session/pre')"
        :class="[
          'px-3 py-2 rounded text-sm transition-colors',
          route.path === '/session/pre' 
            ? 'bg-blue-500 text-white' 
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        ]"
      >
        Session Pre
      </button>
      <button 
        @click="navigateTo('/session/pretutor')"
        :class="[
          'px-3 py-2 rounded text-sm transition-colors',
          route.path === '/session/pretutor' 
            ? 'bg-blue-500 text-white' 
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        ]"
      >
        Session Pre Tutor
      </button>
      <button 
        @click="navigateTo('/tutor/donetutor')"
        :class="[
          'px-3 py-2 rounded text-sm transition-colors',
          route.path === '/session/donetutor' 
            ? 'bg-blue-500 text-white' 
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        ]"
      >
        Session Done Tutor
      </button>
      <button 
        @click="navigateTo('/student/zoom')"
        :class="[
          'px-3 py-2 rounded text-sm transition-colors',
          route.path === '/student/zoom' 
            ? 'bg-blue-500 text-white' 
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        ]"
      >
        Student Zoom
      </button>
      
    </div>
  </div>
</template>

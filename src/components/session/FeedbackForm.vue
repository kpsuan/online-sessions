<template>
  <div class="space-y-8">
    <!-- Back Button -->
    <div class="mb-8">
      <button 
        @click="$emit('back')"
        class="flex items-center gap-2 px-4 py-2 bg-white border border-neutral-400 rounded text-neutral-700 hover:bg-neutral-100 transition-colors"
      >
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
        </svg>
        Back to Overview
      </button>
    </div>

   
    <!-- Rating Guide Section -->
    <RatingGuide />
    
    <!-- Performance Rating Form -->
    <PerformanceForm @submit="handleSubmit" />
  </div>
</template>

<script setup lang="ts">
import RatingGuide from './RatingGuide.vue'
import PerformanceForm from './PerformanceForm.vue'

interface Emits {
  (e: 'back'): void
  (e: 'submit'): void
}

const emit = defineEmits<Emits>()

const handleSubmit = () => {
  emit('submit')
}
</script>

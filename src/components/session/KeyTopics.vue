<script setup lang="ts">
import { ref } from 'vue'

interface Props {
  topics: string[]
  summary: string
}

const props = defineProps<Props>()
const isExpanded = ref(true)
</script>

<template>
  <div class="bg-white rounded-xl p-6 border border-success-500">
    <div class="flex items-center justify-between mb-6">
      <h3 class="text-xl font-semibold text-neutral-800">Key Topics Covered</h3>
      <button 
        @click="isExpanded = !isExpanded"
        class="p-2 hover:bg-neutral-50 rounded transition-transform duration-200"
        :class="{ 'rotate-180': !isExpanded }"
      >
        <svg class="w-7 h-7 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path>
        </svg>
      </button>
    </div>

    <div v-show="isExpanded" class="transition-all duration-300">
      <div class="grid grid-cols-2 gap-4 mb-6">
        <div v-for="topic in topics" :key="topic" class="flex items-center gap-3">
          <svg class="w-6 h-6 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <span class="font-bold text-neutral-800">{{ topic }}</span>
        </div>
      </div>

      <div class="border-t border-neutral-200 pt-4">
        <p class="text-neutral-600">
          {{ summary }}
        </p>
      </div>
    </div>
  </div>
</template>

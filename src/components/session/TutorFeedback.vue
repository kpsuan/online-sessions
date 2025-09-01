<script setup lang="ts">
import { ref } from 'vue'

interface Props {
  generalObservation: string
  overallScore: number
  performance: {
    score: number
    description: string
  }
  preparedness: {
    score: number
    description: string
  }
  strengths: string[]
  weaknesses: string[]
  resources: Array<{
    type: string
    title: string
    url?: string
  }>
}

const props = defineProps<Props>()
const isExpanded = ref(true)
</script>

<template>
  <div class="bg-white rounded-xl p-6 border border-primary-500">
    <div class="flex items-center justify-between mb-6">
      <div class="flex items-center gap-3">
        <h3 class="text-2xl font-bold text-neutral-800">Tutor Feedback</h3>
        <div class="bg-green-100 text-success-500 px-3 py-1 rounded-full text-xs font-medium">
          Good
        </div>
      </div>
      <button 
        @click="isExpanded = !isExpanded"
        class="p-2 hover:bg-neutral-50 rounded transition-transform duration-200"
        :class="{ 'rotate-180': !isExpanded }"
      >
        <svg class="w-6 h-6 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
    </div>

    <div v-show="isExpanded" class="transition-all duration-300">
      <!-- General Observation -->
      <div class="bg-neutral-100 rounded-2xl p-6 mb-6">
        <div class="flex justify-between items-start">
          <div class="flex-1">
            <h4 class="text-lg font-bold text-neutral-700 mb-4">General Observation</h4>
            <p class="text-neutral-600 leading-relaxed">
              {{ generalObservation }}
            </p>
          </div>
          <div class="text-5xl font-bold text-neutral-900 ml-6">{{ overallScore }}</div>
        </div>
      </div>

      <!-- Performance Metrics -->
      <div class="grid grid-cols-1 gap-6 mb-8">
        <!-- Performance -->
        <div>
          <div class="flex items-center justify-between mb-2">
            <span class="text-success-600 font-medium">Performance</span>
            <span class="text-xl text-neutral-800">{{ performance.score }}</span>
          </div>
          <div class="w-full bg-neutral-200 rounded-full h-3">
            <div class="bg-success-500 h-3 rounded-full" :style="`width: ${(performance.score / 10) * 100}%`"></div>
          </div>
          <p class="text-sm text-neutral-600 mt-2">
            {{ performance.description }}
          </p>
        </div>

        <!-- Preparedness -->
        <div>
          <div class="flex items-center justify-between mb-2">
            <span class="text-warning-500 font-medium">Preparedness</span>
            <span class="text-xl text-neutral-800">{{ preparedness.score }}</span>
          </div>
          <div class="w-full bg-neutral-200 rounded-full h-3">
            <div class="bg-warning-500 h-3 rounded-full" :style="`width: ${(preparedness.score / 10) * 100}%`"></div>
          </div>
          <p class="text-sm text-neutral-600 mt-2">
            {{ preparedness.description }}
          </p>
        </div>
      </div>

      <!-- Strengths and Weaknesses -->
      <div class="grid grid-cols-2 gap-6 mb-8">
        <!-- Strengths -->
        <div class="bg-green-50 border border-green-200 rounded-3xl p-6">
          <h4 class="text-success-600 font-bold mb-4">Strengths 优点</h4>
          <ul class="space-y-3">
            <li v-for="strength in strengths" :key="strength" class="flex items-start gap-3">
              <div class="w-2 h-2 bg-success-600 rounded-full mt-2"></div>
              <span class="text-neutral-700">{{ strength }}</span>
            </li>
          </ul>
        </div>

        <!-- Areas for Improvement -->
        <div class="bg-red-50 border border-red-200 rounded-3xl p-6">
          <h4 class="text-danger-600 font-bold mb-4">Areas for Improvement 待改进之处</h4>
          <ul class="space-y-3">
            <li v-for="weakness in weaknesses" :key="weakness" class="flex items-start gap-3">
              <div class="w-2 h-2 bg-danger-500 rounded-full mt-2"></div>
              <span class="text-neutral-700">{{ weakness }}</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Suggested Resources -->
      <div class="border border-neutral-200 rounded-2xl p-6">
        <div class="flex items-center justify-between mb-6">
          <div class="flex items-center gap-3">
            <svg class="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
            </svg>
            <h4 class="text-lg font-semibold text-neutral-800">Suggested Resources</h4>
          </div>
          <button class="p-2 hover:bg-neutral-50 rounded">
            <svg class="w-6 h-6 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
        </div>

        <div class="space-y-4">
          <div v-for="resource in resources" :key="resource.title">
            <p class="text-neutral-600 mb-2">{{ resource.type }}:</p>
            <div class="bg-neutral-100 p-3 rounded flex items-center gap-3">
              <div class="w-8 h-8 bg-neutral-600 rounded-full flex items-center justify-center">
                <svg class="w-4 h-4 text-neutral-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path>
                </svg>
              </div>
              <div>
                <div class="text-neutral-600">{{ resource.title }}</div>
                <div v-if="resource.url" class="text-sm text-neutral-500">{{ resource.url }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

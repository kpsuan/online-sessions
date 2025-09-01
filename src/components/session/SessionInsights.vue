<script setup lang="ts">
import { ref } from 'vue'

interface Props {
  score: number
  description: string
  metrics: {
    participation: number
    speakingRate: number
    pronunciation: number
    preparedness: number
    performance: number
  }
}

const props = defineProps<Props>()
const isExpanded = ref(true)
</script>

<template>
  <div class="bg-white rounded-xl p-6 border border-primary-500">
    <div class="flex items-center justify-between mb-6">
      <div class="flex items-center gap-3">
        <svg class="w-4 h-4 text-primary-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
        <h3 class="text-xl font-bold text-neutral-800">Session Insights</h3>
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
      <div class="flex gap-6">
        <!-- Left: Score and Description -->
        <div class="flex-1">
          <div class="flex items-center gap-3 mb-6">
            <span class="text-3xl font-bold text-neutral-800">{{ score }}</span>
            <span class="text-3xl font-bold text-neutral-800">-</span>
            <span class="text-3xl font-bold text-neutral-800">Average</span>
          </div>
          
          <p class="text-neutral-600 leading-relaxed">
            {{ description }}
          </p>
        </div>

        <!-- Right: Radar Chart -->
        <div class="w-96 relative">
          <!-- Radar Chart Placeholder -->
          <div class="relative w-full h-64 flex items-center justify-center">
            <svg class="w-60 h-60" viewBox="0 0 240 240">
              <!-- Pentagon Grid Lines -->
              <g stroke="#CCCCCC" fill="none" stroke-width="1">
                <!-- Outer Pentagon -->
                <polygon points="120,20 200,80 170,180 70,180 40,80" />
                <!-- Middle Pentagon -->
                <polygon points="120,50 170,90 155,155 85,155 70,90" />
                <!-- Inner Pentagon -->
                <polygon points="120,80 140,100 135,135 105,135 100,100" />
                <!-- Axes -->
                <line x1="120" y1="120" x2="120" y2="20" />
                <line x1="120" y1="120" x2="200" y2="80" />
                <line x1="120" y1="120" x2="170" y2="180" />
                <line x1="120" y1="120" x2="70" y2="180" />
                <line x1="120" y1="120" x2="40" y2="80" />
              </g>
              
              <!-- Data Area -->
              <polygon 
                points="120,110 150,95 160,150 80,150 85,95" 
                fill="rgba(60, 131, 246, 0.1)" 
                stroke="#3C83F6" 
                stroke-width="2"
              />
            </svg>
            
            <!-- Labels -->
            <div class="absolute top-2 left-1/2 transform -translate-x-1/2 text-xs text-neutral-500">
              Participation
            </div>
            <div class="absolute top-16 right-2 text-xs text-neutral-500">
              Speaking Rate
            </div>
            <div class="absolute bottom-2 right-1/4 text-xs text-neutral-500">
              Pronunciation
            </div>
            <div class="absolute bottom-2 left-1/4 text-xs text-neutral-500">
              Preparedness
            </div>
            <div class="absolute top-16 left-2 text-xs text-neutral-500">
              Performance
            </div>
            
            <!-- Scores -->
            <div class="absolute top-8 left-1/2 transform -translate-x-1/2 text-sm font-semibold text-red-500">{{ metrics.participation }}</div>
            <div class="absolute top-20 right-8 text-sm font-semibold text-yellow-600">{{ metrics.speakingRate }}</div>
            <div class="absolute bottom-8 right-16 text-sm font-semibold text-yellow-600">{{ metrics.pronunciation }}</div>
            <div class="absolute bottom-8 left-16 text-sm font-semibold text-green-600">{{ metrics.preparedness }}</div>
            <div class="absolute top-20 left-8 text-sm font-semibold text-yellow-600">{{ metrics.performance }}</div>
          </div>
        </div>
      </div>

      <div class="border-t border-neutral-200 pt-6 mt-6 text-center">
        <button class="bg-gradient-to-r from-blue-400 to-blue-600 text-white px-8 py-3 rounded-lg font-medium flex items-center gap-2 mx-auto">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
          </svg>
          Download Full Report
        </button>
        <p class="text-sm text-neutral-500 mt-2">
          View comprehensive analytics including radar charts, detailed breakdowns, and personalized insights.
        </p>
      </div>
    </div>
  </div>
</template>

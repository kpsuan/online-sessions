<template>
  <div class="bg-white rounded-xl p-6">
    <div class="flex items-center justify-between mb-6">
      <h2 class="text-xl font-semibold text-neutral-800">Overview</h2>
      <button 
        @click="isExpanded = !isExpanded"
        class="p-2 hover:bg-neutral-50 rounded transition-transform duration-200"
        :class="{ 'rotate-180': !isExpanded }"
      >
        <svg class="w-6 h-6 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path>
        </svg>
      </button>
    </div>

    <div v-show="isExpanded" class="border border-neutral-200 rounded-xl p-6 transition-all duration-300">
      <div class="flex items-center gap-8 mb-6">
        <!-- Date -->
        <div class="bg-neutral-100 p-4 rounded-xl text-center">
          <div class="text-sm text-neutral-600">{{ date.split(' ')[0] }}</div>
          <div class="text-2xl font-semibold text-neutral-900">{{ date.split(' ')[1] }}</div>
        </div>

        <div class="w-px h-16 bg-neutral-200"></div>

        <!-- Time & Details -->
        <div>
          <div class="flex items-center gap-2 mb-4">
            <svg class="w-5 h-5 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span class="text-neutral-800">{{ time }}</span>
          </div>
        </div>

        <!-- Status and Action Button -->
        <div class="ml-auto flex items-center gap-4">
          <div v-if="isPreSession && sessionStartTime" class="font-semibold text-neutral-800">
            <Countdown :target-date="sessionStartTime" />
          </div>
          <div v-else class="font-semibold text-neutral-800">{{ status }}</div>
          
          <button 
            v-if="isPreSession"
            @click="rescheduleSession"
            class="bg-gradient-to-r from-[#74B9FF] to-[#1EA5FF] text-white px-4 py-2 rounded-lg transition-all duration-200 shadow-lg hover:bg-blue-500"
          >
            Reschedule
          </button>
        </div>
      </div>

      <!-- Simplified content for Zoom meetings - no instructions or files -->
      <div class="flex gap-8 mt-8">
        <div class="flex-1">
          <h3 class="text-xl font-semibold text-neutral-800 mb-6">Meeting Information</h3>
          <p class="text-neutral-800 leading-relaxed">
            This is a Zoom meeting session. Please join at the scheduled time using the Zoom details provided below.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Countdown from './Countdown.vue'

interface Props {
  date: string
  time: string
  status: string
  isPreSession?: boolean
  sessionStartTime?: Date
}

defineProps<Props>()
const isExpanded = ref(true)

const rescheduleSession = () => {
  // Handle reschedule logic
  console.log('Reschedule session clicked')
}
</script>


<script setup lang="ts">
interface Props {
  topic: string
  dateTime: string
  meetingId: string
  password: string
  joinLink: string
}

const props = defineProps<Props>()

const copyLink = () => {
  navigator.clipboard.writeText(props.joinLink)
  // You can add a toast notification here
}
</script>

<template>
  <div class="bg-white rounded-xl p-6 mb-8">
    <div class="flex items-center justify-between mb-6">
      <h2 class="text-xl font-semibold text-neutral-800">Zoom Details</h2>
      <button 
        @click="copyLink"
        class="bg-neutral-100 px-4 py-3 rounded-lg flex items-center gap-2 hover:bg-neutral-200"
      >
        <span class="text-neutral-600">Copy Link</span>
        <svg class="w-5 h-5 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
    </div>

    <div class="grid grid-cols-2 gap-8">
      <div class="space-y-6">
        <div>
          <div class="text-neutral-600 mb-1">Topic Title:</div>
          <div class="text-neutral-900">{{ topic }}</div>
        </div>

        <div>
          <div class="text-neutral-600 mb-1">Date Time:</div>
          <div class="text-neutral-900">{{ dateTime }}</div>
        </div>

        <div>
          <div class="text-neutral-600 mb-1">Meeting ID:</div>
          <div class="text-neutral-900">{{ meetingId }}</div>
        </div>
      </div>

      <div class="space-y-6">
        <div>
          <div class="text-neutral-600 mb-1">Password:</div>
          <div class="text-neutral-900">{{ password }}</div>
        </div>

        <div>
          <div class="text-neutral-600 mb-1">Join Link:</div>
          <a :href="joinLink" class="text-blue-600 underline hover:text-blue-800">
            {{ joinLink }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

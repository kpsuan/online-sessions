<script setup lang="ts">
import { ref } from 'vue'

interface Props {
  isExpanded: boolean
}

interface Emits {
  (e: 'update:isExpanded', value: boolean): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

// Reactive state
const rating = ref(0)
const selectedIssues = ref([])
const feedbackText = ref('')
const isRatingSubmitted = ref(false)

// Rating state management
const getRatingText = (rating: number) => {
  switch (rating) {
    case 1: return '1/5 – Needs Major Improvement'
    case 2: return '2/5 – Fair, but needs more effort'
    case 3: return '3/5 – Okay, but could improve'
    case 4: return '4/5 - Good, but still can be better'
    case 5: return '5/5 – Outstanding Experience'
    default: return ''
  }
}

const getRatingColor = (rating: number) => {
  if (rating <= 2) return 'text-red-600'
  if (rating === 3) return 'text-yellow-600'
  if (rating === 4) return 'text-blue-600'
  return 'text-green-600'
}

const toggleIssue = (issue: string) => {
  const index = selectedIssues.value.indexOf(issue)
  if (index > -1) {
    selectedIssues.value.splice(index, 1)
  } else {
    selectedIssues.value.push(issue)
  }
}

const submitRating = () => {
  isRatingSubmitted.value = true
}

const editRating = () => {
  isRatingSubmitted.value = false
}

const closeRating = () => {
  emit('update:isExpanded', false)
}
</script>

<template>
  <div v-show="isExpanded" class="border-t border-neutral-200 pt-6 mt-6 transition-all duration-300">
    
    <!-- Rating Submitted Success State -->
    <div v-if="isRatingSubmitted" class="space-y-4">
      <!-- Success Header -->
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-3">
          <div class="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
            <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <span class="text-green-600 font-semibold">Rating Submitted Successfully!</span>
        </div>
        <button @click="editRating" class="text-blue-600 hover:text-blue-700 font-medium">
          Edit
        </button>
      </div>

      <!-- Rating Summary Card -->
      <div class="bg-white border border-neutral-200 rounded-lg p-6">
        <h4 class="font-semibold text-neutral-800 mb-4">Your Rating</h4>
        <div class="flex items-center gap-4 mb-4">
          <div class="flex gap-1">
            <svg v-for="star in 5" :key="star" class="w-6 h-6 text-yellow-400 fill-current" viewBox="0 0 24 24">
              <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
            </svg>
          </div>
          <span class="text-blue-600 font-semibold">{{ getRatingText(rating) }}</span>
        </div>
        
        <div v-if="selectedIssues.length > 0">
          <h5 class="font-semibold text-neutral-800 mb-2">Lesson Highlights</h5>
          <div class="flex flex-wrap gap-2">
            <span v-for="issue in selectedIssues" :key="issue" class="px-3 py-1 bg-blue-500 text-white rounded-full text-xs font-semibold">
              {{ issue === 'great-teacher' ? 'Great Teacher' :
                 issue === 'enjoyable-lesson' ? 'Enjoyable Lesson' :
                 issue === 'explains-clearly' ? 'Explains Clearly' :
                 issue === 'learnt-a-lot' ? 'Learnt a Lot' :
                 issue === 'punctual-prepared' ? 'Punctual and Prepared' :
                 issue === 'good-communication' ? 'Good Communication' :
                 'Others' }}
            </span>
          </div>
        </div>
      </div>

      <!-- Thank You Message -->
      <p class="text-neutral-600 text-center">
        Thank you for your feedback! Your rating helps improve our service.
      </p>
    </div>

    <!-- Rating Form (when not submitted) -->
    <div v-else>
      <h3 class="text-lg font-semibold text-neutral-800 mb-4">How would you rate your experience with this tutor?</h3>
      
      <!-- Star Rating -->
      <div class="flex items-center gap-6 mb-6">
        <div class="flex gap-2">
          <button 
            v-for="star in 5" 
            :key="star"
            @click="rating = star"
            class="p-1"
          >
            <svg 
              class="w-8 h-8" 
              :class="star <= rating ? 'text-yellow-400 fill-current' : 'text-neutral-300'"
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
            </svg>
          </button>
        </div>
        <div v-if="rating > 0" :class="['text-sm font-semibold', getRatingColor(rating)]">
          {{ getRatingText(rating) }}
        </div>
      </div>

      <!-- Issue Tags (different based on rating) -->
      <div v-if="rating >= 4" class="flex flex-wrap gap-2 mb-6">
        <button 
          v-for="issue in ['great-teacher', 'enjoyable-lesson', 'explains-clearly', 'learnt-a-lot', 'punctual-prepared', 'good-communication', 'others']"
          :key="issue"
          @click="toggleIssue(issue)"
          :class="[
            'px-3 py-1 rounded-full text-xs font-semibold border',
            selectedIssues.includes(issue) 
              ? 'bg-blue-500 text-white border-blue-500' 
              : 'text-blue-500 border-blue-500'
          ]"
        >
          {{ issue === 'great-teacher' ? 'Great Teacher' :
             issue === 'enjoyable-lesson' ? 'Enjoyable Lesson' :
             issue === 'explains-clearly' ? 'Explains Clearly' :
             issue === 'learnt-a-lot' ? 'Learnt a Lot' :
             issue === 'punctual-prepared' ? 'Punctual and Prepared' :
             issue === 'good-communication' ? 'Good Communication' :
             'Others' }}
        </button>
      </div>

      <!-- Issue Tags for low ratings -->
      <div v-else-if="rating > 0" class="flex flex-wrap gap-2 mb-6">
        <button 
          v-for="issue in ['late', 'ended-early', 'unclear-instructions', 'lesson-structure', 'others']"
          :key="issue"
          @click="toggleIssue(issue)"
          :class="[
            'px-3 py-1 rounded-full text-xs font-semibold border',
            selectedIssues.includes(issue) 
              ? 'bg-primary-500 text-white border-primary-500' 
              : 'text-primary-500 border-primary-500'
          ]"
        >
          {{ issue === 'late' ? 'Showed Up Late' : 
             issue === 'ended-early' ? 'Ended Lesson Early' :
             issue === 'unclear-instructions' ? 'Unclear Instructions' :
             issue === 'lesson-structure' ? 'Lesson Wasn\'t Well Structured' :
             'Others' }}
        </button>
      </div>

      <!-- Feedback Text -->
      <div class="mb-6">
        <label class="block text-sm text-neutral-800 mb-2">Additional Feedback (Optional)</label>
        <textarea 
          v-model="feedbackText"
          class="w-full h-20 border border-neutral-300 rounded-lg p-3 text-sm"
          placeholder="Share your detailed feedback..."
        ></textarea>
      </div>

      <!-- Submit Buttons -->
      <div class="flex gap-3">
        <button @click="closeRating" class="px-4 py-2 border border-neutral-300 rounded-lg text-neutral-500 hover:bg-neutral-50">
          Cancel
        </button>
        <button @click="submitRating" :disabled="rating === 0" :class="[
          'px-6 py-2 rounded-lg font-medium',
          rating === 0 
            ? 'bg-neutral-300 text-neutral-500 cursor-not-allowed' 
            : 'bg-blue-500 text-white hover:bg-blue-600'
        ]">
          Submit Rating
        </button>
      </div>
    </div>
  </div>
</template>

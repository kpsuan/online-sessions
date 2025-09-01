<template>
  <div class="bg-white rounded-xl p-8 space-y-6">
    <!-- Section Title -->
    <div class="flex items-center justify-between mb-8">
      <h1 class="text-2xl font-bold text-neutral-900">Please Rate the Student's Performance</h1>
      <button 
        @click="emit('close')"
        class="p-2 hover:bg-neutral-100 rounded-lg transition-colors"
        title="Close"
      >
        <svg class="w-6 h-6 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
    </div>
    
    <!-- Rating Guide -->
    <RatingGuide />
    

    
    <!-- Error Messages -->
    <div v-if="errors.length > 0" class="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
      <h3 class="text-red-800 font-semibold mb-2">Please fix the following errors:</h3>
      <ul class="list-disc list-inside text-red-700 text-sm">
        <li v-for="error in errors" :key="error">{{ error }}</li>
      </ul>
    </div>
    
    <!-- General Observations -->
    <div class="bg-neutral-100 border border-gray-300 rounded-lg p-6">
      <h2 class="text-lg font-bold text-neutral-900 mb-4">General Observations</h2>
      <p class="text-sm text-neutral-900 mb-6 leading-relaxed">
        Please describe the student's behaviour and performance during this session. Please try to give a balanced report with both positive and negative observations. Please avoid overly kind feedback as the student needs reliable feedback based on the highest standard to help them learn and improve.
      </p>
      
      <div class="mb-4">
        <p class="text-xs text-neutral-700 mb-2">This will appear on the student's feedback report:</p>
      </div>
      
      <textarea 
        v-model="generalObservations"
        class="w-full h-32 p-4 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        placeholder="Please provide your general observations about the student's performance..."
      ></textarea>
    </div>
    
    <!-- Performance Rating -->
    <div class="bg-neutral-100 border border-gray-300 rounded-lg p-6">
      <h2 class="text-lg font-bold text-neutral-900 mb-4">Academic Potential</h2>
      <p class="text-sm text-neutral-900 mb-6 leading-relaxed">
        The student's ability to understand and apply new concepts, think critically, and solve problems effectively. It considers the student's curiosity, adaptability, and willingness to learn, as well as their capacity to progress with guidance and practice.
      </p>
      
            <div class="mb-6">
        <RatingScale 
          key="performance-rating"
          v-model="performanceRating"
          label="Performance Rating"
        />
      </div>
      
      <div class="pt-4">
        <p class="text-xs text-neutral-700 mb-2">This will appear on the student's feedback report:</p>
        <textarea 
          v-model="performanceFeedback"
          class="w-full h-16 p-3 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Please provide specific feedback about the student's performance..."
        ></textarea>
      </div>
    </div>
    
    <!-- Communication Rating -->
    <div class="bg-neutral-100 border border-gray-300 rounded-lg p-6">
      <h2 class="text-lg font-bold text-neutral-900 mb-4">Communication</h2>
      <p class="text-sm text-neutral-900 mb-6 leading-relaxed">
        Evaluates the student's ability to express their thoughts, ideas, and understanding clearly and effectively. It considers their verbal and written communication skills, responsiveness to feedback, and ability to engage in meaningful discussions.
      </p>
      
            <div class="mb-6">
        <RatingScale 
          key="communication-rating"
          v-model="preparednessRating"
          label="Communication Rating"
        />
      </div>
      
      <div class="pt-4">
        <p class="text-xs text-neutral-700 mb-2">This will appear on the student's feedback report:</p>
        <textarea 
          v-model="preparednessFeedback"
          class="w-full h-16 p-3 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Please provide specific feedback about the student's communication..."
        ></textarea>
      </div>
    </div>
    
    <!-- Student's Strengths and Weaknesses -->
    <div class="bg-white border border-neutral-400 rounded-lg p-6 shadow-sm">
      <h2 class="text-2xl font-bold text-neutral-900 mb-8">Student's Strengths and Weaknesses</h2>
      
      <div class="space-y-6">
        <!-- Strengths -->
        <div>
          <div class="flex items-center justify-between mb-2">
            <label class="text-lg font-normal text-neutral-900">Strengths</label>
            <span class="bg-neutral-200 text-xs text-neutral-800 px-3 py-1 rounded-full">{{ getWordCount(strengths) }}/200 words</span>
          </div>
          <p class="text-sm text-neutral-900 mb-3">
            Describe the student's clarity of speech, coherence, participation, listening skills, and responsiveness
          </p>
          <div class="relative">
            <textarea 
              v-model="strengths"
              class="w-full h-20 p-3 pr-8 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Describe the student's key strengths during the session..."
            ></textarea>
            <div class="absolute bottom-2 right-2 w-5 h-5 opacity-60">
              <svg class="w-2 h-2 fill-neutral-900" viewBox="0 0 9 9">
                <path d="M7.64638 0.646443C7.84164 0.451183 8.15815 0.451188 8.35341 0.646443C8.54867 0.841705 8.54867 1.15821 8.35341 1.35347L1.35341 8.35347C1.15814 8.54861 0.841596 8.54869 0.646378 8.35347C0.451166 8.15826 0.451249 7.84171 0.646378 7.64644L7.64638 0.646443ZM7.61122 4.61129C7.80648 4.41603 8.12299 4.41603 8.31825 4.61129C8.51351 4.80655 8.51351 5.12306 8.31825 5.31832L5.30556 8.33101C5.11029 8.52624 4.79378 8.52626 4.59853 8.33101C4.40328 8.13576 4.40331 7.81924 4.59853 7.62398L7.61122 4.61129Z"/>
              </svg>
            </div>
          </div>
        </div>
        
        <!-- Areas for Improvement -->
        <div>
          <div class="flex items-center justify-between mb-2">
            <label class="text-lg font-normal text-neutral-900">Areas for Improvement</label>
            <span class="bg-neutral-200 text-xs text-neutral-800 px-3 py-1 rounded-full">{{ getWordCount(areasForImprovement) }}/200 words</span>
          </div>
          <p class="text-sm text-neutral-900 mb-3">
            Identify areas where the student can improve their performance
          </p>
          <div class="relative">
            <textarea 
              v-model="areasForImprovement"
              class="w-full h-20 p-3 pr-8 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Describe areas where the student can improve...."
            ></textarea>
            <div class="absolute bottom-2 right-2 w-5 h-5 opacity-60">
              <svg class="w-2 h-2 fill-neutral-900" viewBox="0 0 9 9">
                <path d="M7.64638 0.646443C7.84164 0.451183 8.15815 0.451188 8.35341 0.646443C8.54867 0.841705 8.54867 1.15821 8.35341 1.35347L1.35341 8.35347C1.15814 8.54861 0.841596 8.54869 0.646378 8.35347C0.451166 8.15826 0.451249 7.84171 0.646378 7.64644L7.64638 0.646443ZM7.61122 4.61129C7.80648 4.41603 8.12299 4.41603 8.31825 4.61129C8.51351 4.80655 8.51351 5.12306 8.31825 5.31832L5.30556 8.33101C5.11029 8.52624 4.79378 8.52626 4.59853 8.33101C4.40328 8.13576 4.40331 7.81924 4.59853 7.62398L7.61122 4.61129Z"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Suggested Resources -->
    <div class="bg-white border border-neutral-400 rounded-lg shadow-sm">
      <div class="p-6">
        <h2 class="text-2xl font-bold text-neutral-900 mb-2">Suggested Resources</h2>
        <p class="text-sm text-neutral-600 mb-6">Optional section to provide additional learning materials</p>
      </div>
      
      <div class="px-6 pb-6 space-y-6">
        <!-- Paper/Practice Questions -->
        <div class="bg-neutral-200 rounded-lg p-4">
          <div class="mb-3">
            <label class="text-sm font-normal text-neutral-900">Paper/Practice Questions</label>
          </div>
          <div class="relative">
            <textarea 
              v-model="suggestedPapers"
              class="w-full h-20 p-3 pr-8 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Suggest specific paper/practice questions for the student..."
            ></textarea>
            <div class="absolute bottom-2 right-2 w-5 h-5 opacity-60">
              <svg class="w-2 h-2 fill-neutral-900" viewBox="0 0 9 9">
                <path d="M7.64638 0.646443C7.84164 0.451183 8.15815 0.451188 8.35341 0.646443C8.54867 0.841705 8.54867 1.15821 8.35341 1.35347L1.35341 8.35347C1.15814 8.54861 0.841596 8.54869 0.646378 8.35347C0.451166 8.15826 0.451249 7.84171 0.646378 7.64644L7.64638 0.646443ZM7.61122 4.61129C7.80648 4.41603 8.12299 4.41603 8.31825 4.61129C8.51351 4.80655 8.51351 5.12306 8.31825 5.31832L5.30556 8.33101C5.11029 8.52624 4.79378 8.52626 4.59853 8.33101C4.40328 8.13576 4.40331 7.81924 4.59853 7.62398L7.61122 4.61129Z"/>
              </svg>
            </div>
          </div>
        </div>
        
        <!-- Videos -->
        <div class="bg-neutral-200 rounded-lg p-4">
          <div class="mb-3">
            <label class="text-sm font-normal text-neutral-900">Videos</label>
          </div>
          <div class="relative">
            <textarea 
              v-model="suggestedVideos"
              class="w-full h-20 p-3 pr-8 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Suggest specific videos to watch for the student..."
            ></textarea>
            <div class="absolute bottom-2 right-2 w-5 h-5 opacity-60">
              <svg class="w-2 h-2 fill-neutral-900" viewBox="0 0 9 9">
                <path d="M7.64638 0.646443C7.84164 0.451183 8.15815 0.451188 8.35341 0.646443C8.54867 0.841705 8.54867 1.15821 8.35341 1.35347L1.35341 8.35347C1.15814 8.54861 0.841596 8.54869 0.646378 8.35347C0.451166 8.15826 0.451249 7.84171 0.646378 7.64644L7.64638 0.646443ZM7.61122 4.61129C7.80648 4.41603 8.12299 4.41603 8.31825 4.61129C8.51351 4.80655 8.51351 5.12306 8.31825 5.31832L5.30556 8.33101C5.11029 8.52624 4.79378 8.52626 4.59853 8.33101C4.40328 8.13576 4.40331 7.81924 4.59853 7.62398L7.61122 4.61129Z"/>
              </svg>
            </div>
          </div>
        </div>
        
        <!-- Textbooks -->
        <div class="bg-neutral-200 rounded-lg p-4">
          <div class="mb-3">
            <label class="text-sm font-normal text-neutral-900">Textbooks</label>
          </div>
          <div class="relative">
            <textarea 
              v-model="suggestedTextbooks"
              class="w-full h-20 p-3 pr-8 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Suggest specific textbooks for the student...."
            ></textarea>
            <div class="absolute bottom-2 right-2 w-5 h-5 opacity-60">
              <svg class="w-2 h-2 fill-neutral-900" viewBox="0 0 9 9">
                <path d="M7.64638 0.646443C7.84164 0.451183 8.15815 0.451188 8.35341 0.646443C8.54867 0.841705 8.54867 1.15821 8.35341 1.35347L1.35341 8.35347C1.15814 8.54861 0.841596 8.54869 0.646378 8.35347C0.451166 8.15826 0.451249 7.84171 0.646378 7.64644L7.64638 0.646443ZM7.61122 4.61129C7.80648 4.41603 8.12299 4.41603 8.31825 4.61129C8.51351 4.80655 8.51351 5.12306 8.31825 5.31832L5.30556 8.33101C5.11029 8.52624 4.79378 8.52626 4.59853 8.33101C4.40328 8.13576 4.40331 7.81924 4.59853 7.62398L7.61122 4.61129Z"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Submit Button -->
    <div class="bg-white border border-neutral-400 rounded-lg p-6 shadow-sm">
      <button 
        @click="submitFeedback"
        :disabled="isSubmitting"
        :class="[
          'w-full h-11 text-xl rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2',
          isSubmitting 
            ? 'bg-gray-400 text-white cursor-not-allowed' 
            : 'bg-gradient-to-r from-[#74B9FF] to-[#1EA5FF] text-white hover:from-[#6BAEFF] hover:to-[#0E9FFF]'
        ]"
      >
        <svg v-if="isSubmitting" class="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
        </svg>
        {{ isSubmitting ? 'Submitting...' : 'Submit Feedback' }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import RatingScale from './RatingScale.vue'
import RatingGuide from './RatingGuide.vue'

interface Props {
  initialData?: FeedbackData
}

interface FeedbackData {
  generalObservations: string
  performanceRating: number
  performanceFeedback: string
  preparednessRating: number
  preparednessFeedback: string
  strengths: string
  areasForImprovement: string
  suggestedPapers: string
  suggestedVideos: string
  suggestedTextbooks: string
  isSubmitted?: boolean
}

interface Emits {
  (e: 'close'): void
  (e: 'submit', data: FeedbackData): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

// Form data - initialize with props data if available
const generalObservations = ref(props.initialData?.generalObservations || '')
const performanceRating = ref(props.initialData?.performanceRating || 0)
const performanceFeedback = ref(props.initialData?.performanceFeedback || '')
const preparednessRating = ref(props.initialData?.preparednessRating || 0)
const preparednessFeedback = ref(props.initialData?.preparednessFeedback || '')
const strengths = ref(props.initialData?.strengths || '')
const areasForImprovement = ref(props.initialData?.areasForImprovement || '')
const suggestedPapers = ref(props.initialData?.suggestedPapers || '')
const suggestedVideos = ref(props.initialData?.suggestedVideos || '')
const suggestedTextbooks = ref(props.initialData?.suggestedTextbooks || '')

const isSubmitting = ref(false)
const errors = ref<string[]>([])



const getWordCount = (text: string) => {
  if (!text.trim()) return 0
  return text.trim().split(/\s+/).length
}

const validateForm = (): boolean => {
  errors.value = []
  
  if (!generalObservations.value.trim()) {
    errors.value.push('General observations are required')
  }
  
  if (performanceRating.value === 0) {
    errors.value.push('Performance rating is required')
  }
  
  if (preparednessRating.value === 0) {
    errors.value.push('Communication rating is required')
  }
  
  if (!strengths.value.trim()) {
    errors.value.push('Strengths description is required')
  }
  
  if (!areasForImprovement.value.trim()) {
    errors.value.push('Areas for improvement description is required')
  }
  
  return errors.value.length === 0
}

const submitFeedback = async () => {
  if (!validateForm()) {
    return
  }
  
  isSubmitting.value = true
  
  try {
    const feedbackData: FeedbackData = {
      generalObservations: generalObservations.value,
      performanceRating: performanceRating.value,
      performanceFeedback: performanceFeedback.value,
      preparednessRating: preparednessRating.value,
      preparednessFeedback: preparednessFeedback.value,
      strengths: strengths.value,
      areasForImprovement: areasForImprovement.value,
      suggestedPapers: suggestedPapers.value,
      suggestedVideos: suggestedVideos.value,
      suggestedTextbooks: suggestedTextbooks.value,
      isSubmitted: true
    }
    
    // Emit the data for parent component to handle backend submission
    emit('submit', feedbackData)
    
    // Close the form after successful submission
    emit('close')
  } catch (error) {
    console.error('Error submitting feedback:', error)
    errors.value.push('Failed to submit feedback. Please try again.')
  } finally {
    isSubmitting.value = false
  }
}
</script>

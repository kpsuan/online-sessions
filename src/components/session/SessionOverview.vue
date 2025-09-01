<script setup lang="ts">
import { ref } from 'vue'
import TutorRating from '../rating/TutorRating.vue'
import FileItem from '../files/FileItem.vue'
import FileUpload from '../files/FileUpload.vue'
import Countdown from './Countdown.vue'

interface Props {
  date: string
  time: string
  status: string
  isPreSession?: boolean
  sessionStartTime?: Date
  isTutorView?: boolean
  isSessionDone?: boolean
  learningMaterials?: Array<any>
  isFeedbackSubmitted?: boolean
}

const props = defineProps<Props>()
const isExpanded = ref(true)
const isRateTutorExpanded = ref(false)

const emit = defineEmits<{
  addFeedbackReport: []
  fileUploaded: [file: any]
  fileDelete: [file: any]
}>()

const rescheduleSession = () => {
  // Handle reschedule logic
  console.log('Reschedule session clicked')
}

const handleAddFeedbackReport = () => {
  emit('addFeedbackReport')
}
</script>

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
          <button 
            v-else-if="isTutorView && isSessionDone"
            @click="handleAddFeedbackReport"
            class="bg-gradient-to-r from-[#74B9FF] to-[#1EA5FF] text-white px-4 py-2 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            {{ isFeedbackSubmitted ? 'Modify Feedback Report' : 'Add Feedback Report' }}
          </button>
          <button 
            v-else
            @click="isRateTutorExpanded = !isRateTutorExpanded"
            :class="[
              'text-white px-4 py-2 rounded-lg transition-all duration-200',
              isRateTutorExpanded 
                ? 'bg-neutral-300 hover:bg-neutral-400' 
                : 'bg-gradient-to-r from-[#74B9FF] to-[#1EA5FF] shadow-lg hover:shadow-xl'
            ]"
          >
            Rate Tutor
          </button>
        </div>
      </div>

      <!-- Rate Tutor Component (only for students) -->
      <TutorRating 
        v-if="!isTutorView"
        :is-expanded="isRateTutorExpanded"
        @update:is-expanded="isRateTutorExpanded = $event"
      />

      <!-- Instructions Section -->
      <div class="flex gap-8 mt-8">
        <div class="flex-1">
          <h3 class="text-xl font-semibold text-neutral-800 mb-6">Instructions</h3>
          <p class="text-neutral-800 leading-relaxed">
            In this session, begin by having Ana talk through her report to assess her understanding and identify any gaps in her research and writing. Review the report together to evaluate its suitability for inclusion in her final research-style project. Guide Ana on how to address and resolve any issues or gaps you find, teaching her the necessary skills to improve both content and presentation. Also, have a clear discussion with Kaia to finalize the focus and scope of her project's final piece, so she has a definite direction moving forward. If time permits, briefly discuss how the project relates specifically to her university applications.
          </p>
        </div>

        <div class="flex-1 space-y-6">
          <!-- Attached Files -->
          <div>
            <h3 class="text-xl font-semibold text-neutral-800 mb-4">Attached Instruction File</h3>
            <FileItem 
              fileName="instruction_file.docx"
              uploadedBy="CS Hannah"
              uploadDate="July 25 2025"
              fileSize="2.7 MB"
              :showDelete="false"
            />
          </div>

          <!-- Learning Materials -->
          <div>
            <h3 class="text-xl font-semibold text-neutral-800 mb-4">Learning Materials</h3>
            
            <!-- File Upload for Tutors (at the top) -->
            <div v-if="isTutorView" class="mb-6">
              <FileUpload 
                :files="[]"
                :is-tutor-view="true"
                @file-uploaded="(file) => emit('fileUploaded', file)"
                @file-delete="(file) => emit('fileDelete', file)"
              />
            </div>
            
            <!-- Show existing files -->
            <div v-if="learningMaterials && learningMaterials.length > 0" class="space-y-3">
              <FileItem 
                v-for="material in learningMaterials"
                :key="material.id"
                :fileName="material.name"
                :uploadedBy="material.uploadedBy"
                :uploadDate="material.uploadDate || 'July 27 2025'"
                :fileSize="material.size"
                :showDelete="isTutorView"
                @delete="emit('fileDelete', material)"
              />
            </div>
            
            <!-- Default file if no learning materials -->
            <div v-if="!learningMaterials || learningMaterials.length === 0">
              <FileItem 
                fileName="learning_materials.docx"
                uploadedBy="Felicity"
                uploadDate="July 27 2025"
                fileSize="2.7 MB"
                :showDelete="isTutorView"
                @delete="() => {}"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

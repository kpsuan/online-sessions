<template>
  <div>

    <!-- File Upload Area -->
    <div 
      class="border-2 border-dashed border-neutral-300 rounded-xl p-6 text-center transition-colors hover:border-blue-400 hover:bg-blue-50/30 mb-4"
      :class="{ 'border-blue-400 bg-blue-50/30': isDragOver }"
      @dragover.prevent="isDragOver = true"
      @dragleave.prevent="isDragOver = false"
      @drop.prevent="handleFileDrop"
      @click="triggerFileInput"
    >
      <!-- Upload Icon -->
      <div class="w-12 h-12 mx-auto mb-3 bg-blue-100 rounded-full flex items-center justify-center">
        <LucideUpload class="w-6 h-6 text-blue-500" />
      </div>

      <!-- Upload Text -->
      <div class="mb-2">
        <span class="text-blue-500 font-medium">Drag & drop</span>
        <span class="text-neutral-700"> your files here or </span>
        <span class="text-blue-500 font-medium cursor-pointer underline">click to browse</span>
      </div>

      <!-- Supported Formats -->
      <div class="text-sm text-neutral-500">
        Supported formats: PDF, DOC, DOCX
      </div>
    </div>

    <!-- Hidden File Input -->
    <input
      ref="fileInput"
      type="file"
      multiple
      accept=".pdf,.doc,.docx"
      @change="handleFileSelect"
      class="hidden"
    />

    <!-- Existing Files -->
    <div v-if="files.length > 0" class="space-y-3 mb-4">
      <div v-for="file in files" :key="file.id" class="bg-white p-4 rounded-lg flex items-center gap-4 cursor-pointer hover:bg-gray-50 transition-all duration-200 border border-gray-100 shadow-sm">
        <!-- File Icon -->
        <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
          <svg class="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
          </svg>
        </div>
        
        <!-- File Info -->
        <div class="flex-1">
          <div class="font-semibold text-neutral-800 text-base hover:text-blue-600 hover:underline cursor-pointer transition-colors">{{ file.name }}</div>
          <div class="text-sm text-neutral-500 mt-1">Uploaded by {{ file.uploadedBy }} on {{ file.uploadDate }} | {{ file.size }}</div>
        </div>
        
        <!-- Delete Button -->
        <button 
          v-if="isTutorView"
          @click="deleteFile(file)"
          class="p-2 hover:bg-red-100 rounded-lg transition-colors"
        >
          <LucideTrash2 class="w-4 h-4 text-red-500" />
        </button>
      </div>
    </div>

    <!-- Upload Progress (shown when uploading) -->
    <div v-if="uploadingFiles.length > 0" class="mt-6 space-y-3">
      <div v-for="file in uploadingFiles" :key="file.name" class="flex items-center gap-3">
        <div class="w-8 h-8 bg-blue-50 rounded flex items-center justify-center">
          <LucideFileText class="w-4 h-4 text-blue-500" />
        </div>
        <div class="flex-1">
          <div class="text-sm font-medium text-neutral-900">{{ file.name }}</div>
          <div class="w-full bg-neutral-200 rounded-full h-2 mt-1">
            <div 
              class="bg-blue-500 h-2 rounded-full transition-all duration-300" 
              :style="`width: ${file.progress}%`"
            ></div>
          </div>
        </div>
        <div class="text-sm text-neutral-600">{{ file.progress }}%</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { LucideFileText, LucideUpload, LucideTrash2 } from 'lucide-vue-next'

interface FileItem {
  id: string
  name: string
  uploadedBy: string
  uploadDate: string
  size: string
  url?: string
}

interface UploadingFile {
  name: string
  progress: number
}

interface Props {
  files?: FileItem[]
  isTutorView?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  files: () => []
})

const emit = defineEmits<{
  'file-uploaded': [file: FileItem]
  'file-delete': [file: FileItem]
}>()

const fileInput = ref<HTMLInputElement>()
const isDragOver = ref(false)
const uploadingFiles = ref<UploadingFile[]>([])

const triggerFileInput = () => {
  fileInput.value?.click()
}

const handleFileSelect = (event: Event) => {
  const target = event.target as HTMLInputElement
  if (target.files) {
    handleFiles(Array.from(target.files))
  }
}

const handleFileDrop = (event: DragEvent) => {
  isDragOver.value = false
  if (event.dataTransfer?.files) {
    handleFiles(Array.from(event.dataTransfer.files))
  }
}

const handleFiles = (files: File[]) => {
  files.forEach(file => {
    if (isValidFileType(file)) {
      uploadFile(file)
    }
  })
}

const isValidFileType = (file: File): boolean => {
  const validTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
  return validTypes.includes(file.type)
}

const uploadFile = (file: File) => {
  const uploadingFile: UploadingFile = {
    name: file.name,
    progress: 0
  }
  
  uploadingFiles.value.push(uploadingFile)

  // Simulate file upload progress
  const interval = setInterval(() => {
    uploadingFile.progress += 10
    
    if (uploadingFile.progress >= 100) {
      clearInterval(interval)
      
      // Remove from uploading files
      uploadingFiles.value = uploadingFiles.value.filter(f => f.name !== file.name)
      
      // Create uploaded file item
      const newFile: FileItem = {
        id: Date.now().toString(),
        name: file.name,
        uploadedBy: 'Felicity (Tutor)',
        uploadDate: new Date().toLocaleDateString('en-US', { 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        }),
        size: formatFileSize(file.size)
      }
      
      emit('file-uploaded', newFile)
    }
  }, 200)
}

const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return '0 Bytes'
  const k = 1024
  const sizes = ['Bytes', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
}

const deleteFile = (file: FileItem) => {
  emit('file-delete', file)
}
</script>

<style scoped>
.shadow-card {
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}
</style>

<script setup lang="ts">
import { LucideTrash2 } from 'lucide-vue-next'

interface Props {
  fileName: string
  uploadedBy: string
  uploadDate: string
  fileSize: string
  showDelete?: boolean
}

defineProps<Props>()

const emit = defineEmits<{
  delete: []
}>()

const handleDelete = () => {
  emit('delete')
}
</script>

<template>
  <div class="bg-white p-4 rounded-lg flex items-center gap-4 cursor-pointer hover:bg-gray-50 transition-all duration-200 border border-gray-100 shadow-sm">
    <!-- File Icon -->
    <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
      <svg class="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
        <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
      </svg>
    </div>
    
    <!-- File Info -->
    <div class="flex-1">
      <div class="font-semibold text-neutral-800 text-base hover:text-blue-600 hover:underline cursor-pointer transition-colors">
        {{ fileName }}
      </div>
      <div class="text-sm text-neutral-500 mt-1">
        Uploaded by {{ uploadedBy }} on {{ uploadDate }} | {{ fileSize }}
      </div>
    </div>
    
    <!-- Delete Button -->
    <button 
      v-if="showDelete"
      @click.stop="handleDelete"
      class="p-2 hover:bg-red-100 rounded-lg transition-colors"
    >
      <LucideTrash2 class="w-4 h-4 text-red-500" />
    </button>
  </div>
</template>

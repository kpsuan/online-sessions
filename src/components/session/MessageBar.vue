<script setup lang="ts">
import { ref } from 'vue'
import { LucideMail, LucidePlus, LucideSend } from 'lucide-vue-next'

interface Message {
  id: string
  user: string
  message: string
  timestamp: string
  avatar: string
}

interface Props {
  messages: Message[]
  showMessageBar: boolean
}

const props = defineProps<Props>()
const newMessage = ref('')

const sendMessage = () => {
  if (newMessage.value.trim()) {
    // Emit the new message to parent component
    emit('send-message', newMessage.value)
    newMessage.value = ''
  }
}

const emit = defineEmits<{
  'send-message': [message: string]
}>()
</script>

<template>
  <div v-if="showMessageBar" class="bg-white rounded-2xl p-6 shadow-card">
    <div class="flex items-center justify-between pb-4 border-b border-neutral-200 mb-6">
      <div class="flex items-center gap-2">
        <LucideMail class="w-5 h-5 text-neutral-500" />
        <span class="font-medium text-neutral-600 underline">Messages</span>
      </div>
     
    </div>

    <!-- Profile Images -->
    <div class="flex items-center gap-2 mb-6">
      <img src="https://api.builder.io/api/v1/image/assets/TEMP/bdb8d7c072efa538c3eaee4539d6bc48231c5e23?width=90" alt="User 1" class="w-11 h-11 rounded-full" />
      <img src="https://api.builder.io/api/v1/image/assets/TEMP/216e66c9fd087c5debb806491e6fe1588e0d33d3?width=108" alt="User 2" class="w-14 h-14" />
      <img src="https://api.builder.io/api/v1/image/assets/TEMP/3d37d2cab79439b48b6a882b37b72765914e699d?width=120" alt="User 3" class="w-12 h-12 rounded-full" />
    </div>

    <!-- Messages -->
    <div class="space-y-4 mb-6 max-h-48 overflow-y-auto">
      <div v-for="message in messages" :key="message.id" class="flex gap-3">
        <img :src="message.avatar" :alt="message.user" class="w-6 h-6 rounded-full flex-shrink-0" />
        <div class="flex-1">
          <div class="font-medium text-primary-800 text-sm underline">{{ message.user }}</div>
          <div class="text-neutral-600 text-sm mt-1">{{ message.message }}</div>
          <div class="text-neutral-500 text-xs mt-2">{{ message.timestamp }}</div>
        </div>
      </div>
    </div>

    <!-- Message Input -->
    <div class="space-y-3">
      <textarea 
        v-model="newMessage"
        placeholder="Type your message here."
        class="w-full min-h-20 p-3 border border-neutral-300 rounded-lg text-sm resize-none"
      ></textarea>
      <button 
        @click="sendMessage"
        class="w-full bg-blue-400 text-white py-2 px-4 rounded-lg hover:bg-blue-500 flex items-center justify-center gap-2 transition-colors"
      >
        <LucideSend class="w-4 h-4" />
        Send message
      </button>
    </div>
  </div>
</template>

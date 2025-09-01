<template>
  <div class="bg-white rounded-xl p-6">
    <!-- Header -->
    <div class="flex items-center justify-between mb-8">
      <h2 class="text-xl font-semibold text-neutral-900 font-inter">Participants</h2>
      <button 
        @click="handleAddParticipant"
        class="bg-gradient-to-r from-[#74B9FF] to-[#1EA5FF] text-white px-4 py-2 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl flex items-center gap-1.5"
      >
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
        </svg>
        <span class="text-sm font-medium">Add</span>
      </button>
    </div>

    <!-- Participants Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="participant in participants"
        :key="participant.id"
        class="participant-card p-4"
      >
        <div class="flex items-center justify-between">
          <!-- Avatar and Info -->
          <div class="flex items-center gap-4">
            <!-- Avatar -->
            <div class="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
              <img 
                :src="participant.avatar" 
                :alt="participant.name"
                class="w-full h-full object-cover"
                @error="(e) => handleImageError(e, participant.name)"
              />
            </div>
            
            <!-- Name and Email -->
            <div class="flex flex-col gap-0.5 min-w-0 flex-1">
              <h3 class="text-base font-semibold text-gray-900 font-inter truncate">
                {{ participant.name }}
              </h3>
              <p class="text-sm text-gray-600 font-inter truncate">
                {{ participant.email }}
              </p>
            </div>
          </div>
          
          <!-- Menu Button -->
          <button 
            @click="handleMenuClick(participant)"
            class="flex items-center justify-center w-6 h-6 text-gray-400 hover:text-gray-600 transition-colors duration-200 flex-shrink-0"
            :aria-label="`Menu for ${participant.name}`"
          >
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <circle cx="12" cy="5" r="2"/>
              <circle cx="12" cy="12" r="2"/>
              <circle cx="12" cy="19" r="2"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Participant {
  id: number
  name: string
  email: string
  avatar: string
}

interface Props {
  initialParticipants?: Participant[]
}

interface Emits {
  (e: 'add-participant'): void
  (e: 'menu-click', participant: Participant): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

// Default participants data
const defaultParticipants: Participant[] = [
  {
    id: 1,
    name: 'Ana',
    email: 'email@viptutors.co',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b412?w=96&h=96&fit=crop&crop=face'
  },
  {
    id: 2,
    name: 'Sophia',
    email: 'email@viptutors.co',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=96&h=96&fit=crop&crop=face'
  },
  {
    id: 3,
    name: 'Mark',
    email: 'email@viptutors.co',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=96&h=96&fit=crop&crop=face'
  },
  {
    id: 4,
    name: 'David',
    email: 'email@viptutors.co',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&fit=crop&crop=face'
  },
  {
    id: 5,
    name: 'Isabel',
    email: 'email@viptutors.co',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&fit=crop&crop=face'
  }
]

const participants = ref<Participant[]>(props.initialParticipants || defaultParticipants)

const handleAddParticipant = () => {
  emit('add-participant')
}

const handleMenuClick = (participant: Participant) => {
  emit('menu-click', participant)
}

const handleImageError = (event: Event, name: string) => {
  const target = event.target as HTMLImageElement
  // Fallback to a placeholder avatar if image fails to load
  target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=e5e7eb&color=6b7280&size=48`
}
</script>

<style scoped>
.participant-card {
  @apply bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200;
}

.font-inter {
  font-family: 'Inter', sans-serif;
}
</style>

<script setup lang="ts">
import { ref } from 'vue'
import ZoomSessionOverview from '../../components/session/ZoomSessionOverview.vue'
import ZoomInfo from '../../components/session/ZoomInfo.vue'
import MessageBar from '../../components/session/MessageBar.vue'
import Countdown from '../../components/session/Countdown.vue'
import ProgressSidebar from '../../components/session/ProgressSidebar.vue'
import Header from '../../components/session/Header.vue'
import Participants from '../../components/session/Participants.vue'

// Mock data
const sessionData = {
  title: 'Claefer - Vocabulary Test S3 AEP B1',
  organization: '全明星教育ALL STARS LAB',
  students: ['Ana', 'Sophia', 'Mark', 'David', 'Isabel', 'Lucas'],
  bookingFee: '¥ 1,575.00',
  date: 'Wed 15',
  time: '15th July 2025, 09:30pm | (Asia/Shanghai GMT +08:00)',
  status: 'Scheduled',
  progress: 30,
  xp: 200,
  sessionStartTime: new Date('2025-07-15T21:30:00') // 9:30 PM
}

// Zoom details
const zoomData = {
  topic: 'Ana - IGCSE Business Tutoring S1',
  dateTime: '15th July 2025, 09:30pm | (Asia/Shanghai GMT +08:00)',
  meetingId: '123 456 7890',
  password: 'abc123',
  joinLink: 'https://zoom.us/j/1234567890?pwd=abc123'
}

// Progress data
const progressData = {
  progress: 30,
  xp: 200,
  completedTasks: 1,
  totalTasks: 3,
  todoItems: [
    { id: '1', title: 'Join Zoom Session', xp: 400, completed: false },
    { id: '2', title: 'Review Session Insights and Tutor Feedback', xp: 350, completed: false },
    { id: '3', title: 'Rate Tutor', xp: 200, completed: false }
  ],
  bonusOpportunities: [
    { title: 'Punctuality', xp: 100 },
    { title: 'Quality Bonus (Based on feedback report)', xp: 500 }
  ]
}



const showMessageBar = ref(false)


const rescheduleSession = () => {
  // Handle reschedule logic
  console.log('Reschedule session clicked')
}

const handleReassignTutor = () => {
  // Handle tutor reassignment logic
  console.log('Reassign tutor clicked')
}

const handleEditBooking = () => {
  // Handle edit booking logic
  console.log('Edit booking clicked')
}

const handleAddParticipant = () => {
  console.log('Add participant clicked')
  // Handle adding new participant
}

const handleParticipantMenu = (participant: any) => {
  console.log('Participant menu clicked:', participant)
  // Handle participant menu actions
}
</script>

<template>
  <div class="min-h-screen bg-neutral-25">
    <!-- Header -->
    <header class="bg-white border-b border-neutral-200 px-6 py-4">
      <div class="flex items-center justify-between">
        <!-- Left Section -->
        <div class="flex items-center gap-16">
          <!-- Logo -->
          <div class="flex items-center">
            <img src="https://api.builder.io/api/v1/image/assets/TEMP/1320e783fe78f178274403a639a1d52a5ef61948?width=464" alt="VTR Tutors" class="h-12" />
          </div>
          
          <!-- Search Bar -->
          <div class="flex items-center bg-neutral-50 rounded-2xl px-6 py-4 w-96">
            <svg class="w-6 h-6 text-neutral-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
            <input type="text" placeholder="Search here..." class="bg-transparent outline-none text-neutral-500 w-full" />
          </div>
        </div>

        <!-- Right Section -->
        <div class="flex items-center gap-6">
          <!-- Language Selector -->
          <div class="flex items-center gap-4 px-4 py-3">
            <img src="https://api.builder.io/api/v1/image/assets/TEMP/11bca8d5b5bb675f56e84fbeab4407d52c553abc?width=48" alt="US Flag" class="w-6 h-6" />
            <span class="font-semibold text-neutral-800">Eng (US)</span>
            <svg class="w-6 h-6 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </div>

          <!-- Notification Icons -->
          <div class="flex items-center gap-4">
            <div class="bg-yellow-50 p-3 rounded-lg relative">
              <svg class="w-6 h-6 text-neutral-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              <div class="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
            </div>
            <div class="bg-yellow-50 p-3 rounded-lg">
              <svg class="w-6 h-6 text-neutral-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/>
              </svg>
            </div>
            <div class="bg-yellow-50 p-3 rounded-lg">
              <svg class="w-6 h-6 text-neutral-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
          </div>

          <!-- User Profile -->
          <div class="flex items-center gap-3">
            <img src="https://api.builder.io/api/v1/image/assets/TEMP/3d37d2cab79439b48b6a882b37b72765914e699d?width=120" alt="User Avatar" class="w-12 h-12 rounded-2xl" />
            <div>
              <div class="font-medium text-neutral-900">Ana</div>
              <div class="text-sm text-neutral-500">ED - ASC</div>
            </div>
            <svg class="w-4 h-4 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </div>
        </div>
      </div>
    </header>

    <div class="flex">
      <!-- Sidebar -->
      <aside class="w-24 bg-white h-screen pt-12 px-6">
        <div class="flex flex-col items-center gap-6">
          <!-- Dashboard Icon (Active) -->
          <div class="bg-orange-500 p-4 rounded-2xl shadow-dropdown">
            <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>
            </svg>
          </div>

          <!-- Other Nav Items -->
          <div class="p-4 rounded-2xl shadow-dropdown">
            <svg class="w-8 h-8 text-neutral-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z"/>
            </svg>
          </div>

          <div class="p-4 rounded-2xl shadow-dropdown">
            <svg class="w-8 h-8 text-neutral-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 11H7v9a2 2 0 002 2h8a2 2 0 002-2V8a2 2 0 00-2-2h-3V4a2 2 0 00-2-2H8a2 2 0 00-2 2v3H4a2 2 0 00-2 2v9a2 2 0 002 2h3V11z"/>
            </svg>
          </div>

          <div class="p-4 rounded-2xl shadow-dropdown">
            <svg class="w-8 h-8 text-neutral-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
            </svg>
          </div>
        </div>
      </aside>

      <!-- Main Content Area -->
      <main class="flex-1 p-8">
        <!-- Back Button -->
        <div class="mb-8">
          <button class="flex items-center gap-2 px-4 py-2 border border-neutral-300 rounded-lg bg-white hover:bg-neutral-50">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
            </svg>
            <span class="text-neutral-600">Go back to Dashboard</span>
          </button>
        </div>

        <!-- Two Column Layout -->
        <div class="flex gap-7">
          <!-- Left Column - All Main Info -->
          <div class="flex-1 max-w-5xl space-y-8">
            <!-- Course Info Header -->
            <Header 
              :title="sessionData.title"
              :students="sessionData.students"
              :booking-fee="sessionData.bookingFee"
              :organization="sessionData.organization"
              :header-type="'zoom'"
              @reassign-tutor="handleReassignTutor"
              @edit-booking="handleEditBooking"
            />

            <!-- Overview Section -->
            <ZoomSessionOverview 
              :date="sessionData.date"
              :time="sessionData.time"
              :status="sessionData.status"
              :is-pre-session="true"
              :session-start-time="sessionData.sessionStartTime"
            />

            <!-- Zoom Details -->
            <ZoomInfo 
              :topic="zoomData.topic"
              :date-time="zoomData.dateTime"
              :meeting-id="zoomData.meetingId"
              :password="zoomData.password"
              :join-link="zoomData.joinLink"
            />

            <!-- Participants Section -->
            <Participants 
              @add-participant="handleAddParticipant"
              @menu-click="handleParticipantMenu"
            />

            
          </div>

          <!-- Right Column - Messages and Progress (Fixed Width Sidebar) -->
          <div class="space-y-8" style="width: 403px;">
            
            <!-- Progress Section -->
            <div class="w-full">
              <ProgressSidebar 
                :progress="progressData.progress"
                :xp="progressData.xp"
                :completed-tasks="progressData.completedTasks"
                :total-tasks="progressData.totalTasks"
                :todo-items="progressData.todoItems"
                :bonus-opportunities="progressData.bonusOpportunities"
                class="w-full"
              />
            </div>

           
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<style scoped>
/* Additional custom styles if needed */
</style>
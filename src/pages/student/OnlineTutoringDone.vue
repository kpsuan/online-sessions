<script setup lang="ts">
import { ref } from 'vue'
import SessionOverview from '../../components/session/SessionOverview.vue'
import KeyTopics from '../../components/session/KeyTopics.vue'
import SessionInsights from '../../components/session/SessionInsights.vue'
import TutorFeedback from '../../components/session/TutorFeedback.vue'
import ProgressSidebar from '../../components/session/ProgressSidebar.vue'

// Mock data
const sessionData = {
  title: 'Ana - IGCSE Business Tutoring S1',
  organization: '全明星教育ALL STARS LAB',
  tutor: 'Felicity',
  student: 'Sheryl',
  bookingFee: '¥ 1,575.00',
  date: 'Wed 15',
  time: '15th July 2025, 09:30pm | (Asia/Shanghai GMT +08:00)',
  status: 'Meeting Done',
  progress: 70,
  xp: 600
}

// Data for components
const keyTopicsData = {
  topics: [
    'Quadratic equations and their applications',
    'Factoring polynomials using different methods',
    'Graphing parabolas and understanding vertex form',
    'Word problems involving quadratic relationships'
  ],
  summary: 'This session focused on strengthening the student\'s understanding of quadratic equations. We began with a review of basic factoring techniques, then progressed to more complex applications. The student demonstrated good grasp of the fundamental concepts but needs additional practice with word problems. We worked through several examples together, emphasizing the importance of identifying key information and setting up equations correctly. The session concluded with assignment of practice problems to reinforce today\'s learning.'
}

const sessionInsightsData = {
  score: 7.5,
  description: 'Anna, you\'re progressing well in comprehension, but your learning will accelerate when you focus on answer quality—not just participation. Prioritize correctness, elaboration, and relevance in each response. Treat every question as a chance to showcase your understanding, and don\'t be afraid to ask follow-ups or clarify your thinking. Your grasp of quadratic equations is solid, but practice with word problems will help cement these concepts for real-world applications.',
  metrics: {
    participation: 2.7,
    speakingRate: 8.0,
    pronunciation: 7.2,
    preparedness: 8.5,
    performance: 7.8
  }
}

const progressData = {
  progress: 70,
  xp: 600,
  completedTasks: 2,
  totalTasks: 3,
  todoItems: [
    { id: '1', title: 'Attend Zoom Session', xp: 400, completed: true },
    { id: '2', title: 'Review Session Insights and Tutor Feedback', xp: 350, completed: true },
    { id: '3', title: 'Rate Tutor', xp: 200, completed: false }
  ],
  bonusOpportunities: [
    { title: 'Punctuality', xp: 100 },
    { title: 'Quality Bonus (Based on feedback report)', xp: 500 }
  ]
}

const tutorFeedbackData = {
  generalObservation: 'Anna, you\'re progressing well in comprehension, but your learning will accelerate when you focus on answer quality—not just participation. Prioritize correctness, elaboration, and relevance in each response. Treat every question as a chance to showcase your understanding, and don\'t be afraid to ask follow-ups or clarify your thinking. Your grasp of quadratic equations is solid, but practice with word problems will help cement these concepts for real-world applications.',
  overallScore: 7.25,
  performance: {
    score: 8.5,
    description: 'The student demonstrates solid understanding of quadratic equations and actively participates in class.'
  },
  preparedness: {
    score: 7.8,
    description: 'Anna shows good comprehension, but focusing on accuracy and elaboration in responses will strengthen her learning.'
  },
  strengths: [
    'Strong foundational understanding of algebraic concepts',
    'Quick to grasp new mathematical relationships',
    'Excellent problem-solving approach when given time',
    'Shows genuine curiosity and asks thoughtful questions'
  ],
  weaknesses: [
    'Needs to speak up more during discussions',
    'Quick to grasp new mathematical relationships',
    'Work on confidence when tackling complex word problems',
    'Improve speed in mental calculations'
  ],
  resources: [
    {
      type: 'For past papers/practice questions',
      title: 'https://practice-questions.com/',
      url: 'https://example-resources.org/'
    },
    {
      type: 'Supplementary video explanations for challenging topics',
      title: 'Khan Academy Videos'
    },
    {
      type: 'Textbooks to help you',
      title: '"Calculus 101" - Bogart, Beasley, Rico'
    }
  ]
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

        <div class="flex gap-7">
          <!-- Left Content -->
          <div class="flex-1 max-w-5xl">
            <!-- Video Section -->
            <div class="bg-white rounded-xl mb-8">
              <!-- Video Player -->
              <div class="relative rounded-t-xl overflow-hidden">
                <img src="https://api.builder.io/api/v1/image/assets/TEMP/3b87de9845a33423f710e0bf5523b7618e998dc9?width=2134" alt="Video Thumbnail" class="w-full h-[500px] object-cover" />
                
                <!-- Video Controls Overlay -->
                <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <!-- Progress Bar -->
                  <div class="mb-4">
                    <div class="w-full h-1 bg-white/30 rounded-full">
                      <div class="w-1/3 h-1 bg-white rounded-full"></div>
                    </div>
                  </div>
                  
                  <!-- Controls -->
                  <div class="flex items-center justify-between text-white">
                    <!-- Left Controls -->
                    <div class="flex items-center gap-4">
                      <button class="p-2 hover:bg-white/20 rounded">
                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
                        </svg>
                      </button>
                      <button class="p-2 hover:bg-white/20 rounded">
                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M11 18V6l-8.5 6 8.5 6zm.5-6l8.5 6V6l-8.5 6z"/>
                        </svg>
                      </button>
                      <button class="p-2 hover:bg-white/20 rounded">
                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M4 18l8.5-6L4 6v12zm9-12v12l8.5-6L13 6z"/>
                        </svg>
                      </button>
                    </div>

                    <!-- Time -->
                    <div class="text-sm">47:38 / 1:52:32</div>

                    <!-- Right Controls -->
                    <div class="flex items-center gap-4">
                      <button class="p-2 hover:bg-white/20 rounded">
                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                        </svg>
                      </button>
                      <button class="p-2 hover:bg-white/20 rounded">
                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h11c.55 0 1-.45 1-1z"/>
                        </svg>
                      </button>
                      <button class="p-2 hover:bg-white/20 rounded">
                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z"/>
                        </svg>
                      </button>
                      <button class="p-2 hover:bg-white/20 rounded">
                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Video Info -->
              <div class="p-6">
                <div class="flex items-start justify-between">
                  <div class="flex gap-4">
                    <!-- Course Avatar -->
                    <div class="w-20 h-20 bg-primary-500 rounded-lg flex items-center justify-center">
                      <img src="https://api.builder.io/api/v1/image/assets/TEMP/68096eb7e9ca89d3dc4a2a671cb3a99d38d1211a?width=160" alt="Course" class="w-full h-full rounded-lg object-cover" />
                    </div>
                    
                    <!-- Course Details -->
                    <div>
                      <h1 class="text-2xl font-bold text-neutral-900 mb-3">{{ sessionData.title }}</h1>
                      <div class="flex items-center gap-6 text-sm text-neutral-600">
                        <span class="text-primary-500">{{ sessionData.organization }}</span>
                        <div class="w-px h-5 bg-neutral-300"></div>
                        <div class="flex items-center gap-2">
                          <svg class="w-6 h-6 text-neutral-400" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                          </svg>
                          <span>Tutor: {{ sessionData.tutor }}</span>
                        </div>
                        <div class="w-px h-5 bg-neutral-300"></div>
                        <div class="flex items-center gap-2">
                          <svg class="w-6 h-6 text-neutral-400" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                          </svg>
                          <span>Student: {{ sessionData.student }}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Booking Fee -->
                  <div class="bg-primary-600 text-white p-4 rounded-xl shadow-card text-center">
                    <div class="text-sm opacity-90 mb-1">Booking Fee</div>
                    <div class="text-xl font-bold">{{ sessionData.bookingFee }}</div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Content -->
            <div class="space-y-8">
              <!-- Overview Section -->
              <SessionOverview 
                :date="sessionData.date"
                :time="sessionData.time"
                :status="sessionData.status"
              />

              <!-- Key Topics Covered -->
              <KeyTopics 
                :topics="keyTopicsData.topics"
                :summary="keyTopicsData.summary"
              />

              <!-- Session Insights -->
              <SessionInsights 
                :score="sessionInsightsData.score"
                :description="sessionInsightsData.description"
                :metrics="sessionInsightsData.metrics"
              />

              <!-- Tutor Feedback -->
              <TutorFeedback 
                :general-observation="tutorFeedbackData.generalObservation"
                :overall-score="tutorFeedbackData.overallScore"
                :performance="tutorFeedbackData.performance"
                :preparedness="tutorFeedbackData.preparedness"
                :strengths="tutorFeedbackData.strengths"
                :weaknesses="tutorFeedbackData.weaknesses"
                :resources="tutorFeedbackData.resources"
              />
            </div>
          </div>

          <!-- Right Progress Sidebar -->
          <ProgressSidebar 
            :progress="progressData.progress"
            :xp="progressData.xp"
            :completed-tasks="progressData.completedTasks"
            :total-tasks="progressData.totalTasks"
            :todo-items="progressData.todoItems"
            :bonus-opportunities="progressData.bonusOpportunities"
          />
        </div>
      </main>
    </div>
  </div>
</template>

<style scoped>
/* Additional custom styles if needed */
</style>

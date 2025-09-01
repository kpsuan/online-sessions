<script setup lang="ts">
import { CircleCheck } from 'lucide-vue-next'

interface Props {
  progress: number
  xp: number
  completedTasks: number
  totalTasks: number
  todoItems: Array<{
    id: string
    title: string
    xp: number
    completed: boolean
  }>
  bonusOpportunities: Array<{
    title: string
    xp: number
  }>
}

defineProps<Props>()
</script>

<template>
  <div class="w-96">
    <div class="bg-white rounded-2xl p-8 shadow-card">
      <!-- Progress Section -->
      <div class="mb-8">
        <div class="flex items-center justify-between mb-3">
          <span class="text-lg font-bold text-neutral-900">{{ progress }}% complete</span>
          <span class="text-lg font-bold text-neutral-900">{{ xp }} XP</span>
        </div>
        
        <div class="w-full bg-neutral-200 rounded-full h-2 mb-3">
          <div class="bg-success-500 h-2 rounded-full" :style="`width: ${progress}%`"></div>
        </div>
        
        <div class="flex items-center justify-between text-sm text-neutral-600">
          <span>{{ completedTasks }}/{{ totalTasks }} Done</span>
          <span>{{ progress }}%</span>
        </div>
      </div>

      <!-- To-do List -->
      <div class="mb-8">
        <div class="flex items-center justify-between mb-5">
          <h3 class="text-lg font-bold text-neutral-900">To do List</h3>
          <span class="text-sm text-neutral-600">{{ completedTasks }}/{{ totalTasks }} Done</span>
        </div>

        <div class="space-y-4">
          <div v-for="item in todoItems" :key="item.id" class="flex items-center justify-between">
            <div class="flex items-center gap-3">
              <div class="w-8 h-8 flex items-center justify-center flex-shrink-0">
                <CircleCheck v-if="item.completed" class="w-8 h-8 text-success-500" />
                <div v-else class="w-8 h-8 bg-neutral-100 rounded-lg flex items-center justify-center shadow-sm">
                  <span class="text-sm font-medium text-neutral-800">{{ item.id }}</span>
                </div>
              </div>
              <span :class="[
                'text-neutral-800 flex-1',
                item.completed ? 'text-neutral-400 line-through' : ''
              ]">
                {{ item.title }}
              </span>
            </div>
            <span :class="[
              'text-sm text-right whitespace-nowrap flex-shrink-0',
              item.completed ? 'text-neutral-400' : 'text-neutral-600'
            ]" style="min-width: 60px;">
              {{ item.xp }} XP
            </span>
          </div>
        </div>
      </div>

      <!-- Bonus Opportunities -->
      <div class="bg-success-50 rounded-2xl p-4 mb-6">
        <h4 class="text-sm font-bold text-success-600 mb-4">Bonus Opportunities:</h4>
        <div class="space-y-3 text-xs">
          <div v-for="bonus in bonusOpportunities" :key="bonus.title" class="flex items-center justify-between">
            <span class="text-success-600">{{ bonus.title }}</span>
            <span class="text-success-600 font-medium">+{{ bonus.xp }} XP</span>
          </div>
        </div>
      </div>

      <!-- Mark as Completed Button -->
      <button class="w-full border-2 border-neutral-300 text-success-500 py-3 rounded-xl font-medium hover:bg-neutral-50">
        Mark as Completed
      </button>
    </div>
  </div>
</template>

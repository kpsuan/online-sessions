<template>
  <div class="space-y-4">
    <div class="flex justify-between text-xs text-neutral-900 font-medium">
      <span>LOWEST</span>
      <span>HIGHEST</span>
    </div>
    

    
    <div class="flex items-center gap-2 sm:gap-4 lg:gap-12 flex-wrap sm:flex-nowrap">
      <button
        v-for="rating in ratings"
        :key="rating.value"
        @click="selectRating(rating.value)"
        :class="[
          'rating-button',
          rating.color,
          selectedRating === rating.value 
            ? 'selected-rating' 
            : selectedRating > 0 
              ? 'unselected-rating hover:scale-105' 
              : 'hover:scale-105'
        ]"
      >
        {{ rating.value }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

interface Props {
  modelValue: number
  label?: string
}

interface Emits {
  (e: 'update:modelValue', value: number): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

const selectedRating = computed(() => props.modelValue)

const ratings = [
  { value: 0, color: 'rating-0' },
  { value: 1, color: 'rating-1' },
  { value: 2, color: 'rating-2' },
  { value: 3, color: 'rating-3' },
  { value: 4, color: 'rating-4' },
  { value: 5, color: 'rating-5' },
  { value: 6, color: 'rating-6' },
  { value: 7, color: 'rating-7' },
  { value: 8, color: 'rating-8' },
  { value: 9, color: 'rating-9' },
  { value: 10, color: 'rating-10' }
]

const selectRating = (value: number) => {
  emit('update:modelValue', value)
}
</script>

<style scoped>
.rating-button {
  @apply flex items-center justify-center w-12 h-12 rounded-lg text-white font-sans text-xl font-bold cursor-pointer transition-all duration-200 hover:scale-105;
  font-family: 'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif;
}

.selected-rating {
  transform: scale(1.05);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  border: 2px solid #ffffff;
  z-index: 10;
  position: relative;
}

.unselected-rating {
  opacity: 0.4;
  filter: grayscale(0.5);
}

.rating-0 { background-color: #B72224; }
.rating-1 { background-color: #D52029; }
.rating-2 { background-color: #E95223; }
.rating-3 { background-color: #EA6F22; }
.rating-4 { background-color: #F6A726; }
.rating-5 { background-color: #FDC729; color: #000; }
.rating-6 { background-color: #EBDB0A; color: #000; }
.rating-7 { background-color: #E5E044; color: #000; }
.rating-8 { background-color: #C2D234; color: #000; }
.rating-9 { background-color: #AEC93C; color: #000; }
.rating-10 { background-color: #66B44E; }
</style>

<template>
  <div class="mb-8">
    <!-- Rating Guide Card -->
    <div class="bg-primary-100 border border-blue-300 rounded-lg p-6 shadow-sm">
      <h2 class="text-xl font-normal text-neutral-700 mb-6 font-inter">Rating Guide</h2>
      
      <div class="mb-6">
        <p class="text-sm text-neutral-700 font-normal leading-relaxed">
          Below is a guide to help you rate a student's performance. Please bear in mind that Oxbridge admission decision reflects a relative and not an absolute judgement on the student's performance. Many strong applicants do not get an offer simply because others are stronger.
        </p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- Left Column -->
        <div class="space-y-6">
          <!-- 10 (Excellent) -->
          <div class="border-l-4 border-green-600 pl-4">
            <h3 class="text-base font-bold text-neutral-700 mb-2">10 (Excellent)</h3>
            <p class="text-xs text-neutral-700 leading-relaxed">
              Only rate 10 if the performance was so strong that you believe the student doesn't need to worry about the interview. Please use the feedback form to further explain this rating.
            </p>
          </div>
          
          <!-- 9 (Strong Performance) -->
          <div class="border-l-4 border-green-400 pl-4">
            <h3 class="text-base font-bold text-neutral-700 mb-2">9 (Strong Performance)</h3>
            <p class="text-xs text-neutral-700 leading-relaxed">
              Rate 9 if you think the student has a strong chance of getting an offer despite minor issues in their performance.
            </p>
          </div>
          
          <!-- 7-8 (Good Performance) -->
          <div class="border-l-4 border-yellow-500 pl-4">
            <h3 class="text-base font-bold text-neutral-700 mb-2">7 – 8 (Good Performance)</h3>
            <p class="text-xs text-neutral-700 leading-relaxed">
              Oxbridge admission decisions reflect a relative and not an absolute judgement on a student's performance. Many strong applicants won't get an offer simply because others are stronger. Rate 7-8 if you think the student's performance falls into this category – competitive but not enough to get an offer. Please describe the key issues to help students further improve their performance.
            </p>
          </div>
        </div>
        
        <!-- Right Column -->
        <div class="space-y-6">
          <!-- 5-6 (Average Performance) -->
          <div class="border-l-4 border-orange-500 pl-4">
            <h3 class="text-base font-bold text-neutral-700 mb-2">5 – 6 (Average Performance)</h3>
            <p class="text-xs text-neutral-700 leading-relaxed">
              Rate 5-6 if you think the student's performance was average, hence highly unlikely to get an offer. Please describe the key issues to help students further improve their performance.
            </p>
          </div>
          
          <!-- 1-4 (Weak Performance) -->
          <div class="border-l-4 border-red-500 pl-4">
            <h3 class="text-base font-bold text-neutral-700 mb-2">1 – 4 (Weak Performance)</h3>
            <p class="text-xs text-neutral-700 leading-relaxed">
              Rate 1-4 only if you think there's a significant gap in a student's performance. Please spend a little more time on describing the key issues to help students improve, your help will be greatly appreciated!
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Component logic here if needed
</script>

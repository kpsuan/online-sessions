<template>
    <div
        class="relative w-full max-w-5xl h-52 md:h-64 rounded-2xl overflow-hidden shadow-2xl"
        :style="headerBgStyle"
    >
        <div class="relative h-full flex items-center justify-between p-6 md:p-8 lg:p-10">
            <!-- Left Content -->
            <div class="flex-1 max-w-3xl">
                <div class="flex flex-wrap items-center gap-4 md:gap-5 mb-4">
                    <!-- Brand Section -->
                    <slot name="brand">
                        <div class="flex items-center gap-3 px-3 py-2 rounded-lg bg-dark-overlay">
                            <div class="flex items-center justify-center w-6 h-6 rounded bg-azure-60 flex-shrink-0">
                                <img :src="brandLogo" alt="Brand Logo" class="w-6 h-6" />
                            </div>
                            <span class="text-white font-jost text-sm md:text-base font-medium">
                                {{ organization || 'Organization' }}
                            </span>
                        </div>
                    </slot>
                    <!-- Online Tutoring Badge -->
                    <slot name="badge">
                        <div class="frame-48 flex items-center px-4 bg-[rgba(166,255,83,0.27)] rounded-lg">
                            <LucideVideo class="w-6 h-6 md:w-7 md:h-7 mr-2 text-white" />
                            <span class="onlinetutoring_span text-white font-inter text-base font-semibold online-tutoring">
                                {{ badgeText || 'Online Tutoring' }}
                            </span>
                        </div>
                    </slot>
                </div>
                <!-- Course Title -->
                <h1 class="text-white font-inter text-xl md:text-2xl lg:text-3xl font-bold leading-tight mb-4">
                    {{ title }}
                </h1>
                <!-- Meta Information -->
                <div class="flex flex-wrap items-center gap-4 md:gap-6">
                    <!-- Tutor Info (not shown for zoom meetings) -->
                    <div v-if="headerType !== 'zoom'" class="flex items-center gap-2">
                        <LucideUser class="w-5 h-5 text-white" />
                        <span class="text-grey-98 font-inter text-sm">Tutor: {{ tutor }}</span>
                        <button
                            v-if="!isTutorView"
                            class="ml-2 flex items-center gap-1 px-3 py-1 bg-white rounded-lg text-xs font-medium text-black hover:bg-gray-100 transition-colors"
                            @click="handleReassign"
                        >
                            Reassign
                            <LucideRefreshCcw class="w-4 h-4 text-blue-500" />
                        </button>
                    </div>
                    <!-- Student Info -->
                    <div class="flex items-center gap-2">
                        <LucideUserRound class="w-4 h-4 text-white" />
                        <span class="text-grey-98 font-inter text-base">
                            <template v-if="students && students.length > 0">
                                {{ formatStudentDisplay(students) }}
                            </template>
                            <template v-else>
                                {{ student }}
                            </template>
                        </span>
                    </div>
                    <!-- Time Info (optional) -->
                    <div v-if="time" class="flex items-center gap-2">
                        <LucideClock class="w-4 h-4 text-white" />
                        <span class="text-grey-98 font-inter text-base">{{ time }}</span>
                    </div>
                </div>
            </div>
            <!-- Right Side: Action Buttons -->
            <div class="flex flex-col items-end gap-4 md:gap-6 ml-4">
                <button
                    v-if="!hideEditBooking"
                    class="flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-lg border border-gray-200 text-neutrals-2 font-inter text-sm md:text-base hover:bg-white transition-all"
                    @click="handleEditBooking"
                >
                    <LucideEdit class="w-4 h-4 text-gray-700" />
                    Edit Booking
                </button>
                <div class="px-6 py-3 rounded-xl bg-blue-65 shadow-booking">
                    <div class="text-center">
                        <div class="text-white font-inter text-sm mb-1">Booking Fee</div>
                        <div class="text-grey-98 font-inter text-xl font-bold">{{ bookingFee }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import {
    LucideUser,
    LucideUserRound,
    LucideEdit,
    LucideVideo,
    LucideRefreshCcw,
    LucideClock
} from 'lucide-vue-next'

interface Props {
    title?: string
    tutor?: string
    student?: string
    students?: string[]
    bookingFee?: string
    organization?: string
    brandLogo?: string
    badgeText?: string
    time?: string
    hideEditBooking?: boolean
    headerType?: 'online' | 'editorial' | 'zoom'
    isTutorView?: boolean
}

const props = defineProps<Props>()

import onlineBg from '@/assets/online.png'
import editorialBg from '@/assets/editorial.png'
import zoomBg from '@/assets/zoom.png'

const getHeaderBackground = () => {
  const bgMap = {
    'online': onlineBg,
    'editorial': editorialBg,
    'zoom': zoomBg
  }
  return bgMap[props.headerType || 'online']
}

const headerBgStyle = `background: linear-gradient(135deg, rgba(2, 6, 23, 0.8), rgba(139, 69, 139, 0.6)), url('${getHeaderBackground()}') center/cover no-repeat`

const emit = defineEmits<{
    reassignTutor: []
    editBooking: []
}>()

const handleReassign = () => emit('reassignTutor')
const handleEditBooking = () => emit('editBooking')

// Format student display for multiple students
const formatStudentDisplay = (students: string[]) => {
  if (students.length <= 4) {
    return students.join(', ')
  } else {
    const displayed = students.slice(0, 4).join(', ')
    const remaining = students.length - 4
    return `${displayed} +${remaining}`
  }
}

// Default values fallback
const title = props.title || 'Session Title'
const tutor = props.tutor || 'Tutor Name'
const student = props.student || 'Student Name'
const bookingFee = props.bookingFee || '¥ 500.00'
const organization = props.organization || 'All Stars Lab'
const brandLogo = props.brandLogo || 'https://api.builder.io/api/v1/image/assets/TEMP/f3988cb50805a3dac90c3a99d6ccf56043f019a2?width=48'
const badgeText = props.badgeText || (props.headerType === 'editorial' ? 'Editorials' : props.headerType === 'zoom' ? 'Zoom Meeting' : 'Online Tutoring')
const time = props.time
const hideEditBooking = props.hideEditBooking || false
</script>

<style scoped>
.bg-dark-overlay {
    background: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(4px);
}
.bg-azure-60 {
    background-color: #4A90E2;
}
.text-grey-98 {
    color: #F5F5F5;
}
.bg-blue-65 {
    background-color: #4285F4;
}
.text-neutrals-2 {
    color: #3A3734;
}
.shadow-booking {
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
}
.font-jost {
    font-family: 'Jost', sans-serif;
}
.font-inter {
    font-family: 'Inter', sans-serif;
}
.frame-48 {
    min-width: 150px;
    height: 36px;
}
.online-tutoring {
    white-space: nowrap;
}
.onlinetutoring_span {
    line-height: 1.2;
}
</style>

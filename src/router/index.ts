import { createRouter, createWebHistory } from 'vue-router'
import OnlineTutoringDone from '../views/student/OnlineTutoringDone.vue'
import OnlineTutoringPre from '../views/student/OnlineTutoringPre.vue'
import TutorOnlineSession from '../views/tutor/TutorOnlineSession.vue'
import TutorOnlineSessionDone from '../views/tutor/TutorOnlineSessionDone.vue'
import ZoomMeeting from '../views/student/ZoomMeeting.vue'


const routes = [
  {
    path: '/',
    redirect: '/session/done'
  },
  {
    path: '/session/done',
    name: 'OnlineTutoringDone',
    component: OnlineTutoringDone
  },
  {
    path: '/session/pre',
    name: 'OnlineTutoringPre',
    component: OnlineTutoringPre
  },
  {
    path: '/session/pretutor',
    name: 'TutorOnlineSession',
    component: TutorOnlineSession
  },
  {
    path: '/tutor/donetutor',
    name: 'TutorOnlineSessionDone',
    component: TutorOnlineSessionDone
  },
  {
    path: '/student/zoom',
    name: 'StudentZoomMeeting',
    component: ZoomMeeting
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router


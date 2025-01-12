import { createRouter, createWebHistory } from 'vue-router';  // Note the Vue 3 Router imports
import CreateStudent from '../components/CreateStudent.vue';
import GetAllStudents from '../components/GetAllStudents.vue';
import UpdateStudent from '../components/UpdateStudent.vue';

const routes = [
  { path: '/', name: 'GetAllStudents', component: GetAllStudents },
  { path: '/create', name: 'CreateStudent', component: CreateStudent },
  { path: '/update:studentId', name: 'UpdateStudent', component: UpdateStudent }
];


// ma aragtaa ciladda meesha ay ka jirta waa tan 


const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

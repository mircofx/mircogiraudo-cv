import { createRouter, createWebHashHistory } from 'vue-router'

//These below are components
import Home from './views/Home.vue'
import Resume from './views/Resume.vue'
import HelloWorld from './components/HelloWorld.vue'
import ProjectDetails from './views/ProjectDetails.vue';

//Definition of the routes to lead to different components
const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/resume', name: 'resume', component: Resume },
  { path: '/try', name: 'try', component: HelloWorld },
  {
    path: '/project/:projectId',  // This is the dynamic route for project details
    name: 'project-details',
    component: ProjectDetails,
    props: true,  // Pass the route params as props to the component
  }, //Generic id routing
  //{ path: '/parent', component: Parent, //Nested routes
  //  children: [
  //    { path: 'child', component: Child }]
  //},
  //{ path: '/protected',
  //  component: Protected,
  //  beforeEnter: (to, from, next) => {
  //    if (isAuthenticated()) {
  //      next();
  //    } else {
  //      next('/login');
  //    }
  //  }
  //}
]

//Creation of router instance
const router = createRouter({
  history: createWebHashHistory(), //History mode to remove the hash in the URL
  routes
})

export default router

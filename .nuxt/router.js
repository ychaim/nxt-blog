import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _b607ab48 = () => import('../pages/posts/index.vue' /* webpackChunkName: "pages/posts/index" */).then(m => m.default || m)
const _4f24f250 = () => import('../pages/admin/index.vue' /* webpackChunkName: "pages/admin/index" */).then(m => m.default || m)
const _69301cd4 = () => import('../pages/about/index.vue' /* webpackChunkName: "pages/about/index" */).then(m => m.default || m)
const _1561f9d6 = () => import('../pages/admin/auth/index.vue' /* webpackChunkName: "pages/admin/auth/index" */).then(m => m.default || m)
const _14c17eda = () => import('../pages/admin/new-post/index.vue' /* webpackChunkName: "pages/admin/new-post/index" */).then(m => m.default || m)
const _1a44a03a = () => import('../pages/admin/_postid/index.vue' /* webpackChunkName: "pages/admin/_postid/index" */).then(m => m.default || m)
const _da7e9172 = () => import('../pages/posts/_id/index.vue' /* webpackChunkName: "pages/posts/_id/index" */).then(m => m.default || m)
const _5eb9d018 = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)



if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash && document.querySelector(to.hash)) {
        // scroll to anchor by returning the selector
        position = { selector: to.hash }
      }
      resolve(position)
    })
  })
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/posts",
			component: _b607ab48,
			name: "posts"
		},
		{
			path: "/admin",
			component: _4f24f250,
			name: "admin"
		},
		{
			path: "/about",
			component: _69301cd4,
			name: "about"
		},
		{
			path: "/admin/auth",
			component: _1561f9d6,
			name: "admin-auth"
		},
		{
			path: "/admin/new-post",
			component: _14c17eda,
			name: "admin-new-post"
		},
		{
			path: "/admin/:postid",
			component: _1a44a03a,
			name: "admin-postid"
		},
		{
			path: "/posts/:id",
			component: _da7e9172,
			name: "posts-id"
		},
		{
			path: "/",
			component: _5eb9d018,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}

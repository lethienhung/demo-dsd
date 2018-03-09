// This code will be injected before initializing the root App
import Vue from 'vue'
import createPersistedState from 'vuex-persistedstate'
// Include mini-toaster (or any other UI-notification library


// Here we setup messages output to `mini-toastr`
// const store = new Vuex.Store ({
//   plugins: [createPersistedState()]
// })

// Binding for methods .success(), .error() and etc. You can specify and map your own methods here.
// Required to pipe our outout to UI library (mini-toastr in example here)
// All not-specified events (types) would be piped to output in console.

// Activate plugin
Vue.use(createPersistedState)
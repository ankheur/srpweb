<template>
    <header class="w-full px-3 antialiased lg:px-6">
        <div class="mx-auto max-w-7xl">
            <nav class="flex items-center w-full h-24 select-none">
                <div class="relative flex flex-wrap items-center justify-between w-full h-24 mx-auto font-medium md:justify-center">
                    <a href="/" class="w-1/4 py-4 pl-6 pr-4 md:pl-4 md:py-0">
                        <span class="p-1 text-xl font-black leading-none text-indigo-600 select-none"><span>SRPWeb</span></span>
                    </a>
                    <div class="fixed top-0 left-0 z-40 items-center w-full h-full p-3 text-xl bg-indigo-600 bg-opacity-50 md:text-sm lg:text-base md:w-3/4 md:bg-transparent md:p-0 md:relative md:flex" :class="{'flex': showMenu, 'hidden': !showMenu }">
                        <div class="flex-col w-full h-full overflow-hidden bg-white rounded-lg select-none md:bg-transparent md:rounded-none md:relative md:flex md:flex-row md:overflow-auto">
                            <div class="flex flex-col items-center justify-center w-full h-full mt-12 text-center text-indigo-700 md:w-2/3 md:mt-0 md:flex-row md:items-center">
                                <g-link to="/" class="inline-block px-4 py-2 mx-2 font-medium text-left md:px-0 hover:text-indigo-800 md:hover:text-indigo-500 lg:mx-3 md:text-center">Accueil</g-link>
                                <g-link to="/portfolio/" active-class="border-b-2 border-indigo-500" class="inline-block px-4 mx-2 font-medium text-left md:px-0 hover:text-indigo-800 md:hover:text-indigo-500 lg:mx-3 md:text-center">Portfolio</g-link>
                                <g-link to="/contact/" active-class="border-b-2 border-indigo-500" class="inline-block px-4 py-2 mx-2 font-medium text-left md:px-0 hover:text-indigo-800 md:hover:text-indigo-500 lg:mx-3 md:text-center">Contact</g-link>
                            </div>
                            <!-- <div class="flex flex-col items-center justify-end w-full h-full pt-4 md:w-1/3 md:flex-row md:py-0">
                                <g-link to="/espace-client" class="inline-flex items-center justify-center px-4 py-2 mr-1 text-base font-medium leading-6 text-white whitespace-no-wrap transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-full hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700">Espace Client</g-link>
                            </div> -->
                        </div>
                    </div>
                    <div @click="showMenu = !showMenu" class="absolute right-0 z-50 flex flex-col items-end w-10 h-10 p-2 mr-4 rounded-full cursor-pointer md:hidden hover:bg-indigo-700 hover:bg-opacity-10" :class="{ 'text-indigo-700': showMenu, 'text-indigo-700': !showMenu }">
                        <svg class="w-6 h-6" v-show="!showMenu" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                        <svg class="w-6 h-6" v-show="showMenu" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </div>
                </div>
            </nav>
        </div>
    </header>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      showMenu: false
    }
  },
  methods: {
    
  }
}
</script>

<style>
</style>

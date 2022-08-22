<template>
    <Layout>
        <Header />
        <section class="w-full bg-white">
            <div class="mx-auto max-w-7xl">
                <div class="flex flex-col">
                    <div class=" w-full bg-cover">
                        <div class=" flex flex-col items-center justify-center w-full h-full px-10 my-20">
                            <div class="flex flex-col items-start space-y-8 tracking-tight lg:max-w-3xl">
                                <h2 class="text-5xl font-bold text-gray-900 xl:text-6xl">Discutons de votre projet !</h2>
                                <p class="text-2xl text-gray-700 text-center">Que vous souhaitiez un site vitrine ou une application web personnalisée, contactez-nous directement par email ou téléphone.</p>
                            </div>
                        </div>
                    </div>

                    <div class="relative px-16 mx-auto max-w-7xl">
                        <div class="grid w-full gap-10 grid-cols-1 lg:grid-cols-3">
                            <article class="flex flex-col items-center justify-center lg:col-start-2 col-span-1">
                                <div class="relative p-5">
                                    <div class="absolute z-10 w-full h-full -mt-5 -ml-5 rounded-full rounded-tr-none bg-blue-50"></div>
                                    <g-image alt="Photo Pierrick Rancoeur" class="relative z-20 w-full rounded-full" src="~/assets/images/pierrick_rancoeur.jpg"/>
                                </div>
                                <div class="mt-3 space-y-2 text-center">
                                    <div class="space-y-1 text-lg font-medium leading-6">
                                        <h3 class="text-xl">Pierrick Rancoeur</h3>
                                    </div>
                                </div>
                                <div class="w-full shadow rounded-sm border border-gray-100 mt-6">
                                    <div class="flex flex-col h-full">              
                                        <!-- Card footer -->
                                        <div class="border-t border-gray-200">
                                            <div class="flex divide-x divide-gray-200r">
                                                <a class="block flex-1 text-center text-sm text-indigo-500 hover:text-indigo-600 font-medium px-3 py-4" href="mailto:pierrick@srpweb.fr">
                                                    <div class="flex items-center justify-center">
                                                        <svg class="w-4 h-4 fill-current flex-shrink-0 mr-2" xmlns="http://www.w3.org/2000/svg" version="1.0" width="1280.000000pt" height="780.000000pt" viewBox="0 0 1280.000000 780.000000" preserveAspectRatio="xMidYMid meet">
                                                            <metadata>
                                                            Created by potrace 1.15, written by Peter Selinger 2001-2017
                                                            </metadata>
                                                            <g transform="translate(0.000000,780.000000) scale(0.100000,-0.100000)" stroke="none">
                                                                <path d="M576 7752 c38 -27 1235 -847 2659 -1822 1425 -975 2723 -1865 2887 -1977 163 -111 299 -203 303 -203 4 0 141 91 304 203 163 112 1475 1010 2916 1997 1441 986 2638 1806 2659 1822 l40 28 -5919 0 -5919 0 70 -48z"/>
                                                                <path d="M2 3764 l3 -3499 27 -55 c35 -71 107 -143 178 -178 l55 -27 6135 0 6135 0 55 27 c71 35 143 107 178 178 l27 55 3 3483 c1 1915 0 3482 -3 3482 -3 0 -549 -372 -1213 -827 -664 -454 -1949 -1335 -2857 -1956 -907 -622 -1740 -1192 -1850 -1267 -110 -76 -209 -142 -220 -147 -11 -6 -62 -22 -113 -37 -119 -33 -206 -34 -283 -3 -31 13 -283 179 -560 369 -277 189 -1411 966 -2519 1725 -2827 1936 -3121 2137 -3153 2157 l-27 18 2 -3498z"/>
                                                            </g>
                                                        </svg>
                                                        <span>pierrick@srpweb.fr</span>
                                                    </div>
                                                </a>
                                                <a class="block flex-1 text-center text-sm text-gray-600 hover:text-gray-800 font-medium px-3 py-4 group" href="tel:+33631395999">
                                                    <div class="flex items-center justify-center">
                                                        <svg class="w-4 h-4 fill-current text-gray-400 group-hover:text-gray-500 flex-shrink-0 mr-2" xmlns="http://www.w3.org/2000/svg" version="1.0" width="1030.000000pt" height="1280.000000pt" viewBox="0 0 1030.000000 1280.000000" preserveAspectRatio="xMidYMid meet">
                                                            <metadata>
                                                            Created by potrace 1.15, written by Peter Selinger 2001-2017
                                                            </metadata>
                                                            <g transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)" stroke="none">
                                                                <path d="M8646 12790 c-60 -16 -149 -67 -194 -113 -71 -72 -2120 -2778 -2157 -2848 -100 -191 -80 -414 53 -578 19 -24 247 -213 506 -421 488 -391 506 -408 555 -521 50 -114 66 -279 42 -430 -28 -171 -113 -399 -240 -644 -170 -327 -201 -370 -1122 -1576 l-874 -1147 -225 -237 c-442 -467 -720 -700 -955 -801 -87 -38 -93 -39 -205 -39 -123 0 -172 14 -246 70 -17 13 -201 233 -407 488 -206 255 -390 476 -408 492 -163 138 -410 119 -560 -41 -53 -57 -2097 -2749 -2136 -2813 -112 -186 -89 -448 55 -608 31 -35 842 -641 1021 -763 282 -192 781 -290 1278 -250 1399 114 2984 1146 4542 2960 1197 1393 2177 2928 2733 4280 351 853 541 1627 589 2400 49 785 -113 1575 -418 2037 -50 76 -821 973 -876 1019 -61 52 -150 86 -235 90 -42 2 -94 -1 -116 -6z"/>
                                                            </g>
                                                        </svg>
                                                        <span>06 31 39 59 99</span>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>            
                        </div>
                    </div>

                    <!-- <div class="w-full bg-white">
                        <div class="flex flex-col items-start justify-start w-full h-full p-10">
                            <div class="w-full space-y-8">
                                <div class="relative">
                                    <label for="nom" class="font-medium text-gray-900">Votre nom</label>
                                    <input type="text" name="nom" id="nom" class="block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50">
                                </div>
                                <div class="relative">
                                    <label for="prenom" class="font-medium text-gray-900">Votre prénom</label>
                                    <input type="text" name="prenom" id="prenom" class="block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50">
                                </div>
                                <div class="relative">
                                    <label for="email" class="font-medium text-gray-900">Votre email</label>
                                    <input type="text" name="email" id="email" class="block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50">
                                </div>
                                <div class="relative">
                                    <label for="message" class="font-medium text-gray-900">Votre message</label>
                                    <textarea name="message" id="message" cols="30" rows="10" class="block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50"></textarea>
                                </div>
                                <div class="relative">
                                    <a href="#_" class="inline-block w-full px-5 py-4 text-lg font-medium text-center text-white transition duration-200 bg-indigo-600 rounded-lg hover:bg-indigo-700 ease">Envoyer</a>
                                </div>
                            </div>
                        </div>
                    </div> -->
                </div>
            </div>
        </section>
    </Layout>
</template>

<script>
import Header from '../components/Header.vue';
export default {
  metaInfo: {
      title: "Contact",
      link: [
        {
          rel: "canonical",
          content: "https://srpweb.fr/contact/",
        },
      ],
  },
  components: { Header }
}
</script>
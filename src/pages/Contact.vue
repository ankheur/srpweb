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
                            <div class="flex flex-col items-center justify-center lg:col-start-2 col-span-1">
                                <div class="relative p-5">
                                    <div class="absolute z-10 w-full h-full -mt-5 -ml-5 rounded-full rounded-tr-none bg-blue-50"></div>
                                    <g-image class="relative z-20 w-full rounded-full" src="~/assets/images/pierrick_rancoeur.jpg"/>
                                </div>
                                <div class="mt-3 space-y-2 text-center">
                                    <div class="space-y-1 text-lg font-medium leading-6">
                                        <h3>Pierrick Rancoeur</h3>
                                        <a href="mailto:pierrick@srpweb.fr" class="text-blue-600">pierrick@srpweb.fr</a><br>
                                        <a href="tel:+33631395999">06 31 39 59 99</a>
                                    </div>
                                </div>
                            </div>            
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
      title: "Contact"
  },
  components: { Header }
}
</script>
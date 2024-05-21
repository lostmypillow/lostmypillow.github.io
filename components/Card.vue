<script setup>

defineProps(['name', 'desc', 'logo', 'github', 'demo', 'screenshots'])
</script>

<template>

    <div
        class="flex flex-col w-full items-start justify-between border-2 gap-6 rounded-xl p-4 border-black shadow-xl md:w-[384px] md:h-[384px]">

        <div id="firstrow" class="flex flex-row items-center justify-start w-full gap-4">

            <img class="rounded-xl" :src="logo" width="48px" height="48px" loading="eager">

            <h1 class="flex items-center justify-center text-4xl text-center"> {{ name }} </h1>

            <h2 class="flex text-sm items-center justify-center text-center"> {{ desc }} </h2>

        </div>
        <div id="anotherrow" class="flex flex-row items-center justify-start w-full gap-4 overflow-x-auto">
            <img v-for="image in screenshots" :src="image" class=" max-h-64 md:max-h-48 " alt="" loading="lazy">
        </div>
        <div id="secondrow" class="flex flex-row items-center justify-between w-full">

            <a class="flex bg-black text-white rounded-full px-4 py-2 items-center justify-center h-11 w-fit gap-2"
                :href="github" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="feather feather-github">
                    <path
                        d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22">
                    </path>
                </svg>
                Github
            </a>

            <NuxtLink v-if="demo.startsWith('https') == true" class="flex bg-black text-white rounded-full px-4 py-2 items-center justify-center h-11 w-fit gap-2"
                :to="demo" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="feather feather-globe">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <path
                        d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z">
                    </path>
                </svg>
                Demo
            </NuxtLink>
            <NuxtLink v-else class="flex bg-black text-white rounded-full px-4 py-2 items-center justify-center h-11 w-fit gap-2"
                :to="demo">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="feather feather-globe">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <path
                        d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z">
                    </path>
                </svg>
                Demo
            </NuxtLink>
            



        </div>

    </div>
</template>
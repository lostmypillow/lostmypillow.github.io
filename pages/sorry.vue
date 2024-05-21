<script setup>

const router = useRouter()
</script>

<template>


    <main class="flex flex-col items-center justify-center">

        <p class="text-xl text-center">Sorry, you're here because<br>I haven't set up my homelab and custom domain to
            host this project.<br>I will get to it soon!</p>
        <button class="flex bg-black text-white rounded-full px-4 py-2 items-center justify-center h-11 w-fit gap-2"
            @click="router.back()">go back</button>

    </main>


</template>
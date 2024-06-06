<script setup>
defineProps(['data'])


</script>

<template>
    <tr>
        <th >

            <div class="flex flex-col md:flex-row items-center justify-start gap-2"><p class="text-base text-center font-bold">{{ data.name }} </p>
            
         <p class="font-light text-center"> {{ data.description }}</p></div>
            
            
        </th>

      
        <td>
            <a class="btn btn-outline btn-primary" :href=data.github  target="_blank" rel="noopener noreferrer">
                GitHub
            </a>
        </td>
        <td>
            <a class="btn btn-outline btn-primary" :href=data.demo  target="_blank" rel="noopener noreferrer">
                Demo
            </a>
        </td>


    </tr>
</template>
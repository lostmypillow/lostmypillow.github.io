<script setup>
defineProps(['data'])


</script>

<template>
    <tr>
        <th>
            <p class="text-base text-center font-bold">{{ data.name }} </p>
            
         <p class="font-light text-center"> {{ data.description }}</p>
            
        </th>

      
        <td>
            <a class="btn btn-outline btn-primary" :href=data.github>
                GitHub
            </a>
        </td>
        <td>
            <a class="btn btn-outline btn-primary" :href=data.demo>
                Demo
            </a>
        </td>


    </tr>
</template>
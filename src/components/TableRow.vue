<script setup>
defineProps(['data'])


</script>

<template>
    <tr>
        <th>{{ data.name }}</th>
   
        <td>{{ data.description }}</td>
        <td>
            <a class="btn" :href=data.demo>Demo</a>
        </td>
        <td>
            <a class="btn" :href=data.github>GitHub</a>
        </td>

    </tr>
</template>
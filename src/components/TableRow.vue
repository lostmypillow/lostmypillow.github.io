<script setup>
defineProps(['data'])


</script>

<template>
    <tr>
        <th>{{ data.logo }}</th>
        <td>{{ data.name }}</td>
        <td>{{ data.description }}</td>
        <td>
            <a class="btn" :href=data.demo>Demo</a>
        </td>
        <td>
            <a class="btn" :href=data.github>GitHub</a>
        </td>

    </tr>
</template>
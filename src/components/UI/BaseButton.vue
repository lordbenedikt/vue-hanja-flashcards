<template>
    <button :class="mode">
        <slot></slot>
    </button>
</template>

<script>
export default {
    props: ['mode'],
}
</script>

<style scoped>
button {
    padding:0.75rem 1.5rem;
    font-family:inherit;
    background-color: rgb(123, 69, 18);
    border: 1px solid rgb(123, 69, 18);
    border-radius: 5px;
    color: white;
    cursor: pointer;
}

button:hover,
button:active {
    background-color: rgb(85, 45, 8);
    border-color: rgb(85, 45, 8);
}

.flat {
    background-color: transparent;
    color: #3a0061;
    border: none;
}

.flat:hover,
.flat:active {
    background-color: #edd2ff;
}
</style>
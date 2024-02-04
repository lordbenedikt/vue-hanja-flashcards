<template>
  <div :class="{ front: isFront, back: !isFront }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ["isFront"],
};
</script>

<style scoped>
div {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  padding: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 2rem auto;
  width: 10rem;
}
div.front {
  background-color: rgb(255, 244, 223);
}
div.back {
  background-color: rgb(247, 226, 189);
}
</style>

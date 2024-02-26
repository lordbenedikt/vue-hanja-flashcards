<template>
  <base-card
    :isFront="isFront"
    @mouseover="showBack"
    @mouseleave="showFront"
    @click="flipMobile"
  >
    <div style="height: 9em">
      <div v-if="isFront" class="hanja">{{ hanja }}</div>
      <div class="center" v-if="!isFront" style="padding: 0">
        <span class="pronunciation"
          >({{ meaningKorean }} {{ pronunciation }})</span
        ><br />
        <span class="meaning">{{ meaningEnglish }}</span
        ><br />
      </div>
    </div>
  </base-card>
  <base-button
    @click="
      $emit('storeData', false);
      $emit('nextWord', false);
    "
    >Wrong</base-button
  >
  <base-button
    style="margin-left: 4px"
    @click="
      $emit('storeData', true);
      $emit('nextWord', true);
    "
    >Correct</base-button
  >
</template>

<script>
export default {
  emits: ["nextWord", "storeData"],
  props: ["vocabset", "word", "reverse"],
  watch: {
    word(word) {
      this.showHanja = true;
      this.hanja = word.substring(0, 1);
      const info = word.substring(3, word.length - 1);
      const infoParts = info.split("-").map((part) => part.trim());
      this.pronunciation = infoParts[0];
      this.meaningKorean = infoParts[1];
      this.meaningEnglish = infoParts[2];
    },
  },
  data() {
    return {
      hanja: "",
      pronunciation: "",
      meaningEnglish: "",
      showHanja: true,
    };
  },
  computed: {
    isFront() {
      return this.showHanja != this.reverse;
    }
  },
  methods: {
    showBack() {
      if (!this.isMobile()) {
        this.showHanja = false;
      }
    },
    showFront() {
      if (!this.isMobile()) {
        this.showHanja = true;
      }
    },
    flipMobile() {
      if (this.isMobile()) {
        this.showHanja = !this.showHanja;
      }
    },
    isMobile() {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );
    },
  },
};
</script>

<style scoped>
.hanja {
  font-size: 6em;
}
.pronunciation {
  font-size: 1.5em;
}
.meaning {
  font-size: 1.5em;
}
div.center {
  position: relative;
  top: 5%;
  /* text-align: middle; */
  /* vertical-align: baseline; */
  margin: auto;
  /* transform: translate(-50%, -50%); */
}
</style>

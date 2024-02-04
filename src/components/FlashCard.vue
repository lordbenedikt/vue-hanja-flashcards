<template>
  <base-card :isFront="isFront" @mouseover="showBack" @mouseleave="showFront">
    <div style="height:9em">
        <div v-if="isFront" class="hanja">{{ hanja }}</div>
        <div class="center" v-if="!isFront" style="padding:0">
            <span class="pronunciation">{{ pronunciation }}</span><br>
            <span class="meaning">{{ meaningEnglish }}</span><br>
        </div>
    </div>
  </base-card>
  <base-button @click="nextWord">Next</base-button>
</template>

<script>
export default {
  props: ["vocabset"],
  watch: {
    vocabset() {
      this.nextWord()
    },
  },
  mounted() {
    this.nextWord()
  },
  data() {
    return {
        hanja: "",
        pronunciation: "",
        meaningEnglish: "",
        isFront: true,
    }
  },
  methods: {
    showBack() {
        this.isFront = false;
    },
    showFront() {
        this.isFront = true;
    },
    nextWord() {
        console.log(this.vocabset);
        this.isFront = true;
        const word = this.randomWord();
        this.hanja = word.substring(0, 1);
        const info = word.substring(3, word.length-1);
        const infoParts = info.split('-').map(part => part.trim());
        this.pronunciation = infoParts[0];
        this.meaningEnglish = infoParts[2];
    },
    randomWord() {
      return this.vocabset[Math.floor(Math.random() * this.vocabset.length)];
    },
  },
};
</script>

<style scoped>
.hanja {
    font-size: 6em;
}
.pronunciation {
    font-size: 2em;
}
.meaning {
    font-size: 1.5em;
}
div.center {
    position: relative;
    top: 20%;
    /* text-align: middle; */
    /* vertical-align: baseline; */
    margin: auto;
    /* transform: translate(-50%, -50%); */
}
</style>
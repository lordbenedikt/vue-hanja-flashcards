<template>
  <h2>Study Hanja</h2>
  <div>
    <base-button
      v-for="i in 5"
      :key="'choose_' + i"
      @click="chooseVocabSet(i)"
      style="margin-right: 4px"
      >{{ i }}</base-button
    >
  </div>
  <flash-card :vocabset="vocab[currentVocabSet]"></flash-card>
</template>

<script>
import FlashCard from "./components/FlashCard.vue";
import vocab0 from "./assets/vocab/vocab_0.txt";
import vocab1 from "./assets/vocab/vocab_1.txt";
import vocab2 from "./assets/vocab/vocab_2.txt";
import vocab3 from "./assets/vocab/vocab_3.txt";
import vocab4 from "./assets/vocab/vocab_4.txt";


export default {
  name: "App",
  components: {
    FlashCard,
  },
  data() {
    return {
      vocab: [],
      currentVocabSet: 0,
    };
  },
  async created() {
    this.vocab.push(this.getVocabulary(vocab0));
    this.vocab.push(this.getVocabulary(vocab1));
    this.vocab.push(this.getVocabulary(vocab2));
    this.vocab.push(this.getVocabulary(vocab3));
    this.vocab.push(this.getVocabulary(vocab4));
  },
  methods: {
    chooseVocabSet(num) {
      this.currentVocabSet = num - 1;
    },
    getVocabulary(vocabListString) {
      const lines = vocabListString.split("\n").map((line) => line.trim());
      this.fileContent = lines.filter((line) => line.trim() !== ""); // Filter out empty lines
      return lines;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

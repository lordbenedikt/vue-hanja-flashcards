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
    this.vocab.push(await this.readFile("/resources/vocab_0.txt"));
    this.vocab.push(await this.readFile("/resources/vocab_1.txt"));
    this.vocab.push(await this.readFile("/resources/vocab_2.txt"));
    this.vocab.push(await this.readFile("/resources/vocab_3.txt"));
    this.vocab.push(await this.readFile("/resources/vocab_4.txt"));
  },
  methods: {
    chooseVocabSet(num) {
      console.log("choose " + num)
      this.currentVocabSet = num-1;
    },
    async readFile(path) {
      try {
        const response = await fetch(path);
        const text = await response.text();
        const lines = text.split("\n").map((line) => line.trim());
        this.fileContent = lines.filter((line) => line.trim() !== ""); // Filter out empty lines
        for (let line in lines) {
          console.log(line)
        }
        return lines;
      } catch (error) {
        console.error("Error reading the file:", error);
      }
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

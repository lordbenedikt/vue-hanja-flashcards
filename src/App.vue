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
  <flash-card
    :word="vocab[currentVocabSet][currentVocabIndex]"
    @nextWord="nextWord"
    @storeData="storeData"
  ></flash-card>
</template>

<script>
import FlashCard from "./components/FlashCard.vue";
// import basic_hanja from "./assets/vocab/basic_hanja.txt";
import hanja_junior from "./assets/vocab/hanja_junior_translation.txt";
// import hanja_senior from "./assets/vocab/hanja_senior.txt";
// import vocab0 from "./assets/vocab/vocab_0.txt";
import vocab1 from "./assets/vocab/vocab_1.txt";
import vocab2 from "./assets/vocab/vocab_2.txt";
import vocab3 from "./assets/vocab/vocab_3.txt";
import vocab4 from "./assets/vocab/vocab_4.txt";

// const REPS = 5;
const MIN_SET_SIZE = 5;

export default {
  name: "App",
  components: {
    FlashCard,
  },
  data() {
    return {
      vocab: [],
      currentVocabSet: 0,
      currentSubSet: [0, MIN_SET_SIZE],
      currentSubSetShuffled: [0, MIN_SET_SIZE],
      currentVocabIndex: 0,
      madeError: false,
      progress: Array(10).fill(0),
      depth: 0,
    };
  },
  async created() {
    // const juniorTds = [];
    // const seniorTds = [];

    // const doc = document.createElement("html");
    // doc.innerHTML = basic_hanja;
    // const table = doc.querySelector(".datatable");
    // const rows = table.querySelectorAll("tr");
    // rows.forEach((row) => {
    //   const data = row.querySelectorAll("td");
    //   if (data.length > 0) {
    //     juniorTds.push(data[0]);
    //   }
    //   if (data.length > 1) {
    //     seniorTds.push(data[1]);
    //   }
    // });

    // function parseWordData(td) {
    //   const hanjas = [...td.querySelectorAll("a")].map((anchor) => [anchor.title]);
    //   const wordDatas = td.innerHTML.split("•").map((data) => data.trim());
    //   wordDatas.forEach((text, index) => {
    //     if (text.trim() === '') return;
    //     const meaning = text.substring(text.indexOf("(")+1, text.length-3);
    //     const pronunciation = text.substring(text.length-2, text.length-1);
    //     hanjas[index].push(meaning)
    //     hanjas[index].push(pronunciation)
    //   });
    //   return hanjas;
    // }

    // const juniorHanjas = [];
    // juniorTds.forEach((td) => {
    //   juniorHanjas.push(...parseWordData(td));
    // });
    // console.log(juniorHanjas);

    // const seniorHanjas = [];
    // seniorTds.forEach((td) => {
    //   seniorHanjas.push(...parseWordData(td));
    // });
    // console.log(seniorHanjas);

    let res = hanja_junior
      .split("\n")
      .map((line) => line.split(" : ")[0])
      .join(" ");

    navigator.clipboard.writeText(res);

    let vocab0_alt = hanja_junior
      .split("\n")
      .slice(0, 30)
      .map((line) => line.split(" : "))
      .map(
        (line) =>
          line[0] + " (" + line[2] + " - " + line[1] + " - " + line[3] + ")"
      )
      .join("\n");

    this.vocab.push(this.getVocabulary(vocab0_alt));
    this.vocab.push(this.getVocabulary(vocab1));
    this.vocab.push(this.getVocabulary(vocab2));
    this.vocab.push(this.getVocabulary(vocab3));
    this.vocab.push(this.getVocabulary(vocab4));
  },
  methods: {
    chooseVocabSet(num) {
      this.currentVocabSet = num - 1;
      this.currentVocabIndex = 0;
      this.madeError = false;
    },
    getVocabulary(vocabListString) {
      const lines = vocabListString.split("\n").map((line) => line.trim());
      this.fileContent = lines.filter((line) => line.trim() !== ""); // Filter out empty lines
      return lines;
    },
    // newDataObj() {
    //   const data = {
    //     0: new Array(REPS).fill([]),
    //     1: new Array(REPS).fill([]),
    //     2: new Array(REPS).fill([]),
    //     3: new Array(REPS).fill([]),
    //     4: new Array(REPS).fill([]),
    //   };
    //   for (let i = 0; i < REPS; i++) {
    //     for (let j = 0; j < 100; j++) {
    //       data[i][0].push(j);
    //     }
    //   }
    //   return data;
    // },
    storeData(guessedRight) {
      guessedRight == true
      // if (guessedRight) {
      //   for (let i = 0; i < REPS; i++) {
      //     if (this.progressData[set][i].has(index)) {
      //       if (i < REPS - 1) {
      //         this.progressData[set][i + 1].add(index);
      //         this.progressData[set][i].delete(index);
      //       }
      //     }
      //   }
      // } else {
      //   for (let i = 0; i < REPS; i++) {
      //     if (this.progressData[set][i].has(index)) {
      //       this.progressData[set][i].delete(index);
      //       this.progressData[set][0].add(index);
      //     }
      //   }
      // }
    },

    nextWord(knewWord) {
      if (!knewWord) {
        this.madeError = true;
      }
      if (this.currentVocabIndex + 1 == this.currentSubSet[1]) {
        if (this.madeError) {
          this.madeError = false;
          this.currentVocabIndex = this.currentSubSet[0];
        } else {
          this.nextSet();
        }
      } else {
        this.currentVocabIndex++;
      }
    },

    nextSet() {
      this.madeError = false;
      this.progress[this.depth]++;
      if (this.progress[this.depth] % 2 == 0) {
        this.depth++;
        let newSetSize = MIN_SET_SIZE * Math.pow(2, this.depth);
        this.currentSubSet[0] = newSetSize * this.progress[this.depth];
        this.currentSubSet[1] = this.currentSubSet[0] + newSetSize;
      } else {
        this.depth = 0;
        this.currentSubSet[0] = MIN_SET_SIZE * this.progress[this.depth];
        this.currentSubSet[1] = this.currentSubSet[0] + MIN_SET_SIZE;
      }
      if (this.currentSubSet[1] >= this.vocab[this.currentVocabSet].length) {
        this.currentSubSet[1] = this.vocab[this.currentVocabSet].length - 1;
      }
      this.currentVocabIndex = this.currentSubSet[0];
    },

    // nextWord() {
    //   let vocabset = this.vocab[this.currentVocabSet];

    //   this.currentVocabIndex = Math.floor(Math.random() * vocabset.length);
    // },

    randomWord() {
      let vocabset = this.vocab[this.currentVocabSet];

      // for (let i = 0; i<REPS; i++) {
      //   if (vocabset[i].size > 0) {
      //     return vocabset[i].values().next();
      //   }
      // }

      return vocabset[this.currentWordIndex];
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

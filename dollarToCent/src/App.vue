<template>
  <div class="containerApp">
    <div class="title">
      <h3 id="title">Para Bozdurma</h3>
    </div>
    <div class="rowInput">
      <label for="inputDoloars"
        >Lütfen Bozdurulacak Değeri Giriniz (Eğer küsüratlı ise nokta koymayı
        unutmayın)
      </label>
      <div class="input">
        <input
          v-model="inputValue"
          id="inputDoloars"
          name="inputDolars"
          type="number"
          placeholder="5.95"
        />
      </div>
    </div>
    <div class="button">
      <button @click="calculateMoney()" class="btn btn-success">Hesapla</button>
    </div>
    <div class="result">
      <div
        class="text-message"
        v-if="
          !count1 && !count5 && !count10 && !count25 && !count50 && !count100
        "
      >
        <p>Lütfen Bir Değer Giriniz...</p>
      </div>
      <div class="penny penny1" v-if="count1">
        <img src="./assets/img/1_Yeni_Kuruş_b.png" alt="bir tl" />
        <span v-bind="count1">{{ count1 }}</span>
      </div>
      <div class="penny penny5" v-if="count5">
        <img src="./assets/img/5-kurus.png" alt="bir tl" />
        <span v-bind="count5">{{ count5 }}</span>
      </div>
      <div class="penny penny10" v-if="count10">
        <img src="./assets/img/10kr.png" alt="bir tl" />
        <span v-bind="count10">{{ count10 }}</span>
      </div>
      <div class="penny penny25" v-if="count25">
        <img src="./assets/img/25kr_obverse.png" alt="bir tl" />
        <span v-bind="count25">{{ count25 }}</span>
      </div>
      <div class="penny penny50" v-if="count50">
        <img src="./assets/img/50kr_obverse.png" alt="bir tl" />
        <span v-bind="count50">{{ count50 }}</span>
      </div>
      <div class="penny penny100" v-if="count100">
        <img src="./assets/img/1TL_obverse.png" alt="bir tl" />
        <span v-bind="count100">{{ count100 }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputValue: null,
      count1: 0,
      count5: 0,
      count10: 0,
      count25: 0,
      count50: 0,
      count100: 0,
    };
  },
  methods: {
    calculateMoney() {
      if (!this.inputValue) {
        alert("Lütfen Parayı Giriniz.");
      }
      let existCent = this.inputValue * 100;
      this.count100 = Math.floor(existCent / 100);
      existCent -= this.count100 * 100;
      this.count50 = Math.floor(existCent / 50);
      existCent -= this.count50 * 50;
      this.count25 = Math.floor(existCent / 25);
      existCent -= this.count25 * 25;
      this.count10 = Math.floor(existCent / 10);
      existCent -= this.count10 * 10;
      this.count5 = Math.floor(existCent / 5);
      existCent -= this.count5 * 5;
      this.count1 = Math.floor(existCent / 1);
      existCent -= this.count1 * 1;
      console.log(this.count50);
      console.log(existCent);
    },
  },
};
</script>

<style lang="scss">
@import "./assets/style/main.scss";
</style>

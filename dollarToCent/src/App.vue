<template>
  <div class="container">
    <div class="title">
      <h3 id="title">Para Bozdurma</h3>
    </div>
    <div class="rowInput">
      <label style="display: inline-block" for="inputDoloars"
        >Lütfen Bozdurulacak Değeri Giriniz(Eğer küsüratklı ise nokta koymayı
        unutmayın)
      </label>
      <input
        v-model="inputValue"
        id="inputDoloars"
        name="inputDolars"
        type="number"
        placeholder=""
      />
    </div>
    <div class="button">
      <button @click="calculateMoney()">Hesapla</button>
    </div>
    <div class="result">
      <div class="penny penny1">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/79/1_Yeni_Kuru%C5%9F_b.png"
          alt="bir tl"
        />
        <span v-bind="count1">{{ count1 }}</span>
      </div>
      <div class="penny penny5">
        <img
          src="https://www.serhatsaglam.com.tr/wp-content/uploads/2019/08/5-kurus.png"
          alt="bir tl"
        />
        <span v-bind="count5">{{ count5 }}</span>
      </div>
      <div class="penny penny10">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/10kr_obverse.png/120px-10kr_obverse.png"
          alt="bir tl"
        />
        <span v-bind="count5">{{ count10 }}</span>
      </div>
      <div class="penny penny25">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/4/40/25kr_obverse.png"
          alt="bir tl"
        />
        <span v-bind="count5">{{ count25 }}</span>
      </div>
      <div class="penny penny50">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/7b/50kr_obverse.png"
          alt="bir tl"
        />
        <span v-bind="count5">{{ count50 }}</span>
      </div>
      <div class="penny penny100">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/1TL_obverse.png/199px-1TL_obverse.png"
          alt="bir tl"
        />
        <span v-bind="count5">{{ count100 }}</span>
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
*,
*::after,
*::before {
  box-sizing: border-box;
  margin: 0px;
  padding: 0px;
  font-size: 14px;
}

html {
}
.container {
  display: flex;
  flex-direction: column;
  font-size: 20px;
  padding: 1.5em;
  margin: 1.5em;
  // overflow: scroll;
}

.container > * {
  margin-bottom: 5px;
}

.title {
  display: flex;
  justify-content: center;
  #title {
    font-size: 3em;
    display: inline-block;
    margin-bottom: 1em;
  }
}

.rowInput {
  display: flex;
  justify-content: center;
  font-size: 18px;
}
.rowInput label {
  display: block;
}
.rowInput label {
  font-size: 1em;
}

#inputDoloars {
  font-size: 1.5em;
  margin-left: 5px;
}
.button {
  display: flex;
  margin: 1em 0px;
  justify-content: center;
}
.button button {
  font-size: 1.7em;
  padding: 0.5em;
}

.result {
  display: flex;
  align-content: flex-start;
  justify-content: space-around;
  // overflow: scroll;
  box-sizing: margin-box;
  margin: 10px 5px;
}

.penny {
  height: 150px;
  width: 130px;
  // border-radius: 50%;
  position: relative;
}
.penny img {
  position: relative;
  left: 20px;
  top: 8px;
  width: 7em;

  border-radius: 50%;
}

.penny span {
  position: absolute;
  font-size: 2.3em;
  left: 60px;
  bottom: 1px;
}

.result div + div {
  margin-left: 10px;
}
</style>
<template>
  <div class="container">
    <div class="title">
      <h3 id="title">Para Bozdurma</h3>
    </div>
    <div class="row">
      <label style="display: inline-block" for="inputDoloars"
        >Lütfen Bozdurulacak Değeri Giriniz---->
      </label>
      <input
        v-model="inputValue"
        id="inputDoloars"
        name="inputDolars"
        type="number"
        placeholder="Lütfen Paranızı Giriniz: "
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
          width="100px"
        />
        <span v-bind="count1">{{ count1 }}</span>
      </div>
      <div class="penny penny5">
        <img
          src="https://www.serhatsaglam.com.tr/wp-content/uploads/2019/08/5-kurus.png"
          alt="bir tl"
          width="100px"
        />
        <span v-bind="count5">{{ count5 }}</span>
      </div>
      <div class="penny penny10">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/10kr_obverse.png/120px-10kr_obverse.png"
          alt="bir tl"
          width="100px"
        />
        <span v-bind="count5">{{ count10 }}</span>
      </div>
      <div class="penny penny25">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/4/40/25kr_obverse.png"
          alt="bir tl"
          width="100px"
        />
        <span v-bind="count5">{{ count25 }}</span>
      </div>
      <div class="penny penny50">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/7b/50kr_obverse.png"
          alt="bir tl"
          width="100px"
        />
        <span v-bind="count5">{{ count50 }}</span>
      </div>
      <div class="penny penny100">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/1TL_obverse.png/199px-1TL_obverse.png"
          alt="bir tl"
          width="100px"
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
.container {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  border: 1px solid red;
  font-size: 20px;
  height: 55vw;
  padding: 1.5em;
  margin: 1.5em;
  position: relative;
  // overflow: scroll;
}

.title {
  display: flex;
  justify-content: center;
  #title {
    display: inline-block;
    margin-bottom: 1em;
  }
}
#inputDoloars {
  font-size: 1em;
}
.button {
  display: flex;
  margin: 1em 0px;
  justify-content: center;
}
.button button {
  font-size: 0.7em;
  padding: 0.5em;
}

.result {
  border: 1px dashed red;
  height: 21em;
  display: flex;
  align-content: flex-start;
  position: relative;
  // overflow: scroll;
  box-sizing: margin-box;
  margin: 10px 5px;
}

.penny {
  height: 175px;
  width: 150px;
  background-color: red;
  // border-radius: 50%;
  position: relative;
}
.penny img {
  position: relative;
  left: 25px;
  top: 25px;

  border-radius: 50%;
}

.penny span {
  position: absolute;
  font-size: 2.3em;
  left: 69px;
  bottom: 1px;
}

.result div + div {
  margin-left: 10px;
}
</style>
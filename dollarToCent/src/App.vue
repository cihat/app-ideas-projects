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
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/79/1_Yeni_Kuru%C5%9F_b.png"
          alt="bir tl"
        />
        <span v-bind="count1">{{ count1 }}</span>
      </div>
      <div class="penny penny5" v-if="count5">
        <img
          src="https://www.serhatsaglam.com.tr/wp-content/uploads/2019/08/5-kurus.png"
          alt="bir tl"
        />
        <span v-bind="count5">{{ count5 }}</span>
      </div>
      <div class="penny penny10" v-if="count10">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/10kr_obverse.png/120px-10kr_obverse.png"
          alt="bir tl"
        />
        <span v-bind="count10">{{ count10 }}</span>
      </div>
      <div class="penny penny25" v-if="count25">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/4/40/25kr_obverse.png"
          alt="bir tl"
        />
        <span v-bind="count25">{{ count25 }}</span>
      </div>
      <div class="penny penny50" v-if="count50">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/7b/50kr_obverse.png"
          alt="bir tl"
        />
        <span v-bind="count50">{{ count50 }}</span>
      </div>
      <div class="penny penny100" v-if="count100">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/1TL_obverse.png/199px-1TL_obverse.png"
          alt="bir tl"
        />
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
*,
*::after,
*::before {
  box-sizing: border-box;
  margin: 0px;
  padding: 0px;
  font-size: 14px;
}

body {
  background-color: rgba(#ae9999, 0.5);
  user-select: none;
}

.containerApp {
  font-size: 18px;
  font-weight: 700;
  display: flex;
  flex-direction: column;
  font-size: 20px;
  padding: 1em;
  margin: 1em;
  // overflow: scroll;
}

.containerApp > * {
  margin-bottom: 5px;
}

.title {
  display: flex;
  justify-content: center;
  #title {
    font-size: 3.5em;
    display: inline-block;
    margin-bottom: 0.4em;
    font-weight: bold;
  }
}

.rowInput {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  font-size: 18px;
  align-self: center;
  margin-bottom: 40px;
  label {
    display: inline-block;
    font-size: 1em;
    margin-top: 5px;
    margin-right: 10px;
    cursor: pointer;
  }
  .input {
    margin-top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 36px;
    input {
      width: 400px;
      cursor: pointer;
      padding: 2px 5px 2px 10px;
      &::-webkit-inner-spin-button,
      &::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
      font-size: 1.5em;
      margin-left: 5px;
      border-radius: 10px;
    }
  }
}

.button {
  display: flex;
  margin: 5px 0px;
  justify-content: center;
  button {
    font-size: 2em;
    padding: 0.5em;
    border-radius: 10px;
  }
}

.result {
  display: flex;
  align-content: flex-start;
  justify-content: space-around;
  flex-wrap: wrap;
  // overflow: scroll;
  box-sizing: margin-box;
  margin: 10px 5px;
  .text-message {
    margin: 15px 0;
    p {
      font-size: 28px;
      font-weight: 800;
    }
  }

  .penny {
    font-size: 16px;
    height: 150px;
    width: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px dashed black;
    border-radius: 10px;
    margin-top: 10px;

    position: relative;
    img {
      width: 7em;
      max-width: 7em;
      height: 7em;
      max-height: 7em;
      margin-bottom: 40px;
      border-radius: 50%;
    }
    span {
      max-width: 2em;
      display: inline-flex;
      align-items: center;
      max-width: 2.3em;
      position: absolute;
      font-size: 2.3em;
      bottom: 1px;
      margin: 0 auto;
      // transform: translateX(-10%);
    }
  }
  &:div + div {
    margin-left: 10px;
  }
}
</style>

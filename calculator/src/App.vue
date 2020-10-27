<template>
  <div class="container">
    <div id="calculator">
      <input id="screen" type="text" v-model="message" />
      <div class="buttons">
        <div v-on:click="clear" class="button">
          {{ message == 0 ? "AC" : "C" }}
        </div>
        <div v-on:click="inverse" class="button">+/-</div>
        <div v-on:click="percentage" class="button">%</div>
        <div v-on:click="operator('/')" class="button">/</div>
        <div v-on:click="input('7')" class="button">7</div>
        <div v-on:click="input('8')" class="button">8</div>
        <div v-on:click="input('9')" class="button">9</div>
        <div v-on:click="operator('*')" class="button">*</div>
        <div v-on:click="input('4')" class="button">4</div>
        <div v-on:click="input('5')" class="button">5</div>
        <div v-on:click="input('6')" class="button">6</div>
        <div v-on:click="operator('-')" class="button">-</div>
        <div v-on:click="input('1')" class="button">1</div>
        <div v-on:click="input('2')" class="button">2</div>
        <div v-on:click="input('3')" class="button">3</div>
        <div v-on:click="operator('+')" class="button">+</div>
        <div id="zero" v-on:click="input('0')" class="button">0</div>
        <div v-on:click="input('.')" class="button">.</div>
        <div v-on:click="equal" class="button">=</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
      message: 0,
      eqution: "",
      cal: "",
    };
  },
  methods: {
    input: function (num) {
      if (num == "." && this.message.includes(".")) return;
      else if (this.message == "0") {
        this.message = num;
        this.value = num;
      } else {
        this.value += num;
        this.message = this.value;
      }
      //this.equation += num;
      //console.log(this.equation);
    },
    clear: function () {
      if (this.message == "0") this.equation = "";
      this.message = "0";
      this.value = "";
    },
    operator: function (opt) {
      this.cal = opt;
      this.equation += this.value;
      this.message = eval(this.equation).toString();
      this.equation = this.message;
      this.equation += opt;
      this.value = "";
      console.log(this.equation);
    },
    percentage: function () {
      this.equation = "";
      this.message = (this.message / 100).toString();
      this.value = this.message;
    },
    inverse: function () {
      if (this.message == 0) return false;
      this.equation = "";
      if (this.message[0] == "-") this.message = this.message.substr(1);
      else this.message = "-" + this.message;
      this.value = this.message;
    },
    equal: function () {
      if (this.equation == "") return;
      if (this.cal != "") this.equation += this.message;
      this.message = eval(this.equation).toString();
      console.log(eval(this.equation));
      this.value = "";
      this.cal = "";
      this.equation = this.message;
    },
  },
};
</script>

<style lang="css" >
.container {
  height: 50rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

#calculator {
  display: flex;
  flex-direction: column;
  width: 20rem;
  background-color: #1d1f20;
}
#screen {
  padding-top: 4.5rem;
  font-size: 4.5rem;
  text-align: right;
  border: none;
  color: #ffffff;
  background-color: #1d1f20;
  border-radius: 0;
}

.buttons {
  user-select: none;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  flex-wrap: wrap;
  background-color: #d7d4f0;
}

.button {
  width: 25%;
  padding: 1.5rem 0;
  text-align: center;
  border: #343436 1px solid;
  box-sizing: border-box;
  transition: box-shadow 0.3s;
}

.button:nth-child(4n),
.button:last-child {
  background-color: #d0782a;
}

.button:hover {
  filter: opacity(0.8);
}

.button:active {
  box-shadow: 2px 2px 10px #666 inset;
}

#zero {
  text-align: left;
  padding-left: 2rem;
  flex-grow: 2;
}
</style>
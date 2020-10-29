<template>
  <div class="container">
    <div id="calculator">
      <div id="screen" type="text" v-cloak>{{ formula }}</div>
      <div class="calculator-result" v-cloak>{{ result }}</div>
      <div class="buttons">
        <div @click="cleanResult()" class="button">C<b>E</b></div>
        <div @click="cleanAll()" class="button">C</div>
        <div @click="operate('%')" class="button">%</div>
        <div @click="operate('/')" class="button">/</div>
        <div @click="operate(7)" class="button">7</div>
        <div @click="operate(8)" class="button">8</div>
        <div @click="operate(9)" class="button">9</div>
        <div @click="operate('*')" class="button">*</div>
        <div @click="operate(4)" class="button">4</div>
        <div @click="operate(5)" class="button">5</div>
        <div @click="operate(6)" class="button">6</div>
        <div @click="operate('-')" class="button">-</div>
        <div @click="operate(1)" class="button">1</div>
        <div @click="operate(2)" class="button">2</div>
        <div @click="operate(3)" class="button">3</div>
        <div @click="operate('+')" class="button">+</div>
        <div id="zero" @click="operate(0)" class="button">0</div>
        <div class="button" @click="drop()">
          <b style="font-weight: 900 font-size: 16px;">←</b>
        </div>
        <div @click="operate('.')" class="button">.</div>
        <div @click="equal()" class="button">=</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "otherCalculator",
  data() {
    return {
      formula: "",
      result: 0,
    };
  },
  methods: {
    operate(element) {
      console.log("operate..");
      this.formula += element;
    },
    equal() {
      console.log("equal..");
      this.result = eval(this.formula);
    },
    cleanResult() {
      console.log("cleanResult..");
      this.result = 0;
    },
    cleanAll() {
      console.log("cleanAll..");
      this.formula = "";
      this.result = 0;
    },
    drop() {
      console.log("drop..");
      this.formula = this.formula.slice(0, -1);
    },
  },
};
</script>

<style>
/*vue*/
[v-cloak] {
  display: none;
}

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
  padding-top: 0.5rem;
  font-size: 2rem;
  text-align: right;
  border: none;
  color: #ffffff;
  background-color: #1d1f20;
  border-radius: 0;
  height: 7.6rem;
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
}

.calculator-formula {
  /*border: 1px solid red;*/
  width: 100%;
  height: 42.9%;
  text-align: right;
  box-sizing: border-box;
  padding: 0.5rem 1rem;
  color: #ce3b3b;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.calculator-result {
  /*border: 1px solid blue;*/
  width: 100%;
  height: 57.1%;
  text-align: right;
  box-sizing: border-box;
  padding: 1.5rem 1rem;
  color: #ffffff;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
</style>
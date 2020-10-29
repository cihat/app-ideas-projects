<template>
  <div class="container">
    <div class="row">
      <otherCalculator></otherCalculator>
    </div>
    <div class="row">
      <section class="calculator" id="calculator">
        <calculatorContent></calculatorContent>
      </section>
    </div>
  </div>
</template>

<script>
import otherCalculator from "./components/calculators/other/calculator";
import CalculatorContent from "./components/calculators/CaiYiLiang'sCalculator/CalculatorContent";

export default {
  name: "calculator",
  components: {
    otherCalculator,
    CalculatorContent,
  },
};
</script>

<style lang="css" scoped>
html {
  box-sizing: border-box;
  margin: 0px;
  padding: 0px;
  overflow: hidden;
  font-size: 16px;
}

.container {
  display: flex;
  align-items: center;
  justify-content: center;
  justify-content: space-around;
  align-content: space-around;
  height: calc(90vh);
}

.container div + div {
  margin-left: 10px;
}

.calculator {
  border: 0.8em solid #1ba081;
  width: 34em;
  height: 40rem;
  background-color: #f28080;
  font-size: 1.6rem;
  -webkit-border-radius: 1rem;
  -moz-border-radius: 1rem;
  -ms-border-radius: 1rem;
  -o-border-radius: 1rem;
  border-radius: 1rem;
  -webkit-box-shadow: 1rem 1rem 0.5rem #ccc;
  box-shadow: 1rem 1rem 0.5rem #ccc;
}
</style>
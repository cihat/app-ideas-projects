<template>
  <div class="container">
    <div class="main">
      <div :style="changeColor()" class="circle red"></div>
      <div :style="changeColor()" class="circle yellow"></div>
      <div :style="changeColor()" class="circle blue"></div>
      <div :style="changeColor()" class="circle green"></div>
      <div :style="changeColor()" class="circle red"></div>
      <div :style="changeColor()" class="circle yellow"></div>
      <div :style="changeColor()" class="circle blue"></div>
      <div :style="changeColor()" class="circle green"></div>
    </div>
    <div class="utilities">
      <div class="title">
        <h1 id="title">Christmas Lights</h1>
      </div>
      <div class="buttons">
        <button id="play">On</button>
        <button id="stop">Off</button>
        <label for="">Speed:</label>
        <input
          type="number"
          id="quantity"
          name="quantity"
          min="1"
          max="5"
          placeholder="From 1 until 5 only."
          value=""
        />
        <input
          type="submit"
          id="submit"
          name=""
          value="RUN"
          onclick="convert()"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLight: false,
    };
  },
  methods: {
    convert() {},
    changeColor() {
      
    }
  },
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}

body {
  background: rgb(25, 21, 26);
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin: 0;
  overflow: hidden;
}

.utilities {
  width: 100vw;
  padding: 1rem;
  color: white;
  font-family: "Lato", sans-serif;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.title {
  font-family: "Cinzel", sans-serif;
  letter-spacing: 2px;
  font-size: 2rem;
  text-align: center;
  text-shadow: 0 0 30px white;
}

.utilities button {
  height: 50px;
  width: 50px;
  background: none;
  color: white;
  outline: none;
  border: 2px solid rgb(184, 134, 222);
  border-radius: 25px;
  margin: 0 12px;
}

.utilities label {
  padding: 10px;
}

.utilities #quantity {
  width: 140px;
  height: 40px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  outline: none;
  border: none;
  padding: 0 5px;
}

.utilities #submit {
  height: 40px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  border: 2px solid rgb(184, 134, 222);
  background: none;
  outline: none;
  color: white;
}

button:hover,
#submit:hover,
button:active,
#submit:active {
  outline: none;
  background: rgb(184, 134, 222);
  cursor: pointer;
  transition: 0.5s ease;
}

.main {
  border-radius: 25px;
  height: 20vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}

.circle {
  display: flex;
  margin: 1rem;
  border-radius: 50%;
  height: 50px;
  width: 50px;
  background: rgba(0, 0, 0, 0.3);
  position: relative;
  transition: 1s all ease;
}

.circle:before {
  position: absolute;
  content: "";
  height: 15px;
  width: 15px;
  left: 17.5px;
  top: -15px;
  margin: 0;
  padding: 0;
  display: block;
  background: rgb(68, 53, 73);
  border-radius: 2px;
  display: inline-block;
  border-bottom: 2px solid rgb(97, 81, 107);
}

.circle:after {
  position: absolute;
  content: "";
  top: -20px;
  left: 30px;
  position: absolute;
  width: 70px;
  height: 18.6666666667px;
  border-bottom: solid #222 2px;
  border-radius: 50%;
}

.circle:last-child::after {
  content: "";
  position: absolute;
  border: none;
}

.red {
  background-color: #c0392b;
  animation: glow-1 1s infinite;
}

.yellow {
  background-color: #f1c40f;
  animation: glow-2 1s infinite;
}

.blue {
  background-color: #64fcfe;
  animation: glow-3 1s infinite;
}

.green {
  background-color: #2ecc71;
  animation: glow-4 1s infinite;
}

@keyframes glow-1 {
  0%,
  100% {
    box-shadow: 0 0 20px 5px #c0392b;
  }
  50% {
    box-shadow: none;
  }
}

@keyframes glow-2 {
  0%,
  100% {
    box-shadow: none;
  }
  50% {
    box-shadow: 0 0 20px 5px #f1c40f;
  }
}

@keyframes glow-3 {
  0%,
  100% {
    box-shadow: 0 0 20px 5px #74f7e1;
  }
  50% {
    box-shadow: none;
  }
}

@keyframes glow-4 {
  0%,
  100% {
    box-shadow: none;
  }
  50% {
    box-shadow: 0 0 20px 5px #2ecc71;
  }
}

@-webkit-keyframes main-glow {
  0%,
  100% {
    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #e60073,
      0 0 40px #e60073, 0 0 50px #c0392b, 0 0 60px #c0392b, 0 0 70px #c0392b;
  }
  25% {
    text-shadow: 0 0 20px #fff, 0 0 30px #f1c40f, 0 0 40px #ff4da6,
      0 0 50px #f1c40f, 0 0 60px #f1c40f, 0 0 70px #f1c40f, 0 0 80px #ff4da6;
  }
  50% {
    text-shadow: 0 0 20px #fff, 0 0 30px #74f7e1, 0 0 40px #74f7e1,
      0 0 50px #74f7e1, 0 0 60px #74f7e1, 0 0 70px #74f7e1, 0 0 80px #74f7e1;
  }
  75% {
    text-shadow: 0 0 20px #fff, 0 0 30px #2ecc71, 0 0 40px #2ecc71,
      0 0 50px #2ecc71, 0 0 60px #2ecc71, 0 0 70px #2ecc71, 0 0 80px #2ecc71;
  }
}
</style>;
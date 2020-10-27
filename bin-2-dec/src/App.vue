<template>
  <div class="container-fluid h-100">
    <div class="row justify-content-center h-100">
      <div id="heading" class="col-12 mb-5 card shadow mw-100">
        <h1 class="mx-auto">Bin2Dec</h1>
        <h4>Conversion from binary number to decimal number.</h4>
        <hr />
        <div id="app" class="container card-body mw-100 p-3">
          <div class="form-group">
            <label for="numberBinary">Please enter the Binary Number:</label>
            <input
              v-model="numberBinary"
              oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
              type="number"
              :maxlength="maxLength"
              class="form-control text-center"
              placeholder="Binary Number..."
              name="numberBinary"
            />
          </div>
          <div id="inputRight" class="form-group" style="">
            <b>
              <label style="text-align: right">
                Type in how many characters you will enter:
              </label>
            </b>
            <input type="number" v-model="maxLength" />
          </div>
          <div class="form-group">
            <span for="maxLength"><b>Maximum character limit:</b></span>
            <span
              class="input-group-addon"
              v-text="maxLength - Number(numberBinary.length)"
              v-if="maxLength - Number(numberBinary.length) > 0"
              >-</span
            >
          </div>
          <div class="form-group" id="result">
            <label id="resultLabel" for="result"
              ><b><i>Result: </i></b>
            </label>
            <textarea
              class="text-center"
              id="resultArea"
              rows="1"
              name="result"
              v-model="numberDecimal"
            />
          </div>
          <button
            id="revertButton"
            class="btn btn-primary"
            @click.prevent="toDecimalFromBinary"
          >
            Revert
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import alertify from "../node_modules/alertifyjs/build/alertify.min.js";

export default {
  data() {
    return {
      numberBinary: "",
      numberDecimal: "",
      maxLength: 8,
    };
  },
  methods: {
    toDecimalFromBinary() {
      // console.log(this.numberBinary.split(""));
      let isAcceptableNumber = this.numberBinary
        .split("")
        .every((x) => x == 1 || x == 0);
      console.log(isAcceptableNumber);
      if (isAcceptableNumber) {
        alertify.success("Success");
        this.numberDecimal = parseInt(this.numberBinary, 2);
        // setInterval(() => {
        //   this.numberBinary = "";
        // }, 500);
      } else {
        alertify.error("dialing failed.");
        alertify.alert(
          "Please enter the binary number consisting of 1 and 0 only.",
          function () {
            alertify.error("OK");
          }
        );
        // alert("Please enter the binary number consisting of 1 and 0 only.");
        this.numberDecimal = "";
        this.numberBinary = "";
      }
    },
  },
};
</script>

<style>
@import "~alertifyjs/build/css/alertify.min.css";
@import "~alertifyjs/build/css/themes/bootstrap.min.css";

html,
body {
  height: 100%;
  background-color: #5c4084;
  padding: 30px;
  font-family: Arial, Helvetica, sans-serif;
}

.container {
  padding: 40px 80px 15px 80px;
  background-color: #fff;
  border-radius: 8px;
  max-width: 800px;
}
.heading {
  text-align: center;
}

h1 {
  background: -webkit-linear-gradient(#fff, #999);
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  text-align: center;
  margin: 0 0 5px 0;
  font-weight: 900;
  font-size: 4rem;
  color: #fff;
}
h4 {
  color: lighten(#5c3d86, 30%);
  text-align: center;
  margin: 0 0 35px 0;
  font-weight: 400;
  font-size: 24px;
}

.btn {
  outline: none !important;
  font-size: 1.5rem;
  background-color: red;
  text-align: center;
}

.btn.btn-primary {
  background-color: #5c3d86;
  border-color: #5c3d86;
  outline: none;
}
.btn:hover {
  background-color: darken(#5c3d86, 10%);
  border-color: darken(#5c3d86, 10%);
}

.btn:hover {
  background-color: lighten(#5c3d86, 5%);
  border-color: lighten(#5c3d86, 5%);
}
.btn:fa {
  padding-right: 4px;
}

.form-group {
  margin-bottom: 25px;
}
#resultArea {
  border-radius: 5px;
}
textarea {
  margin-left: 15px;
  resize: none;
}
#result {
  text-align: center;
}
#resultLabel {
  font-size: 2.5rem;
}
#revertButton {
  text-align: center;
}
#inputRight {
  text-align: right;
  display: inline-block;
}
</style>
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
        id="inputDoloars"
        name="inputDolars"
        type="number"
        placeholder="Lütfen Paranızı Giriniz: "
      />
    </div>
    <div class="button">
      <button>Hesapla</button>
    </div>
    <div class="result"></div>
  </div>
</template>

<script>
export default {};
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
}
</style>
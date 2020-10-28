<template>
  <div class="container">
    <div class="lights">
      <div class="light red"></div>
      <div class="light yellow"></div>
      <div class="light blue"></div>
      <div class="light green"></div>
      <div class="light red"></div>
      <div class="light yellow"></div>
      <div class="light blue"></div>
      <div class="light green"></div>
      <div class="light white"></div>
      <div class="light orange"></div>
    </div>
    <div class="utilities">
      <div class="title">
        <h1 id="title">Christmas Lights</h1>
      </div>
      <div class="buttons">
        <button id="play">On</button>
        <button id="stop">Off</button>
        <label for="">Speed</label>
        
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.container {
  align-items: center;
  display: inline;
}

.lights {
  text-align: center;
  align-items: center;
  display: inline;
}

.light {
  display: inline-block;
  border-radius: 50%;
  border: 1px solid red;
  color: green;
  padding-right: 5px;
  margin-top: 10px;
  width: 3rem;
  height: 3rem;
}
</style>
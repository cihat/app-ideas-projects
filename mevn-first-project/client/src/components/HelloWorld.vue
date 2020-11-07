<template>
  <div id="HelloWorld">
    <div class="container">
      <h1>MongoDB ile ToDo Uygulaması 🎈</h1>
      <p>MongoDB Atlas serveri ile çalışan basit bir ToDo Uygulamasıdır.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
};
</script>

<style lang="scss" scoped>
#HelloWorld {
  display: flex;
  justify-content: center;
  align-items: center;
}
.container {
  margin: 5px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: red;
  color: white;
  font-size: 24px;
  font-weight: 900;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
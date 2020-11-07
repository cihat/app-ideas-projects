<template>
  <div id="app">
    <Header />
    <transition name="slide" mode="out-in">
      <router-view></router-view>
    </transition>
    <Footer />
  </div>
</template>
<script>
import Header from "./components/view/Header";
import Footer from "./components/view/Footer";

export default {
  name: "app",
  components: {
    Header,
    Footer,
  },
  data() {
    return {};
  },
};
</script>
<style>
* {
  margin: 0;
  /* padding: 0;
  list-style: none;
  border: none;
  text-decoration: none; */
  box-sizing: border-box;
  font-family: "Mulish", sans-serif;
  -webkit-overflow-scrolling: touch;
}
body {
  background-color: rgba(221, 195, 195, 0.3);
}
.slide-enter {
  opacity: 0;
}

.slide-enter-active {
  animation: slide-in 1s ease-out forwards;
  transition: opacity 0.5s;
}

.slide-leave-active {
  animation: slide-out 1s ease-out forwards;
  transition: opacity 1s;
  opacity: 0;
  position: absolute;
}

@keyframes slide-in {
  from {
    transform: translateY(20px);
  }
  to {
    transform: translateY(0px);
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(20px);
  }
}
</style>
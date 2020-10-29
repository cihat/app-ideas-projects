<template>
  <div class="container">
    <h2 class="title">CountDown</h2>
    <div class="row">
      <div class="calenderInput">
        <label for="dataDate">Please select a Future Date: </label>
        <input type="datetime-local" id="dataDate" v-model="dateFuture" />
      </div>

      <div class="calenderInput">
        <label for="dataDate2">Please select a Today Date: </label>
        <input type="datetime-local" id="dataDate2" v-model="dateToday" />
      </div>
      <button @click="giveToday" style="margin-top: 20px">give today</button>

      <div class="time-wrapper">
        <div class="countdown-item days">
          <span class="remainingTimeDays" v-bind="state">{{ state.days }}</span>
          <p class="timeIndicator">days</p>
        </div>
        <div class="countdown-item hours">
          <span class="remainingTimeHours" v-bind="state">{{
            state.hours
          }}</span>
          <p class="timeIndicator">HOURS</p>
        </div>
        <div class="countdown-item minutes">
          <span class="remainingTimeMinutes" v-bind="state">{{
            state.minutes
          }}</span>
          <p class="timeIndicator">MINUTES</p>
        </div>
        <div class="countdown-item second">
          <span class="remainingTimeSeconds" v-bind="state">{{
            state.seconds
          }}</span>
          <p class="timeIndicator">SECONDS</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dateToday: null,
      dateFuture: null, // 05/09/2019
      state: {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      },
    };
  },
  methods: {
    giveToday() {
      this.state.seconds = null;
      this.state.minutes = null;
      this.state.hours = null;
      this.state.days = null;
      this.today = null;
      console.log(this.dateFuture);
      console.log(this.dateToday);

      let dateToday = new Date().toISOString().substr(0, 10);
      let diffInMilliseconds = Math.abs(
        new Date(this.today) - new Date(this.dateFuture)
      );
      console.log(diffInMilliseconds);
      console.log("gelecek: " + this.dateFuture);
      console.log("bugun:   " + dateToday);

      //! calculate days
      const days = Math.floor(diffInMilliseconds / 86400);
      diffInMilliseconds -= days * 86400;
      this.state.days = days;

      //! calculate hours
      const hours = Math.floor(diffInMilliseconds / 3600) % 24;
      diffInMilliseconds -= hours * 3600;
      this.state.hours = hours;

      //! calculate minutes
      const minutes = Math.floor(diffInMilliseconds / 60) % 60;
      diffInMilliseconds -= minutes * 60;
      this.state.minutes = minutes;

      //! calculate seconds
      const seconds = Math.floor(diffInMilliseconds / 360) % 60;
      diffInMilliseconds -= seconds * 60;
      this.state.seconds = seconds;
    },
  },
};
</script>

<style lang="scss">
html {
  font-family: "Courier New", Courier, monospace;
}
*,
*::after,
*::before {
  box-sizing: border-box;
  font-size: 16;
}

.container {
  text-align: center;
  margin-top: 3rem;
  .title {
    margin: 5px;
    font-size: 3rem;
  }
}

.row {
  display: block;
  width: 90vw;
  // background-color: red;
  height: 85vh;
  margin-left: auto;
  margin-right: auto;
  margin-top: 1em;
  .calenderInput input {
    margin-top: 1.5rem;
    font-size: 1.5rem;
  }
}

.time-wrapper div {
  display: inline-block;
  width: 9em;
  height: 9em;
  margin-right: 2rem;
  margin-bottom: 2rem;
  margin-left: auto;
  margin-top: 5em;
}

.countdown-item {
  border-radius: 50%;
  background-color: rebeccapurple;
}
.countdown-item span {
  display: inline-block;
}

.countdown-item span {
  font-size: 2.5rem;
  margin-top: 1.7rem;
}

.countdown-item p {
  font-size: 1rem;
  margin-top: 0.6em;
}
</style>






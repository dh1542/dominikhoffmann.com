<template>
  <section id="content_section">
    <div id="header_container">
      <h2 id="header">Pomodoro Timer</h2>
    </div>
    <div id="header_text">
      <p>
        The
        <a
          href="https://en.wikipedia.org/wiki/Pomodoro_Technique"
          target="_blank"
          >Pomodoro Technique
        </a>
        is a time management method developed by Francesco Cirillo in the late
        1980s. It uses a kitchen timer to break work into intervals, typically
        25 minutes in length, separated by short breaks. Each interval is known
        as a pomodoro, from the Italian word for tomato, after the tomato-shaped
        kitchen timer Cirillo used as a university student.
        <br/>
      </p>
    </div>

    <section id="timer_section">
        <div id="time_section">
            <h3>Time</h3>
            <v-progress-circular
      
      :size="200"
      :width="30"
      :model-value="value"
      color="red"
    >
      {{ value}}
    </v-progress-circular>
        </div>
        <div id="button_section">
            <h3>Button</h3>
            <v-btn size="x-large" elevated>
                Start Timer
            </v-btn>
            <v-btn size="x-large">
                Pause Timer
            </v-btn>
            <v-btn size="x-large">
                Reset Timer
            </v-btn>
        </div>
    </section>
  </section>
</template>

<script lang="ts">
  export default {
    data () {
      return {
        interval: {},
        value: 0,
      }
    },
    mounted () {
      this.interval = setInterval(() => {
        if (this.value === 60) {
          return (this.value = 0)
        }
        this.value += 1
      }, 1000)
    },
  }
</script>

<style scoped>
#button_section{
    position: relative;
    
    margin-left: 10%;
    margin-top: 10%;
    height: 30%;
    width: 80%;
    background-color: yellow;
}
#time_section{
    position: relative;
    top: 5%;
    margin: 5%;
    height: 60%;
    width: 90%;
    background-color: white;
}
#content_section {
  margin-left: 40%;
  margin-top: 5%;
  margin: 5%;
  text-align: justify;
}
* {
  font-family: "Helvetica";
}
#header_container {
  justify-self: center;
  display: flex;
}
#timer_section{
    margin: 5%;
    height: 90%;
    width: 90%;
    background-color: brown;
    opacity: 1;

}
</style>

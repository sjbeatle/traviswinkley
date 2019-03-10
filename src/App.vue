<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
html, body {
  margin: 0;
  padding: 0;
}

body {
  margin-top: 300px;
  line-height: 1.5em;
}

html {
  font-family: 'Open Sans', sans-serif;
  font-size: 19px;
  color: #333;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #000;
  background-image: url('./assets/background-main.jpg');
  background-position-y: 4rem;
  background-repeat: no-repeat;
  background-position-x: calc(50% - 20px);
  background-size: 100%;
  transition: background 200ms;
}

@media (min-width: 500px) {
  html {
    background-position-y: 3rem;
    background-position-x: calc(50% - 20px);
    background-size: 500px;
  }
}

@media (min-width: 860px) {
  html {
    background-position-y: 2rem;
    background-position-x: calc(50% + 180px);
    background-size: 100%;
  }

  body {
    margin-top: 0;
  }
}

@media (min-width: 1024px) {
  html {
    background-position-x: calc(50% + 200px);
  }
}

@media (min-width: 1280px) {
  html {
    background-position-x: calc(50% + 250px);
    background-size: 1280px;
  }

  #app {
    max-width: 1280px;
    margin: 0 auto;
  }
}

a {
  color: #bb723b;
  font-weight: bold;
  text-decoration: none;
  transition: color 200ms;

  &:hover, &:focus {
    color: orange;
  }
}

* {
  box-sizing: border-box;

  p:first-of-type {
    margin-top: 0;
  }

  p:last-of-type {
    margin-bottom: 0;
  }
}

p {
  word-break: break-word;
}

hr {
  border: 0;
  height: 1px;
  background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.75),
    rgba(0, 0, 0, 0)
  );
}
</style>

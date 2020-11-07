<template>
  <div class="wrapper">
    
    <header>
      <div class="navbar">
        <div class="container">
          <div class="navbar-content">
            <div class="logo">VUE-CLI</div>
            <ul class="navbar-list">
              <li class="navbar-item">
                <router-link class="navbar-link" to="/">Home</router-link>
              </li>
              <li class="navbar-item">
                <router-link class="navbar-link" to="/example">Example</router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>

    <router-view></router-view>

  </div>
</template>

<script>
import Example from './pages/Example.vue'
import Home from './pages/Home.vue'

export default {
  data () {
    return {
      links: [
        { title: 'Home', url: '/'},
        { title: 'Example', url: '/example'},
      ]
    } 
  }
  }

</script>

<style lang="scss">
.navbar-link {
  &.router-link-exact-active {
    color:#5247e7;
  }
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

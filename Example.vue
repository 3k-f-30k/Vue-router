<template>
    <div class="wrapper-content wrapper-content--fixed">
      <section>
        <div class="container">
          <h1>Example page</h1>
          <input type="text" v-model="message">
          <button class="btn btnPrimary" @click="setMessage">Change message</button>
          <p> {{ getMessage }}</p>
          <br>
        </div>
      </section>
    </div>
</template>


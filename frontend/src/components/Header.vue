<template>
    <div id="nav">
      <h1> Mon blog </h1>
    </div>
    
</template>

<script>
  export default {
    name: 'Header',
    data() {

    }
  }
</script>

<style>
  #nav {
   display: flex;
   justify-content: space-between;
   align-items: center;
   background-color: silver;
  }

  h1 {
      margin-left: 10rem;
  }

</style>
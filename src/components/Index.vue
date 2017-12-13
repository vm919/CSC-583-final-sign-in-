<template>
  <div class="hello">
    <h2>User Registration Portal</h2>
    <h4>{{ msg }}</h4>
    <div>
      <br/>
      <br/>
      <p><b>Click <a href="/register" target="_blank"><u>here</u></a> to register yourself</b></p>
      <br/>
      <br/>
      <p><b>Click <a href="/showAllUsers" target="_blank"><u>here</u></a> to see the details of all registered user</b></p>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'Index',
        data () {
            return {
                msg: 'Hi!! Select from one of the below options to proceed'
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }

  a {
    color: #3222b9;
  }
</style>

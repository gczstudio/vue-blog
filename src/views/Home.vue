<template>
  <div class="home">
    <HelloWorld msg="Home"/>
    <Input v-model="value" placeholder="Enter something..." style="width: 300px" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>

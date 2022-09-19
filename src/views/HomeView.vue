<script>
import axios from 'axios'
export default {
  data() {
    return {
      info: '',
      api: 'https://resume.likemebd.com/api/v1/match/1'
    }
  },
  methods: {

  },
  mounted() {
    axios.get(this.api)
    .then(res => console.log(res.data))
    .catch(err => console.log(err))
  }
}
</script>

<template>
  <main>
   
  </main>
</template>

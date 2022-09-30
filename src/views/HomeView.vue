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
    // axios.get(this.api)
    // .then(res => console.log(res.data))
    // .catch(err => console.log(err))
  }
}
</script>

<template>
  <main>
   <div class="container">
    <h1 class="text-center bg-secondary text-light p-2 mt-4">Resume of Imam Hossain</h1>
    <div class="row g-2">
      <div class="col-4 text-center">
        <img src="images/babu.jpeg" class="w-50">
      </div>
      <div class="col-4">
        <h3 class="text-dark text-large">Md. Imam Hossain</h3>
        <h5 class="text-dark text-large">Assistant Officer (IT)</h5>
      </div>
      <div class="col-4">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus laboriosam unde minus a dolore velit omnis ut sunt adipisci natus error, saepe distinctio temporibus hic magnam corporis, in autem tempore!
      </div>
    </div>
   </div>
  </main>
</template>

<template>
  <b-container>
<!--    <b-embed type="embed" aspect="4by3" controls poster="poster.png">-->
<!--      <source src="../assets/documents/kwResume202004.pdf" type="application/pdf">-->
<!--    </b-embed>-->
    <embed src="require(../assets/documents/kwResume202004.pdf)" type="application/pdf" width="100%" height="1000px"/>
  </b-container>
</template>

<script>
export default {
  name: 'Resume',
};
</script>

<style scoped>

</style>

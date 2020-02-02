<template>
    <b-container>
        <h1>Resume</h1>
        <p>{{testProp}}</p>
    </b-container>
</template>


<script>
export default
{
  name: 'Resume',
  props:
        {
          testProp:
                {
                  type: String,
                  default: 'Test Prop',
                },
        },
  data() {
    return {

    };
  },
};
</script>


<style>

</style>

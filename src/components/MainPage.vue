<template>
    <b-container>
        <h1>Main Page</h1>
        <p>{{testProp}}</p>
    </b-container>
</template>


<script>
export default
{
  name: 'mainPage',
  props:
        {
          testProp:
                {
                  type: String,
                  default: 'Default String',
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

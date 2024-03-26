<template>
  <div>
    <marquee v-if="pending">🛸</marquee>
    Error:
    <pre>{{ error }}</pre>
    Data:
    <pre>{{ data }}</pre>
  </div>
</template>
<script type="ts" setup>
const { pending, data, error } = await useFetch('/api', {
  onRequestError: ({ request, options, error: requestError }) => {
    console.log(requestError)
  },
  onResponseError: ({ request, response, options }) => {
    console.log('hiero', response)
  }
})
</script>

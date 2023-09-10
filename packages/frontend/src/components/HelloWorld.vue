<script setup lang="ts">
import { ref } from "vue";

defineProps<{ msg: string }>();

const count = ref(0);

const envVar = import.meta.env.VITE_API_URL;
console.log(envVar);

const pythonUrl = envVar + "/python";

const clickHandler = (url: string) => {
  fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      count.value++;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button
      type="button"
      @click="clickHandler(envVar)"
    >
      count is {{ count }}
    </button>
    <button
      type="button"
      @click="clickHandler(pythonUrl)"
    >
      Python count is {{ count }}
    </button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>

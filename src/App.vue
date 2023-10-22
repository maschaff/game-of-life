<script setup lang="ts">
import { ref } from "vue";
import Simulator from "./components/Simulator.vue";
import { gameOfLifeSimulator, Seed } from "./simulator/simulator";

const dim = ref(50);
const seed = ref<Seed>(getBlankSeed());
const locked = ref(false);
function getBlankSeed(): Seed {
  return Array(dim.value)
    .fill([])
    .map(() => Array(dim.value).fill(0));
}

async function start() {
  locked.value = true;

  for (const state of gameOfLifeSimulator(seed.value)) {
    await new Promise((r) => setTimeout(r, 100));

    seed.value = state;
  }
}
</script>

<template>
  <div
    style="
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      gap: 24px;
    "
  >
    <Simulator v-model="seed" :locked="locked" />

    <input
      type="range"
      v-model="dim"
      min="1"
      max="100"
      class="slider"
      id="myRange"
    />
    <button class="Button" @click="start">Start</button>
  </div>
</template>

<style>
body {
  background: black;
}

.Button {
  font-size: 34px;
  padding: 1.2rem 1.6rem;
  background: green;
  border-radius: 8px;
  border: 3px solid white;
}
</style>

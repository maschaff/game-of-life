<script setup lang="ts">
import { Seed } from "../simulator/simulator";

const props = defineProps<{ locked?: boolean }>();
const seed = defineModel<Seed>();

function toggleState(y, x) {
  if (props.locked) return;

  seed.value[y][x] = seed.value[y][x] ? 0 : 1;
}
</script>

<template>
  <div class="Grid">
    <div v-for="(col, y) in seed" :key="y" class="Grid-row">
      <div
        v-for="(cell, x) in col"
        :key="x"
        class="Cell"
        :class="{ 'is-alive': cell }"
        @click="toggleState(y, x)"
        @mouseover.meta="toggleState(y, x)"
      />
    </div>
  </div>
</template>

<style scoped>
.Grid {
  display: flex;
  border: 3px solid #ffffff;
  border-radius: 8px;
  width: 1000px;
  height: 1000px;
}

.Grid-row {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.Cell {
  flex: 1;
  border-radius: 4px;

  &.is-alive {
    content: "X";
    color: #fff;
    background: green;
  }
}
</style>

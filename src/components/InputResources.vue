<script setup lang="ts">
import { ref } from "vue";

import ResourceSelector from "@/components/ResourceSelector.vue";

const emit = defineEmits(["selected"]);

const displayResourceSelector = ref<boolean>(false);
const toggleResourceSelector = (): void => {
  displayResourceSelector.value = true;
};
</script>

<template>
  <div class="p-card">
    <TabView class="tabview-custom" ref="tabview4">
      <TabPanel>
        <template #header>
          <i class="pi pi-sign-out"></i>
          <span>Output</span>
        </template>
        <Button icon="pi pi-plus" @click="toggleResourceSelector"></Button>
        <Dialog v-model:visible="displayResourceSelector">
          <ResourceSelector></ResourceSelector>
        </Dialog>
      </TabPanel>

      <TabPanel>
        <template #header>
          <i class="pi pi-sign-in"></i>
          <span>Input</span>
        </template>
        <p>Testing</p>
      </TabPanel>
    </TabView>
  </div>
</template>

<style scoped>
span {
  text-align: center;
  vertical-align: center;
  margin: 0 1rem;
}
</style>

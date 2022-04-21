<script setup lang="ts">
import { Ores, Ingots, Minerals, Liquids, Resource } from "@/common/resources";
import { defineProps } from "vue";

import { useActiveItems } from "@/stores/ActiveItems";

const imageModules = import.meta.globEager("@/assets/*.png");

//store constants
const activeItemsStore = useActiveItems();

const handleClick = (resource: Resource): void => {
  activeItemsStore.addActiveItem(resource);
  emit.
};
</script>

<template>
  <Panel header="Ores" :toggleable="true">
    <div class="flex flex-wrap">
      <Card
        style="width: 15em"
        class="p-link"
        v-for="ore in Ores"
        @click="activeItemsStore.addActiveItem(ore)"
      >
        <template #header>
          <Image :src="imageModules[ore.img].default" />
        </template>
        <template #title>
          <p style="text-align: center">{{ ore.name }}</p>
        </template>
      </Card>
    </div>
  </Panel>

  <Panel header="Ingots" :toggleable="true">
    <div class="flex flex-wrap">
      <Card
        style="width: 15em"
        class="p-link"
        v-for="ingot in Ingots"
        @click="activeItemsStore.addActiveItem(ingot)"
      >
        <template #header>
          <Image :src="imageModules[ingot.img].default" />
        </template>
        <template #title>
          <p style="text-align: center">{{ ingot.name }}</p>
        </template>
      </Card>
    </div>
  </Panel>

  <Panel header="Minerals" :toggleable="true">
    <div class="flex flex-wrap">
      <Card
        style="width: 15em"
        class="p-link"
        v-for="mineral in Minerals"
        @click="activeItemsStore.addActiveItem(mineral)"
      >
        <template #header>
          <Image :src="imageModules[mineral.img].default" />
        </template>
        <template #title>
          <p style="text-align: center">{{ mineral.name }}</p>
        </template>
      </Card>
    </div>
  </Panel>

  <Panel header="Liquids" :toggleable="true">
    <div class="flex flex-wrap">
      <Card
        style="width: 15em"
        class="p-link"
        v-for="liquid in Liquids"
        @click="activeItemsStore.addActiveItem(liquid)"
      >
        <template #header>
          <Image :src="imageModules[liquid.img].default" />
        </template>
        <template #title>
          <p style="text-align: center">{{ liquid.name }}</p>
        </template>
      </Card>
    </div>
  </Panel>
</template>

<style scoped>
.p-card {
  box-shadow: unset;
}
</style>

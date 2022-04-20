<script setup lang="ts">
import { Ores, Ingots, Minerals, Liquids, Resource } from "@/common/resources";
import { onMounted, ref } from "vue";

const imageModules = import.meta.globEager("@/assets/*.png");

const addToActiveItems = (newResource: Resource): void => {
  console.log(newResource);
};

onMounted(() => {
  console.log(imageModules);
});
</script>

<template>
  <Panel header="Ores" :toggleable="true">
    <div class="flex flex-wrap">
      <Card
        style="width: 15em"
        v-for="ore in Ores"
        @click="addToActiveItems(ore)"
      >
        <template #content>
          <Image :src="imageModules[ore.img].default" />
        </template>
      </Card>
    </div>
  </Panel>

  <Panel header="Ingots" :toggleable="true">
    <div class="flex flex-wrap">
      <Card
        style="width: 15em"
        v-for="ingot in Ingots"
        @click="addToActiveItems(ingot)"
      >
        <template #content>
          <Image :src="imageModules[ingot.img].default" />
        </template>
      </Card>
    </div>
  </Panel>

  <Panel header="Minerals" :toggleable="true">
    <div class="flex flex-wrap">
      <Card
        style="width: 15em"
        v-for="mineral in Minerals"
        @click="addToActiveItems(mineral)"
      >
        <template #content>
          <Image :src="imageModules[mineral.img].default" />
        </template>
      </Card>
    </div>
  </Panel>

  <Panel header="Liquids" :toggleable="true">
    <div class="flex flex-wrap">
      <Card
        style="width: 15em"
        v-for="liquid in Liquids"
        @click="addToActiveItems(liquid)"
      >
        <template #content>
          <Image :src="imageModules[liquid.img].default" />
        </template>
      </Card>
    </div>
  </Panel>
</template>

<style scoped></style>

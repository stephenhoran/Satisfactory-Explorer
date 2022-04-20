<script setup lang="ts">
import { Ores, Ingots, Minerals, Liquids } from '@/common/resources';
import { onMounted, ref } from "vue";

const imageModules = import.meta.globEager("@/assets/*.png");

const addToActiveItems = (newItem: string): void => {
  console.log(newItem);
}

onMounted(() => {
  console.log(imageModules);
});
</script>

<template>
  <Panel header="Ores" :toggleable="true">
    <div class="flex flex-wrap">
      <Card
        style="width: 15em"
        v-for="(item, key) in Ores"
        @click="addToActiveItems(key)"
      >
        <template #content>
          <Image :src="imageModules[item.img].default" />
          Dan was here
        </template>
      </Card>
    </div>
  </Panel>

  <Panel header="Ingots" :toggleable="true">
    <div class="flex flex-wrap">
      <Card style="width: 15em" v-for="(item, key) in Ingots">
        <template #title>
          {{ key }}
        </template>
      </Card>
    </div>
  </Panel>

  <Panel header="Minerals" :toggleable="true">
    <div class="flex flex-wrap">
      <Card style="width: 15em" v-for="(item, key) in Minerals">
        <template #title>
          {{ key }}
        </template>
      </Card>
    </div>
  </Panel>

  <Panel header="Liquids" :toggleable="true">
    <div class="flex flex-wrap">
      <Card style="width: 15em" v-for="(item, key) in Liquids">
        <template #title>
          {{ key }}
        </template>
      </Card>
    </div>
  </Panel>
</template>

<style scoped></style>

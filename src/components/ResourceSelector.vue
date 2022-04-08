<script setup>
import { Ores, Ingots, Minerals, Liquids } from "@/common/resources.js";

defineProps({});
</script>

<template>
  <Panel header="Ores" :toggleable="true">
    <div class="flex flex-wrap">
      <Card style="width: 15em" v-for="(item, keys) in Ores">
        <template #title>
          {{ keys }}
        </template>
      </Card>
    </div>
  </Panel>
  <Panel header="Ingots" :toggleable="true">
    <div class="flex flex-wrap">
      <Card style="width: 15em" v-for="(item, keys) in Ingots">
        <template #title>
          {{ keys }}
        </template>
      </Card>
    </div>
  </Panel>
  <Panel header="Minerals" :toggleable="true">
    <div class="flex flex-wrap">
      <Card style="width: 15em" v-for="(item, keys) in Minerals">
        <template #title>
          {{ keys }}
        </template>
      </Card>
    </div>
  </Panel>
  <Panel header="Liquids" :toggleable="true">
    <div class="flex flex-wrap">
      <Card style="width: 15em" v-for="(item, keys) in Liquids">
        <template #title>
          {{ keys }}
        </template>
      </Card>
    </div>
  </Panel>
</template>

<style scoped></style>

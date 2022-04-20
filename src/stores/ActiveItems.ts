import { defineStore } from "pinia";
import { Resource } from "@/common/resources";

export type RootState = {
  activeItems: Resource[];
};

export const useActiveItems = defineStore("ActiveItems", {
  state: (): RootState => ({ activeItems: [] }),
  actions: {
    addActiveItem(newItem: Resource): void {
      // If item does not exist already, push it to active items
      if (!this.activeItems.includes(newItem)) {
        this.activeItems.push(newItem);
      }
    },
    removeActiveItem(item: Resource): void {
      // Remove item if it exists
      this.activeItems = this.activeItems.filter(
        (items) => items.name !== item.name
      );
    },
  },
  getters: {
    // return list of active items
    getActiveItems(): Resource[] {
      return this.activeItems;
    },
  },
});

import { defineStore } from 'pinia'

export const activeItems = defineStore({
  id: 'activeItems',
  state: () => ({
    /** @type {string[]} */
    activeItems: []
  }),
  getters: {
    Items: (state) => {
      return this.activeItems
    }
  },
  actions: {
    addItem(item) {
      this.activeItems.push(item)
    },
    removeItem(item) {
      this.activeItems = this.activeItems.filter((activeItems) => !item)
    }
  }
})

import { defineStore } from 'pinia'

interface State {
  size: 'large' | 'default' | 'small'
}

export default defineStore('app', {
  state: (): State => {
    return {
      size: 'default',
    }
  },
})

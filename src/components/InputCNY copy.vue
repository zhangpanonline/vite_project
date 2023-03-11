<template>
  <el-input v-model="data" placeholder="请输入金额（¥）" v-bind="$attrs" @focus="focus($event)" @blur="blur($event)">
    <slot slot="prefix" name="prefix" ></slot>
    <slot slot="suffix" name="suffix" ></slot>
    <slot slot="prepend" name="prepend" ></slot>
    <slot slot="append" name="append" ></slot>
  </el-input>
</template>

<script>
export default {
  props: {
    value: [Number, String],
    precision: {
      type: [Number, String],
      default: 2
    }
  },
  watch: {
    value: {
      immediate: true,
      handler (val) {
        if (typeof val === 'string') {
          val = val.replace(/[a-z,A-Z]/g, '')
          if (val) {
            val = Number.parseFloat(val)
            val = Number(val).toFixed(this.precision)
            val = '¥' + String(val).replace(/\B(?=(\d{3})+(?!\d))/g, ',')
          } else {
            val = ''
          }
        } else if (Number.isNaN(val)) {
          val = ''
        } else if (typeof val === 'number') {
          val = Number(val).toFixed(this.precision)
          val = '¥' + String(val).replace(/\B(?=(\d{3})+(?!\d))/g, ',')
        }
        this.data = val
      }
    }
  },
  data () {
    return {
      data: ''
    }
  },
  methods: {
    focus (e) {
      let val = e.target.value
      if (val.startsWith('¥')) {
        val = val.slice(1).replaceAll(',', '')
      }
      // eslint-disable-next-line no-useless-escape
      this.data = /[^(0|\.)]/g.test(val) ? val : ''
    },
    blur (e) {
      let val = e.target.value
      val = val.replace(/[a-z,A-Z]/g, '')
      if (val === null || val === undefined || val === '') {
        val = ''
      } else {
        val = Number.parseFloat(val)
      }
      this.$emit('input', Infinity)
      this.$nextTick(() => {
        this.$emit('input', val)
      })
    }
  }
}
</script>

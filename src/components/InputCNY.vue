<script lang="ts" >
import { h, defineComponent } from 'vue'
import { ElInput } from 'element-plus'
export default defineComponent({
  setup() {
    return () => h(ElInput, {
      // TODO
    }, {
      default: () => 'default',
      prefix: () => h('slot'),
      suffix: () => h('slot'),
      prepend: () => h('slot'),
      append: () => h('slot'),
    })
  }
})
</script>
<template>
  <main>
    <MyTable />
  </main>
</template>

<script>
import userStore from '@/stores/user.js'
import { mapState } from 'pinia'
import MyTable from '@/components/MyTable.vue'

export default {
  name: 'HomeView',
  components: {
    MyTable
  },
  data() {
    return {}
  },
  computed: {
    ...mapState(userStore, ['user'])
  }
}
</script>

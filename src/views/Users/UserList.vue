<template>
    <div>
        <h3>User List</h3>
      <dark-table></dark-table>
    </div>
</template>
<script>
import DarkTable from '../Tables/RegularTables/DarkTable.vue';
import LightTable from '../Tables/RegularTables/LightTable.vue';
export default {
  components: { DarkTable, LightTable },
    data() {
        
        return {
            users: {
                name:'Gautam'
            }
        }
    }
}
</script>
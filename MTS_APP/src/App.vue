<script>
import { RouterView } from 'vue-router';
export default{
  // mounted runs any code inside the moment the app loads
  mounted() {
    this.$store.dispatch('fetchEmployees');
    this.$store.dispatch('fetchAttendance');
    this.$store.dispatch('fetchLeaveRequests');
  }

}
</script>

<template>
  <RouterView />
</template>

<style scoped></style>

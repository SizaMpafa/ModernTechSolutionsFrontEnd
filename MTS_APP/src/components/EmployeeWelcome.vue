<script>
import store from "@/store";

export default {
  props: ["id"],

  computed: {
    employee() {
      return store.state.employees.find((e) => e.employeeId == this.id);
    },

    attendance() {
      return store.state.employeesAttendance.find((e) => e.employeeId == this.id);
    },

    lastAttendance() {
      return this.attendance?.attendance?.slice(-1)[0] || null;
    },

    lastLeave() {
      return this.attendance?.leaveRequests?.slice(-1)[0] || null;
    }
  }
};
</script>

<template>
  <div class="container mt-5" style="max-width: 700px;">

    <!-- HEADER WITH AVATAR -->
    <div class="text-center mb-4">
      <div 
        class="rounded-circle bg-primary text-white d-flex justify-content-center align-items-center mx-auto mb-3"
        style="width: 120px; height: 120px; font-size: 3rem;"
      >
        {{ employee?.name.charAt(0) }}
      </div>

      <h2 class="fw-bold">{{ employee?.name }}</h2>
      <p class="text-muted mb-1">{{ employee?.position }}</p>
      <p class="text-muted">{{ employee?.department }} Department</p>
    </div>

    <hr />

    <!-- QUICK ACTION CARDS -->
    <div class="row text-center g-3">

      <div class="col-md-4">
        <RouterLink :to="`/employee/${id}/profile`" class="card dashboard-card shadow-sm p-3">
          <h5 class="fw-bold mb-1">Profile</h5>
          <p class="text-muted small">View details</p>
        </RouterLink>
      </div>

      <div class="col-md-4">
        <RouterLink :to="`/employee/${id}/register`" class="card dashboard-card shadow-sm p-3">
          <h5 class="fw-bold mb-1">Attendance</h5>
          <p class="text-muted small">Sign register</p>
        </RouterLink>
      </div>

      <div class="col-md-4">
        <RouterLink :to="`/employee/${id}/bookings`" class="card dashboard-card shadow-sm p-3">
          <h5 class="fw-bold mb-1">Leave</h5>
          <p class="text-muted small">Request leave</p>
        </RouterLink>
      </div>
    </div>

    <hr class="my-4" />

    <!-- LAST ATTENDANCE -->
    <div class="card shadow-sm p-3 mb-3" v-if="lastAttendance">
      <h5 class="fw-bold mb-2">Last Attendance</h5>
      <div class="d-flex justify-content-between">
        <span>{{ lastAttendance.date }}</span>
        <span 
          :class="{
            'badge bg-success': lastAttendance.status === 'Present',
            'badge bg-danger': lastAttendance.status === 'Absent'
          }"
        >
          {{ lastAttendance.status }}
        </span>
      </div>
    </div>

    <div class="card shadow-sm p-3 mb-3" v-else>
      <h5 class="fw-bold mb-2">Last Attendance</h5>
      <p class="text-muted">No attendance yet.</p>
    </div>

    <!-- LAST LEAVE REQUEST -->
    <div class="card shadow-sm p-3">
      <h5 class="fw-bold mb-2">Recent Leave Request</h5>

      <div v-if="lastLeave">
        <div class="d-flex justify-content-between">
          <strong>{{ lastLeave.date }}</strong>
          <span class="badge"
            :class="{
              'bg-success': lastLeave.status === 'Approved',
              'bg-danger': lastLeave.status === 'Denied',
              'bg-warning text-dark': lastLeave.status === 'Pending'
            }"
          >
            {{ lastLeave.status }}
          </span>
        </div>

        <p class="mt-2 text-muted">{{ lastLeave.reason }}</p>
      </div>

      <p v-else class="text-muted">No leave history.</p>
    </div>

  </div>
</template>

<style scoped>
.dashboard-card {
  cursor: pointer;
  border-radius: 14px;
  transition: 0.2s ease;
  background: #ffffff;
  text-decoration: none;
  color: inherit;
}

.dashboard-card:hover {
  background: #f1f5ff;
  transform: translateY(-3px);
}
</style>

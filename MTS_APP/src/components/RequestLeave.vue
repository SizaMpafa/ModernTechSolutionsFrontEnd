<script>
import store from "@/store";

export default {
  props: ["id"],

  data() {
    return {
      date: "",
      reason: "",
      status: "Pending",
      submitted: false
    };
  },

  computed: {
    employee() {
      return store.state.employeesAttendance.find(
        (e) => e.employeeId == this.id
      );
    },

    leaveHistory() {
      return this.employee?.leaveRequests || [];
    }
  },

  methods: {
    bookLeave() {
      if (!this.date || !this.reason) return;

      const newRequest = {
        id: this.id,
        newLeaveRequestRecord: {
          date: this.date,
          reason: this.reason,
          status: "Pending"
        }
      };

      store.commit("addRequest", newRequest);

      this.submitted = true;

      // Reset form after a short delay
      setTimeout(() => (this.submitted = false), 2500);

      this.date = "";
      this.reason = "";
    },

    // Assign badge styling based on status
    badgeClass(status) {
      switch (status) {
        case "Approved":
          return "badge bg-success";
        case "Denied":
          return "badge bg-danger";
        default:
          return "badge bg-warning text-dark";
      }
    }
  }
};
</script>

<template>
    <RouterLink 
      :to="`/employee/${id}`"
      class="back-btn d-inline-flex align-items-center gap-2 mb-3"
    >
      <i class="bi bi-arrow-left"></i> Back
    </RouterLink>
  <div class="container mt-5 d-flex justify-content-center">

    <div class="card shadow-lg p-4" style="width: 550px; border-radius: 18px;">

      <!-- HEADER -->
      <h3 class="text-center fw-bold mb-4">Request Leave</h3>

      <!-- SUCCESS MESSAGE -->
      <div 
        v-if="submitted"
        class="alert alert-success text-center fw-semibold"
      >
        ✅ Leave request submitted successfully!
      </div>

      <!-- FORM ALWAYS VISIBLE -->
      <form>

        <!-- DATE -->
        <div class="mb-3">
          <label class="form-label fw-semibold">Select Date</label>
          <input
            type="date"
            class="form-control p-2"
            v-model="date"
            required
          >
        </div>

        <!-- REASON -->
        <div class="mb-3">
          <label class="form-label fw-semibold">Reason for Leave</label>
          <textarea
            class="form-control p-2"
            rows="3"
            v-model="reason"
            placeholder="Explain your reason..."
            required
          ></textarea>
        </div>

        <!-- SUBMIT -->
        <button
          class="btn btn-primary w-100 py-2 fw-bold"
          @click.prevent="bookLeave"
        >
          Submit Request
        </button>
      </form>

      <!-- LEAVE HISTORY -->
      <hr class="mt-4">

      <h5 class="fw-bold text-center mb-3">Leave History</h5>

      <div v-if="leaveHistory.length">

        <!-- Show newest first -->
        <div 
          v-for="(req, index) in [...leaveHistory].reverse()" 
          :key="index"
          class="border rounded p-3 mb-3"
          style="background-color: #f8f9fa;"
        >
          <div class="d-flex justify-content-between align-items-center">
            <strong>{{ req.date }}</strong>
            <span :class="badgeClass(req.status)">
              {{ req.status }}
            </span>
          </div>

          <p class="mt-2 mb-0 text-secondary">
            Reason: {{ req.reason }}
          </p>
        </div>

      </div>

      <p v-else class="text-center text-muted mt-3">
        No leave requests found.
      </p>

    </div>
  </div>
</template>

<style scoped>
.card {
  background: #ffffff;
}
</style>

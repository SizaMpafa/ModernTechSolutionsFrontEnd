<script>
export default {
  props: {
    employee: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      show: false,
      form: { ...this.employee }
    }
  },
  methods: {
    async updateEmployee() {
      await this.$store.dispatch('updateEmployee', {
        employee_Id: this.employee.employee_Id,
        updates: this.form
      })
      this.show = false
    }
  }
}
</script>

<template>
  <!-- Edit Button -->
  <button
    class="icon-btn edit"
    title="Edit employee"
    @click.stop="show = true"
  >
    <i class="fa-solid fa-pen"></i>
  </button>

  <!-- Modal -->
  <div v-if="show" class="modal-backdrop" @click.self="show = false">
    <div class="modal-card">
      <!-- Header -->
      <div class="modal-header">
        <!-- <h5>Edit Employee</h5> -->
        <span>{{ employee.name }}</span>
      </div>

      <!-- Form -->
      <div class="modal-body">
        <div class="form-group">
          <label>Position</label>
          <input v-model="form.position" type="text" />
        </div>

        <div class="form-group">
          <label>Department</label>
          <input v-model="form.department" type="text" />
        </div>

        <div class="form-group">
          <label>Salary</label>
          <input v-model="form.salary" type="number" />
        </div>

        <div class="form-group">
          <label>Employment History</label>
          <textarea
            v-model="form.employmentHistory"
            rows="3"
          ></textarea>
        </div>
      </div>

      <!-- Actions -->
      <div class="modal-actions">
        <button class="btn cancel" @click="show = false">
          Cancel
        </button>
        <button class="btn save" @click="updateEmployee">
          Save Changes
        </button>
      </div>
    </div>
  </div>
</template>


<style scoped>
/* Backdrop */
.modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  display: grid;
  place-items: center;
  z-index: 1000;
  animation: fadeIn 0.25s ease;
}

/* Modal Card */
.modal-card {
  background: white;
  width: 360px;
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  animation: scaleIn 0.25s ease;
}

/* Header */
.modal-header {
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  padding: 16px;
}

.modal-header h5 {
  margin: 0;
  font-size: 18px;
}

.modal-header span {
  font-size: 13px;
  opacity: 0.9;
}

/* Body */
.modal-body {
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

/* Form Groups */
.form-group {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.form-group label {
  font-size: 12px;
  font-weight: 600;
  color: #555;
}

.form-group input,
.form-group textarea {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 8px 10px;
  font-size: 14px;
  transition: border 0.2s ease, box-shadow 0.2s ease;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #667eea;
  box-shadow: 0 0 0 2px rgba(102, 126, 234, 0.25);
}

/* Actions */
.modal-actions {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  padding: 14px 16px;
  border-top: 1px solid #eee;
}

.btn {
  padding: 8px 14px;
  border-radius: 8px;
  font-size: 14px;
  border: none;
  cursor: pointer;
  transition: 0.2s ease;
}

.btn.cancel {
  background: #f3f4f6;
  color: #333;
}

.btn.cancel:hover {
  background: #e5e7eb;
}

.btn.save {
  background: linear-gradient(135deg, #22c55e, #16a34a);
  color: white;
}

.btn.save:hover {
  opacity: 0.9;
}

/* Edit Icon Button */
.icon-btn.edit {
  background: #eef2ff;
  border: none;
  border-radius: 50%;
  width: 34px;
  height: 34px;
  display: grid;
  place-items: center;
  cursor: pointer;
  transition: 0.2s ease;
  color: #4f46e5;
}

.icon-btn.edit:hover {
  background: #e0e7ff;
  transform: scale(1.05);
}

/* Animations */
@keyframes fadeIn {
  from { opacity: 0 }
  to { opacity: 1 }
}

@keyframes scaleIn {
  from {
    transform: scale(0.92);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
</style>


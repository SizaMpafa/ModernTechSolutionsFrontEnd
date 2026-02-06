<script>
import CreateEmployee from './CreateEmployee.vue'
import DeleteEmployeeButton from './DeleteEmployeeButton.vue'
import EditEmployeeModal from './EditEmployeeModal.vue'

export default {
  components: {
    CreateEmployee,
    DeleteEmployeeButton,
    EditEmployeeModal
  },
  data() {
    return {
      selectedEmployee: null
    }
  },
  computed: {
    workers() {
      return this.$store.state.employees
    }
  },
  methods: {
    showAllEmployeeDetails(employee_Id) {
      this.selectedEmployee = this.workers.find(
        e => e.employee_Id === employee_Id
      )
    },
    hideSelectedEmployeeDetails() {
      this.selectedEmployee = null
    }
  }
}
</script>

<template>
  <div class="d-flex mb-3">
    <CreateEmployee />
  </div>

  <div class="cards">
    <div
      class="employee mb-2 border-top pt-3"
      v-for="employee in workers"
      :key="employee.employee_Id"
      @click="showAllEmployeeDetails(employee.employee_Id)"
    >
      <div class="employee-header">
        <div class="left">
          <i class="fa-solid fa-user-tie"></i>

          <div class="nameNposition">
            <h6>{{ employee.name }}</h6>
            <p class="text-lowercase font-italic">
              {{ employee.position }}
            </p>
          </div>
        </div>

        <div class="right-actions">
          <span class="departments">{{ employee.department }}</span>

          <EditEmployeeModal
            :employee="employee"
            @click.stop
          />

          <DeleteEmployeeButton
            :employeeId="employee.employee_Id"
            @click.stop
          />
        </div>
      </div>

      <!-- Expanded Details -->
      <div
        v-if="selectedEmployee && selectedEmployee.employee_Id === employee.employee_Id"
        class="popup"
        @click.stop
      >
        <div class="expanded">
          <div class="info-box">
            <strong>Salary</strong>
            <p>R{{ selectedEmployee.salary }}</p>
          </div>

          <div class="info-box">
            <strong>Employment History</strong>
            <p>{{ selectedEmployee.employmentHistory }}</p>
          </div>

          <div class="info-box">
            <strong>Contact</strong>
            <p>{{ selectedEmployee.contact }}</p>
          </div>
        </div>

        <button
          class="btn btn-danger w-100 mt-3"
          @click="hideSelectedEmployeeDetails"
        >
          Close {{ selectedEmployee.name }}
        </button>
      </div>
    </div>
  </div>
</template>


<style>
  .departments {
    background: linear-gradient(135deg, #667eea, #764ba2);
    color: white;
    padding: 3px 10px;
    border-radius: 8px;
    font-size: 12px;
  }
  .employee-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .left {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .right-actions {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .employee {
    position: relative;
    background: #fff;
    padding: 15px;
    border-radius: 10px;
    cursor: pointer;
    transition: 0.2s ease;
  }

  .employee:hover {
    background-color: #eef2ff;
  }

  .nameNposition h6 {
    margin-bottom: 2px;
    font-weight: 600;
  }

  .nameNposition p {
    font-size: 12px;
    opacity: 0.8;
  }

  .fa-user-tie {
    font-size: 32px;
    margin-right: 10px;
    color: #4a4a4a;
  }

  .right-0 {
    position: absolute;
    right: 15px;
    top: 10px;
  }

  /* --- Popup Styling --- */
  .popup {
    background: white;
    border-radius: 12px;
    padding: 15px;
    margin-top: 12px;
    border: 1px solid #ddd;
    box-shadow: 0 5px 12px rgba(0, 0, 0, 0.08);
    animation: fadeIn 0.25s ease;
  }

  .popup p {
    font-style: italic;
    margin: 0;
    font-size: 14px;
  }

  /* --- Responsive Info Layout --- */
  .expanded {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    flex-wrap: wrap;
  }

  .info-box {
    flex: 1 1 200px; /* shrink more on small screens */
    min-width: 0; /* allow shrinking below content width */
    background: #f8f9ff;
    padding: 12px;
    border-radius: 10px;
    border: 1px solid #e1e4ff;
    word-wrap: break-word; /* ensure long text wraps */
  }

  .info-box strong {
    font-size: 14px;
    color: #333;
  }

  /* --- Responsive Adjustments --- */
  @media (max-width: 500px) {
    .expanded {
      flex-direction: column;
    }

    .info-box {
      width: 100%;
      margin-bottom: 10px;
    }

    .btn {
      font-size: 14px;
      padding: 10px;
    }
  }

  /* Animation */
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-6px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>
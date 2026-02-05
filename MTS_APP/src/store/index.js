import { createStore } from "vuex";

export default createStore({
  state: {
    employees: [],
    attendance: [],
    leaveRequests: [],
    payroll: []
  },

  getters: {
    employeesAttendanceCombined(state) {
        return state.employees.map(emp => ({
          employeeId: emp.employee_Id,
          name: emp.name,

          attendance: state.attendance
            ?.filter(a => a.employee_id === emp.employee_Id)
            .map(a => ({
              date: a.attendance_date,
              attendance_status: a.attendance_status
            })) || [],

          leaveRequests: state.leaveRequests
            ?.filter(l => l.employee_id === emp.employee_Id)
            .map(l => ({
              date: l.date,
              status: l.status,
              reason: l.reason
            })) || []
        }));
      }
  },

  mutations: {
    setEmployees(state, payload) {
      state.employees = payload;
    },
    setAttendance(state, payload) {
      state.attendance = payload;
    },
    setLeaveRequests(state, payload) {
      state.leaveRequests = payload;
    },
    setPayroll(state, payload) {
      state.payroll = payload;
    },
    updateLeaveStatus(state, { leave_request_id, status }) {
      const leave = state.leaveRequests.find(
        l => l.leave_request_id === leave_request_id
      );
      if (leave) leave.status = status;
    }
  },

  actions: {
    async fetchEmployees({ commit }) {
      const { employees } =
        await (await fetch("http://localhost:1111/employees")).json();
      commit("setEmployees", employees);
    },

    async fetchAttendance({ commit }) {
      const { attendance } =
        await (await fetch("http://localhost:1111/attendance")).json();
      commit("setAttendance", attendance);
    },

    async fetchLeaveRequests({ commit }) {
      const response =
        await (await fetch("http://localhost:1111/leave_requests")).json();

      // BACKEND KEY IS `leave_request`
      commit("setLeaveRequests", response.leave_request);
    },
    async fetchPayroll({ commit }) {
      const {payroll} =
        await (await fetch("http://localhost:1111/payroll")).json();

      // BACKEND KEY IS `leave_request`
      commit("setPayroll", payroll);
    },



    async approveLeave({ commit }, leave_request_id) {
      await fetch(
        `http://localhost:1111/employee/leave_request/${leave_request_id}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ status: "Approved" })
        }
      );
      commit("updateLeaveStatus", {
        leave_request_id,
        status: "Approved"
      });
    },

    async declineLeave({ commit }, leave_request_id) {
      await fetch(
        `http://localhost:1111/employee/leave_request/${leave_request_id}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ status: "Declined" })
        }
      );
      commit("updateLeaveStatus", {
        leave_request_id,
        status: "Declined"
      });
    }
  }
});

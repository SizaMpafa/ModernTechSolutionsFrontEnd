import {createStore} from 'vuex'
import employeesData from './employee_info.json'
import attendanceData from './attendance.json'
import payrollData from './payroll_data.json'
const store = createStore({
                state:{
                     employees: employeesData.employeeInformation,
                     employeesAttendance: attendanceData.attendanceAndLeave,
                     employeesPayRoll: payrollData.payrollData
                },
                getters:{},
                mutations:{},
                actions:{}
            })
export default store

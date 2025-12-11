<script>
    import store from '@/store';
    import CreateEmployee from './CreateEmployee.vue';
    
    export default {
        components:{
            CreateEmployee
        },
        data(){
            return{
                workers: store.state.employees,
                selectedEmployee: null
            }
        },
        methods:{
            showAllEmployeeDetails(employeeId){
               this.selectedEmployee = this.workers.find(worker => worker.employeeId === employeeId)
            },
            hideSelectedEmployeeDetails(){
                this.selectedEmployee = null
            }
        }
    }
</script>

<template>

    <CreateEmployee/>
    <div class="cards">
        <div class="employee mb-2 border-top pt-3" v-for="employee in workers" :key="employee.employeeId" @click="showAllEmployeeDetails(employee.employeeId)">
            <div class="d-flex">
                <i class="fa-solid fa-user-tie mr-2"></i> 
                <div class="nameNposition mr-6">
                    <h6 class="pb-0">
                        {{ employee.name }}
                    </h6>

                    <p class="text-lowercase  text-center font-italic">{{ employee.position }}</p>
                </div>
                <p class="btn departments right-0">{{ employee.department }}</p>
            </div>
            <div
                v-if="selectedEmployee && selectedEmployee.employeeId === employee.employeeId"
                class="popup"
                @click.stop="hideSelectedEmployeeDetails()"
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
                    @click.stop="hideSelectedEmployeeDetails()"
                >
                    Close {{ selectedEmployee.name }}
                </button>
            </div>

        </div>
    </div>

</template>

<style>
    .departments {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 3px 10px;
  border-radius: 8px;
  font-size: 12px;
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
  flex: 1 1 220px;
  background: #f8f9ff;
  padding: 12px;
  border-radius: 10px;
  border: 1px solid #e1e4ff;
}

.info-box strong {
  font-size: 14px;
  color: #333;
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
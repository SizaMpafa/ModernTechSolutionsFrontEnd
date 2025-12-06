<script>
    import store from '@/store';
    export default {
        data(){
            return{
                workers: store.state.employees
            }
        }
    }
</script>

<template>
    <!-- <ul>
        <li v-for="employee in workers" :key="employee.employeeId">{{ employee.name }}</li>
    </ul> -->

    <div class="cards">
        <div class="employee mb-2 border-top pt-3" v-for="employee in workers" :key="employee.employeeId">
            <div class="d-flex">
                <i class="fa-solid fa-user-tie mr-2"></i> 
                <div class="nameNposition mr-6">
                    <h6 class="pb-0">
                        {{ employee.name }}
                    </h6>

                    <p class="text-lowercase  text-center font-italic">{{ employee.position }}</p>
                </div>
                <div class="contSal">
                    <h5 class="contact">{{ employee.contact }}</h5>
                    <p class="text-center font-italic">R{{ employee.salary }}</p>
                </div>
                <p class="btn btn-primary right-0">{{ employee.department }}</p>
            </div>
        </div>
    </div>

</template>

<style>
    .employee{
        position: relative;
    }
    .right-0{
        position: absolute;
        right: 0;
    }
    .font-italic{
        font-style: italic;
        font-size: x-small;
        margin-top: 0;
        padding-top: 0;
    }

    .contact{
        margin-left: 150px;
        font-size: medium;
    }

    .fa-user-tie{
        font-size: xx-large;
    }

</style>
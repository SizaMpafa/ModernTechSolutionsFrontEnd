<script>
import store from "@/store";
import { RouterLink, RouterView } from "vue-router";
// import { ref } from "vue";

export default {
  props: ["id"],
  data() {
    return {
      isOpen: false
    };
  },
  computed: {
    employee() {
      return store.state.employees.find(e => e.employeeId == this.id);
    }
  }
};

</script>

<template>
    <!-- Navbar Wrapper -->
  <nav class="bg-gray-900 text-white shadow-lg fixed top-0 left-0 w-full z-50">
    <div class="max-w-7xl mx-auto px-4">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <RouterLink to="/" class="text-xl font-semibold tracking-wide hover:text-gray-200">
          Modern Tech Solutions
        </RouterLink>

        <!-- Mobile Toggle -->
        <button @click="isOpen = !isOpen" class="md:hidden text-gray-200 hover:text-white focus:outline-none">
          &#9776;
        </button>

        <!-- Desktop -->
        <ul class="hidden md:flex space-x-8 text-sm font-medium">
          <li><RouterLink :to="{ name: 'EmployeeRegister', params: { id: employee.employeeId }}" class="hover:text-indigo-300 transition">Register</RouterLink></li>
          <li><RouterLink :to="{ name: 'EmployeeBookings', params: { id: employee.employeeId }}" class="hover:text-indigo-300 transition">Bookings</RouterLink></li>
          <li><RouterLink :to="{ name: 'EmployeeProfile', params: { id: employee.employeeId }}" class="hover:text-indigo-300 transition">Profile</RouterLink></li>
        </ul>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div v-if="isOpen" class="md:hidden bg-gray-800 px-4 pb-4 space-y-2 animate-slide-down z-50">
      <RouterLink :to="{ name: 'EmployeeRegister', params: { id: employee.employeeId }}" class="block py-2 text-gray-200 hover:text-indigo-300 transition" @click="isOpen = false">Register</RouterLink>
      <RouterLink :to="{ name: 'EmployeeBookings', params: { id: employee.employeeId }}" class="block py-2 text-gray-200 hover:text-indigo-300 transition" @click="isOpen = false">Bookings</RouterLink>
      <RouterLink :to="{ name: 'EmployeeProfile', params: { id: employee.employeeId }}" class="block py-2 text-gray-200 hover:text-indigo-300 transition" @click="isOpen = false">Profile</RouterLink>
    </div>
  </nav>
    <!-- Content Wrapper below fixed navbar -->
  <div class="container mt-20 px-4">
      <RouterView />
  </div>

</template>

<style>
@keyframes slideDown {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-slide-down {
  animation: slideDown 0.3s ease-out;
}
</style>
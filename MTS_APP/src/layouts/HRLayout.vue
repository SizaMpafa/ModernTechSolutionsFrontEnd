<script setup>
import { RouterLink, RouterView } from "vue-router";
import EmployeesComponent from "@/components/EmployeesComponent.vue";
import NavbarComponent from "@/components/NavbarComponent.vue";
import { ref } from "vue";

const sidebarOpen = ref(false);
</script>

<template>
   <NavbarComponent/>
    <!-- Toggle Button (visible on mobile) -->
  <button
    @click="sidebarOpen = !sidebarOpen"
    class="md:hidden fixed top-16 left-4 z-50 bg-indigo-600 text-white p-2 rounded-lg shadow-lg"
  >
    <i class="fa-solid fa-bars"></i>
  </button>

  <!-- Sidebar -->
  <aside
    :class="[
      'fixed top-14 left-0 z-40 h-[calc(100%-56px)] w-64 bg-white/70 backdrop-blur-xl shadow-lg border-r border-gray-200 transition-transform duration-300',
      sidebarOpen ? 'translate-x-0' : '-translate-x-full',
      'md:translate-x-0'   /* Always visible on desktop */
    ]"
  >
    <div class="h-full px-4 py-6 overflow-y-auto">

      <!-- Close Button (mobile only) -->
      <button
        @click="sidebarOpen = false"
        class="md:hidden mb-4 w-full bg-red-500 text-white py-2 rounded-lg"
      >
        Close Menu
      </button>

      <ul class="space-y-3 font-medium">

        <!-- Workers -->
        <li>
          <RouterLink
            to="/hr/employees"
            class="group flex items-center gap-3 px-3 py-2 rounded-xl 
                   hover:bg-indigo-50 hover:shadow-sm transition-all"
          >
            <svg
              class="w-6 h-6 text-gray-600 group-hover:text-indigo-600 transition"
              xmlns="http://www.w3.org/2000/svg"
              fill="none" viewBox="0 0 24 24"
              stroke-width="2" stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M4 13h3.439a.991.991 0 0 1 .908.6 3.978 3.978 0 0 0 7.306 0 .99.99 0 0 1 .908-.6H20M4 13v6a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-6M4 13l2-9h12l2 9M9 7h6m-7 3h8"
              />
            </svg>

            <span class="text-gray-800 group-hover:text-indigo-700">
              Workers
            </span>

            <span
              class="ml-auto bg-indigo-100 text-indigo-700 
                     text-xs font-semibold px-2 py-0.5 rounded-full"
            >
              {{ $store.state.employees.length }}
            </span>
          </RouterLink>
        </li>

        <!-- Attendance -->
        <li>
          <RouterLink
            to="/hr/attendance"
            class="group flex items-center gap-3 px-3 py-2 rounded-xl 
                   hover:bg-indigo-50 hover:shadow-sm transition-all"
          >
            <svg
              class="w-6 h-6 text-gray-600 group-hover:text-indigo-600 transition"
              xmlns="http://www.w3.org/2000/svg"
              fill="none" viewBox="0 0 24 24"
              stroke-width="2" stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M15 5v14M9 5v14M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z"
              />
            </svg>

            <span class="text-gray-800 group-hover:text-indigo-700">
              Attendance
            </span>
          </RouterLink>
        </li>

        <!-- Payroll -->
        <li>
          <RouterLink
            to="/hr/payroll"
            class="group flex items-center gap-3 px-3 py-2 rounded-xl 
                   hover:bg-indigo-50 hover:shadow-sm transition-all"
          >
            <svg
              class="w-6 h-6 text-gray-600 group-hover:text-indigo-600 transition"
              xmlns="http://www.w3.org/2000/svg"
              fill="none" viewBox="0 0 24 24"
              stroke-width="2" stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8V4m0 12v2"
              />
            </svg>

            <span class="text-gray-800 group-hover:text-indigo-700">
              Payroll
            </span>
          </RouterLink>
        </li>

      </ul>
    </div>
  </aside>

  <main class="sm:ml-64 p-5 min-h-screen">
    <div class="pt-14 p-4 border-1 border-default border-dashed rounded-base">
      <RouterView/>
    </div>
  </main>
</template>

<style>
   /* Active Link Styling */
.router-link-active {
  background-color: #eef2ff !important;
  color: #4f46e5 !important;
  box-shadow: inset 0 0 4px rgba(79, 70, 229, 0.15);
}

/* Smooth scroll inside */
#logo-sidebar {
  scrollbar-width: thin;
  scrollbar-color: #c7d2fe transparent;
}

#logo-sidebar::-webkit-scrollbar {
  width: 6px;
}

#logo-sidebar::-webkit-scrollbar-thumb {
  background-color: #c7d2fe;
  border-radius: 10px;
}

</style>

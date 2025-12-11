<script setup>
import { ref } from 'vue'
import LoginComponent from '@/components/LoginComponent.vue'
import { RouterLink } from 'vue-router'

const showLoginForm = ref(false)
</script>

<template>
  <div class="home-container">
    <!-- Background Gradient -->
    <div class="background-gradient"></div>

    <h1 class="title">Welcome to ModernTech Portal</h1>

    <div class="login-buttons">
      <!-- HR LOGIN -->
      <RouterLink
        to="/hr/employees"
        class="btn hr-btn"
      >
        Login as HR
      </RouterLink>

      <!-- EMPLOYEE LOGIN -->
      <button
        class="btn employee-btn"
        @click="showLoginForm = true"
      >
        Login as Employee
      </button>
    </div>

    <!-- EMPLOYEE LOGIN FORM POPUP -->
    <transition name="fade">
      <div v-if="showLoginForm" class="login-popup">
        <LoginComponent @close="showLoginForm = false" />
      </div>
    </transition>
  </div>
</template>

<style scoped>
/* Container */
.home-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
  position: relative;
  overflow: hidden;
  z-index: 1;
}

/* Background gradient */
.background-gradient {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #667eea, #764ba2);
  z-index: -1;
  filter: blur(80px);
}

/* Title */
.title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #ffffff;
  text-align: center;
  margin-bottom: 50px;
  text-shadow: 1px 1px 6px rgba(0,0,0,0.4);
}

/* Buttons */
.login-buttons {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
}

.btn {
  padding: 14px 32px;
  border-radius: 12px;
  font-size: 1.2rem;
  font-weight: 600;
  cursor: pointer;
  border: none;
  transition: transform 0.3s, box-shadow 0.3s, background 0.3s;
  box-shadow: 0 8px 15px rgba(0,0,0,0.2);
}

/* HR Button */
.hr-btn {
  background: linear-gradient(90deg, #4c6ef5, #2a65ff);
  color: white;
}

/* Employee Button */
.employee-btn {
  background: linear-gradient(90deg, #00cec9, #00b894);
  color: white;
}

.btn:hover {
  transform: scale(1.05);
  box-shadow: 0 12px 20px rgba(0,0,0,0.3);
}

/* Popup for login form */
.login-popup {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 30px;
  border-radius: 16px;
  box-shadow: 0 12px 30px rgba(0,0,0,0.3);
  z-index: 100;
  width: 90%;
  max-width: 400px;
}

/* Fade transition */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .title {
    font-size: 2rem;
    margin-bottom: 30px;
  }
  
  .btn {
    width: 200px;
    font-size: 1rem;
  }
  
  .login-buttons {
    gap: 20px;
  }
}
</style>

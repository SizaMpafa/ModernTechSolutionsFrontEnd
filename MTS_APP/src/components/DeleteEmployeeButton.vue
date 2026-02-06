<script>
export default {
  props: {
    employeeId: {
      type: Number,
      required: true
    }
  },
  methods: {
    async deleteEmployee() {
      if (!confirm('Are you sure you want to delete this employee?')) return
      await this.$store.dispatch('deleteEmployee', this.employeeId)
    }
  }
}
</script>

<template>
  <button
    class="icon-btn danger"
    title="Delete employee"
    @click.stop="deleteEmployee"
  >
    <i class="fa-solid fa-trash"></i>
  </button>
</template>

<style scoped>
.icon-btn {
  background: #f3f4f6;
  border: none;
  border-radius: 50%;
  width: 34px;
  height: 34px;
  display: grid;
  place-items: center;
  cursor: pointer;
  transition: 0.2s ease;
}

.icon-btn:hover {
  transform: scale(1.05);
}

.icon-btn.danger {
  color: #dc2626;
}

.icon-btn.danger:hover {
  background: #fee2e2;
}
</style>

<template>
  <main>
    <!-- header -->
    <header>
      <img src="./assets/pinia-logo.svg" alt="pinia logo" />
      <h1>{{ tasksStore.name }}</h1>
    </header>

    <!-- task list -->
    <div class="task-list">
      <div v-for="task in tasksStore.tasks" :key="task.id">
        <TaskDetails :task="task"/>
      </div>
    </div>
  </main>
</template>

<script>
import { useTasksStore } from "./stores/TaskStore";
import TaskDetails from "./components/TaskDetails.vue";
export default {
  components: { TaskDetails },
  setup() {
    const tasksStore = useTasksStore();
    return { tasksStore };
  },
};
</script>
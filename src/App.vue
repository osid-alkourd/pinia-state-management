<template>
  <main>
    <!-- header -->
    <header>
      <img src="./assets/pinia-logo.svg" alt="pinia logo" />
      <h1>{{ tasksStore.name }}</h1>
    </header>
    <!-- new task form -->
    <div class="new-task-form">
      <TaskForm />
    </div>
    <!-- filter -->
    <nav class="filter">
      <button @click="filter = 'all'">All tasks</button>
      <button @click="filter = 'favs'">Fav tasks</button>
    </nav>

    <!-- tasks list -->
    <div class="task-list" v-if="filter === 'all'">
      <p>You have {{ tasksStore.totalCount }} tasks left to do.</p>
      <div v-for="task in tasksStore.tasks" :key="task.id">
        <TaskDetails :task="task" />
      </div>
    </div>
    <div class="task-list" v-if="filter === 'favs'">
      <p>You have {{ tasksStore.FavsCount }} tasks left to do.</p>
      <div v-for="task in tasksStore.isFav" :key="task.id">
        <TaskDetails :task="task" />
      </div>
    </div>
  </main>
</template>

<script>
import { useTasksStore } from "./stores/TaskStore";
import TaskDetails from "./components/TaskDetails.vue";
import TaskForm from './components/TaskForm.vue';
import { ref } from "vue";
export default {
  components: { TaskDetails,TaskForm },
  setup() {
    const tasksStore = useTasksStore();
    const filter = ref("all");
    return { tasksStore, filter };
  },
};
</script>
<template>
  <div class="task">
    <h3>{{ task.title }}</h3>
    <div class="icons">
      <i class="material-icons" @click="tasksStore.deleteTask(task.id)">delete</i>
      <i class="material-icons" 
      :class="{active: task.isFav}"
      @click="tasksStore.toggleFav(task.id)">
      favorite
      </i>
    </div>
  </div>
</template>

<script>
import { useTasksStore } from "../stores/TaskStore";
export default {
  props: ["task"],
  setup() {
    const tasksStore = useTasksStore();
    return { tasksStore };
  },
};
</script>

<style>
</style>
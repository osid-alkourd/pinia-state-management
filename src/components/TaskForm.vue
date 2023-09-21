<template>
    <form @submit.prevent="handleSubmit">
      <input type="text" placeholder="I need to..." v-model="newTask" />
      <button>Add</button>
    </form>
</template>

<script>
import { ref } from "vue";
import { useTasksStore } from "../stores/TaskStore";
export default {
  setup() {
    const tasksStore = useTasksStore();
    const newTask = ref('');
    const handleSubmit = ()=> {
        if(newTask.value.length > 0){
            tasksStore.addTask({
               title: newTask.value,
               isFav: false,
               id: Math.floor(Math.random() * 10000)
            })
            newTask.value = ''
        }
    }
    return{handleSubmit,newTask}
  },
};
</script>

<style>
</style>
import { defineStore } from 'pinia'

export const useTasksStore = defineStore('taskStore', {
    state: () => ({
        tasks: [],
        name: 'osid',
        isLoading: false
    }),
    getters: {
        isFav(state) {
            return state.tasks.filter(task => task.isFav);
        },
        totalCount: (state) => {
            return state.tasks.length;
        },
        FavsCount(state) {
            return state.tasks.reduce((p, c) => {
                return c.isFav ? p + 1 : p
            }, 0);
        }

    },
    actions: {

        addTask(task) {
            this.tasks.push(task);
        },
        deleteTask(id) {
            this.tasks = this.tasks.filter(task => task.id !== id)
        },
        toggleFav(id) {
            const task = this.tasks.find(task => task.id === id);
            task.isFav = !task.isFav;
        },
        async getTasks(){
            this.isLoading = true;
            const res = await fetch('http://localhost:3000/tasks');
            const data = await res.json();
            this.tasks = data;
            this.isLoading = false;
            console.log(data);
         },

    }
})
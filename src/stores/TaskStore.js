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

        async addTask(task) {
            this.tasks.push(task);
            const res = await fetch('http://localhost:3000/tasks', {
                method: 'POST',
                body: JSON.stringify(task),
                headers: { 'content-type': 'application/json' }
            });
            if (res.error) {
                console.log(res.error)
            }

        },
        async deleteTask(id) {
            this.tasks = this.tasks.filter(task => task.id !== id)
            const res = await fetch(`http://localhost:3000/tasks/${id}`, {
                method: 'DELETE',
            });

        },
        async toggleFav(id) {
            const task = this.tasks.find(task => task.id === id);
            task.isFav = !task.isFav;
            const res = await fetch(`http://localhost:3000/tasks/${id}`, {
                method: 'PUT',
                body: JSON.stringify({isFav: task.isFav}),
                headers: {'content-type': 'application/json'}
            });
        },
        async getTasks() {
            this.isLoading = true;
            const res = await fetch('http://localhost:3000/tasks');
            const data = await res.json();
            this.tasks = data;
            this.isLoading = false;
            // console.log(data);
        },

    }
})
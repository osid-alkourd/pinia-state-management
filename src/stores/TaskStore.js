import { defineStore } from 'pinia'

export const useTasksStore = defineStore('taskStore', {
    state: () => ({
        tasks: [
            { id: 10, title: 'this is first task', isFav: true },
            { id: 11, title: 'this is second task', isFav: false }
        ],
        name: 'osid'
    }),
    getters: {
        isFav(state) {
            return state.tasks.filter(task => task.isFav);
        },
        totalCount: (state) => {
            return state.tasks.length;
        },
        FavsCount(){
            return this.tasks.reduce((p,c)=>{
                return c.isFav ? p+1 : p
            },0);
        }

    }
})
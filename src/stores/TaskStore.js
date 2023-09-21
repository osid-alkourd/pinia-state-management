import { defineStore } from 'pinia'

export  const useTasksStore = defineStore('taskStore' , {
    state: () => {
        return {
            tasks: [
                {id:10, title:'this is first task', isFav: true},
                {id:11, title:'this is second task', isFav: false}
            ],
            name: 'osid'
        }
    }
})
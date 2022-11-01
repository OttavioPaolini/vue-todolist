const {createApp} = Vue;

createApp({
    data(){
        return{
            hasError: false,
            newTask:"",
            tasks: ["Fare i compiti", "Fare la spesa", "Fare il bucato"],
        };
    },
    methods: {
        addNewTask(){
            //inserire newTask solo se ha più di 5 caratteri
            //altrimenti faccio vedere l'error
            // this.newTask = this.newTask.trim(); //per togliere gli spazi dalla stringa
            if(this.newTask.length <= 5){
                this.hasError = true;
            }else{
                // this.tasks.push(this.newTask)
                this.tasks.unshift(this.newTask); //per inserirlo in alto
                this.newTask="";
                this.hasError = false;
            }
            
        },
        removeTask(indexOfTask) {
            this.tasks.splice(indexOfTask, 1); //per cancellare un'elemento
        }
    }
}).mount("#app");
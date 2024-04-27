<template>
  <div class="flex-container" :style="{borderLeft: '5px solid' + this.getStatusColour(task.task_status),backgroundColor:this.getBackgroundColour(task.task_status)}">
    <h4>{{task.task_title}}</h4>
    <p>{{task.task_startDate}}</p>
    <p>{{task.task_dueDate}}</p>
    <p>{{task.task_command}}</p>
    <p class="status" :style="{backgroundColor: this.getStatusColour(task.task_status)}">{{task.task_status}}</p>
  </div>
</template>

<script>
    export default{
        name:"SingleTask",
        props:{
            task:Object
        },
        methods:{
            getStatusColour(status){
                if(status==="Completed") return "#A5DD9B";
                else if(status === "In Progress") return "#F4538A";
                else return "#59D5E0";
            },
            getBackgroundColour(status){
                if(status==="Completed") return "#c7ecc0";
                else if(status === "In Progress") return "#f1d3de";
                else return "#bde6ea";

            }
        }
    }
</script>

<style scoped>
    .flex-container{
        display:flex;
        justify-content:space-between;
        align-items:center;
        padding: 10px;
        border:transparent;
        border-radius:4px;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
    }
    .status{
        border:transparent;
        border-radius: 6px;
        padding:10px;
        color:white;
    }
    .bar{
        border-left:3px solid black;
    }
</style>
<template>
  <TaskHeader/>
  <TaskScheduler :taskList = taskList />
</template>

<script>
  import TaskHeader from "./components/TaskHeader.vue";
  import TaskScheduler from "./components/TaskScheduler.vue";

  export default{
    name:"App",
    components:{
      TaskHeader,
      TaskScheduler
    },
    data(){
      return{
        taskList:[]
      }
    },
    methods:{
      async fetchTaskDetails(){
        const results = await fetch("https://akhilaweb-node.onrender.com/api");
        const taskData = await results.json();
        return taskData[0].tasks;
      }
    },
    async created(){
      this.taskList = await this.fetchTaskDetails();
    }
  }
</script>

<style scoped>
</style>
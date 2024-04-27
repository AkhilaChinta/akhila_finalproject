<template>
    <div class="grid-container">
        <div v-for="task of taskList" :key="task.task_id">
            <SingleTask :task = task />
        </div>
    </div>
</template>

<script>
    import SingleTask from "./SingleTask.vue";

    export default{
        name:"TaskScheduler",
        components:{
            SingleTask
        },
        props:{
            taskList:Array
        }
    }
</script>

<style scoped>
    .grid-container{
        display:grid;
        grid-template-columns:auto;
        gap:10px;
    }
</style>
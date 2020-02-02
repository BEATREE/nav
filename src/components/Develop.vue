<template>
    <div class="devContainer">
        <Card class="card">
            <div style="text-align:center">
                <img src="../assets/logo.png">
                <h3>A high quality UI Toolkit based on Vue.js</h3>
            </div>
        </Card>
        <Card class="card">
            <div style="text-align:center">
                <img src="../assets/logo.png">
                <h3>A high quality UI Toolkit based on Vue.js</h3>
            </div>
        </Card>
        <Card class="card">
            <div style="text-align:center">
                <img src="../assets/logo.png">
                <h3>A high quality UI Toolkit based on Vue.js</h3>
            </div>
        </Card>
        <Card class="card">
            <div style="text-align:center">
                <img src="../assets/logo.png">
                <h3>A high quality UI Toolkit based on Vue.js</h3>
            </div>
        </Card>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                websites: [
                    {
                        id: 0,
                        name: '',
                        icon: require(''),
                        desc:'',
                    },
                    {
                        id: 1,
                        name: '',
                        icon: require(''),
                        desc:'',
                    },
                    {
                        id: 2,
                        name: '',
                        icon: require(''),
                        desc:'',
                    },
                    {
                        id: 3,
                        name: '',
                        icon: require(''),
                        desc:'',
                    },
                    {
                        id: 4,
                        name: '',
                        icon: require(''),
                        desc:'',
                    },
                    {
                        id: 5,
                        name: '',
                        icon: require(''),
                        desc:'',
                    },
                    {
                        id: 6,
                        name: '',
                        icon: require(''),
                        desc:'',
                    },
                    
                ],
            };
        }
    }
</script>

<style scoped>
    .card {
        width: 30%;
        margin-left: 2.5%;
        margin-top:12px;
        float: left;
        background-color: #f5f7f9;
    }
    .card div img{
        height: 85px;
    }
</style>
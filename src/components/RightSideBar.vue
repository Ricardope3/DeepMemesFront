<template>
<div class="sidebar bg-gray-300 lg:w-1/4 md:w-1/6 flex-none md:flex xsm:hidden ">
    <div class="right-container flex flex-col w-4/5  mt-6 bg-gray-400 rounded-xlg lg:mx-auto sm:mx-3">
        <h3 class="text-center font-bold text-2xl mt-6">Who to Follow?</h3>
        <div class="flex flex-row ml-auto mt-4 w-11/12 lg:justify-start md:justify-center">
            <!--V-for para buscar 3 elementos random-->
            <img class="w-12 rounded-full mr-2" src="../assets/demo/user1.jpg">
            <a href="#" class="pt-2 hover: lg:inline-block md:hidden">Juan Quirino</a>
        </div>
        <div class="flex flex-row ml-auto mt-4 w-11/12 lg:justify-start md:justify-center">
            <!--V-for para buscar 3 elementos random-->
            <img class="w-12 rounded-full mr-2" src="../assets/demo/user2.jpg">
            <a href="#" class="pt-2 lg:inline-block md:hidden">Ricardo Espinoza</a>
        </div>
        <div class="flex flex-row ml-auto mt-4 w-11/12 lg:justify-start md:justify-center">
            <!--V-for para buscar 3 elementos random-->
            <img class="w-12 rounded-full mr-2" src="../assets/demo/user3.jpg">
            <a href="#" class="pt-2 lg:inline-block md:hidden ">Carlos Cabello</a>
        </div>
    </div>

</div>
</template>

<script>
export default {
    name: 'rightSideBar',
    components: {
  }
}
</script>

<style>
.right-container {
    height: 300px;
}
</style>
<template>
<div class="sidebar bg-gray-300 lg:w-1/4 md:w-1/6 flex-none md:flex xsm:hidden">
    <div class="right-container flex flex-col w-4/5 m-auto mt-6 mb-6 bg-gray-400 rounded-xlg">
        <h3 class="text-center font-bold text-2xl mt-6">Who to Follow?</h3>
        <div class="flex flex-row ml-auto mt-4 w-11/12">
            <!--V-for para buscar 3 elementos random-->
            <img class="w-12" src="../assets/icons/account.svg">
            <a href="#" class="pt-2 hover:">Juan Quirino</a>
        </div>
        <div class="flex flex-row ml-auto mt-4 w-11/12">
            <!--V-for para buscar 3 elementos random-->
            <img class="w-12" src="../assets/icons/account.svg">
            <a href="#" class="pt-2">Ricardo Espinoza</a>
        </div>
        <div class="flex flex-row ml-auto mt-4 w-11/12">
            <!--V-for para buscar 3 elementos random-->
            <img class="w-12" src="../assets/icons/account.svg">
            <a href="#" class="pt-2">Carlos Cabello</a>
        </div>
    </div>

</div>
</template>

<script>
export default {
    name: 'RightSideBar',
    components: {
  }
}
</script>

<style>
.right-container {
    height: 300px;
}
</style>
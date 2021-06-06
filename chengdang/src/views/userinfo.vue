<template>
    <div>
    </div>
</template>

<script>
export default {
    data(){
        return{}
    },
    created(){
        this.$emit("footer",true);
        this.$emit("checkHomeIndex",1);
    }
}
</script>

<style lang="scss" scoped>
    .foot{
        width: 100%;
        height: 1rem;
        background-color: rgb(167, 154, 154);
    }

</style>
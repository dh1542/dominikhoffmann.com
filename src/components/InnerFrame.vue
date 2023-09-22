<template>
    <div id="outer_frame">
        <div id="inner_frame">
        
    </div>
    </div>
    
</template>

<script>
    export default {
        name: 'InnerFrame',
    }
</script>


<style>
    #inner_frame {
        background-color: white;
        width: 90%;
        height: 95%;
        display: flex;
        opacity: 95%;
        justify-content: center
        ;
        
        
    }
    #outer_frame {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
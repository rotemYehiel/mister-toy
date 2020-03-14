<template>
<div class="chat-popup">
  <slot name="header"></slot>
  <slot name="main"></slot>
  <slot name="footer"></slot>
</div>
</template>

<script>
export default {

}
</script>

<style>
.chat-popup{
    background-color: lightgray;
    position: fixed;
    bottom: 0;
    width: 50%;
    height: 50%;
    padding: 2%;

}
.header{
    background-color: darkgray;
    color: white;
    margin: 0 auto;
}
.chat-footer{
    display: flex;
    flex-direction: row;
    position: absolute;
    bottom: 0;
    width: 100%;
    margin-bottom:2% ;
}
.chat-input{
    align-self: flex-start;
    width: 80%;
}
.chat-form{
width: 100%;
}
.hide{
    display: none;
}
    
</style>
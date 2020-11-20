<template>
  <div class="container">
    <div class="row">
        <div class="col-25p">
            <div class="card">
                oi
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.card{
    margin-top: 6px;
    width: 100%;
    background: #F1F9FF 0% 0% no-repeat padding-box;
    box-shadow: 3px 3px 6px 0px rgba(0, 0, 0, 0.31);
    border-radius: 3px;
    height: 158px;
    margin-bottom: 6px;
}
.container
{
    display: flex;
    flex-direction: column;
}
.row{
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 20px;
}
.row-spaced{
    justify-content: space-between;
}
.col-25p{
    width: 24%;
    flex-basis: auto;
    margin-right: 1%;
}
.col-50p{
    width: 49%;
    align-self: flex-end;
    margin-right: 1%;
}
</style>

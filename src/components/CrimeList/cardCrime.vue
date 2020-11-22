<template>
    <div class="modal">
        <div class="card">
            <div class="container">
                <div class="row">
                    <div class="col-pc-100p col-tb-100p">
                        <b class="title">Crime</b>
                    </div>
                </div>
                <div class="row">
                    <div class="col-pc-100p  col-tb-100p">
                        <b>Mass Attack</b>
                    </div>
                    <br>
                    <div class="col-pc-100p  col-tb-100p">
                        Crime Type
                    </div>
                </div>
                <div class="row">
                    <div class="col-pc-100p  col-tb-100p">
                        1981/10/31 - 22:33:44
                    </div>
                    <br>
                    <div class="col-pc-100p  col-tb-100p">
                        Hogwards
                    </div>
                </div>
                <!-- <div class="row">
                    <div class="col-pc-100p  col-tb-100p">
                        <b class="title">CRIMINAL</b>
                    </div>
                </div>
                <div class="row">
                    <div class="col-pc-25p col-tb-25p">
                        <img class="rounded" src="https://via.placeholder.com/100x100" alt="">
                    </div>
                    <div class="col-pc-25p col-tb-25p">
                        <p>nome</p>
                        <p>nome</p>
                        <br>
                        <p>nome</p>
                        <p>nome</p>
                    </div>
                    <div class="col-pc-25p col-tb-25p">
                        <img class="rounded" src="https://via.placeholder.com/100x100" alt="">
                    </div>
                    <div class="col-pc-25p col-tb-25p">
                        <p>nome</p>
                        <p>nome</p>
                        <br>
                        <p>nome</p>
                        <p>nome</p>
                    </div>
                </div>
                 <div class="row">
                    <div class="col-pc-100p col-tb-100p">
                        <b class="title">VICTIM</b>
                    </div>
                </div>
                <div class="row">
                    <div class="col-pc-25p col-tb-25p">
                        <img class="rounded" src="https://via.placeholder.com/100x100" alt="">
                    </div>
                    <div class="col-pc-25p col-tb-25p">
                        <p>nome</p>
                        <p>nome</p>
                        <br>
                        <p>nome</p>
                        <p>nome</p>
                    </div>
                    <div class="col-pc-25p col-tb-25p">
                        <img class="rounded" src="https://via.placeholder.com/100x100" alt="">
                    </div>
                    <div class="col-pc-25p col-tb-25p">
                        <p>nome</p>
                        <p>nome</p>
                        <br>
                        <p>nome</p>
                        <p>nome</p>
                    </div>
                </div> -->
                <div class="row icon-left">
                    <i class="fa fa-search-plus" aria-hidden="true" />
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
.modal.active{
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    padding-top: 100px; /* Location of the box */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}
.card{
    margin-top: 6px;
    width: 100%;
    padding-left: 15px;
    padding-right: 15px;
    padding-top: 10px;
    padding-bottom: 10px;
    background: #F1F9FF 0% 0% no-repeat padding-box;
    box-shadow: 3px 3px 6px 0px rgba(0, 0, 0, 0.31);
    border-radius: 3px;
    min-height: 158px;
    margin-bottom: 6px;
    color: #3C5C77;
    font: normal normal medium 15px/19px Montserrat;
    cursor: pointer;
}

.title{
    font-size: 22px;
    color: #313131;
}
.icon-left{
    justify-content: flex-end;
    color: #2699FB;
}
.rounded{
    border-radius: 50px
}
/* PC */
@media screen and (min-width: 1024px){
    .card.active{
        background: #F1F9FF 0% 0% no-repeat padding-box;
        margin: auto;
        padding: 20px;
        border: 1px solid #888;
        width: 50%;
        font: normal normal medium 15px/19px Montserrat;
    }
}
/* TABLET */
@media screen and (min-width: 700px) and (max-width: 1023px){
    .card.active{
        background: #F1F9FF 0% 0% no-repeat padding-box;
        margin: auto;
        padding: 20px;
        border: 1px solid #888;
        width: 80%;
        font: normal normal medium 15px/19px Montserrat;
    }
}
</style>

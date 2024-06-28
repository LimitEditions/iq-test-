<template>
    <div class="desc">
        <img class="desc-imgup" src="../assets/img/quotation marks_up.png" alt="quotation marks_up">
        <h4 class="desc-text">Профессиональный IQ-тест позволяет не только определить коэффициент вашего интеллекта, 
но и выработать список рекомендаций для повышения этого показателя. </h4>
        <img class="desc-imgdown" src="../assets/img/quotation marks_down.png" alt="quotation marks_down">
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.desc{
    background: radial-gradient(85.01% 50.01% at 49% 50%, rgb(41, 80, 194), rgba(38, 91, 199, 0.96) 40.625%, rgba(39, 98, 187, 0) 85.417%), url(../assets/img/backgroundDesc.png);
    height: 339px;
    color: rgb(255, 255, 255);
font-family: Yeseva One;
font-size: 18px;
font-weight: 400;
line-height: 23px;
letter-spacing: 5%;
text-align: center;
}

.desc-imgup{
    margin: 43px 273px 17px 24px;
}

.desc-text{
    width: 248px;
    font-family: Yeseva One;
font-size: 18px;
line-height: 23px;
letter-spacing: 0.05em;
text-align: center;
color: #FFFFFF;
}

.desc-imgdown{
    margin: 2px 29px 32px 268px;
}
</style>
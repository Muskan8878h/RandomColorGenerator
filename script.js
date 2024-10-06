const getColor=()=>{
    const randomNum=Math.floor(Math.random()*16777215);  // multiple with num to make it hexa decimal number 
    const randomCode="#"+randomNum.toString(16);
    // console.log(randomNum,randomColor);

    document.body.style.backgroundColor=randomCode;

    document.getElementById("color-code").innerText=randomCode;

    //navigator.clipboard.writeText(randomCode) //to copy the random code automatically 
}

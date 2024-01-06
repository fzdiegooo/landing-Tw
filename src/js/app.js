const circle = document.querySelectorAll(".circle");

circle.forEach(cir =>{
    var circleArray = cir.textContent.split('');
    cir.textContent = ''

    for(var i = 0;i < circleArray.length; i++){
        cir.innerHTML += '<span style="transform:rotate('+((i+1)*10)+'deg)">'+circleArray[i]+'</span>'
    }
})


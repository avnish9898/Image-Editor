let upload = document.getElementById('upload');
let targetimage = document.getElementById('targetimage');
let inputrange = document.querySelectorAll('.slider');
let imgArea= document.querySelector(".img-area")
let download=document.querySelector("#download")
let filters=document.querySelectorAll(".filter")
let filterColor=""


let canvas=document.getElementById("canvas");
canvas.height=imgArea.offsetHeight;
canvas.width=imgArea.offsetWidth;
let tool=canvas.getContext("2d")


upload.addEventListener("change",function(){
    
        targetimage.src=URL.createObjectURL(this.files[0]);
        targetimage.onload=imgLoaded();

})
function imgLoaded(e){
  
}

for(let i=0; i<=inputrange.length-1; i++ ){
    inputrange[i].addEventListener('input', editimage);
}


let gs = document.getElementById('gs');
let blur = document.getElementById('blur');
let huerotate = document.getElementById('hue-rotate');
let sepia = document.getElementById('sepia');
let bright=document.getElementById('bright')
let contrast=document.getElementById('contrast')

download.addEventListener("click",function(){

    tool.filter= 'brightness('+bright.value+'%) contrast('+contrast.value+'%) grayscale('+gs.value+'%) blur('+blur.value+'px) hue-rotate('+huerotate.value+'deg) sepia('+sepia.value+'%)';
 
    tool.drawImage(targetimage,0,0,canvas.width,canvas.height);
    if(filterColor){
        
        tool.fillStyle = filterColor;
        tool.fillRect(0, 0, canvas.width, canvas.height)
    }
    let url = canvas.toDataURL();
    let a = document.createElement("a");
    a.download = "file.jpg";
    a.href = url;
    a.click();
    a.remove();
    
})
function editimage(){
    let gsval = gs.value;
    let blurval = blur.value;
    let huerotateval = huerotate.value;
    let sepiaval = sepia.value;
    
    targetimage.style.filter = 'brightness('+bright.value+'%) contrast('+contrast.value+'%) grayscale('+gsval+'%) blur('+blurval+'px) hue-rotate('+huerotateval+'deg) sepia('+sepiaval+'%)';
}

let sliderform = document.getElementById('slider-form');
sliderform.addEventListener('reset', function(){
    sliderform.reset();
    setTimeout(function(){
        editimage();
    },0)
})

for(let i=0;i<filters.length;i++){
filters[i].addEventListener("click",function(){
  
      filterColor = filters[i].style.backgroundColor;
      let filterOverlay=document.querySelector(".filter-overlay")
    filterOverlay.style.backgroundColor = filterColor;
})
}
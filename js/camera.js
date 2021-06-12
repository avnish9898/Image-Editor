let cameraBtn=document.querySelector(".cameraBtn")
let capture=document.querySelector(".capture")
let videoElem;
let usermediaPromise;

cameraBtn.addEventListener("click",function(){
    if(targetimage.style.display=="block"){
        click=true
        targetimage.style.display='none';
        videoElem=document.createElement("video");
        videoElem.controls=true
        videoElem.autoplay=true;

        videoElem.setAttribute("id","video");
        imgArea.appendChild(videoElem)
        let constraint = {
            audio: false, video: true
        }
         let usermediaPromise = navigator
                .mediaDevices.getUserMedia(constraint);
        usermediaPromise.then(function(stream){
            videoElem.srcObject = stream;  
            
        }).catch(function(err){
            alert("please allow camera and audio")
        })
    }else{
        
        targetimage.style.display='block'
       
           videoElem.src="";
            videoElem.remove();
        videoElem.remove();
        click=false;
    }
})

capture.addEventListener("click",function(){
   
    if(click==true){
       
  
        tool.drawImage(videoElem, 0,0,canvas.width,canvas.height); 
        
        // let url = canvas.toDataURL();
        // let a = document.createElement("a");
        // a.download = "file.png";
        // a.href = url;
        // a.click();
        let url=canvas.toDataURL('image/jpeg', 1.0);
        targetimage.src=url
        alert("image captured click on camera again to edit this image")
        tool.clearRect(0,0,canvas.offsetWidth,canvas.offsetHeight)
        a.remove();
      
    }
    else{
        
        alert("please connect media")
        return;
    }
})



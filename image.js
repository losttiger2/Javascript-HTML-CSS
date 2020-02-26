var images=[],x=0;
images[0]="pic1.jpg"
images[1]="pic2.jpg"
images[2]="pic3.jpg"

setInterval(() => {
   console.log("image")
   var img=document.querySelector(".image")
   img.src=images[x];
   x++;
   if(x>=images.length)
   x=0; 
},700);
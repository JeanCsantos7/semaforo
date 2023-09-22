const imgS = document.querySelector('.desligado')
const botoes = document.querySelector('.botoes')


function changeRed()
{


   if(event.target.id === 'red')
   {
    imgS.src = './vermelho.png'

   }


   else{

    imgS.src = './desligado.png'

   }





}



function changeYellow()
{


   if(event.target.id === 'yellow')
   {
    imgS.src = './amarelo.png'

   }


   else{

    imgS.src = './desligado.png'

   }





}



function changeGreen()
{


   if(event.target.id === 'green')
   {
    imgS.src = './verde.png'

   }


   else{

    imgS.src = './desligado.png'

   }


   




}


function changeAutomatic()
{
    setTimeout(function() {
        imgS.src = './vermelho.png'
        
    
      }, 1000);
    
    
      setTimeout(function() {
        imgS.src = './vermelho.png'
        
    
      }, 2000);
    
    
      setTimeout(function() {
        imgS.src = './amarelo.png'
        
    
      }, 1000);
    
    
      setTimeout(function() {
        imgS.src = './verde.png'
        
    
      }, 3000)

}






    


 













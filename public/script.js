document.getElementById("myForm").onsubmit =(e)=>{
    e.preventDefault();
      const url = "http://localhost:5000/sent";
      var data = new URLSearchParams();
       for(const pair of new FormData(e.target)){
          // console.log(pair)
         data.append(pair[0],pair[1])
       }
      fetch(url,{
          method:"post",
          body:data,
         
      }).then(res=>res.json())
      .then(res2 => {
          console.log(res2)
          location.reload()
      }); 
  }
     
  function deleteme(item){
    console.log(item.innerText)
      console.log('delete function called')
      
      const url = "http://localhost:5000/remove/"+item.innerText
       fetch(url,{
           method:"DELETE",
       })
  }
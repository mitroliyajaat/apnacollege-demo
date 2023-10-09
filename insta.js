const container = document.querySelector(".container");

let limit = 8;
 let pagecount = 1  ;
 let postcount = 1;


   const getPost = async() =>{
    
     const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${pagecount}`)
       
        console.log(response);
        const data = await response.json();
             console.log(data)

             data.map((curElm , index)=>{

                 const htmlData =`
                
    
        <div class="posts">
            <p class="post-id">${postcount++}</p>
            <h2 class="title">${curElm.title}</h2>
            <p class="para">${curElm.body}</p>

        </div> `;
                        
          container.insertAdjacentHTML("beforeend",htmlData)

             })
   }



    getPost()

   let showData = () =>{

    setTimeout(()=>{
    

         pagecount++;
         getPost();

    },300)
   }

window.addEventListener("scroll",()=>{
    const {scrollHeight,scrollTop,clientHeight}= document.documentElement; 
    
    if(scrollTop +clientHeight >= scrollHeight)
    {
        console.log("i am at bottom")
        showData();
    }
    

})
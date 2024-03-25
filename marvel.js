import {fetchApi,fetchChar} from "./fetch.js"

const input=document.getElementById("search");
getdata();
input.addEventListener("change",getdata);
function getdata(){
    document.getElementById("root").innerHTML="";
    document.getElementById("parent").innerHTML="";
    const charName=input.value;
    if(!charName){
        const data=fetchApi();
        data.then((res)=>{
            renderUi(res.data.results);
        })
    }
    else{
       const data= fetchChar(charName);
       data.then((res)=>{
            if(res.data.results!=0) renderUi(res.data.results);
            else  renderUi(charName); 
            
       })
    }
    
}



function error(name){
    const getDiv=document.getElementById("root");
    const h3=document.createElement("h3");
    h3.innerText=`Character not found: ${name}`;
    h3.style="color:goldenrod;font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;"
    getDiv.classList.add("block");
    
    
    getDiv.appendChild(h3);
    return;
}
function renderUi(data){
    if(!Array.isArray(data)){
        error(data);
        return;
    }

    const parent=document.getElementById("parent");
    parent.classList.remove("block");
    data.forEach((element,idx,arr) => {
        
        
        const divElement=document.createElement('div');
        const image=document.createElement('img');
        image.src=element.thumbnail.path+'.'+element.thumbnail.extension;
        image.alt="Not Available";

        const title=document.createElement('h4');
        title.innerText=element.name;

        const url=document.createElement('a');
        url.href=element.resourceURI;
        url.innerText="Read More";



        divElement.appendChild(image);
        divElement.appendChild(title);
        divElement.appendChild(url);
        divElement.classList.add("child");
        

        document.getElementById("parent").appendChild(divElement);
    });
}






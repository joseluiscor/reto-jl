let personalAir=document.querySelector("#personalAir")
personalAir.addEventListener("submit", (e)=>{
    e.preventDefault();
    let data=Object.fromEntries(new FormData(e.target));
    opc[e.submitter.dataset.accion](data)
})


const opc={
    
    "PUT":(data) =>putUser(data),
    "DELETE":(data) => deleteUser(data),
   
}
let config={
    headers:new Headers({   
        "content-Type":"application/json"
    }

    ),
}

const putUser=async()=>{
    config.method="GET";
    let res=await(await fetch("http://localhost:4002/usuarios",config)).json();
    console.log(res);
    
}

const deleteUser=async()=>{
    config.method="GET";
    let res=await(await fetch("http://localhost:4002/usuarios",config)).json();
    console.log(res);
   
}
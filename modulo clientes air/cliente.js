let registroCliente=document.querySelector("#registroCliente")
registroCliente.addEventListener("submit", (e)=>{
    e.preventDefault();
    let data=Object.fromEntries(new FormData(e.target));
    opc[e.submitter.dataset.accion](data)
})


const opc={
    "GET":() => getuserAll(),
    "PUT":(data) =>putUser(data),
    "DELETE":(data) => deleteUser(data),
    "SEARCH":(data) => searchUser(data),
    "POST":(data)=> postUser(data)
}
let config={
    headers:new Headers({   
        "content-Type":"application/json"
    }

    ),
}
const getuserAll=async()=>{
    config.method="GET";
    let res=await(await fetch("http://localhost:4002/usuarios",config)).json();
    console.log(res);
    
}
const postUser=async()=>{
    config.method="GET";
    let res=await(await fetch("http://localhost:4002/usuarios",config)).json();
    console.log(res);
    
}
const putUser=async()=>{
    config.method="GET";
    let res=await(await fetch("http://localhost:4002/usuarios",config)).json();
    console.log(res);
    
}
const searchUser=async()=>{
    config.method="GET";
    let res=await(await fetch("http://localhost:4002/usuarios",config)).json();
    console.log(res);
    
}
const deleteUser=async()=>{
    config.method="GET";
    let res=await(await fetch("http://localhost:4002/usuarios",config)).json();
    console.log(res);
   
}
 
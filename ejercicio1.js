const getUsers = async () => {
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if(!response.ok) {
            throw new Error(`Error en la solicitud: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        console.log(data);
    } catch(error){
        console.error("Error al obtener usuarios: ", error);
    }
};

getUsers();

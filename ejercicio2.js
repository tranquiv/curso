const getUsers = async () => {
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json(); //Convertir la respuesta en JSON
        console.log(data);
    } catch(error){
        console.error("Error al obtener usuarios: ", error);
    }
};

getUsers();

import axios from 'axios';

const client1 =  axios.create ({baseURL: 'https://api.instantwebtools.net/v1/airlines'})
const client2 =  axios.create ({baseURL: 'https://api.instantwebtools.net/v1/passenger'})

export async function getAirline(){
    const response= await client1.get('')
    const airlines=response.data;
    console.log(airlines)
    return airlines;    
}


export async function getPassenger(){
    const response= await client2.get('')
    const persons=response.data;
    return persons.json();
}


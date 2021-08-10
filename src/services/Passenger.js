import React from 'react';
import axios from 'axios';
import { DataGrid } from '@material-ui/data-grid';
import './../css/Home.css';

const client =  axios.create ({baseURL: 'https://api.instantwebtools.net/v1/passenger?page=0&size=10'})

class Passenger extends React.Component{
    state = {
        persons: [],
        loading:true
    }
    async componentDidMount(){
        const response= await client.get('')
        const persons=response.data.data;
        this.setState({persons: persons, loading: false})
    }  

    render(){
        
        const {persons,loading}=this.state;
        const passenger = persons.map(o => ({...o, id:Math.random()}))
        const columns = [
            { field: '_id', headerName: 'ID', width: 250 },
            { field: 'name', headerName: 'NAME', width: 170 },
            { field: 'trips', headerName: 'TOTAL_TRIPS', width: 200 },
        ];
              
        return(
            <div style={{ marginTop: "10vh"}}>
                <h1>Passenger</h1>
                <ul>
                    {!loading ?  
                    <div style={{ height: 450, width: '80%' }}>         
                       {<DataGrid rows={passenger} columns={columns} 
                       pageSize={8} rowsPerPageOptions={[8, 10, 12]} />}
                    </div>

                    :<h3 className='Component'>loading</h3>}
                </ul>        
            </div>
        )       
    }  
}
export default Passenger;
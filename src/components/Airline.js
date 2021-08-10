import React from 'react';
import {connect} from 'react-redux';
import { DataGrid } from '@material-ui/data-grid';
import './../css/Home.css';
class Airline extends React.Component{

    constructor(props){
        super(props)
        this.state ={ 
        loading:true, 
        airline:[],    
    }   
}

    componentDidMount(){
        this.props.getairline();
        setTimeout(()=>{
        const data = this.props.airlines.airlines.map(({
            id: key,...rest }) => ({
            key,...rest}));
        data.forEach((o, i) => o.id = i + 1)
        this.setState({airline:[...data]})
        console.log(this.state.airline)
       
            this.setState({loading:false})
        },3000)  
    }
    
    render(){
        const columns = [
            { field: 'id', headerName: 'ID', width: 170 },
            { field: 'name', headerName: 'NAME', width: 170 },
            { field: 'country', headerName: 'COUNTRY', width: 200 },
            { field: 'website', headerName: 'WEBSITE', width: 200 },
            { field: 'head_quaters', headerName: 'HEAD_QUARTERS', width: 250 },
            
          ];

        return(
            <div>
            <h1 style={{ marginTop: "10vh" }}>Airline</h1>
        
            <div className='airline' style={{ height: 450, width: '100%' }}> 
            {!this.state.loading ?  
                <DataGrid rows={this.state.airline} columns={columns} pageSize={20} rowsPerPageOptions={[10, 20, 30]} />
                :<h3>loading</h3>}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return {airlines : state}
}
const mapDispatchToProps = dispatch =>{
    return {
        getairline : () => dispatch ({type: 'GET_AIRLINE_DATA',})
    }
}


export default Airline = connect(mapStateToProps,mapDispatchToProps) (Airline);




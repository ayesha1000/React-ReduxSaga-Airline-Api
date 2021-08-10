import React from 'react';
import axios from 'axios';
import './../css/Home.css';

class AirlineForm extends React.Component{

    constructor(props){
        super(props)
        this.state ={ 
        name:'',
        country:'',
        website:'',
        head_quaters:''
    
    }
    this.onChangeName = this.onChangeName.bind(this)
    this.onChangeCountry = this.onChangeCountry.bind(this)
    this.onChangeWebsite = this.onChangeWebsite.bind(this)
    this.onChangeHeadquaters = this.onChangeHeadquaters.bind(this)
   
}

    
    onChangeName(e) {
        this.setState({ name: e.target.value })
    }
    onChangeCountry(e) {
        this.setState({ country: e.target.value })
    }
    onChangeWebsite(e) {
        this.setState({ website: e.target.value })
    }
    onChangeHeadquaters(e) {
        this.setState({ head_quaters: e.target.value })
    }

    handleSubmit=(e)=>{
        console.log(this.state.name)
        console.log(this.state.country)
        console.log(this.state.website)
        console.log(this.state.head_quaters)
        const newairline={name:this.state.name, country:this.state.country, 
            website: this.state.website, head_quaters:this.state.head_quaters}
        axios.post('https://api.instantwebtools.net/v1/airlines', newairline)
        .then(response => alert('Airline added! Go to Airline tab to view it'))
        this.setState({website:'',name: '',country:'',head_quaters:''})
        e.preventDefault()

    }
    
    render(){          
        return(
            <div>
            <h1 style={{ marginTop: "10vh" }}>Airline</h1>
            <form > 
                <label>Name: </label>
                <input className='inputcss' type='text' value ={this.state.name} 
                placeholder ='Enter Name' onChange={this.onChangeName} />
                <br/>
                <label>Country: </label>
                <input className='inputcss' type='text' value ={this.state.country} 
                placeholder ='Enter Country' onChange={this.onChangeCountry} />
                <br />
                <label>Website: </label>
                <input className='inputcss' type='text' value ={this.state.website} 
                placeholder ='Enter Website' onChange={this.onChangeWebsite} />
                <br />
                <label>Head_Quaters: </label>
                <input className='inputcss' type='text' value ={this.state.head_quaters} 
                placeholder ='Enter HeadQuarter' onChange={this.onChangeHeadquaters} />

                <br /><br />
                <button className="buttoncss" onClick ={this.handleSubmit} >Add Airline</button>
            </form>
            
           
           
            </div>
        )
    }
}



export default AirlineForm;




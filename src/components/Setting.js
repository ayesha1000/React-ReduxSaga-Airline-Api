import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import {connect} from 'react-redux';

class Setting extends React.Component{

    handleChange = (event) => {
        this.props.setcheckdata(event.target.checked);
        console.log(this.props.isAuthenticated.isAuthenticated)}

    render(){
        return(
            <div class="about-section" style={{ marginTop: "20vh" }}>
            <h1>Setting</h1>

            <div class="input-group">
            <h3>Select Checkbox to Add Protection: </h3>
            <Checkbox
            checked={this.props.isAuthenticated.isAuthenticated}
            onChange={this.handleChange}/>
            </div>
        
            </div>
        )
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        setcheckdata : (value) => dispatch ({type: 'SET_CHECK_DATA',value})
    }
}
const mapStateToProps = state =>{
    return {isAuthenticated : state}
}

export default Setting = connect(mapStateToProps,mapDispatchToProps) (Setting);
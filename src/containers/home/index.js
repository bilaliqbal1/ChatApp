// import logo from './logo.svg';
// import './App.css';
import React from 'react'
import { connect } from 'react-redux';
import {set_data, set_date} from '../../store/action'
class Home extends React.Component{
    render(){  
        // console.log("props",this.props)
        let user = {name:"bilal",email:"bilal@gmail.com"} 
        return (
            <div >
                <h1>Home</h1>
                <button onClick={()=> this. props.set_data(user)}>setdate</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    users : state.users
})

const mapDispatchToProps = (dispatch) => ({
    set_data: (data) => dispatch(set_data(data))
})
export default connect(mapStateToProps, mapDispatchToProps)(Home);

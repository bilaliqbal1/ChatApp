import React from 'react'
import {connect } from 'react-redux'

class Chat extends React.Component{
    render(){
        // console.log("propss", this.props)
        let user =  this.props.currentUsers;
        return(
            <div>
                <h1>Welcome {user.name}</h1>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    currentUsers : state.currentUsers,
})

// const mapDispatchToProps = (dispatch) => ({
//     // set_data: (data) => dispatch(set_data(data)),
//     // facebookLogin: (history) => dispatch(facebookLogin (history))

// })
export default connect(mapStateToProps, null)(Chat);

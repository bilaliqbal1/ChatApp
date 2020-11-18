import React from 'react'
import {connect } from 'react-redux'
import {getUsers} from '../../store/action'
import './style.css'

class Chat extends React.Component{

    constructor(){
        super()
        this.state = {
            chatuser :{},
            chats:[],
            message : ""
        }
    }


    Message = (user) =>{
        // console.log("ookay")
        this.setState({
            chatuser: user
        })
    }
    sendMessage = () =>{
        this.state.chats.push({
            message: this.state.message
        })
        this.setState({
            chats: this.this.state.chats,
            message : ""
        })
                // console.log("ookay" )
    }
    componentDidMount(){
        this.props.getUsers()
    }
    render(){
        // console.log("propss", this.props)
        const user =  this.props.currentUsers;
                // console.log("firebase users", this.props.users  )
        return(
            <div>
                <h1>Welcome {user.user}</h1>
                <img src={user.profile } alt=""/>
                <h2>Email: {user.email}</h2>
                <div className="maindiv">
                    <div className="users">
                        <h4 >Chat users:</h4>
                        <ul>
                            {/* v.uid !== user.uid && */}
                                {/* jub ek se zyadah user honge to ye upper wala code return ke baad lagega
                                because hum ko apni id hide karni he to is se hojaegi abhi filhal ek hi he 
                                to nhi lagaya */}
                        {this.props.users.map((v,index)=>{
                            return  <li key={index}>
                                
                            <img src={v.profile} alt="image" width="20" />
                            {v.user}
                            <button onClick={()=> this.Message(v)}>Message</button></li>
                        })}
                        </ul>
                    </div>
                    <div className="userchat">
                    <h4>Chat</h4>
                        {Object.keys(this.state.chatuser).length ?
                            <div>
                                <h4><img src={this.state.chatuser.profile} alt="image" width="20" />
                                {this.state.chatuser.user}</h4>

                                <ul>
                                    {/* jub ek se zyadah user ho warna ye error deraha he map ka */}
                                    {/* {this.props.chats.map((v,index)=>{
                                        return  <li key={index}>{v.message}</li>
                                    })} */}
                                </ul>
                                <input value={this.state.message} onChange={(e)=>this.setState({message: e.target.value})}
                                 type="text" placeholder="type your message"/>
                                <button onClick={()=> this.sendMessage()}>Send message</button>
                            </div>
                            :
                            <h4>no users</h4>
                        }
                    </div>
                </div>
            </div>
        )
    }
}
//data add karne ke liye
const mapStateToProps = (state) => ({
    currentUsers : state.currentUsers,
    users:  state.users
})

//data get karne ke liye jub data mangwaana ho
const mapDispatchToProps = (dispatch) => ({
    // set_data: (data) => dispatch(set_data(data)),
    // facebookLogin: (history) => dispatch(facebookLogin (history))
    getUsers : () => dispatch(getUsers())

})
export default connect(mapStateToProps, mapDispatchToProps)(Chat);

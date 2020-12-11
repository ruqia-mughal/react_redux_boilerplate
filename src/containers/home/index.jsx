import  React from "react";
import "./style.css";
import {connect } from "react-redux";
import {set_data} from "../../store/action"

class Home extends React.Component {
    static getDerivedStateFromProps(props,state)
    {
        console.log("getDerivedStateFromProps=>",props)
        return {

        }
    }
    render(){
        let user={
            user:"umair",
            email:"umair@gmail.com"
        }
        console.log(" home props=>",this.props)
        return(
            <div>
                <h1>React-redux Boiler-plate</h1>
                <button onClick={()=>this.props.set_data(user)}>set data</button>
            </div>
        );
     }
}
const mapStateToProps=(state)=>({
    users:state.users
    // name:"popy"
})
const mapDispatchToProps=(dispatch)=>({
    set_data:(data)=>dispatch(set_data(data))

})
export default connect(mapStateToProps,mapDispatchToProps)(Home);
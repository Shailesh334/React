import User from "./User";
import UserClass from "./UserClass";
import {Component} from "react";
import UserContext from "../utils/UserContext";
class About extends Component{

    constructor(){
        super()
       
    }
    render(){
      
        return(
            <>
                <h1>This is about page</h1>
                <div>Logged In User :
                    <UserContext.Consumer>
                      {
                        ({loggedInUser})=> <h1 className="font-bold">{loggedInUser}</h1>
                      }  
                    </UserContext.Consumer>
                    
                </div>
                <UserClass name="First" location="Akurdi"/>                
            </>

        )
    }
}








/*
const About = () =>{
    return (
        <>
        <h1>This is about page</h1>
        <UserClass name="Shailesh (class)" location="Akurdi"/>
       </>
    )
};



*/ 



export default About;
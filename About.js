import { Outlet } from "react-router-dom";
import ProfileFunctionalComponent from "./Profile";
import Profile from "./ProfileClass";
import { Component } from "react";

class About extends Component{
    constructor(props){
        super(props);
        console.log("parent - constructor");
    }
    componentDidMount(){
        console.log("parent- component did mount");
    }
    render(){

        return(
            <div>
                <h1>About us page</h1>
                <p>
                    this is the namaste react live course chapter
                </p>
                <Profile name = {"nandan"}/>
            </div>
        )
    }
}

export default About;
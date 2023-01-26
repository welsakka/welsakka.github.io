import React from "react";

class Intro extends React.Component {
    constructor(props){
        super(props)
        const [projects,setProjects] = useState[
            {Autopay: "Autopay"}
        ]
    }

    render(){
        return(
            <div>
                <Intro/>
                <ProjectContainer projects={projects}/>
            </div>
        )
    }
}
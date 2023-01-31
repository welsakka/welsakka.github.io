import "./ProjectContainer.css";
import React from "react";
import { Container } from "@mui/system";
import { Card, CardContent, Grid } from "@mui/material";

class ProjectContainer extends React.Component{
    
    containProjects = this.props.projects.map((proj) => {
        return(
            <Grid item xs={4}>
                <Card 
                    variant="outlined" 
                    className="card" 
                    sx={{
                        borderRadius: 10,
                        backgroundColor: "lightblue"
                    }}> 
                    <CardContent className="title">
                        <p>this is the {proj} project</p>
                    </CardContent>
                </Card>
            </Grid>
        )
    })

    render(){
        return (
            <div className="projects">
                <Grid className="mainGrid" container spacing={8}>
                    {this.containProjects}
                </Grid>
            </div>
            
        )
    }
}

export default ProjectContainer
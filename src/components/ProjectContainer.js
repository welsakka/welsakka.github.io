import "./ProjectContainer.css";
import React from "react";
import { Card, CardActionArea, CardContent, Grid } from "@mui/material";

class ProjectContainer extends React.Component{

    handleClick = (link) => {
        window.open(link);
    }
    
    containProjects = this.props.projects.map((project) => {
        return(
            <Grid item xs={4}>
                <Card 
                    variant="outlined" 
                    className="card" 
                    sx={{
                        borderRadius: 10,
                        backgroundColor: "lightblue"
                    }}> 
                    <CardActionArea onClick={() => this.handleClick(project.link)}>
                        <CardContent 
                            className="title"
                            sx={{fontSize: 25}}>
                                <p>{project.title}</p>
                        </CardContent>
                    </CardActionArea>
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
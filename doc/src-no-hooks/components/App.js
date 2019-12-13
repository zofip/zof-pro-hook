import React, { Component } from 'react';

import jwt from 'jsonwebtoken';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import AutocompleteTns from '../common/AutocompleteTns';
import ComponentGrid from './ComponentGrid';

import { APICLIENTS, APIPROJECTS, APICOMPONENTS } from '../utils/constants';

class App extends Component {

  state = {
    clients: [],
    projects: [],
    components: [],
    selectClient: null,
    selectProject: null
  };

  componentsTns= [];

  componentDidMount() {
    this.saveToken();
    this.getClients();
    this.project= null;
  }

  saveToken() {
    const token = jwt.sign({ admin: true, name: "admin" }, "T3ch&S0lv3-M0n1t0r", { expiresIn: 60 * 60 });
    localStorage.setItem("token", token);
  }

  getClients() {
    fetch(`${APICLIENTS}`, {
      method: "get",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
        "Content-Type": "application/json"
      }
    })
      .then(result => result.json())
      .then(result => {
        this.setState({
          clients: result.map(res => {
            return { value: res.id, label: res.name };
          })
        })
      });
  }

  getProjectsByClient(client) {
    fetch(`${APIPROJECTS}?clientId=${client.value}`, {
      method: "get",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
        "Content-Type": "application/json"
      }
    })
      .then(result => result.json())
      .then(result => {
        this.setState({
          projects: result.map(res => {
            return { value: res.id, label: res.name };
          })
        })
      });
  }

  getComponentsByProject(project){
    fetch(`${APICOMPONENTS}?projectId=${project.value}`, {
      method: "get",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
        "Content-Type": "application/json"
      }
    })
      .then(result => result.json())
      .then(result => {
        this.componentsTns = result;
        this.setState({
          components: result
        })
      });
  }

  handleChangeClient = client => {
    this.setState({ selectClient: client });
    this.getProjectsByClient(client);
    this.project = null;
    this.componentsTns = [];
  };

  handleChangeProject = project => {
    this.setState({ selectProject: project });
    this.getComponentsByProject(project);
    this.project = project;
    this.componentsTns = [];
  };

  render() {
    const { clients, projects, selectClient } = this.state;
    
    return (
      <Container maxWidth="sm">
        <Box my={5}>
          <Typography variant="h4" component="h1" gutterBottom>
            Projects
          </Typography>
          <AutocompleteTns title="Clients" placeholder="Select Client ..."
            options={clients} handleChange={this.handleChangeClient} />
          <AutocompleteTns title="Projects" placeholder="Select Project ..." 
            options={projects} handleChange={this.handleChangeProject} 
            isDisabled={!selectClient} selectOption = {this.project}/>
          <ComponentGrid cardsComponent={this.componentsTns}></ComponentGrid>
        </Box>
      </Container>
    );
  }
}

export default App;
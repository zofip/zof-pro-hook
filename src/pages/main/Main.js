import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom'

import jwt from 'jsonwebtoken';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import fetchClients from '../../services/clients';
import fetchProjectsByClient from '../../services/projects';
import { fetchComponentsByProject } from '../../services/components';

import AutocompleteTns from '../../common/AutocompleteTns';
import GridTns from './GridTns';
import { TOKEN, USER, PASS, CLIENT, PROJECT } from '../../utils/constants';

const Main = props => {

  const [clients, setClients] = useState([]);
  const [projects, setProjects] = useState([]);
  const [components, setComponents] = useState([]);
  const [selectClient, setSelectClient] = useState(null);
  const [selectProject, setSelectProject] = useState(null);

  useEffect(() => {
    saveToken();
    getClients();

    const validateSelection = () => {
      let client = JSON.parse(localStorage.getItem(CLIENT));
      let project = JSON.parse(localStorage.getItem(PROJECT));
      if(client){
        setSelectClient(client);
        getProjectsByClient(client);
      }
      if(project) {
        setSelectProject(project);
        getComponentsByProject(project);
      }
    }
    validateSelection();
  }, []);

  const saveToken = () => {
    const token = jwt.sign(
      { admin: true, name: USER }, PASS,
      { expiresIn: 60 * 60 });
    localStorage.setItem(TOKEN, token);
  }

  const getClients = () => {
    fetchClients().then(result => {
      setClients(result.map(res => {
        return { value: res.id, label: res.name };
      }));
    });
  }

  const getProjectsByClient = client => {
    fetchProjectsByClient(client).then(result => {
      setProjects(result.map(res => {
        return { value: res.id, label: res.name };
      }));
    });
  }

  const getComponentsByProject = project => {
    fetchComponentsByProject(project).then(result => {
      setComponents(result);
    });
  }

  const handleChangeClient = client => { 
    localStorage.setItem(CLIENT, JSON.stringify(client));
    localStorage.setItem(PROJECT, null);
    setSelectClient(client);
    getProjectsByClient(client);
    setSelectProject(null);
    setComponents([]);
  };

  const handleChangeProject = project => {
    localStorage.setItem(PROJECT, JSON.stringify(project));
    setSelectProject(project);
    getComponentsByProject(project);
  };

  const handleOnClickComponent = component => {
    props.history.push(`/indicators/${component.id}`, {
      projectName: selectProject.label,
      componentName: component.name
    });
  };

  return (
    <Container maxWidth="sm">
      <Box my={5}>
        <Typography variant="h4" component="h1" gutterBottom>
          TNSP
        </Typography>
        <AutocompleteTns title="Clients" placeholder="Select Client ..."
          options={clients} handleChange={handleChangeClient} 
          selectOption={selectClient} />
        <AutocompleteTns title="Projects" placeholder="Select Project ..."
          options={projects} handleChange={handleChangeProject}
          isDisabled={!selectClient} selectOption={selectProject} />
        <GridTns cardsComponent={components}
          handleOnClick={handleOnClickComponent} />
      </Box>
    </Container>
  );
}

export default withRouter(Main);

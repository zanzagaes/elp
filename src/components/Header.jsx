import { AppBar, IconButton, Toolbar, Collapse, Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LongMenu from "./LongMenu";
import { Link } from 'react-scroll';
import '../css/header.css'

const Header = () => {
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);
  return (
      <div id="header">
        <AppBar className="app-bar-custom" elevation={0}>
          <Toolbar className="app-bar-wrapper">
            <IconButton className="logo">
              <img className="logo" src="/assets/railway.png" alt="logo"/>
            </IconButton>
            <h1 style={{flexGrow: 1}}>
              <span className="highlighted">Logic</span>stics.
            </h1>
            <IconButton>
              <LongMenu/>
            </IconButton>
          </Toolbar>
        </AppBar>
        <Collapse
            in={checked}
            {...(checked ? {timeout: 1000} : {})}
            collapsedHeight={50}
        >
          <div className="container">
            <h1 id="title">
              Bienvenido a <br/>
              <span className="highlighted">Logic</span>stics.
            </h1>
            <Box className="back" pt={1} pr={4} pl={4} pb={1}>
              <p className="subtitle">
                Logicstics es una empresa dedicada a la creación de algoritmos de
                Machine Learning <br/>
                para la predicción de la demanda de prendas de ropa tienda a
                tienda.
                <br/>
                De esta manera no tienen que mantener stock, evitando la
                sobreproducción <br/>y apoyando que la industria de la moda sea
                más sostenible.
              </p>
            </Box>
            <Link to="place-to-visit" smooth={true}>
              <IconButton>
                <ExpandMoreIcon className="go-down"/>
              </IconButton>
            </Link>
          </div>
        </Collapse>
      </div>
  );
};

export default Header;

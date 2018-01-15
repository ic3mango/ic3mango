import React from 'react'
import Particles from 'react-particles-js';

const particlesParams = {
  "particles": {
    "number": {
      "value": 115
    },
    "color": {
      "value": "#c7498e"
    },
    "shape": {
      "type": "circle"
    },
    "opacity": {
      "value": 0.5,
      "random": true,
    },
    "size": {
      "value": 2,
      "random": true,
      "anim": {
        "enable": false
      }
    },
    "move": {
     "enable": true,
     "speed": 4,
     "direction": "random",
     "random": true,
     "straight": false,
     "out_mode": "out",
     "bounce": false,
     "attract": {
       "enable": true,
       "rotateX": 600,
       "rotateY": 1200
     }
   }
  }
}


const canvasStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  display: "block",
  width: "100%",
  minHeight: "100vh",
  backgroundColor: "#6043a1",
  zIndex: -30
}


export default () =>
  <Particles
    params={particlesParams}
    style={canvasStyle}
  />

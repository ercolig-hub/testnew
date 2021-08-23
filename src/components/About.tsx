import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";

interface ParamTypes {
  id: string;
}

const About = () => {
  const { id } = useParams<ParamTypes>();

  return (
    <div>
      <h1>About US {id}</h1>
      <p>About US page body content</p>
    </div>
  );
};

export default About;

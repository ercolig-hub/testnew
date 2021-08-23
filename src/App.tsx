import "./style.css";
import IMAGE from "./download.jpg";
import { Counter } from "./Counter";
import { Card } from "./components/Card";

import React, { useState, useEffect } from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

import Grid from "@material-ui/core/Grid";
import { Button, Paper, TextField } from "@material-ui/core";
import { form, suggestions, tags } from "./utils/conf";
import ReactTags from "react-tag-autocomplete";
import { Pulsanti1 } from "./Pulsanti1";
import { Pulsanti2 } from "./Pulsanti2";
import { Centro } from "./Centro";

import { Article } from "./components/Article";
import { AddArticle } from "./components/AddArticle";
import { addArticle, removeArticle } from "./store/actionCreators";

import { useSelector, useDispatch } from "react-redux";

import { RootState } from "./store";
import { ChooseFile } from "./components/ChooseFile";
import { PdfSuppression } from "./components/PdfSuppression";
import Header from "./components/Header";
import axios from "axios";
import { fetchMeta } from "./store/ResponseMetadata";

export const App = (): JSX.Element => {
  // Update the document title using the browser API
  useEffect(() => {
    // Update the document title using the browser API
    console.log("Chiamata Dsm");
  }, []);

  const handleDelete = () => {
    console.log(handleDelete);
    return "test";
  };

  const [Docid, SetDocid] = useState();

  const handleAddition = () => {
    console.log(handleAddition);
    return "test";
  };

  const handleChangeDocID = (event: any) => {
    SetDocid(event.target.value);
  };

  const handleDocID = (event: any) => {
    event.preventDefault();
    console.log(Docid);
    //const dispatch = useDispatch();

    //dispatch(fetchMeta(Docid));

    CallElastic(Docid);
  };
  const CallElastic = async (Docid: any) => {
    const res = await axios
      .get(
        "https://elastic:GL9v9U_f47VFz@ftc-lbcmsrch251.ad.moodys.net:9200/emails_2020@meth01_eomjse1_dv/_search?q=REF:" +
          Docid,
        {
          auth: {
            username: "elastic",
            password: "GL9v9U_f47VFz",
          },
        }
      )
      .then((response) => {
        // Success 🎉
        console.log(response);
      })
      .catch((err) => {
        // what now?
        console.log(err);
      });
  };

  return (
    <>
      <Grid container justify="center" spacing={3} direction={"column"}>
        <Grid item>
          <form onClick={handleDocID} autoComplete="off">
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
              onChange={handleChangeDocID}
            />
            <Button variant="contained" color="secondary">
              Secondary
            </Button>
          </form>
          <ul role="nav">
            <li>
              <Link to="/dev">DEV</Link>
            </li>
          </ul>
          <Pulsanti1 />
        </Grid>
        <Grid item>
          <Pulsanti2 />
        </Grid>
        <Grid item>
          <Centro />
        </Grid>
        <Grid item>
          <ChooseFile />
        </Grid>
        <Grid item>
          <PdfSuppression />
        </Grid>
        {/* <Grid item>
          <PdfSuppression />
        </Grid> */}
      </Grid>
      {/* <Card title="ssss!" paragraph="To this example" />;
      <h1>
        CARI GIUSEPPE TEST STAGEt {process.env.NODE_ENV} - {process.env.name} -
        {process.env.DB_HOST}
        <Counter />
      </h1> */}
    </>
  );
};

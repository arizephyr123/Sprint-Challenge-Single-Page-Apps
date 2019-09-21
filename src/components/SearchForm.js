import React, { useState, useEffect } from "react";
import { Form, Field, withFormik } from "formik";
import axios from "axios";

import CharacterCard from "./CharacterCard"

//  function SearchForm(props) {
//   const [filtered, setFiltered] = useState([]);

//   useEffect(() => {
//     const getList = () => {
//       axios
//         .get("https://rickandmortyapi.com/api/character/")
//         .then(response => {
//           console.log(response.data.results);
//           setFiltered(response.data.results);
//         })
//         .catch(error => {
//           console.error("Server Error", error);
//         });
//     };

//     getList();
//   }, [props]);

  return (
    <section className="search-form">
      <Form>
        <label>
          Search Characters
          <Field type="text" name="query" />
        </label>
        <button type="submit">Submit</button>
      {/* </Form>
      {filtered.map(obj => obj.name) if (str.includes(
      {filtered.query}))<CharacterCard />}
      )) */}
    </section>
  );
}

const FormikSearchForm = withFormik({
  mapPropsToValues({query}){
    return{
      query: query || ""
    };
  }
})(SearchForm);

export default FormikSearchForm;
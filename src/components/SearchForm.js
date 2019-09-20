import React, { useState, useEffect } from "react";
import { Form, Field, withFormik } from "formik";
import axios from "axios";

 function SearchForm({ values }) {
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    const getList = () => {
      axios
        .get("https://rickandmortyapi.com/api/character/")
        .then(response => {
          console.log(response.data.results);
          setFiltered(response.data.results.name);
        })
        .catch(error => {
          console.error("Server Error", error);
        });
    };

    getList();
  }, [filtered]);

  return (
    <section className="search-form">
      <Form>
        <label>
          Search Characters
          <Field type="text" name="queryTerms" />
        </label>
        <button type="submit">Submit</button>
      </Form>
      filtered.map(obj => ( let str = obj.name; if (str.includes(
      {filtered.query})){<CharaterCard />}
      ))
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
import React, { useState } from 'react'
import SearchForm from "./SearchForm";
import SearchResults from "./SearchResult";
import { Container, Row, Col } from 'react-bootstrap';
const TempApp = () => {
  const [searchString, setSearchString] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);


  function handleChange(event) {
    setSearchString(event.target.value);
  }
  
  function handleSubmit(event) {
    event.preventDefault();
    // reset any existing results
    setResult(null);
    // set loading to true while we await results of search
    setLoading(true);
    // set error back to false
    setError(false);
    const url = `https://api.openweathermap.org//data/2.5/forecast?q=${searchString}&appid=1635890035cbba097fd5c26c8ea672a1`;
    fetch(url)
      .then((res) => {
        // console.log(res)
        // 200 means successful response
        if (res.status === 200) {
          // pass body of res onto next .then
          return res.json();
          // console.log(res.json())
          // 404 means no results found
        } else if (res.status === 404) {
          // describe 404 error in error state
          setError(
            "No results found for " +
              searchString +
              ". Please try another search!"
          );
          setLoading(false);
          return;
        }
      })
      .then((res) => {
        // load results
        // console.log(res)
        setResult(res);
        // set loading back to false
        setLoading(false);
      })
      .catch((err) => {
        // if the request promise fails to return a response
        // likely a server side issue
        // invite user to try again later
        console.error(err);
        setError("Oops, something went wrong! Please try again later.");
      });
    //reset search string for ux
    setSearchString("");
  }
 
  return (
    <>
        <Container>
        <Row>
            <Col md={4}>
                <h2 className='text-color'>Weather in your city</h2>
            </Col>
            <Col md={5}>
            <SearchForm
              setSearchString={setSearchString}
              searchString={searchString}
              handleSubmit={handleSubmit}
              handleChange={handleChange}
            />
            </Col>
        </Row>
        
      </Container>
      <Container className='mt-5'>
          {result && <SearchResults result={result} />}
          {loading && "Loading results..."}
          {error && error}
      </Container>
    </>
  )
}

export default TempApp

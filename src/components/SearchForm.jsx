import { Button, Form } from 'react-bootstrap';

export default function SearchForm({
    searchString,
    handleChange,
    handleSubmit,
    setSearchString
  }) {
    return (
      <Form onSubmit={handleSubmit} className='d-flex flex-row'>
        <Form.Group>
            <Form.Control
            className='searchInput'
            type="text"
            value={searchString}
            id="searchString"
            placeholder='Enter City'
            onChange={handleChange}
            required
            />
        </Form.Group>
        <Button className="searchButton" type="submit">Search</Button>
        <Button className="searchButton" onClick={(e) => setSearchString("")} type="button">
        Reset
        </Button>
      </Form>
    );
  }
  
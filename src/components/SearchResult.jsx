import { Row, Col, Table } from 'react-bootstrap';
export default function SearchResults({ result }) {
    const groupedData = result.list.reduce((days, row) => {
        const date = row.dt_txt.split(' ')[0];
        
        days[date] = [...(days[date] ? days[date]: []), row];
        
        return days;
    }, {});
    function getMax(arr, attr){
        return Math.max.apply(Math, arr.map(item => item.main[attr]));
    }
    
    function getMin(arr, attr){
        return Math.min.apply(Math, arr.map(item => item.main[attr]));
    }
    // console.log(groupedData);
    return (
        <>
            <Row className='mb-3'>
                <h2 className='text-color'>City: {result.city.name}</h2>
            </Row>
            <Row >
                
                {Object.keys(groupedData).slice(0,5).map((item, index)=>{
                    {/* console.log('Date:', getMax(groupedData[item], 'temp_max')) */}
                    {/* console.log('RowCount:', groupedData[item].length);
                    console.log('MaxTemp:', getMax(groupedData[item], 'temp_max'));
                    console.log('MinTemp:', getMin(groupedData[item], 'temp_min'));
                    console.log('MaxHumidity:', getMax(groupedData[item], 'humidity')); */}
                    return(
                        <Col>
                        <Table striped bordered key={index} >
                            <thead>
                                <tr>
                                <th className='text-color' colSpan={2}>Date: {item}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <th>Min Temp</th>
                                <td>{getMin(groupedData[item], 'temp_min')}</td>
                                </tr>
                                <tr>
                                <th>Max Temp</th>
                                <td>{getMax(groupedData[item], 'temp_max')}</td>
                                </tr>
                                <tr>
                                <th>Pressure</th>
                                <td>{getMax(groupedData[item], 'pressure')}</td>
                                </tr>
                                <tr>
                                <th>Humidity</th>
                                <td>{getMax(groupedData[item], 'humidity')}</td>
                                </tr>
                            </tbody>
                        </Table>
                        </Col>
                    )
                })}
                
            </Row>
        </>
    );
  }

// export default function SearchResults({ result }) {
//     return (
//       <section>
//         <h2>Name: {result.list.temp}</h2>
//         {/* <h3>Species: {result.species.name}</h3>
//         <h3>Height: {result.height}</h3>
//         <small>
//           Height: {result.height}, Weight: {result.weight}
//         </small> */}
//       </section>
//     );
//   }
  
  
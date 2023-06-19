import { useRef, useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import jsonData from './mocks/activitydata.json'



function App() {
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");
  function loadActivities() {
    /* fetch(
        "http://api.amp.active.com/v2/search/?current_page=1&per_page=10&sort=distance&exclude_children=true&api_key=aarkstagnxqhrrdm8zht9y34",
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setData(data)
        }); */

    return jsonData.results;
  }


  useEffect(() => {
    setData(loadActivities())
  }, [])
  
 
  return (
    <div className="App">
      <input
        value={input}
        onChange={(event) => {
          setInput(event.target.value);
        }}
      />
      <button
        onClick={() => {
          loadActivities();
        }}
      >
        search
      </button>
      <div>
        <ul>
          {data.filter(i => i.place.postalCode === input).map((activity) => (
            <li key={activity.assetGuid}><Link to={`/activity-details?activity=${activity.assetGuid}`}> {`${activity.assetName}`} <b>{activity.place.postalCode }</b></Link></li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

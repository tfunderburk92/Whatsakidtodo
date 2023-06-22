import React, {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom'
import jsonData from './mocks/activitydata.json'



const ActivityDetails = () => {

  const [data, setData] = useState([]);

  const { search } = useLocation();


  const activity = data.find(i => i.assetGuid === search.split('=')[1])
  console.log('activity', activity)


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

  console.log(data)

  return (
    <div>
    <h1>Activity details ID: {search.split('=')[1]}</h1>
      <h2>Activity details name: {activity ? activity.assetName : "NOT FOUND"}</h2>
      <h3>Creation date: {activity ? activity.createdDate : "NOT FOUND"}</h3>

      {activity && activity.urlAdr ? <a target="_blank" href={activity.urlAdr }>Go to link</a> : <b>LINK DOES NOT EXIST</b> }
      </div>
    
  )
}


export default ActivityDetails
import React from "react";
import data from "../public/data.js"; 

function PlayButtonList(props) {

    const tracks = data?.[props?.AlbumIndex]?.tracks;
    const trackList = Array.isArray(tracks) ? tracks : []; 
  return (
    <div>
      {/* <h1>List</h1> */}
      <ul>
        {/* <p>current album index is {props?.AlbumIndex}</p> */}
        {trackList.map((track, index)=>{
            return (
                <li>{track} <span style={{fontSize: 20, color: 'blue'}}>△</span></li>
            )
        })}

      </ul>
    </div>
  );
}

export default PlayButtonList;
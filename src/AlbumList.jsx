import React from "react";
import albums from "./data.js"; 

function AlbumList(props) {
  return (
    <div className="albumlist">
      <ul>
        <h2>Select an Album</h2>
        {albums.map((album, index) => (
          <li className="tabledev"
             key={album.id} 
          >
            
            <img className="imgdev" src={album.coverImg} alt={album.name} onClick={()=>{
              props?.updateAlbumIndex?.(index);
            }}/>
            <h2 className="titledev" onClick={()=>{
              props?.updateAlbumIndex?.(index);
            }}>{album.name}</h2>
      
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AlbumList;
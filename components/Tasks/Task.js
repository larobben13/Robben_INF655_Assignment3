import{FaTrashAlt} from 'react-icons/fa'
import React from "react";
import PropTypes from "prop-types";
import Card from "../shared/Card";

export default function Task({id, title, description, checked, handelDelete}){
    return(
        <Card>
        <input className= "item" type="checkbox" checked={checked}></input>
           <div className="text-display">{title}</div>  
           <div>{description}</div>
           <button onClick={() => handelDelete(id)}className="delete">
               <FaTrashAlt />
           </button>
       </Card>
    );
}

Task.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    id: PropTypes.number,
};
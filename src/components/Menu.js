import React from 'react'
import {Link} from 'react-router-dom'
import Folder from './Folder'

export default function Menu({ data }) {

    const item = data.map((d, i)=> {
        return <div className='item folder four columns' id={"folder"+i}>
            <img src={require("../images/" + d.tag + ".PNG")} />
            <Folder />
            <Link to={"/"+d.tag}>
                <button>
                    <text>{d.title}</text>
                </button>  
            </Link>         
        </div>
    }) 

  
    return <div className='row'>
        {item}
    </div>

}

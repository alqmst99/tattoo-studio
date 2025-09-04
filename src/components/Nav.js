import React from 'react';

//import nav data
import { navData } from '../data';



const Nav = () => {
//destructure data
const {items} = navData;

return <nav >
    <ul className='flex gap-x-[50px]'>
      {items.map((item, index)=>{
        return <li key={index}>
          <a  className="link hover:border-b-2 hover:border-dark transition-all duration-300 " href={item.href}>{item.name}</a>
        </li>
      })}
    </ul>
    <div className="text-2xl ">

    </div>
    </nav>;

};

export default Nav;

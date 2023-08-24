import React from 'react';
import style from './Messagem.module.css'

export default function Messagem({type, msg}) {
 return (
   <div>
         <p>{msg}</p>
   </div>
 );
}
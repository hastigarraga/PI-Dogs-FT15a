/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';


export default function Paged ({dogsPage,allDogs,pagedTotal}) {
    const numPages = []; 
    const paginado = Math.ceil(allDogs/dogsPage);

    for (let i = 1; i <= paginado; i++) {
        numPages.push(i)
        
    }

    return (
        <nav>
            <ul>
                {numPages?.map(num =>(
                    // eslint-disable-next-line react/jsx-no-comment-textnodes
                    <li key={num}>
                        <a onClick={()=> pagedTotal(num)}>{num}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )









}
import React from 'react'
// import PropTypes from 'prop-types'
import './Search.css'
import {BsList} from "react-icons/bs"
import {VscListFilter} from "react-icons/vsc"

const Search = ({onSearch, search}) => {
    return (
        <div className='search-container'>
            <BsList className="list-icon"/>
            <input 
                type="text" 
                value={search}
                className='search' 
                placeholder='&#128269; Search by Name' 
                onChange={(e) => onSearch(e.target.value)}
            />
            <VscListFilter className="list-filter"/>
        </div>
    )
}

Search.propTypes = {

}

export default Search
// import React from 'react'
// // import PropTypes from 'prop-types'
// import './Search.css'
// import {BsList} from "react-icons/bs"
// import {VscListFilter} from "react-icons/vsc"

// const Search = ({onSearch, search}) => {
//     return (
//         <div className='search-container'>
//             <BsList className="list-icon"/>
//             <input 
//                 type="text" 
//                 value={search}
//                 className='search' 
//                 placeholder='&#128269; Search by Name' 
//                 onChange={(e) => onSearch(e.target.value)}
//             />
//             <VscListFilter className="list-filter"/>
//         </div>
//     )
// }

// Search.propTypes = {

// }

// export default Search

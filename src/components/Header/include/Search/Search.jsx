import React from "react";
import styles from './Search.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Search = () => {
    return (
        <form className={styles.search}>
            <input type="text" val={""} id="task_search" placeholder={"Search for..."} required />
            <button type="button">
                <FontAwesomeIcon icon={faSearch} />
            </button>
        </form>
    );
}

export default Search;
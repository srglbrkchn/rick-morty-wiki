import React from "react";
import styles from "./Search.module.scss";


const Search = () => {
    return (
        <form className="d-flex justify-content-center">
            <input type="text" placeholder="Search for characters" className={styles.input} ></input>
            <button className="btn btn-primary">Search</button>
        </form>
    )
}

export default Search

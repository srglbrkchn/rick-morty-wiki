
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import React, {useState, useEffect} from "react";
import './App.css';
import Card from "./components/Card/Card";
import Filter from "./components/Filter/Filter";
import Navbar from "./components/Navbar/Navbar";
import Pagination from "./components/Pagination/Pagination";
import Search from "./components/Search/Search";


function App() {
    // ~~~~~~ Data Fetching Section 
    let [fetchedData, setFetchedData] = useState([]);
    let [pageNumber, setPageNumber]= useState(1);
    let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`;

    // fetch data from api using useEffect hook 
    useEffect(()=>{
        (async function() {
            let data = await fetch(api).then((res)=>res.json());
            setFetchedData(data);
        })();
    }, [api]);

    // Destructure fetchedData into info and results inorder to use then in different components
    let {info, results} = fetchedData;
    //  ~~~~~~~
    

    return (
        <div className="App">
            <h1 className="text-center ubuntu my-4">Rick & Morty <span style={{color: "#7aafec"}}>WiKi</span> </h1>
            <h1 className="text-center mb-3">Characters</h1>

            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <Filter />
                    </div>
                    <div className="col-lg-8 col-12">
                        <div className="row">
                            <Card results={results} />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default App;

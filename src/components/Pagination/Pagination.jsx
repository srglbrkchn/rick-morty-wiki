import React from 'react'

const Pagination = (props) => {

    let setPageNumber = props.setPageNumber;

    const next = () => {
        setPageNumber((preValue) => {
            return preValue + 1;
        });
    }

    const prev = () => {
        setPageNumber((preValue) => {
            if(preValue === 1) {
                return 1;
            }else {
                return preValue - 1;
            }
        });
    }


    return (
        <div className="container d-flex justify-content-center gap-5 my-5">
           <button className="btn btn-primary" onClick={prev}>Previous</button>
           <button className="btn btn-primary" onClick={next}>Next</button>
        </div>
    )
}

export default Pagination;

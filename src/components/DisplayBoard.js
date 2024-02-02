import React from 'react'

export const DisplayBoard = ({numberOfMovies, getAllMovies}) => {

    const headerStyle = {
        width: '100%',
        padding: '2%',
        backgroundColor: "red",
        color: 'white',
        textAlign: 'center'
    }
    
    return(
        <div style={{backgroundColor:'teal'}} className="display-board">
            <h4 style={{color: 'navy'}}>Movies Created</h4>
            <div className="number">
            {numberOfMovies}
            </div>
            <div className="btn">
                <button type="button" onClick={(e) => getAllMovies()} className="btn btn-warning">Get all Movies</button>
            </div>
        </div>
    )
}
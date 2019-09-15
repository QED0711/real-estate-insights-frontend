import React from 'react';

const YearInterface = ({ currentMap, setCurrentMap }) => {

    const handleClick = (year, setCurrentMap) => {
        
        return () => {
            setCurrentMap(year)
        }
    } 

    const buttons = (range=[1996, 2019], setCurrentMap) => {
        let buttonRange = []
        for(let i = range[0]; i <= range[1]; i++){
            buttonRange.push(i)
        }
        return buttonRange.map((year, i) => {
            return(
                <div key={i} className={`year-selector selected-${year == currentMap}`} onClick={handleClick(year, setCurrentMap)}>
                    {year}
                </div>
            )
        })
    }

    return (
        <div className="year-interface">
            {buttons([2000, 2019], setCurrentMap)}
        </div>
    )

}

export default YearInterface
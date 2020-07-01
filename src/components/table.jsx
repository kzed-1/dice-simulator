import React from 'react';

const Table = ({faceCounts}) => {

    console.log(faceCounts)

    const headings = ["Roll", "Counts"].map((heading, index) => (<th key={index} >{heading}</th>)); 
    const tableData = [];
    
    for (const [faceValue, count] of Object.entries(faceCounts)) {
        tableData.push (
            <tr className="rows" key={faceValue}>
                <td>{faceValue}</td>
                <td>{count}</td>
            </tr>
        )
    }

    return (
        <div>
            <h1>Roll Counts</h1>
            <table className="rolls">
                <tbody>
                    <tr className="heading">{headings}</tr>
                    {tableData}
                </tbody>
            </table>
        </div>
    )
}

export default Table;
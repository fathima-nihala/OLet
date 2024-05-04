import React from 'react'

const SearchResults = ({ handleSearchresult , search}) => {
console.log('**************************',handleSearchresult);
console.log('zzzzzzzzzzzzz',search);
  if (!Array.isArray(handleSearchresult)) {
    return null;
  }
  return (
    <div>
      <h2>Search Results</h2>
      <div className="dresses">
        {handleSearchresult.map((dress, index) => (
          <div key={index} className="dress">
            {/* Render dress information here */}
            <h3>{dress.title}</h3>
            <p>{dress.description}</p>
            <img src={dress.image} alt={dress.title} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default SearchResults

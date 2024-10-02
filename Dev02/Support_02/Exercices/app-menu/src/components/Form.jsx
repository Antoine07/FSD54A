
function Form({ conversion, type, handleChange }) {
  return (
      <div>
          <label>
              {type}
              <input
                value={conversion}
                onChange={(e) => handleChange(e.target.value, type)}
              />
          </label>
        
      </div>)
}

export default Form 

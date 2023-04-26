import { useState } from 'react';
import './form.css'

function Form() {
  const [inputValue, setInputValue] = useState('');
  const [responseData, setResponseData] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch('http://localhost:5000/predicts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ value: inputValue })
    });
    const data = await response.json();
    console.log(data.result)
    setResponseData(data.result);
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
    console.log(event.target.value)
};

  return (
    <div>
      <form className='container' onSubmit={handleSubmit}>
        <label>
          Enter a value:
          <input type="text" value={inputValue} onChange={handleChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
      {responseData && (
        <div>
          <h2>Result:</h2>
          <pre>{JSON.stringify(responseData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default Form;
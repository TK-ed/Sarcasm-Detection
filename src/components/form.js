import { useState } from 'react';
import '../components/form.css'
import '../components/button.css'

function Form() {
  const [inputValue, setInputValue] = useState('');
  const [responseData, setResponseData] = useState(null);

  const handleSubmit = async (event) => {
    console.log('All clear!!!')
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
    // alert(data.result)
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
    console.log(event.target.value)
  };

  return (
    <div class="login-box">
      <h3>SARCASM DETECT</h3>
      <form onSubmit={handleSubmit}>
        <div class="user-box">
          <input type="text" value={inputValue} onChange={handleChange} />
          <label>Insert Text *</label>
        </div>
        <div>
          <button type='submit' class='glowing-btn'><span class='glowing-txt'>C<span class='faulty-letter'>H</span>ECK</span></button>
        </div>
      </form>
      <br/>
      <br/>
      {responseData && (
        <div className='result'>
          <h2>RESULT</h2>
          <pre className="sarcasm">{JSON.stringify(responseData, null, 2)}</pre>
        </div>
      )}
    </div>
  )
}

export default Form


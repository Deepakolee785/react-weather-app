import React from 'react';

const Form = (props) =>{
  const {getWeather} = props;
  return(
    <div className="main card card-body my-3">
      <form onSubmit={getWeather}>
        <div className="input-group">
          <div className="input-group-prepend">
            <div className="input-group-text bg-primary text-white">
             <i className="fas fa-cloud-sun-rain"></i>
            </div>
          </div>
          <input 
          name='city'
          type="text"
          id="input" 
          className="form-control"
          placeholder="Enter your City..."
          />
          <button className='btn btn-success ml-1 text-capitalize'>
        get weather
        </button>
        </div>
        
      </form>
    </div>
    );
}
export default Form;
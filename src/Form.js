import React from 'react';

function Form() {
  return(
    <div className='Form'>
      First name:
      <input type="text" name="firstname" value="Mickey"/>
      Last name:
      <input type="text" name="lastname" value="Mouse" />
      <input type="submit" value="Submit" />
    </div>
  )
}

export default Form;
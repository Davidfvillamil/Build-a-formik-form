import React from 'react'
import './App.css';
import {useFormik} from 'formik'

function App() {
  const formik = useFormik({
    initialValues : {
      email: '',
      password: ''
    },
    onSubmit: values => {
      console.log('form: ', values)
      alert ('login Succesful')
    },
    validate: values =>{
      let errors = {}
      if(!values.email) errors.email = 'Required field'
      if(!values.password) errors.password = 'password required';
      if(!values.email.includes('@')) errors.email = '"Username should be an email'
      if(!values.email.includes('.')) errors.email = '"Username should be an email'
      return errors
    }
  })
  
  return (
    <div style={{backgroundColor:'grey', paddingLeft:'40px'}}>
      <form onSubmit={formik.handleSubmit}>
        
        <div>Email</div>
        <input id='emailField' type = 'email' name='email' onChange={formik.handleChange} value={formik.values.email}/>
        <div id='emailError'>{formik.errors.email ? <div style={{color:'red'}}>{formik.errors.email}</div>:null}</div>
        <div>Password</div>
        <input id='pswField' type = 'password' name='password' onChange={formik.handleChange} value={formik.values.password}/>
        <div id='pswError'>{formik.errors.password ? <div style={{color:'red'}}>{formik.errors.password}</div>:null}</div><br/>
        <button>submit</button>
      </form>
      
    </div>
  );
}

export default App;


import React from 'react';

import style from './css/style.module.css'

export class Admin extends React.Component{
  render(){
    return(
      <>
      <nav class="navbar  navbar-expand-lg navbar-light bg-light">
  <span class="bg-gradient-primary navbar-brand">Bina Cars</span>
    
    <form class="form-inline my-2 my-lg-0">
      <div className={style.avatar}><img src=""/></div>
      <button type="button" onClick={()=>{alert("hello")}} className={`btn btn-outline-success my-2 my-sm-0 ${style.logout}`}>Logout</button>
    </form>
    </nav>


<nav className={`bg-dark navbar navbar-expand-lg navbar-light bg-light`}>
  <button type="button" className={`btn btn-link ${style.navlink}`}>Create Record</button>
  <button type="button" className={`btn btn-link ${style.navlink}`}>View Records</button>  
</nav>

</>
)
  }
}


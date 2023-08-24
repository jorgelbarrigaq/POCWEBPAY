//import { useEffect, FormEvent, useState } from 'react';
import Layout from './layaut'

import './App.css'

function App() {
 

  return (
    <>
        <Layout>
            <h1 className="display-3 tittle-start">Tu pago en <span className="webpay-start">Webpay</span></h1>
            <p className="text-description">Para continuar con tu compra ingresa tu RUT.</p>

            <div className="group-new-input">

                <form >
                    
                        <input
                            required className="input-up search-box"
                            type="text" id="name" name="username"
                        />
                    

                    <button className="close-icon" ></button>
                    <label className="label-two" >RUT</label>
                    <div className="text-input-error"> <span>RUT incorrecto, intenta de nuevo. *</span></div>
                    
                    <div className="text-required">*Campo obligatorio</div>
                    <div className="container-login100-form-btn">
                        <button className="login100-form-btn">
                            Continuar
                        </button>
                    </div>
                </form>
            </div>
            </Layout>
       </>
      
)
}

export default App

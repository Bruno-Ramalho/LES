import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { saveShippingAddress } from "../actions/cartActions";
import CheckoutSteps from "../components/checkoutSteps/CheckoutSteps";

export default function ShippingAddressScreen(props) {
    const userSignin = useSelector ((state) => state.userSignin);
    const {userInfo} = userSignin;
    const cart = useSelector (state => state.cart);
    const{shippingAddress} = cart;
    if (!userInfo){
        props.history.push('/signin');
    };
    const [fullName, setFullName] = useState(shippingAddress.fullName);
    const [address, setAddress] = useState(shippingAddress.address);
    const [city, setCity] = useState(shippingAddress.city);
    const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
    const [state, setState] = useState(shippingAddress.state);
    const dispatch = useDispatch();
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(saveShippingAddress({ fullName, address, city, postalCode, state }));
        props.history.push('/payment');
    }
  return (
    <div>
      <CheckoutSteps step1 step2></CheckoutSteps>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Endereço de Envio</h1>
        </div>
        <div>
          <label htmlFor="fullName">Nome Completo</label>
          <input
            type="text"
            id="fullName"
            placeholder="Entre com seu nome completo"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)} required
          />
        </div>
        <div>
          <label htmlFor="address">Endereço</label>
          <input
            type="text"
            id="address"
            placeholder="Entre com o seu endereço"
            value={address}
            onChange={(e) => setAddress(e.target.value)} required
          />
        </div>
        <div>
          <label htmlFor="city">Nome Completo</label>
          <input
            type="text"
            id="city"
            placeholder="Entre com a cidade"
            value={city}
            onChange={(e) => setCity(e.target.value)} required
          />
        </div>
        <div>
          <label htmlFor="postalCode">CEP</label>
          <input
            type="text"
            id="postalCode"
            placeholder="Entre com o CEP"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)} required
          />
        </div>
        <div>
          <label htmlFor="state">Estado (UF)</label>
          <input
            type="text"
            id="state"
            placeholder="Entre com o estado onde mora"
            value={state}
            onChange={(e) => setState(e.target.value)} required
          />
        </div>
        <div>
            <label/>
            <button className="primary" type="submit">Continuar</button>
        </div>
      </form>
    </div>
  );
}

import React, { useState } from "react";
import "./CreateTrader.css"

function CreateTrader () {
    const [full_name, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phone_number, setPhoneNumber] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    const url = ""

    return (
        <div className="trader_form_container">
            <h2>Create Trader</h2>
            <form className="trader_form" onSubmit={handleSubmit}>
                <label htmlFor="full_name">Full name</label>
                <input value={full_name} onChange={(e) => setFullName(e.target.value)}type="full_name" placeholder="full_name" id="full_name" name="full_name" />
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="email" id="email" name="email" />
                <label htmlFor="phone_number">Phone number</label>
                <input value={phone_number} onChange={(e) => setPhoneNumber(e.target.value)} type="phone_number" placeholder="phone_number" id="phone_number" name="phone_number" />
                <button className="create_button" type="submit">Create Trader</button>
            </form>
        </div>
    )
}

export default CreateTrader

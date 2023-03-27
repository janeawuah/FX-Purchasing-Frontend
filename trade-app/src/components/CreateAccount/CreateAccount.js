import React, { useState } from "react";
import "./CreateAccount.css"

function CreateAccount (props) {
    const [currency, setCurrency] = useState('');
    const [account_balance, setaccount_balance] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(account_balance);
    }

    const url = ""

    return (
        <div className="account_form_container">
            <h2>Create Account</h2>
            <form className="account_form" onSubmit={handleSubmit}>
                <label htmlFor="currency">Currency</label>
                <input value={currency} onChange={(e) => setCurrency(e.target.value)}type="currency" placeholder="currency" id="currency" name="currency" />
                <label htmlFor="account_balance">Account balance</label>
                <input value={account_balance} onChange={(e) => setaccount_balance(e.target.value)} type="account_balance" placeholder="account_balance" id="account_balance" name="account_balance" />
                <button className="create_button" type="submit">Create Account</button>
            </form>
            {/* <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button> */}
        </div>
    )
}

export default CreateAccount

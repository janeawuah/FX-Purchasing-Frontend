import "./MakeOrder.css"
import React, { useState, useEffect } from "react";
import currencyFormatter from "../../utilities/currencyFormatter";

function MakeOrder({rates_data}){
    const [source_currency, setSource] = useState('');
    const [target_currency, setTarget] = useState('');
    const [source_amount, setSourceAmount] = useState('');
    const [target_amount, setTargetAmount] = useState('');
    const [checking, setChecking] = useState(false);
    const [data, setData] = useState([]);
    const [targetSymbol, setTargetSymbol] = useState('');

    const currency_symbols = ["GHS","NGN","KES","USD"]

    const onSourceSymbolSelect = (e) =>{
        const { value } = e.target;
        setSource(value);
        setTargetAmount('');
        setChecking(false);
        // console.log(`Source symbol: ${value}`)
    }

    const onTargetSymbolSelect = (e) =>{
        const { value } = e.target;
        setTarget(value);
        setTargetAmount('');
        setChecking(false);
        // console.log(`Target symbol: ${value}`)
    }

    const onSourceAmount = e => {
        setSourceAmount(e.target.value);
        setTargetAmount('');
        setChecking(false);
    }

    const onSubmit = e => {
        e.preventDefault();
        setTargetAmount('');

        if(!checking) {
            data.forEach(({ currency, rate}) => {
                const [ currency_one, currency_two ] = currency.split(' - ');
                

                if(currency_one === source_currency && currency_two === target_currency) {
                    const targetAmount = Number.parseInt(source_amount) * Number.parseInt(rate);
                    console.log(`Calculated: ${targetAmount}`);
                    setTargetAmount(`${targetAmount}`);
                    setTargetSymbol(currency_two);
                    setChecking(true);
                }
            });
        } else {
            console.log("Order placed");
            setTargetAmount('');
            setChecking(false);
        }
    }

    useEffect(() => {
        // console.log('Make Order Rate: ', rates_data);
        setData(rates_data);
    }, [rates_data])

    return (
        <div className="order_form_container">
            <h2>Order Trade</h2>
            <form className="order_form">
                <div className="form_item">
                    <label htmlFor="source"> Source Currency</label>
                    <select onChange={onSourceSymbolSelect}>
                        <option>Select currency</option>
                        {
                            currency_symbols.map((symbol,index) => (
                                <option key={index} value={symbol}>{symbol}</option>
                            ))
                        }
                    </select>
                </div>
                <div className="form_item">
                    <label htmlFor="email">Target Currency</label>
                    <select onChange={onTargetSymbolSelect}>
                        <option>Select currency</option>
                        {
                            currency_symbols.map((symbol,index) => (
                                <option key={index} value={symbol}>{symbol}</option>
                            ))
                        }
                    </select>
                </div>
                <div className="form_item">
                    <label htmlFor="source_amount">Source Amount</label>
                    <input value={source_amount} onChange={onSourceAmount} type="source_amount" placeholder="source amount" id="source_amount" name="source amount" />
                </div>
                
                {
                    checking && (
                        <div className="target_amount">
                            <label>Target Amount</label>
                            <p>{ `${targetSymbol} ` + currencyFormatter(`${target_amount}`) }</p>
                        </div>
                    )
                }
                <button type="submit" onClick={onSubmit}>{!checking ? "Check" : "ReCheck?"}</button>
            </form>
        </div>
    );
}

export default MakeOrder
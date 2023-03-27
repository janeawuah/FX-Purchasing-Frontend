import { useState } from "react";
import RatesTable from "../RatesTable/RatesTable";
import "./Dashboard.css";
import MakeOrder from "../MakeOrder/MakeOrder";
import CreateAccount from "../CreateAccount/CreateAccount";
import CreateTrader from "../CreateTrader/CreateTrader";

const Dashboard = () => {
    const rates_data = [
        {
            currency:"GHS - USD",
            rate:12.26
        },
        {
            currency:"NGN - USD",
            rate:460.48
        },
        {
            currency:"KES - USD",
            rate:131.40
        },
        {
            currency:"GHS - KES",
            rate:10.72
        },
        {
            currency:"GHS - NGN",
            rate:37.56
        }, 
        {
            currency:"NGN - KES",
            rate:0.26
        }
    ];

    // const [makeOrder, setMakeOrder]= useState(false);
    const [activeMenuItem, setActiveMenuItem] = useState("Place&nbsp;Order");

    const onMenuSelected = (e) => setActiveMenuItem(e.target.innerHTML);

    const renderView = () => {
        switch (activeMenuItem) {
            case "Rates":
                return (
                    <RatesTable rates_data={rates_data}/>
                )
            case "Place&nbsp;Order":
                return (
                    <MakeOrder rates_data={rates_data}/>
                )
            case "Create&nbsp;Account":
                return (
                    <CreateAccount rates_data={rates_data} />
                )
            case "Create&nbsp;Trader":
                return (
                     <CreateTrader/>
                )
        }
    }

    return(
        <div className="main_container">
            <div className="button_container">
                <button onClick={onMenuSelected}>Rates</button>
                <button onClick={onMenuSelected}>Create&nbsp;Trader</button>
                <button onClick={onMenuSelected}>Create&nbsp;Account</button>
                <button onClick={onMenuSelected}>Place&nbsp;Order</button>

            </div>
            {
                renderView()
            }
        </div>
    );
}


export default Dashboard

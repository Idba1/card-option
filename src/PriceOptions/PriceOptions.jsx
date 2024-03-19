import PriceOption from "../priceOption/PriceOption";

const PriceOptions = () => {

    const priceOptions = [
        {
            "id": 1,
            "name": "Basic Membership",
            "price": "$30/month",
            "features": [
                "Access to cardio area",
                "Access to weightlifting area",
                "Locker room access",
                "Basic fitness classes",
                "Discounts on gym merchandise",
                "Online workout tracker"
            ]
        },
        {
            "id": 2,
            "name": "Standard Membership",
            "price": "$50/month",
            "features": [
                "Access to all equipment and facilities",
                "Personal training session (1/month)",
                "Access to sauna and steam room",
                "Additional fitness classes",
                "Nutritional guidance",
                "Monthly progress reports"
            ]
        },
        {
            "id": 3,
            "name": "Premium Membership",
            "price": "$80/month",
            "features": [
                "Unlimited access to all facilities",
                "Unlimited fitness classes",
                "Unlimited personal training sessions",
                "Nutritional counseling session (monthly)",
                "Complimentary massages",
                "VIP locker access"
            ]
        }
    ]


    return (
        <div>
            <h2 className="text-2xl">Best prices in the twon</h2>
            {
                priceOptions.map((option => <PriceOption key={option.id} option={option}></PriceOption>))
            }
        </div>
    );
};

export default PriceOptions;
import PriceOption from "../priceOption/PriceOption";

const PriceOptions = () => {

    const priceOptions = [
        {
            "id": 1,
            "name": "Basic Membership",
            "price": "$30",
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
            "price": "$50",
            "features": [
                "Access to all equipment and facilities",
                "Personal training session (1)",
                "Access to sauna and steam room",
                "Additional fitness classes",
                "Nutritional guidance",
                "Monthly progress reports"
            ]
        },
        {
            "id": 3,
            "name": "Premium Membership",
            "price": "$80",
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
        <div className="">
            <h2 className="text-3xl">Best prices in the twon</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 m-4 ">
            {
                priceOptions.map((option => <PriceOption key={option.id} option={option}></PriceOption>))
            }
            </div>
        </div>
    );
};

export default PriceOptions;
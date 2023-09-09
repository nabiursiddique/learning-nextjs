"use client"

const Button = ({ price }) => {
    return (
        <div>
            <button onClick={() => alert(price)}>Check Price</button>
        </div>
    );
};

export default Button;
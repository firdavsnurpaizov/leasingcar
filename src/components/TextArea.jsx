import React, {useState} from 'react';
import styles from "./TextArea.module.scss"
import Image from "next/image";

export default function TextArea(
    {
        type,
        inputType,
        title,
        min,
        max,
        priceOfCar,
        setPriceOfCar,
        setTerm
    }) {
    const [value, setValue] = useState('0')
    const [payment, setPayment] = useState('0')

    const valueHandler = (e) => {
        switch (inputType) {
            case "price":
                setValue(e.target.value)
                setPriceOfCar(e.target.value)
                break
            case "payment" :
                setValue(e.target.value)
                const price = Number(priceOfCar) * (Number(value) / 100)
                setPayment(String(price))
                console.log(price)
                break
            case "term":
                setValue(e.target.value)
                setTerm(e.target.value)
                break
            default :
                return
        }
    }

    console.log(value, "VALUE")
    console.log(payment, "PAYMENT")
    console.log(priceOfCar, "PRICE")

    function typeOfInput(type) {
        switch (type) {
            case 'price':
                return <Image
                    src="/calculation/currency.svg"
                    alt="currency-logo"
                    width="20"
                    height="36"
                />
            case 'payment':
                return <input
                    className={styles.percent}
                    onChange={valueHandler}
                    value={value}
                >
                </input>

            case 'term' :
                return <p>мес.</p>
        }
    }

    return (
        <div className={styles.wrapper}>
            <h2>{title}</h2>
            <div className={styles.inputWrapper}>
                {
                    inputType === "payment" ? <input
                        className={styles.input}
                        readOnly
                        value={payment}
                    /> : <input
                        className={styles.input}
                        onChange={valueHandler}
                        value={value}
                    />
                }

                <input
                    className={styles.range}
                    onChange={valueHandler}
                    value={value}
                    min={min}
                    max={max}
                    type={type}
                    style={{background: `linear-gradient(to right, #FF9514 ${(Number(value) - min) * 100 / (max - min)}%, #E1E1E1 1px`}}
                />
                <div className={styles.icon}>
                    {
                        typeOfInput(inputType)
                    }
                </div>
            </div>
        </div>
    );
};
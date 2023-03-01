import React, {useState} from 'react';
import styles from "./Calculation.module.scss"
import TextArea from "@/components/TextArea";

export default function Calculation() {

    const [priceOfCar, setPriceOfCar] = useState("0")
    const [initPayment, setInitPayment] = useState("0")
    const [term, setTerm] = useState("0")

    // Первоначальный взнос + Срок кредита*Ежемесячный платеж

    // Стоимость автомобиля - Первоначальный взнос*(Процентная ставка/(1+Процентная ставка)-Срок кредита-1)
    const monthlyPayment = 2
    // const sumPayment = initPayment + term *

    return (
        <div className='container'>
            <div className={styles.wrapper}>
                <h2 className={styles.title}>
                    Рассчитайте стоимость автомобиля в лизинг
                </h2>
                <div className={styles.inputWrapper}>
                    <TextArea
                        type="range"
                        inputType="price"
                        setPriceOfCar={setPriceOfCar}
                        title="Стоимость автомобиля"
                        min="1000000"
                        max="6000000"
                    />
                    <TextArea
                        type="range"
                        inputType="payment"
                        priceOfCar={priceOfCar}
                        title="Первоначальный взнос"
                        min="10"
                        max="60"
                    />
                    <TextArea
                        type="range"
                        inputType="term"
                        setTerm={setTerm}
                        title="Срок лизинга"
                        min="1"
                        max="60"
                    />
                </div>
                <div>
                    <p>Сумма договора лизинга</p>
                    {/*{sumPayment}*/}
                </div>
                <div>
                    <p>Ежемесячный платеж от</p>
                    {/*{monthlyPayment}*/}
                </div>
            </div>
        </div>
    );
};


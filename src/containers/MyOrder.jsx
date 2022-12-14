import React, { useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import OrderItem from '@components/OrderItem';
import AppContext from '@context/AppContext';
import arrow from '@icons/flechita.svg';
import styles from '@styles/MyOrder.module.scss';

const MyOrder = () => {
    const { state, toggleOrder } = useContext(AppContext);

    const sumTotal = () => {
        const reducer = (accumalator, currentValue) => accumalator + currentValue.price;
        const sum = state.cart.reduce(reducer, 0);
        return sum;
    };

    return (
        <aside className={styles.MyOrder}>
            <div className={styles['title-container']}>
                <Image className={(styles.pointer, styles.icon, styles['more-clickable-area'])} src={arrow} alt="arrow" onClick={() => toggleOrder()} />
                <p className={styles.title}>My order</p>
            </div>
            <div className={styles['my-order-content']}>
                <div>
                    {state.cart.map((product) => (
                        <OrderItem product={product} key={`orderItem-${product.id}`} />
                    ))}
                </div>
                <div className={styles.order}>
                    <p>
                        <span>Total</span>
                    </p>
                    <p>${sumTotal()}</p>
                </div>
                <Link href="/checkout">
                    <p className={styles['primary-button']}>Checkout</p>
                </Link>
            </div>
        </aside>
    );
};

export default MyOrder;

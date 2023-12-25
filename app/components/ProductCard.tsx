'use client';
import React from 'react'
import AddToCart from './AddToCart';
import styles from './ProductCard.module.css';//this is css module which is scoped to component

styles.card
const ProductCard = () => {
  return (
    // <div className={styles.card}>
    <div>
      <AddToCart/>
    </div>
  )
}

export default ProductCard

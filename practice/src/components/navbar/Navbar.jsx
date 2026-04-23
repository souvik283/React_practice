import React from 'react'
import styles from "./Navbar.module.css"
const Navbar = () => {
  return (
    <div className={styles.nav}>
      <div >
        Souvik
      </div>
      <div className={styles.navElement}>
        <p>1</p>
        <p>2</p>
        <p>3</p>
        <p>4</p>
      </div>
    </div>
  )
}

export default Navbar

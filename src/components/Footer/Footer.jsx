import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footerLeft}>
        <img src="./location.png" alt="" />
        <div>
          <address>1880 Northwest Boulevard</address>
          <address>
            <strong>Washington, United States</strong>
          </address>
        </div>
        <img src="./phone.png" alt="" />
        <div>
          <span> +1 202-213-1625</span>
        </div>
        <img src="./mail.png" alt="" />
        <div>
          <span>support@company.com</span>
        </div>
      </div>
      <div className={styles.footerRight}>
        <span>
          <strong>About the company</strong>
        </span>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum
          deserunt quibusdam tempora, dolorem quis expedita molestiae culpa
          dolor iure minima consequuntur, suscipit dicta. Esse quisquam iusto
          itaque illo unde earum.
        </span>
        <div>
          <img src="./facebook.png" alt="" />
          <img src="./twitter.png" alt="" />
          <img src="./linkedin.png" alt="" />
          <img src="./github.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Footer;

// import styles from "./Footer.module.css";

// function Footer() {
//   return (
//     <div className={styles.footer}>
//       <div className={styles.footerLeft}>
//         <div>
//           <img src="./location.png" alt="" />
//           <div>
//             <address>1880 Northwest Boulevard</address>
//             <address>Washington, United States</address>
//           </div>
//         </div>
//         <div>
//           <img src="./phone.png" alt="" />
//           <div>
//             <span> +1 202-213-1625</span>
//           </div>
//         </div>
//         <div>
//           <img src="./mail.png" alt="" />
//           <div>
//             <span>support@company.com</span>
//           </div>
//         </div>
//       </div>
//       <div>
//         <span>About the company</span>
//         <span>
//           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum
//           deserunt quibusdam tempora, dolorem quis expedita molestiae culpa
//           dolor iure minima consequuntur, suscipit dicta. Esse quisquam iusto
//           itaque illo unde earum.
//         </span>
//         <div>
//           <img src="./facebook.png" alt="" />
//           <img src="./twitter.png" alt="" />
//           <img src="./linkedin.png" alt="" />
//           <img src="./github.png" alt="" />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Footer;

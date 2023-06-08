import Link from "next/link";
import styles from "./contact.module.scss";
import Button from "../../Button";
 import { useRef, useState } from "react";
import Title from "../../Title";
 
function FormSection() {
   const formRef = useRef<HTMLFormElement>(null);
   const [disable, setDisable] = useState<boolean>(false);
  
  return (
    <div
      className={`  ${styles.contact}`}
      id="contact"
      >
      <form
        action="/"
        ref={formRef}
        // onSubmit={(e) => {
        //   e.preventDefault();
        //   const formdata = new FormData(e.currentTarget);
        //   const data = Object.fromEntries(formdata.entries());
        //   setDisable(true);

        //   axios
        //     .post(`${API_URL}/api/order`, data, {
        //       headers: {
        //         "Content-Type": "application/json",
        //       },
        //     })
        //     .finally(() => setDisable(false))
        //     .then((res) => {
        //       formRef.current?.reset();
        //       toast.success("Order sent", {
        //         position: "top-right",
        //         autoClose: 2000,
        //         hideProgressBar: false,
        //         closeOnClick: true,
        //         pauseOnHover: true,
        //         draggable: true,
        //         progress: undefined,
        //         theme: "light",
        //       });
        //     })
        //     .catch((e) => {
        //       toast.error("Cannot send your order", {
        //         position: "top-right",
        //         autoClose: 2000,
        //         hideProgressBar: false,
        //         closeOnClick: true,
        //         pauseOnHover: true,
        //         draggable: true,
        //         progress: undefined,
        //         theme: "light",
        //       });
        //     });
        // }}
      >
       <Title>
        Hoziroq buyurtma bering!
       </Title>
        <div className={styles.line}></div>
        <input
          type="text"
          name="fullName"
          placeholder="Ismingiz"
          required
        />
        <input
          type="text"
          name="phoneNumber"
          placeholder="Telefon"
          required
        />
        <textarea name="message" placeholder="Xabar"></textarea>
        <div className={styles.line}></div>
        <Button
          style={{
            borderRadius: 10,
            ...(disable
              ? {
                  background:
                    "linear-gradient(100.85deg, #0060ba8e -6.27%, #0067d58c 52.36%)",
                }
              : {}),
          }}
          disabled={disable}
        >
          Order 
        </Button>
      </form>
      <div className={styles.map}>
        {/* <div style="position:relative;overflow:hidden;"> */}
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d76131.33383679594!2d69.15085919299115!3d41.29834376347496!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef5fc9896b4e7%3A0xbf82f52456417ac6!2zVEhFRE9PUlMgLSDQsNCy0YLQvtC80LDRgtC40YfQtdGB0LrQuNC1INCy0L7RgNC-0YLQsA!5e0!3m2!1sen!2sus!4v1683787806866!5m2!1sen!2sus"></iframe>{" "}
        {/* <div>
          <p>20, Awesome Road, New York, Usa 4D BS3</p>

          <Link href="/">
            <a>+123 456 7890</a>
          </Link>
          <Link href="/">
            <a>hello@ulina.com</a>
          </Link>
        </div> */}
      </div>
    </div>
  );
}

export default FormSection;

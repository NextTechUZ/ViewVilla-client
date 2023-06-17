import styles from "./contact.module.scss";
import Button from "../../Button";
import { useRef, useState } from "react";
import Title from "../../Title";
import axios from "axios";
import { toast } from "react-toastify";
import { API_URL } from "../../../shared/constants";
import useIntersectionObserver from "../../../utils/InterSectionObserver";

function FormSection() {
  const formRef = useRef<HTMLFormElement>(null);
  const [disable, setDisable] = useState<boolean>(false);


  const ref = useRef(null);
  const entity = useIntersectionObserver(ref, {rootMargin:"0px 0px -200px"});

  return (
    <div className={`${styles.contact} ${entity?.isIntersecting ? styles.visible :""} padding-block`} id="contact" ref={ref}>
      <form
        action="/"
        ref={formRef}
        onSubmit={(e) => {
          e.preventDefault();
          const formdata = new FormData(e.currentTarget);
          const data = Object.fromEntries(formdata.entries());
          setDisable(true);

          axios
            .post(API_URL, data, {
              headers: {
                "Content-Type": "application/json",
              },
            })
            .finally(() => setDisable(false))
            .then((res) => {
              formRef.current?.reset();
              toast.success("Buyurtma qabul qilindi", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });
            })
            .catch((e) => {
              console.log(e);

              toast.error("Buyurtma jo'natilmadi", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });
            });
        }}
      >
        <Title>
          Hoziroq <span>buyurtma</span> bering!
        </Title>
        <div className={styles.line}></div>
        <input type="text" name="fullName" placeholder="Ismingiz" required />
        <input type="text" name="phoneNumber" placeholder="Telefon" required />
        <textarea
          name="message"
          placeholder="Bron qilish kunlaringiz:"
        ></textarea>
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
          Buyurtma berish
        </Button>
      </form>
      <div className={styles.map}>
        {/* <div style="position:relative;overflow:hidden;"> */}
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11917.659681321746!2d70.04366752420663!3d41.68997773710499!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38af6b81ce257389%3A0xf0e1bf81977fdd5!2sView%20Villa%20%7C%20DACHA%20SIJJAK!5e0!3m2!1sen!2s!4v1686824441759!5m2!1sen!2s"></iframe>{" "}
      
      </div>
    </div>
  );
}

export default FormSection;

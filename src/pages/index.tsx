import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  const [pword, setPword] = useState("Pwease Generate a Pawsword >~<");
  const generatePassword = () => {
    const chars =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let password = "";
    for (let i = 0; i < 20; i++) {
      password += chars[Math.floor(Math.random() * chars.length)];
    }
    return password;
  };
  return (
    <div className={styles.home}>
      <img src="/images/vulpo.png" alt="Submissive Cute Fox" />
      <h1>Welcome to BitBottom!</h1>
      <h2>Your Submissive/Insecure Password Manager/Generator!</h2>
      <div className={styles.passwordGenerator}>
        <input
          type="text"
          defaultValue={pword}
          readOnly
          onClick={() => {
            if (pword === "Pwease Generate a Pawsword >~<"){ 
              return alert("Pwease Generate a Pawsword First >~<");
            }
            navigator.clipboard.writeText(pword);
            return alert("*Moans into your ear* Password copied to clipboard!");
          }}
        />
        <button
          onClick={() => {
            setPword(generatePassword);
          }}
        >
          Generate
        </button>
      </div>
    </div>
  );
};

export default Home;

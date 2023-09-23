"use client";
import { useRouter } from "next/navigation";
import React from "react";

import { ToastContext } from "../../../../components/ToastProvider";

const REDIRECT_URL = "/exercises/02-flash-messages";

function ContactPage() {
  const router = useRouter();

  const { createToast } = React.useContext(ToastContext);

  function handlerSubmit(event) {
    event.preventDefault();

    router.push(REDIRECT_URL);

    createToast(
      "Your message was received. We'll get back to you shortly!",
      "success"
    );
  }

  return (
    <main>
      <form onSubmit={handlerSubmit}>
        <label htmlFor="name">Name:</label>
        <input id="name" required={true} />

        <label htmlFor="message">Message:</label>
        <textarea id="message" />

        <button>Submit</button>
      </form>
    </main>
  );
}

export default ContactPage;

// "use server";

import { Resend } from "resend";

const resend = new Resend("re_dW8FagWN_Fdde7frt8T5VduYyMFwBAxt2");

export async function sendMail() {
  const { data, error } = await resend.emails.send({
    from: "Salum <salumdeveloper@dilucsteiner.com>",
    to: ["kilangalilasalum@gmail.com"],
    subject: "Hello World",
    html: "<strong>It works!</strong>",
  });

  if (error) {
    return console.error({ error });
  }

  console.log({ data });
}

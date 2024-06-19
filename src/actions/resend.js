"use server";
import getEmail from "@/helpers/getEmail";
import { Resend } from "resend";

const resend = new Resend("re_EwHkJKn7_BqC3Jj57KVoFXeELa5b74Qhd");

export const sendEmail = async ({ content, page, title = null }) => {
  const { data, error } = await resend.emails.send({
    from: "Acme <onboarding@resend.dev>",
    to: [getEmail(page)],
    subject: "New Listing",
    html: `<h1>${
      title || `Client Message from ${page} page`
    }</h1><br/><ul>${content.map((val) => `<li>${val}</li>`).join("")}</ul>`,
  });
  if (error) console.log(error.message);
};

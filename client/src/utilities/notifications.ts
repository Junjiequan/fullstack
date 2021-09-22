import { toast } from "react-toastify";

const custom_style: any = {
  position: "top-right",
};

export const fail = () =>
  toast.error("😭 Feedback title has already taken.", custom_style);

export const success = () =>
  toast.dark("😎 Feedback added successfully!", custom_style);

export const empty = () =>
  toast.error("😓 Reply cannot be empty.", custom_style);

export const removed = () =>
  toast("👌 Feedback removed successfully!", custom_style);

export const edited = () =>
  toast.info("🧐 Feedback edited successfully!", custom_style);

export const signup_success = (text: string) => toast.info(text, custom_style);

export const signup_fail = (text: string) => toast.error(text, custom_style);

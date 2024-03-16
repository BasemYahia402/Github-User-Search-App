import { messageElement } from "./elements";

export const setMeessage = (meessage) => {
  messageElement.textContent = meessage ? `*${meessage}` : "";
};

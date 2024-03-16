import { setSearchResult } from "./setSearchResult.js";
import { USERS_API, cardsElement } from "./elements.js";
import { setMeessage } from "./setMessage.js";
import { getMeessage } from "./getMessage.js";
import { setLoader } from "./setLoader.js";
const performSearch = (searchInput, isUserSelected) => {
  getMeessage() && setMeessage("");
  const typeQuery = isUserSelected ? "+type:user" : "+type:org";
  if (!searchInput.trim()) {
    setMeessage("Please fill out the search filed");
    cardsElement.innerHTML = "";
    return;
  }
  setLoader(true);
  fetch(`${USERS_API}${searchInput}${typeQuery}`)
    .then((response) => response.json())
    .then((response) => setSearchResult(response.items))
    .finally(() => setLoader(false));
};
export { performSearch };

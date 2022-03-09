import { fetchArt } from  "./modules/fetchArt.js";
import { mySearch } from "./modules/searchbar1.js"; 

fetchArt("Katsushika+Hokusai", "#hokusai");
fetchArt("Utagawa+Kuniyoshi", "#kuniyoshi");
mySearch();


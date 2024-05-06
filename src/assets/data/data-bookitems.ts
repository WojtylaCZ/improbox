import { BookItem } from "./types";
import big_book_improv_games from "./../img/big_book_improv_games.jpg";
import long_form_short_book from "./../img/long_form_short_book.jpg";

export const bookItemsTable: Array<BookItem> = [
  {
    id: "1",
    slugExtra: "",
    name: "The Big Book of Improv Games",
    author: "Andrew M Spragge, Karen L Eichler",
    image: big_book_improv_games,
    businessType: "buy",
    websiteUrl: "",
    language: "en",
    recommends: ["Láďa Karda", "Míša Puchalka"],
    inventoryState: "Skladem",
  },
  {
    id: "1",
    slugExtra: "",
    name: "Long Form Short Book",
    author: "Francisco Antillón Romo",
    image: long_form_short_book,
    businessType: "buy",
    websiteUrl: "",
    language: "en",
    recommends: ["Láďa Karda", "Míša Puchalka"],
    inventoryState: "Skladem",
  },
];

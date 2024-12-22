import { API } from "../lib/consts";
const text = await getQuote(API.QUOTES.URL, API.QUOTES.CONFIG);

const component = `<article>
        <blockquote>
${text}
        </blockquote>
      </article>`;

const quote = document.getElementById("quote");

quote.innerHTML = component;

async function getQuote(url, config) {
  try {
    const res = await fetch(url, config);
    const data = await res.json();
    return data[0]?.quote;
  } catch (error) {
    console.error(error);
  }
}

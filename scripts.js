let container = document.createElement("div");
let row = document.createElement("div");

//appending html
document.body.appendChild(container);

//setting class
container.setAttribute("class", "container");

const countries = [
  {
    image: "https://flagpedia.net/data/flags/w580/de.png",
    country: "Germany",
    population: "81,770,900",
    region: "Europe",
    capital: "Berlin",
  },
  {
    image: "https://flagpedia.net/data/flags/w580/au.png",
    country: "Australia",
    population: "91,657,312",
    region: "Aus",
    capital: "Canberra",
  },
  {
    image: "https://flagpedia.net/data/flags/w580/in.png",
    country: "India",
    population: "1,3179,984,812",
    region: "Asia",
    capital: "New Delhi",
  },
  {
    image: "https://flagpedia.net/data/flags/w580/kr.png",
    country: "South Korea",
    population: "40,400,000",
    region: "Asia",
    capital: "Seoul",
  },
];

countries.forEach((item, i) => {
  console.log(item);
  let col = document.createElement("div");
  let flagContainer = document.createElement("div");
  let image = document.createElement("img");

  container.appendChild(row);
  row.appendChild(col);
  col.appendChild(flagContainer);
  flagContainer.appendChild(image);

  row.setAttribute("class", "row");
  col.setAttribute("class", "col-12 col-md-6 col-xl-3");
  image.setAttribute("class", "flag");
  flagContainer.setAttribute("class", "flagContainer");
  let images = document.getElementsByTagName("img");
  images[i].setAttribute("src", item.image);
  let keys = Object.keys(item);
  for (let j = 1; j < keys.length; j++) {
    let h4 = document.createElement("H4");
    let h5 = document.createElement("H5");
    let data = document.createElement("div");
    let details = document.createElement("div");
    data.setAttribute("class", "data");
    details.setAttribute("class", "detailsContainer");
    h4.innerText = `${keys[j]} :`;
    h5.innerText = item[keys[j]];
    details.appendChild(data);
    data.appendChild(h4);
    data.appendChild(h5);
    flagContainer.appendChild(details);
  }
});

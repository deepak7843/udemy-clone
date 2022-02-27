
let inputResult = document.getElementById("result");
async function getData() {
  try {
    let movie = document.getElementById("search").value;

    if (!movie) {
      inputResult.style.display = "none";
    }

    let res = await fetch(
            `https://api.themoviedb.org/3/search/movie?api_key=67e38141a3936f890d898c1bb924d4f6&query=${movie}&page=1`
    );

    let data = await res.json();
    // 67e38141a3936f890d898c1bb924d4f6
    return data.results;
    
  } catch (err) {
    console.log("err:", err);
  }
}

async function main() {
  let data = await getData();
  if (data == undefined) {
 
    return false;
  }

//    console.log('data:', data)
  appendData(data);
}

function appendData(movies) {
  

  inputResult.style.display = "block";

  inputResult.innerText = "";
  movies.forEach((el) => {
    let p = document.createElement("p");
    p.innerText = el.title;
    inputResult.append(p);
    p.addEventListener("click", function () {
      showMovie(el);
    });
  });
}

let timerId;
function debounce(func, delay) {
  if (timerId) {
    clearTimeout(timerId);
  }
  timerId = setTimeout(function () {
    func();
  }, delay);
}

let container = document.getElementById("movies");
async function display() {
    event.preventDefault()
  let data = await getData();
  inputResult.style.display = "none";
  if (data == undefined) {
    container.innerHTML = `<img style="margin:auto; width:200px"  src="https://i.makeagif.com/media/11-04-2015/mfnzwt.gif"> <span style="margin-top:40px; font-size:40px; font-weight:700; color:white">Data Not Found `;

    return false;
  }

  showAll(data);
  console.log("data:", data);
}

function showAll(array) {
 

  container.innerHTML = "";
  inputResult.style.display = "none";
  array.map(function (el) {
   
    let card = document.createElement("div");
    card.className = "card";
    card.addEventListener("click", function () {
      showMovie(el);
    });

    let img = document.createElement("img");
    if (el.poster_path === null) {
      img.src = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSADPzrYm_hQg2XMNc_9KTr9Axmn35s0DbsIQ&usqp=CAU`;
    } else {
      img.src = `https://image.tmdb.org/t/p/original${el.poster_path}`;
    }

    let name = document.createElement("h4");
    name.innerText = el.title;

    let date = document.createElement("p");

    date.innerText = `Release : ${el.release_date}`;

    let rating = document.createElement("p");
    let x = (Math.random() * (9 - 7.5) + 7.5).toFixed(1);
   
    rating.innerHTML = `
      Rating  :   
      ${x} &#9733 `;

    card.append(img, name, date, rating);
    if (x >= 8.5) {
      rec = document.createElement("div");
      rec.innerText = "Recommended";
      rec.className = "recom";
      card.append(rec);
    }

    container.append(card);
  });
}

function showMovie(el) {
  
  container.innerHTML = "";
  inputResult.style.display = "none";
  let one = document.createElement("div");
  one.id = "oneProduct";
  one.style.display = "flex";

  let imgDiv = document.createElement("div");
  imgDiv.id = "imgDiv";
  let img = document.createElement("img");

  if (el.poster_path === null) {
    img.src = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSADPzrYm_hQg2XMNc_9KTr9Axmn35s0DbsIQ&usqp=CAU`;
  } else {
    img.src = `https://image.tmdb.org/t/p/original${el.poster_path}`;
  }

  let info = document.createElement("div");
  info.id = "infoDiv";
  let title = document.createElement("h1");
  title.id = "title";
  title.innerText = el.title;

  let relese = document.createElement("p");
  relese.id = "releaseDate";
  relese.innerText = `Year : ${el.release_date}`;

  let type = document.createElement("p");
  type.innerText = `${el.overview}`;
  let rat = document.createElement("p");
  rat.innerHTML = `
      Rating  :   
      ${(Math.random() * (9 - 7.5) + 7.5).toFixed(1)} &#9733 `;

  imgDiv.append(img);
  info.append(title, relese, type, rat);
  one.append(imgDiv, info);
  container.append(one);
}

trending();
async function trending() {
  try {

    let res = await fetch(
      `https://api.themoviedb.org/3/trending/all/week?api_key=67e38141a3936f890d898c1bb924d4f6`
    );

    let data = await res.json();
    // console.log('data:', data.Search)

    // console.log('data:', data.results)
    showAll(data.results);
  } catch (err) {
    console.log("err:", err);
  }
}
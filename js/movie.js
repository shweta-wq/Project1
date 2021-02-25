const apiKey = 'a9644bfc';
const type = 'movie';
const page = 1;
const plot='short';
const con = document.getElementById("movie");
const title = document.getElementById("search");

title.addEventListener("keyup",function(e){
 const movieTitle = e.target.value;
  fetch(`https://www.omdbapi.com/?apikey=${apiKey}&s=${movieTitle}&type=${type}&page=${page}&plot=${plot}`)
.then(success => success.json())
.then(movies => {
  console.log(movies);

   if(movies && movies.Search.length){
   con.innerHTML = '';
  movies.Search.forEach(movie => {
    createRow(movie);
  })
   }
})
.catch(err => {
  console.log(err)
}) 
})

function createRow(data){
  const row = document.createElement("div");
  row.setAttribute("class","row d-inline-block ");
  
  const col = document.createElement("div");
  col.setAttribute("class"," col-xs-4 p-4 ");
  const card = document.createElement("div");
  card.setAttribute("class","card p-4 ");
  const img = document.createElement("img");
  img.setAttribute("class","card-img-top");
  img.setAttribute("src",`${data.Poster}`);
  const cardBody = document.createElement("card-body");
  cardBody.setAttribute("class","card-body");
  const h5=document.createElement("strong");
  
  h5.setAttribute("class","card-title text-success");
    h5.appendChild(document.createTextNode(`${data.Title}`));
  const p=document.createElement("p");
  p.setAttribute("class","card-text");
  p.appendChild(document.createTextNode(` ${data.Type} ${data.Year}`));
  cardBody.appendChild(h5);
   cardBody.appendChild(p);
  const footer = document.createElement("div");
  footer.setAttribute("class","card-footer ");
  const ar=document.createElement("a");
  ar.setAttribute("class","btn btn-primary");
  ar.append(document.createTextNode("Movie details"));
  card.appendChild(img);
  card.appendChild(cardBody);
  card.appendChild(footer);
  
footer.appendChild(ar);
  col.appendChild(card);
  row.appendChild(col);
  con.appendChild(row);
ar.addEventListener('click',function(){


const details=document.getElementById("details");
const para=document.createElement("p");
para.appendChild(document.createTextNode(`${data.Plot}`));


})

}

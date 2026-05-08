
function toggleInfo(id){

const info = document.getElementById(id);

if(info.style.display === "block"){
info.style.display = "none";
}else{
info.style.display = "block";
}
}

function showMore(){

const extra = document.getElementById("extraText");

if(extra.style.display === "block"){
extra.style.display = "none";
}else{
extra.style.display = "block";
}
}

const form = document.getElementById("reviewForm");
const reviewContainer = document.getElementById("reviewContainer");

form.addEventListener("submit", function(e){

e.preventDefault();

const name = document.getElementById("name").value;
const movie = document.getElementById("movie").value;
const rating = document.getElementById("rating").value;
const comment = document.getElementById("comment").value;

const card = document.createElement("div");

card.classList.add("review-card");

card.innerHTML = `
<h3>${name}</h3>
<p><strong>Movie:</strong> ${movie}</p>
<p><strong>Rating:</strong> ${rating}</p>
<p>${comment}</p>
`;

reviewContainer.prepend(card);

form.reset();

});

var list = [];

function deletecard(index) {

  list.splice(index, 1);
  document.querySelector(".cards").innerHTML = "";
  tomap();
}

function tomap() {
  list.map((item, index) => {
    let carditem = document.querySelector(".model").cloneNode(true);

    carditem.querySelector(".title-card").innerHTML = item.title;
    carditem.querySelector(".text-card").innerHTML = item.text;
    carditem.querySelector(".eraseX").setAttribute("onclick", `deletecard(${index})`)

    document.querySelector(".cards").prepend(carditem);
  })


}

function saveinfo() {
  let titlevalue = document.querySelector(".title").value;
  let textvalue = document.querySelector(".text").value;
  list.push({ title: titlevalue, text: textvalue });
  document.querySelector(".cards").innerHTML = "";
  tomap();

};



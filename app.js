console.log("Welcome to notes app");
showNotes();

//If user add a note to a local storage

let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function (e) {
  let addTxt = document.getElementById("addTxt");
  let addTitle = document.getElementById("addTitle");
  let notes = localStorage.getItem("notes");

  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);


  }

  let myobj = {
      title : addTitle.value,
      name : addTxt.value
  }

  notesObj.push(myobj);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  addTxt.value = "";
  addTitle.value = "";
  console.log(notesObj);

  showNotes();
});

//Funtion to show elements from local storage

function showNotes() {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }

  let html = "";

  notesObj.forEach(function (element, index) {
    html += `  <div class="notesCard my-2 mx-2" style="width: 18rem;background-color:#2b5480;color:#ffffff;border-radius:30px;">
           
        <div class="card-body">
          <h5 class="card-title">${element.title}</h5>
          <p class="card-text">${element.name}</p>
          <button id="${index}" onclick="deleteNode(this.id)" class="btn btn-secondary">Delete Note</button>
        </div>
      </div>`;

      console.log('Hiiiii',element);
  });


  let notesElm = document.getElementById('notes');

  if(notesObj.length != 0){
      notesElm.innerHTML = html;
  }
  else{
      notesElm.innerHTML = `Nothing to show! "Add a note" section above to add notes `;
  }
}


function deleteNode(index){

    console.log('I am deleting the node', index);
    let notes = localStorage.getItem("notes");
    if (notes == null) {
      notesObj = [];
    } else {
      notesObj = JSON.parse(notes);
    }


    notesObj.splice(index,1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();

}


let search = document.getElementById('searchTxt');
let searchBtn = document.getElementById('searchBtn');


search.addEventListener('input' , input);
searchBtn.addEventListener('click' , input);

 function input(e){

    let inputval = search.value.toLowerCase();
    console.log("Input event fires" , inputval);


    let noteCards = document.getElementsByClassName('notesCard');
    Array.from(noteCards).forEach(function(element){


        let cardTxt = element.getElementsByTagName("h5")[0].innerText.toLowerCase();
        console.log(cardTxt);

        if(cardTxt.includes(inputval)){
            element.style.display = "block";
            
            e.preventDefault();
            
        }

        else{
            element.style.display ="none";
        
            e.preventDefault();
        }
    })
}



// let search = document.getElementById('searchTxt');
// let search1 = document.getElementById('searchBtn');

// search.addEventListener('input' , input);
// search1.addEventListener('click' , search23);


// function input(){

//     let inputval = search.value.toLowerCase();
//     console.log("Input event fires" , inputval);


//     let noteCards = document.getElementsByClassName('notesCard');
//     Array.from(noteCards).forEach(function(element){


//         let cardTxt = element.getElementsByTagName("p")[0].innerText.toLowerCase();
//         console.log(cardTxt);

//         if(cardTxt.includes(inputval)){
//             element.style.display = "block";
//         }

//         else{
//             element.style.display ="none";
//         }
//     })

// }
// function search23(e){

//     let inputval = search.value.toLowerCase();
//     console.log("Input event fires" , inputval);


//     let noteCards = document.getElementsByClassName('notesCard');
//     Array.from(noteCards).forEach(function(element){


//         let cardTxt = element.getElementsByTagName("p")[0].innerText.toLowerCase();
//         console.log(cardTxt);

//         if(cardTxt.includes(inputval)){
//             element.style.display = "block";
//             e.preventDefault();
//         }

//         else{
//             element.style.display ="none";
//             e.preventDefault();
//         }
//     })
// }


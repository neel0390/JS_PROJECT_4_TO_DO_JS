document.querySelector("#popup").style.display = "none";
document.querySelector("#popup2").style.display = "none";
document.querySelector("#headeroneDiv").style.display = "none";
// document.querySelector('#oneMainDiv').style.display="none"

document.querySelector(".btn").addEventListener("click", (e) => {
  e.preventDefault();
  // console.log('clicked');
  document.querySelector("#blur").style.filter = "blur(7px)";
  document.querySelector("#popup").style.display = "block";
});

function closePopup1() {
  console.log("clicked");
  document.querySelector("#blur").style.filter = "blur(0px)";
  document.querySelector("#my-para").style.display = "none";
  document.querySelector("#popup").style.display = "none";
}

// let main=document.createElement("main")
const taskList = [];
let itemCount = 0;

//creating div box
function addBox() {
  let cardTitle = document.getElementById("addTxt").value;
  const tempObj = {
    id: Date.now(),
    taskName: cardTitle,
  };
  console.log(tempObj);
  taskList.push(tempObj);
  console.log(taskList);
  document.querySelector("#popup").style.display = "none";
  document.querySelector("#my-para").style.display = "none";
  document.querySelector("#blur").style.filter = "blur(0px)";
  let notes = document.getElementById("notes");
  notes.innerHTML += `<div class="noteCard card" id=${itemCount} style="width: 15rem;height:17rem; background-color:white; color:black; margin-right:10px; margin-bottom:20px; "><center><span style="font-size:25px;color: #7e3e06;font-family: cursive;" class="card-text" onclick="particularDiv(this)">${cardTitle}</span></center><hr><ul class="tasks" id="itemList${itemCount}" style="height:150px;font-size:10px "></ul><i class="fa-solid fa-plus" onclick="popup2(); idList(event)" id="add_btn_${itemCount++}" style="cursor: pointer;float:right;margin-top:5px;margin-right:5px;background-color:blue;border-radius:50%;color:white;font-size:25px "></i>
    <i  onclick="deleteNote(this) " class="fa-solid fa-trash-can dltBtn" style="cursor: pointer;float:right;margin-top:5px;margin-right:10px;border-radius:50%;font-size:25px;color:red; "></i>
</div>`;
}

//Deleting the box
let deleteNote = (index) => {
  index.parentElement.remove();
  taskList.splice(index.parentElement.id, 1);
};

//calling 2nd popup
function popup2() {
  // document.querySelector('#headeroneDiv').style.display="none"
  // document.querySelector('#oneMainDiv').style.display="block"
  // document.querySelector('#oneMainDiv').style.filter="blur(8px)"
  document.querySelector("#blur").style.filter = "blur(7px)";
  document.querySelector("#popup2").style.display = "block";
}
//closing popup for 2nd popup
function closePopup2() {
  console.log("clicked cp2");
  document.querySelector("#blur").style.filter = "blur(0px)";
  document.querySelector("#my-para").style.display = "none";
  document.querySelector("#popup2").style.display = "none";
}

//Accessing ul's id through div's plus-icon onclick function
let createList = "";
function idList(plusiconOfDiv) {
  createList = plusiconOfDiv.target.previousSibling.id;
  console.log(createList, plusiconOfDiv);
  console.log(createList);
}

let listcount = 1;
//Adding list into the created ul
let addItemLikeList = () => {
  document.querySelector("#blur").style.filter = "blur(0px)";
  document.querySelector("#popup2").style.display = "none";
  console.log("clicked");
  let addTxt2 = document.getElementById("addTxt2").value;
  console.log(addTxt2);
  let li = document.createElement("li");
  document.getElementById(createList).appendChild(li);
  li.id = `item_${listcount++}`;
  // console.log(li.id,li,"li.id");
  li.style.listStyleType = "none";
  li.innerHTML = `<span style="font-size:15px; padding-left:56px">${addTxt2}</span><button id="markDone" onclick="cutIfWorkDone(this)">Markdone</button>`;
};

//Markdone function
let cutIfWorkDone = (index) => {
  index.previousSibling.style.textDecoration = "line-through";
  index.style.display = "none";
};

//To see a Particular Box........
let particularDiv = (specificDiv) => {
  console.log("pd created");
  console.log(specificDiv.parentElement.parentElement.innerHTML);
  let specificDivValue = specificDiv.innerHTML;
  console.log(specificDivValue);
  console.log(specificDiv.parentElement.nextSibling.nextSibling.innerHTML);
  console.log(specificDiv.parentElement.parentElement.id);
  document.querySelector("#blur").style.visibility = "hidden";
  document.querySelector("#headeroneDiv").style.display = "block";
  document.querySelector("#oneMainDiv").style.display = "block";
  // specificDiv.parentElement.parentElement.id.style.visibility="visible"
  document.querySelector("#addParticularHeaderValue").innerHTML = specificDiv.innerHTML;
  document.querySelector("#headeroneDiv").style.color = "white";
  document.querySelector("#headeroneDiv").style.display = "flex";
  document.querySelector("#headeroneDiv").style.justifyContent = "space-around";
  document.querySelector("#headeroneDiv").style.fontSize = "31px";

  let oneMainDiv = document.getElementById("oneMainDiv");
  oneMainDiv.innerHTML += `
    <div id="oneDiv">
    ${specificDiv.parentElement.parentElement.innerHTML}
    </div>
    `;
  console.log(specificDiv.parentElement.nextSibling.nextSibling.nextSibling.onclick);
  specificDiv.parentElement.nextSibling.nextSibling.nextSibling.style.display = "none";
};

function Back() {
  document.querySelector("#blur").style.visibility = "visible";
  document.querySelector("#headeroneDiv").style.display = "none";
  document.querySelector("#oneMainDiv").style.display = "none";
}

document.querySelector(".btnLast").addEventListener("click", (e) => {
  e.preventDefault();
  // console.log('clicked');
  document.querySelector("#headeroneDiv").style.display = "none";
  document.querySelector("#oneMainDiv").style.display = "none";
  document.querySelector("#blur").style.visibility = "visible";
  document.querySelector("#blur").style.filter = "blur(7px)";
  document.querySelector("#popup").style.display = "block";
});

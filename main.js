let box = document.querySelector(".box");

let dialogdelete = document.querySelector(".dialogdelete");
let dialogedit = document.querySelector(".dialogedit");
let yes = document.querySelector(".yes");
let no = document.querySelector(".no");
let formedit = document.querySelector(".formedit");
let update = document.querySelector(".update");
let in1 = document.querySelector(".in1");
let in2 = document.querySelector(".in2");
let in3 = document.querySelector(".in3");
let in4 = document.querySelector(".in4");
let in5 = document.querySelector(".in5");
let in6 = document.querySelector(".in6");
let in7 = document.querySelector(".in7");
let in8 = document.querySelector(".in8");
let btnno = document.querySelector(".btnno");


let dialoginfo = document.querySelector(".dialoginfo");
let imginfo = document.querySelector(".imginfo");
let nameinfo = document.querySelector(".nameinfo");
let emailinfo = document.querySelector(".emailinfo");
let concatinfo = document.querySelector(".concatinfo");
let ageinfo = document.querySelector(".ageinfo");
let countryinfo = document.querySelector(".countryinfo");
let statusinfo = document.querySelector(".statusinfo");
let btncloseininfo = document.querySelector(".btncloseininfo");
let mestainfo = document.querySelector(".mestainfo");

let dialogadd = document.querySelector(".dialogadd");
let btnadd = document.querySelector(".btnadd");
let adduser = document.querySelector(".adduser");


let in9 = document.querySelector(".in9");
let in10 = document.querySelector(".in10");
let in11 = document.querySelector(".in11");
let in12 = document.querySelector(".in12");
let in13 = document.querySelector(".in13");
let in14 = document.querySelector(".in14");
let in15 = document.querySelector(".in15");
let in16 = document.querySelector(".in16");

btnadd.onclick = () => {
  dialogadd.showModal();
}
adduser.onclick = () => {
  let newuser = {
    mesta:in9.value,
    img:in10.value,
    name:in11.value,
    email:in12.value,
    concat:in13.value,
    age:in14.value,
    country:in15.value,
    status: in16.value,
    id: Date.now()
  }

  users.push(newuser);
  getData(users);
  dialogadd.close();
}


let users = [
  {
        mesta: "1",
        img: "https://img.freepik.com/premium-vector/cute-boy-smiling-cartoon-kawaii-boy-illustration-boy-avatar-happy-kid_1001605-3440.jpg",
        name: "Ada Merino",
        email: "Vosela@gmail.com",
        concat:"+1 (936) 315-7811",
        age: 53,
        country: "Venezuela",
        status: "Rejected",
        id:1
  },
  {
        mesta: "2",
        img: "https://img.freepik.com/premium-vector/cute-boy-smiling-cartoon-kawaii-boy-illustration-boy-avatar-happy-kid_1001605-3445.jpg",
        name: "Ada Merino",
        email: "Vosela@gmail.com",
        concat:"+1 (936) 315-7811",
        age: 53,
        country: "Venezuela",
      status: "Verified",
        id:2
  },
];



let idx = null


update.onclick = () => {
  users = users.map((e) => {
    if (e.id == idx) {
      return {
        ...e,
        mesta: in1.value,
        img: in2.value,
        name: in3.value,
        email: in4.value,
        concat: in5.value,
        age: in6.value,
        country: in7.value,
        status: in8.value,
      };
    }
    return e;
  });

  getData(users);
    dialogedit.close();
    console.log(update);
    
};


function Delete(id) {
    users = users.filter((el) => el.id != id);

    getData(users);

    dialogdelete.close();
}

btnno.onclick = () => {
    dialogedit.close();
}

btncloseininfo.onclick = () => {
  dialoginfo.close();
}


function getData(data) {
    box.innerHTML = "";
    data.forEach(elem => {
        let div = document.createElement("tr");
        let mesta = document.createElement("td");
        let divname = document.createElement("td");
        let concat = document.createElement("td");
        let age = document.createElement("td");
        let country = document.createElement("td");
        let status = document.createElement("p");
        let name = document.createElement("h3");
        let img = document.createElement("img");
        let email = document.createElement("p");
        let divfornameemail = document.createElement("div");
        let divforstatus = document.createElement("td");
        let btns = document.createElement("td");
        let btnprofile = document.createElement("button");
        let btnedit = document.createElement("button");
        let btndelete = document.createElement("button");
        
        img.src = elem.img
        name.innerHTML = elem.name
        email.innerHTML = elem.email
        mesta.innerHTML = elem.mesta
        concat.innerHTML = elem.concat
        age.innerHTML = elem.age
        country.innerHTML = elem.country
        status.innerHTML = elem.status
        btnprofile.innerHTML = `<i class="fa-solid fa-eye"></i>`;
        btnedit.innerHTML = `<i class="fa-solid fa-pen-to-square"></i>`;
        btndelete.innerHTML = `<i class="fa-solid fa-trash"></i>`;

        divfornameemail.append(name,email)
        divname.append(img, divfornameemail);
        divforstatus.append(status);
        btns.append(btnprofile, btnedit, btndelete);
        div.append(mesta,divname,concat,age,country,divforstatus,btns);
        box.append(div);


        img.style.width = "50px"
        img.style.height = "50px"
        img.style.borderRadius = "50%"


        divname.style.display = "flex"
        divname.style.gap = "20px"
        divname.style.marginTop = "22px"


btnprofile.style.marginRight = "10px"
btnedit.style.marginRight = "10px"

        btnprofile.style.background = "white"
        btnprofile.style.border = "none"
        btnprofile.style.color = "gray"
        btnprofile.style.cursor = "pointer"
        

        btnedit.style.background = "white";
        btnedit.style.border = "none";
        btnedit.style.color = "blue";
        btnedit.style.cursor = "pointer";



        btndelete.style.background = "white";
        btndelete.style.border = "none";
        btndelete.style.color = "red";
        btndelete.style.cursor = "pointer";

        email.style.marginTop = "-10px"


        divfornameemail.style.marginTop = "-20px"
        
        if (status.innerHTML == "Rejected") {
            status.style.background = "rgba(0, 177, 0, 0.407)";
            status.style.borderRadius = "15px"
            status.style.height = "30px"
            status.style.textAlign = "center"
            status.style.alignContent = "center"
            status.style.color = "green"
            status.style.width = "90px"

        }
        else {
            status.style.background = "rgba(251, 0, 0, 0.242)";
            status.style.borderRadius = "15px";
            status.style.height = "30px";
            status.style.textAlign = "center";
            status.style.alignContent = "center";
            status.style.color = "red";
            status.style.width = "90px";

        }

        btndelete.onclick = () => {
            dialogdelete.showModal();
            yes.onclick = () => {
                Delete(elem.id)
            }
            no.onclick = () => {
                dialogdelete.close();
            }
        }

        btnedit.onclick = () => {
            dialogedit.showModal();
            in1.value = elem.mesta
            in2.value = elem.img
            in3.value = elem.name
            in4.value = elem.email
            in5.value = elem.concat
            in6.value = elem.age
            in7.value = elem.country
            in8.value = elem.status

            idx = elem.id
        }

        btnprofile.onclick = () => {
            dialoginfo.showModal();
            mestainfo.innerHTML = "Joy: " + elem.mesta
            imginfo.src = elem.img
            nameinfo.innerHTML = "Name: " + elem.name
            emailinfo.innerHTML = "Email: " + elem.email
            concatinfo.innerHTML = "Number: " + elem.concat
            ageinfo.innerHTML = "Age: " + elem.age
            countryinfo.innerHTML = "Country: " + elem.country
            statusinfo.innerHTML = "Status: " + elem.status
            
        }

        imginfo.style.width = "150px"
        imginfo.style.height = "150px"
        imginfo.style.borderRadius = "50%"
    });
}

getData(users);
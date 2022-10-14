document.querySelector("button").addEventListener("click", function (e) {
  let first_name = document.querySelector("#first_name").value;
  let last_name = document.querySelector("#last_name").value;
  let email = document.querySelector("#email").value;
  let street_address = document.querySelector("#street_address").value;
  let street_address_2 = document.querySelector("#street_address_2").value;
  let city = document.querySelector("#city").value;
  let state = document.querySelector("#state").value;

  console.log(street_address_2);

  let users;
  if (localStorage.getItem("users") === null) {
    users = [];
  } else {
    users = JSON.parse(localStorage.getItem("users"));
  }

  const user = {
    name1: first_name,
    name2: last_name,
    email_entry: email,
    street_address1: street_address,
    street_address2: street_address_2,
    city_entry: city,
    state_entry: state,
  };

  localStorage.setItem(first_name + " " + last_name, JSON.stringify(user));
  alert("Registration Saved");
  e.preventDefault();
});

function validateForm() {
    let x = document.forms["first_name"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  }
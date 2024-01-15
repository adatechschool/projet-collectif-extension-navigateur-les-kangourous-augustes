function save_options() {
    let langue= document.getElementById("langue").value;
    localStorage.setItem("langue", langue)
}

document.getElementById("save").addEventListener("click", save_options);
window.onload = async function (){
    console.log("dom content loaded");
    const res = await fetch("/status");
    const data = await res.json();
    document.getElementById("my-name").innerHTML = data.name;
    document.getElementById("my-status").innerHTML = data.status;
}
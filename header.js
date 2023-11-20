var htmlElement = document.querySelector("html");
let xhr = new XMLHttpRequest();

const setHtmlBg = (image) => {
    htmlElement.style.backgroundImage="url('https://cdn.dlhines.net/imagery/transparents/" + image + "')";
}

if(sessionStorage.getItem('ghbgSS')) {
    setHtmlBg(sessionStorage.getItem('ghbgSS'));
} else {
    xhr.open('GET', 'https://cdn.dlhines.net/imagery/transparents', true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4 && xhr.status == 200)
        sessionStorage.setItem('ghbgSS', xhr.response);
        setHtmlBg(xhr.response);
    }
    xhr.send();
}
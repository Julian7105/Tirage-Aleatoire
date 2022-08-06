const numeros = document.querySelectorAll(".nu");
const numCh = document.querySelectorAll(".nuch");
const img = document.querySelector("img");
const decouvrir = document.querySelector("button");
const eff = document.querySelector(".eff");

numeros.forEach((numm) => {
  function nbAl(min, max) {
    return Math.floor(Math.random() * max - min + 1) + min;
  }
  var nombreAl = nbAl(1, 50);
  decouvrir.addEventListener("click",() => {
      numm.textContent = nombreAl;
  });
});

numCh.forEach((nummCh) => {
  function nbAl(min, max) {
    return Math.floor(Math.random() * max - min + 1) + min;
  }
  var nombreAl = nbAl(1, 10);
  decouvrir.addEventListener("click", () => {
    nummCh.textContent = nombreAl;
  });
});

numeros.forEach((numm) =>{
    eff.addEventListener("click", () =>{
        numm.textContent = "";
        function nbAl(min, max) {
          return Math.floor(Math.random() * max - min + 1) + min;
        }
        var nombreAl = nbAl(1, 50);
        decouvrir.addEventListener("click", () => {
          numm.textContent = nombreAl;
        });
    });
});

numCh.forEach((nummCh) =>{
    eff.addEventListener("click", () =>{
        nummCh.textContent = "";
        function nbAl(min, max) {
          return Math.floor(Math.random() * max - min + 1) + min;
        }
        var nombreAl = nbAl(1, 10);
        decouvrir.addEventListener("click", () => {
          nummCh.textContent = nombreAl;
        });
    });
});


document.querySelector('#clickMe').addEventListener('click', makeReq)

async function makeReq(){

  const choice = document.querySelector("#choice").value;
  const res = await fetch(`/api?choice=${choice}`)
  const data = await res.json()

  console.log(data);
  document.querySelector("#personName").textContent = data.name
  document.querySelector("#personStatus").textContent = data.status
  document.querySelector("#personOccupation").textContent = data.currentOccupation
  document.querySelector("#selection").textContent = `You chose ${data.chose}`
  document.querySelector("#flip").textContent = `Coin landed on ${data.flip}`
  document.querySelector("#outcome").textContent = `You ${data.outcome}`
}
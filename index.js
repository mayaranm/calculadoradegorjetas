const calculatePercentage = (valeu,percentage) => {
  const percetageValeu = (value/100) * percentage;
  return percentageValue;
}



const calculateTip = (event) => {
  const tagTotalValue = document.getElementById("totalvalue");
  const tagTipValue = document.getElementById("tipvalue");
  const tagOriginalValue = document.getElementById("originalvalue");
  event.preventDefault();
  console.log("TESTE");
  const formData = new FormData(event.target) 
  const value = formData.get("value");
  const percentage = formData.get("percentage");
  const percentageValeu = calculatePercentage(value, percentage);

  tagOriginalValue.textContent = value;
  tagTipValue.textContent = percentageValue;
  tagTotalValue.textContent = Number(value) + percentageValue;
  
  console.log(value, percentage);
};

/*                <h1 id="totalvalue" class="align-center mt-2">200R$</h1>
                <div class="flex gap-2 mt-4">
                    <div>
                        <p>Valor da gorjeta</p>
                        <p id="tipvalue" class="mt-1">100 R$</p>
                    </div>

                    <div>
                        <p>Valor Original</p>
                        <p id="originalvalue" class="mt-1">100 R$</p>
                    </div>
*/

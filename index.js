const calculateTip = (event) => {
  event.preventDefault();
  console.log("TESTE");
  const formData = new FormData(event.target)
  // pegar value 
  const value = formData.get("value");
  //pegar percentage
  const percentage = formData.get("percentag");
  console.log(value, percentage);
};



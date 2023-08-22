fetch("http://localhost:2001/getall")
  .then((res) => res.json())
  .then((data) => console.log(data));

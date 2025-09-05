const data = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/1")
    
  console.log("Hello");
  const json1 = await res.json();
  console.log(json1);
  console.log(true);
};
data();

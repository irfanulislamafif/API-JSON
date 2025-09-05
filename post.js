const loadData = () => {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((data) => console.log(data)); //promise of response
  // promise of data
};

const loadPost = () => {
  const url = "https://jsonplaceholder.typicode.com/posts";
  fetch(url)
    .then((res) => res.json())
    .then((json) => {
        console.log(json);
        displayPost(json)
    });
};


const displayPost = (posts)=>{
   posts.forEach(post => {
    console.log(post);
   });
}
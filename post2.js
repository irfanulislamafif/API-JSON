const loadPost = () => {
  const url = "https://jsonplaceholder.typicode.com/posts";
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      // console.log(json);
      displayPost(data);
    });
};

const displayPost = (posts) => {
  // for(let i = 0; i < posts.length; i++){
  //     console.log(posts[i]);
  // }
  //    ;
  // for(let post of posts){
  //     console.log(post);
  // }
  /**
   * {
"userId": 1,
"id": 1,
"title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
"body": "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto"
}
   */

  // 1. get the container
  const postContainer = document.getElementById("post-container");
  postContainer.innerHTML = "";

  posts.forEach((post) => {
    // console.log(post.title);
    // 2. create HTML element
    const postCard = document.createElement("div");
    postCard.innerHTML = `
    <div id="post-card">
        <h2>${post.title}</h2>
        <p>
      ${post.body}
        </p>
      </div>

    
    `
    // 3. add to the container
    postContainer.append(postCard)
  });
};
loadPost();

const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
    {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    },
]

const postsContainer = document.getElementById("posts-container")
const postImages = document.querySelector(".post-image")
let canLike = true

function renderPosts() {
    for (let i = 0; i < posts.length; i++) {
        postsContainer.innerHTML += `
        <div class="post">
            <div class="post-header">
                <img src="${posts[i].avatar}">
                <div class="user-location-container">
                    <p class="user-name">${posts[i].name}</p>
                    <p class="location">${posts[i].location}</p>
                </div>
            </div>
            <img class="post-image" src="${posts[i].post}">
            <div class="post-footer">
                <div class="icons">
                    <img class="like-btn" src="images/icon-heart.png">
                    <img src="images/icon-comment.png">
                    <img src="images/icon-dm.png">
                </div>
                <p class="likes"><span class="likes-amount">${posts[i].likes}</span> likes</p>
                <p class="post-comment"><span>${posts[i].username}</span> ${posts[i].comment}</p>
            </div>
        </div>
        `
    }
}

postsContainer.addEventListener("dblclick", function(event) {
    if (event.target.classList.contains("post-image")) {
        let postAuthor = event.target.parentElement.querySelector(".user-location-container").querySelector(".user-name").textContent
        for (let i = 0; i < posts.length; i++) {
            if (posts[i].name === postAuthor && canLike) {
                updateLikes(i)
            }
        }
        
    }
});

function updateLikes(i) {
    console.log(posts[i])
    posts[i].likes += 1;
    postsContainer.children[i].querySelector(".likes-amount").textContent = posts[i].likes;
}

renderPosts();

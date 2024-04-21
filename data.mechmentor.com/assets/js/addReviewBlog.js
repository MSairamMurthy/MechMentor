// Function to handle form submission
document.getElementById("reviewForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    // Get form values
    var name = document.getElementById("nameInput").value;
    var email = document.getElementById("emailInput").value;
    var comment = document.getElementById("reviewText").value;

    var currentDate = new Date().toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    });

    // Create a new comment element
    var newComment = document.createElement("li");
    newComment.innerHTML = `
        <div class="postbox__comment-box grey-bg-2">
            <div class="postbox__comment-info d-flex">
                <div class="postbox__comment-avater mr-20">
                    <!-- <img src="assets/img/testimonial/avata-lg-5.png" alt=""> -->
                </div>
                <div class="postbox__comment-name">
                    <h5>${name}</h5>
                    <span class="post-meta">${currentDate}</span>
                </div>
            </div>
            <div class="postbox__comment-text ml-65">
                <p>${comment}</p>
            </div>
        </div>
    `;

    // Append new comment to the existing list
    var commentsList = document.getElementById("commentsList");
    commentsList.appendChild(newComment);

    // Reset form
    document.getElementById("nameInput").value = "";
    document.getElementById("emailInput").value = "";
    document.getElementById("reviewText").value = "";

    // Optional: Scroll to the new comment
    newComment.scrollIntoView({ behavior: "smooth" });
});

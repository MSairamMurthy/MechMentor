document.getElementById("reviewForm").addEventListener("submit", function (event) {
    event.preventDefault();

    var name = document.getElementById("nameInput").value;
    var email = document.getElementById("emailInput").value;
    var rating = document.querySelectorAll("#ratingStars li a i.icon_star").length;
    var review = document.getElementById("reviewText").value;

    var currentDate = new Date().toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    });


    var newComment = document.createElement("div");
    newComment.classList.add("course__comment-box");
    newComment.innerHTML = `
        <div class="course__comment-thumb float-start">
            <!-- <img src="assets/img/testimonial/avata-lg-2.png" alt=""> -->
        </div>
        <div class="course__comment-content">
            <div class="course__comment-wrapper ml-70 fix">
                <div class="course__comment-info float-start">
                    <h4>${name}</h4><span>${currentDate}</span>
                </div>
                <div class="course__comment-rating float-start float-sm-end">
                    <ul>
                        ${'<li><i class="icon_star"></i></li>'.repeat(rating)}
                    </ul>
                </div>
            </div>
            <div class="course__comment-text ml-70">
                <p>${review}</p>
            </div>
        </div>
    `;

    var commentsList = document.getElementById("commentsList");
    commentsList.appendChild(newComment);

    document.getElementById("nameInput").value = "";
    document.getElementById("emailInput").value = "";
    document.getElementById("reviewText").value = "";
    document.querySelectorAll("#ratingStars li a i.icon_star").forEach(function (star) {
        star.classList.remove("icon_star");
    });

    newComment.scrollIntoView({ behavior: "smooth" });
});

var ratingStars = document.querySelectorAll("#ratingStars li a");
ratingStars.forEach(function (star) {
    star.addEventListener("click", function (event) {
        event.preventDefault();
        var selectedRating = parseInt(star.getAttribute("data-rating"));
        ratingStars.forEach(function (s) {
            var starRating = parseInt(s.getAttribute("data-rating"));
            if (starRating <= selectedRating) {
                s.querySelector("i").classList.add("icon_star");
            } else {
                s.querySelector("i").classList.remove("icon_star");
            }
        });
    });
});





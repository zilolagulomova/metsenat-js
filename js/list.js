const xIcon = document.querySelector(".x_icon")

xIcon.addEventListener("click", () => {
    window.location.replace("sponsor.html")
})

const fetchSponsorList = () => {
    fetch(`https://metsenatclub.xn--h28h.uz/api/v1/sponsor-list/`)
      .then((res) => res.json())
      .then((data) => data.results[0].id);
  }
  
  fetchSponsorList()
  
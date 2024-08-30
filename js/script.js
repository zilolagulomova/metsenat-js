const token = window.localStorage.getItem("token");
const btn = document.querySelector(".btn");
const totalPaid = document.querySelector(".total_paid");
const totalNeed = document.querySelector(".total_need");
const totalMust = document.querySelector(".total_must_pay");

const dashboard = document.querySelector(".dashboard")
const dashboardContent = document.querySelector(".dashboard_content")
const sponsor = document.querySelector(".sponsor")
const student = document.querySelector(".student")



// Logout
btn.addEventListener("click", () => {
  window.localStorage.removeItem("token");
  window.location.replace("login.html")

  if (!token) {
    window.location.replace("login.html")
  }
})




// DASHBOARD
// sum dashboard
const currency = (num) => isNaN(+num) ? num : (+num).toLocaleString("en-US")
const totalSum = (sum) => {
  totalPaid.innerHTML = `${currency(sum.total_paid)} <span class="text-[#B2B7C1] ml-2">UZS</span>`
  totalNeed.innerHTML = `${currency(sum.total_need)} <span class="text-[#B2B7C1] ml-2">UZS</span>`
  totalMust.innerHTML = `${currency(sum.total_must_pay)} <span class="text-[#B2B7C1] ml-2">UZS</span>`
}
fetch("https://metsenatclub.xn--h28h.uz/api/v1/dashboard/")
  .then((res) => res.json())
  .then((data) => totalSum(data))


// chart dashboard
var options = {
  series: [{
    name: 'series1',
    data: [31, 40, 28, 51, 42, 109, 100]
  }, {
    name: 'series2',
    data: [11, 32, 45, 32, 34, 52, 41]
  }],
  chart: {
    height: 350,
    type: 'area'
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'smooth'
  },
  xaxis: {
    type: 'datetime',
    categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
  },
  tooltip: {
    x: {
      format: 'dd/MM/yy HH:mm'
    },
  },
};
var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();
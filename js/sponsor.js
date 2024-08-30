const tbody = document.querySelector(".tbody");
const token = window.localStorage.getItem("token");
const btn = document.querySelector(".btn");
const sumBtn = document.querySelectorAll(".sumBtn");
const xBtn = document.querySelector(".x-btn");
const modalka = document.querySelector(".modalka");
const filterBtn = document.querySelector(".filter_btn");
const page = document.querySelector(".page");
const paginationDiv = document.querySelector(".pagination");
const left_arrow = document.querySelector(".left_arrow");
const right_arrow = document.querySelector(".right_arrow");
const count = document.querySelector(".count");
const elSelect = document.querySelector(".select");

let paginationPageSize = 10;

// elSelect.value = paginationPageSize;

// Bu change event qachonki elSelect change eventi ishlasa ana o'shanda bunga berilgan funksiyalar ishlaydi.
// ya'ni ichiga chaqiriligan pagination funksiyasi yoki chaqirilgan paginationPageSize o'zgaruvchisi 
elSelect.addEventListener("change", () => {
  paginationPageSize = elSelect.value
  page.textContent = elSelect.value + " "
  pagination(paginationPageSize)
})

// tablitsani chqiaruvchi funksiya. Bu funksiyani qayerdadir chaqirgan taqdirdagina ishalaydi.
const pagination = (pageSize) => {
  let pageNumber = 1;

  $('.pagination').pagination({
    dataSource: `https://metsenatclub.xn--h28h.uz/api/v1/sponsor-list/`,
    pageSize,
    locator: "results",
    pageNumber,
    autoHidePrevious: true,
    autoHideNext: true,
    ajax: function () {
      return {
        data: {
          page: pageNumber,
          page_size: pageSize
        }
      }
    },
    // misol uchun 4 raqamini bossak count orqali 4 sonini olamiz (aniqroq qilib aytganda qiymatni olamiz. U 1,2,3 yoki boshqa raqam bo'lishi mm)
    // va pageNumberga shu qiymatni tenglashtirdik. +count bu stringni integer ya'ni raqam qilib beradi.
    beforePageOnClick: (_, count) => {
      pageNumber = +count;
    },
    totalNumberLocator: (response) => {
      count.innerHTML = response.count;
      return response.count
    },
    ulClassName: 'flex gap-2',
    disableClassName: 'bg-slate-200 py-[8px] px-[15px] flex rounded-full',
    pageClassName: 'bg-white py-[8px] px-[15px] flex cursor-pointer rounded-full',
    activeClassName: 'bg-blue-500 !text-white',
    prevClassName: 'bg-white py-[8px] px-[15px] flex cursor-pointer rounded-full',
    nextClassName: 'bg-white py-[8px] px-[15px] flex cursor-pointer rounded-full',
    callback: function (data) {
      const date = new Date();
      tbody.innerHTML = "";
      console.log(data);
      data.forEach((item, index) => {
        const tr = document.createElement("tr")
        const eyeTd = document.createElement("td")
        const eyeImg = document.createElement("img")
        eyeImg.src = "/img/eye.svg"
        tr.classList = "bg-white w-full cursor-pointer py-2 duration-200 text-center"

        tr.innerHTML = `
        <td class="py-2 ">${index + 1}</td>
        <td class="py-2 font-medium">${item.full_name}</td>
        <td class="py-2 ">${item.phone}</td>
        <td class="py-2">${item.sum} UZS</td>
        <td class="py-2">${item.spent} UZS</td>
        <td class="py-2">${date.getDate()}-${date.getMonth() < 10 ? "0" + (date.getMonth() + 1) : date.getMonth()}-${date.getFullYear()}</td>
        <td class="py-2 td text-[#5BABF2] font-medium ${titleFunc(item.get_status_display)}">${item.get_status_display}</td>
        `
        tr.append(eyeTd)
        eyeTd.append(eyeImg)
        tbody.append(tr)
        eyeTd.addEventListener("click", () => {
        })
      });
    }
  });
};

// Loading paytida ishga tushadi
window.addEventListener("load", () => {
  pagination(paginationPageSize);
})

page.classList.add("text-red-500")

// modalka
xBtn.addEventListener("click", () => {
  modalka.classList.add("hidden")
})
// filter
filterBtn.addEventListener("click", () => {
  modalka.classList.remove("hidden")
})


btn.addEventListener("click", () => {
  window.localStorage.removeItem("token");
  window.location.replace("login.html")

  if (!token) {
    window.location.replace("login.html")
  }
})


tbody.addEventListener("click", () => {
  window.location.replace("list.html")
})

function titleFunc(color) {
  if (color === "Yangi") {
    return "green";
  } else if (color === "Moderatsiyada") {
    return "orange";
  } else {
    return "red";
  }
}

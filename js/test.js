const pagination = document.querySelector(".pagination")

let pageNumber = 11;
let totalPage = 20;


pagination.innerHTML = paginationFunc(totalPage, pageNumber)
function paginationFunc  (totalPage, pageNumber) {
    let beforePage = pageNumber - 1, afterPage = pageNumber + 1;
    let listTag = ""

    if(pageNumber == totalPage) {
        beforePage = beforePage - 2;
    } else if (pageNumber == totalPage - 1){
        beforePage = beforePage - 1;
    }

    if(pageNumber == 1) {
        afterPage = afterPage + 2;
    } else if (pageNumber == 2) {
        afterPage = afterPage + 1;
    }


    for(let i = beforePage; i <= afterPage; i++) {
        if(totalPage < i) {
            break;
        }

        if(i == 0) {
             
        }

        if(pageNumber == i) {
            active = "activve"
        } else {
            active = ""
        }
        console.log(i);
        
            listTag += `<li class="btn ${active}" onclick="paginationFunc(totalPage, ${i})"><span>${i}</span></li>`
    }
    pagination.innerHTML = listTag
    return listTag
}


// const pagination = document.querySelector(".pagination")

// // let pageNumber = 11;
// // let totalPage = 20;


// // pagination.innerHTML = paginationFunc(totalPage, pageNumber)
// function paginationFunc  (pageNumber) {
//     let pageCount = pageNumber.count / 10;
//     let beforePage = pageCount - 1, afterPage = pageCount;
//     let listTag = ""

//     // if(pageCount == totalPage) {
//     //     beforePage = beforePage - 2;
//     // } else if (pageCount == totalPage - 1){
//     //     beforePage = beforePage - 1;
//     // }

//     if(pageCount == 1) {
//         afterPage = afterPage + 2;
//     } else if (pageCount == 2) {
//         afterPage = afterPage + 1;
//     }


//     for(let i = beforePage; i <= afterPage; i++) {
//         // if(totalPage < i) {
//         //     break;
//         // }

//         if(i == 0) {
             
//         }

//         if(pageCount == i) {
//             active = "activve"
//         } else {
//             active = ""
//         }
//         console.log(i);
        
//             listTag += `<li class="btn ${active}" onclick="paginationFunc( ${i})"><span>${i}</span></li>`
//     }
//     pagination.innerHTML = listTag
//     return listTag
// }
// const fetchSponsorList = () => {
//     fetch(`https://metsenatclub.xn--h28h.uz/api/v1/sponsor-list/?page=1`)
//       .then((res) => res.json())
//       .then((data) => paginationFunc(data));
//   }
  
//   fetchSponsorList()  

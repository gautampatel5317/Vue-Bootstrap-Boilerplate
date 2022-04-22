// const userData = fetch("http://192.168.102.92:3003/admin/users")
//   .then((response) => response.json())
//   .then((data) => data.data);
// console.log(userData);
export default {
  data() {
    return {
      users: null,
    };
  },
  created() {
    fetch("http://192.168.102.92:3003/admin/users")
      .then(async (response) => {
        console.log(response);
        const data = await response.json();
        // check for error response
        if (!response.ok) {
          // get error message from body or default to response statusText
          const error = (data && data.message) || response.statusText;
          return Promise.reject(error);
        }
        this.users = data;
      })
      .catch((error) => {
        this.errorMessage = error;
        console.error("There was an error!", error);
      });
  },
};
// export default [
//   {
//     img: "img/theme/bootstrap.jpg",
//     title: "Laravel",
//     budget: "$2500 USD",
//     status: "pending",
//     statusType: "warning",
//     completion: 60,
//   },
//   {
//     img: "img/theme/angular.jpg",
//     title: "Angular Now UI Kit PRO",
//     budget: "$1800 USD",
//     status: "completed",
//     statusType: "success",
//     completion: 100,
//   },
//   {
//     img: "img/theme/sketch.jpg",
//     title: "Black Dashboard",
//     budget: "$3150 USD",
//     status: "delayed",
//     statusType: "danger",
//     completion: 72,
//   },
//   {
//     img: "img/theme/react.jpg",
//     title: "React Material Dashboard",
//     budget: "$4400 USD",
//     status: "on schedule",
//     statusType: "info",
//     completion: 90,
//   },
//   {
//     img: "img/theme/vue.jpg",
//     title: "Vue Paper UI Kit PRO",
//     budget: "$2200 USD",
//     status: "completed",
//     statusType: "success",
//     completion: 100,
//   },
//   {
//     img: "img/theme/bootstrap.jpg",
//     title: "Argon Design System",
//     budget: "$2500 USD",
//     status: "pending",
//     statusType: "warning",
//     completion: 60,
//   },
//   {
//     img: "img/theme/angular.jpg",
//     title: "Angular Now UI Kit PRO",
//     budget: "$1800 USD",
//     status: "completed",
//     statusType: "success",
//     completion: 100,
//   },
//   {
//     img: "img/theme/sketch.jpg",
//     title: "Black Dashboard",
//     budget: "$3150 USD",
//     status: "delayed",
//     statusType: "danger",
//     completion: 72,
//   },
//   {
//     img: "img/theme/vue.jpg",
//     title: "Vue Paper UI Kit PRO",
//     budget: "$2200 USD",
//     status: "completed",
//     statusType: "success",
//     completion: 100,
//   },
// ];

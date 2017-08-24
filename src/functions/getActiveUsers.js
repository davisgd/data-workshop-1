// Works like a charm
// const getActiveUsers = (id) => {
//   let activeUserArray = []
//   DATA.users.forEach((u) => {
//     if (u.accountActive === true) {
//       activeUserArray.push(u)
//     }
//   })
//   return activeUserArray
// }

export default (data) => {
  if (data == null || data.products == null) {
    return null
  }
  const userNames = data.users.map(u => u.name)
}

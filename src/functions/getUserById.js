const getUserById = (data, id) => {
  let user
  if (id == null || data == null || data.users == null) {
    return null
  }
  data.users.forEach((u) => {
    if (u.id === id) {
      user = u
    }
  })
  return user
}

export default getUserById

export const signup = (user) => {
  return $.ajax({
    method: "POST",
    url: "/api/user",
    data: {user}
  })
}

export const login = (user) => {
  return $.ajax({
    method: "POST",
    url: "/api/sessions",
    data: {user}
  })
}


export const logout = () => {
  return $.ajax({
    method: "DELETE",
    url: "/api/sessions"
  })
}

// user = {user: {username: "test", password: "password", email: "hahahasdfasd"}}

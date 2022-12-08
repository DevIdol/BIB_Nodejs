const authorized = true;

const getUserId = (id) => {
  return new Promise((resolve, reject) => {
    !authorized && reject("Unauthorized Access");
    resolve({
      id: id,
      username: 'Joe'
    })
  })
}

try {
  getUserId(1).then(user => console.log(user.username))
} catch (error) {
  console.log(`Error: ${error}`)
}
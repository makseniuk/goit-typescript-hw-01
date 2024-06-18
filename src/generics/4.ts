type UserProfile = {
  name: string;
  surname: string;
  email: string;
  password: string;
}

function createOrUpdateUser(initialValues: Partial<User>) {
  if (initialValues.email) {
    console.log(`Updating user with email: ${initialValues.email}`);
  }

}

createOrUpdateUser({ 
  email: 'user@mail.com',  
});







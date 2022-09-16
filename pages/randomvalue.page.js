class LoginPage {
  constructor(page) {
        this.page = page;
  }
  async generateUsername() {
    let allchars = 'abcdefghijklmnopqrstuvwxyz1234567890';
    let username = '';
    for(let i=0; i<15; i++){
     username += allchars[Math.floor(Math.random() * allchars.length)];
        }
         return username;
     }
  async generatePassword() {
    let allchars = 'abcdefghijklmnopqrstuvwxyz1234567890';
    let password = '';
    for(let i=0; i<15; i++){
            password += allchars[Math.floor(Math.random() * allchars.length)];
           }
         return password;
        } 
}


export class Contact {
  name = "";
  lastName = "";
  email = "";
  connected = true;

  constructor(name, lastName, email, connected) {
    this.name = name;
    this.lastName = lastName;
    this.email = email;
    this.connected = connected;
  }
}

class Validator {
  constructor(email, phone, date, domen) {
    this.email = email;
    this.phone = phone;
    this.date = date;
    this.phone2 = domen;
  }
}

class EmailValidator extends Validator {
  constructor() {
    super(email, phone, date, domen);
  }
  isEmail(str) {
    if (str.validity.typeMismatch) {
      console.log(`${this.email} false!`);
    } else {
      console.log(`${this.email} true`);
    }
  }
}

class DomainAndPhoneAndDateValidator extends EmailValidator {
  constructor() {
    super(phone, date, domen);
  }
  isDomain() {
    console.log(`Домен ${this.domen}`);
  }
  isDate() {
    console.log(`Дата ${this.date}`);
  }
  isPhone() {
    console.log(`Номер телефона ${this.phone}`);
  }
}

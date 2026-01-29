class Anwar {
  constructor(namazi) {
    this.namazi = namazi;
  }

  getAnwar() {
    return "Anwar is " + this.namazi;
  }
}

class Raza extends Anwar {
  constructor(namazi, mind) {
    super(namazi);
    this.mind = mind;
  }

  getRaza() {
    console.log(
      "Mohammad Raza is " + this.namazi + " and mind is " + this.mind,
    );
  }
}

let r = new Raza("Namazi", "Sharp");
r.getAnwar(); // inherited method
r.getRaza();

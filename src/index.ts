export default class Log {
  static success(message: string) {
    console.log(`%c ${message}`, "color: green");
  }

  static danger(message: string) {
    console.log(`%c ${message}`, "color: orange");
  }

  static info(message: string) {
    console.log(`%c ${message}`, "color: black; background: yellow");
  }

  static error(message: string) {
    console.log(`%c ${message}`, "color: red; text-decoration: underline");
  }
}

// ES5

function sayHello1(name) {
  /**
   * Take a paramenter called name and return a string that
   * e.g. "Hello, John"
   * */
  return `Hello, ${name}`;
}

// ES6

const sayHello2 = (name, timeOfDay) => {
  /**
   * Take two paramenter one name and second one called timeOfDay (morning, evening, night) return a string that greets the name at that time of day
   * e.g. with name="John" and timeOfDay="morning", return "Good morning, John". The COMMA IS IMPORTANT!
   * */
  return `Good ${timeOfDay}, ${name}`;
};

// DO NOT CHANGE ANYTHING BELOW THIS LINE
export { sayHello1, sayHello2 };

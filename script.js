/*
const employees = [
  { id: 1, name: "Alice", position: "Developer" },
  { id: 2, name: "Bob", position: "Designer" },
  { id: 3, name: "Charlie", position: "Manager" },
  { id: 4, name: "David", position: "Tester" },
];

const appendingLists = document.querySelector("#appendingLists");

appendingLists.innerHTML = employees.map(
  (employee) =>
    `<p>
    <span><strong>ID:</strong> ${employee.id}</span><br>
    <span><strong>Name:</strong> ${employee.name}</span><br>
    <span><strong>Position:</strong> ${employee.position}</span><br>
    <hr />
    </p>`
);
*/

// ---------------------------------------------------------------------------
/*
// 1.
const nums = [12, 5, 20, 7, 8, 15, 30];
const filterNums = nums.filter((num) => num % 2 === 0);
console.log("Even nums:", filterNums.join(", "));

// 2.
const words = ["kiwi", "mango", "apple", "orange", "banana"];
const filterWords = words.filter((word) => word.length > 5);
console.log("Words length greator than 5:", filterWords.join(", "));

// 3.
const wordsTwice = ["Sun", "Moon", "Star", "Planet", "Saturn"];
const filterWordsTwice = wordsTwice.filter((word) => word.charAt(0) === "S");
console.log("Words starting from letter 'S':", filterWordsTwice.join(", "));

// 4.
const threeMultiples = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filterThreeMultiples = threeMultiples.filter((num) => num % 3 === 0);
console.log(
  "Filter number with multiples of 3: ",
  filterThreeMultiples.join(", ")
);

// 5.
const numbs = [21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
const filterNumsByMultiples = numbs.filter(
  (num) => num % 3 === 0 && num % 7 === 0
);
console.log("Nums filter by 3 and 7:", filterNumsByMultiples.join(", "));

// 6.
const wordsThrice = ["APPLE", "banana", "KIWI", "orange", "GRAPE"];
const filterWordsThrice = wordsThrice.filter(
  (word) => word.charAt(0) === word.charAt(0).toLowerCase()
);
console.log("Words of lowercase: ", filterWordsThrice.join(", "));

// 7.
const wordsY = ["happy", "sad", "sunny", "cloudy", "rainy"];
const filterWordsNotContainA = wordsY.filter((word) => word.includes("a"));
console.log("words containing lettr 'a':", filterWordsNotContainA.join(", "));

// 8.
const numsOnetoTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filterMultiples = numsOnetoTen.filter(
  (num) => num % 2 === 0 && num % 3 === 0
);
console.log("Filter number multiple of 2 and 3: ", filterMultiples.join(", "));

// 9.
const feelingWords = ["happy", "sad", "weepy", "sleepy", "rainy"];
const filterByIncludes = feelingWords.filter(
  (word) => word.includes("a") || word.includes("y")
);
console.log("Filter by 'Y' or 'A': ", filterByIncludes.join(", "));

// 10.
const newNums = [41, 12, 31, 14, 52, 6, 27, 38, 29, 100];
const filterBetween = newNums.filter((num) => num <= 40 && num >= 20);
console.log("numbers between 20 and 40: ", filterBetween.join(", "));
*/

// ---------------------------------------------------------------------------
/*
// 1.
const smartphones = [
  { brand: "iPhone", year: 2019, cameraResolution: 12.2 },
  { brand: "Samsung", year: 2021, cameraResolution: 13 },
  { brand: "Google Pixel", year: 2018, cameraResolution: 11 },
];

console.log(
  smartphones.filter(
    (phone) => phone.year > 2020 && phone.cameraResolution > 12
  )
);

// 2.
const books = [
  { title: "The Da Vinci Code", year: 2003, pages: 454 },
  { title: "The Alchemist", year: 1988, pages: 197 },
  { title: "The Hunger Games", year: 2008, pages: 374 },
];

console.log(books.filter((book) => book.year > 2005 && book.pages < 400));

// 3.
const students = [
  { name: "Alice", age: 20, gpa: 3.8 },
  { name: "Bob", age: 17, gpa: 3.2 },
  { name: "Charlie", age: 19, gpa: 3.9 },
];

console.log(
  students.filter((student) => student.age > 18 && student.gpa > 3.5)
);

// 4.
const employees = [
  { name: "Emily", salary: 55000, hireYear: 2008 },
  { name: "David", salary: 48000, hireYear: 2012 },
  { name: "Grace", salary: 60000, hireYear: 2006 },
];

console.log(
  employees.filter((emp) => emp.salary > 50000 || emp.hireYear > 2010)
);

// 5.
const products = [
  { name: "Laptop", price: 1200, inStock: true },
  { name: "Headphones", price: 50, inStock: false },
  { name: "Smartphone", price: 800, inStock: true },
];

console.log(products.filter((prod) => prod.price > 100 && prod.inStock));

// 6.
const movies = [
  { title: "Inception", year: 2010, rating: 8.8, genre: "Sci-Fi" },
  { title: "The Dark Knight", year: 2008, rating: 9.0, genre: "Action" },
  { title: "Avatar", year: 2009, rating: 7.8, genre: "Adventure" },
  { title: "The Dune", year: 2018, rating: 6.0, genre: "Action" },
];

console.log(
  movies.filter(
    (movie) =>
      movie.year > 2010 && movie.rating > 8.0 && movie.genre === "Action"
  )
);

// 7.
const apartments = [
  { location: "Downtown", price: 1600, bedrooms: 2, safeNeighbourhood: true },
  { location: "Suburb", price: 1400, bedrooms: 1, safeNeighbourhood: false },
  {
    location: "City Center",
    price: 1800,
    bedrooms: 3,
    safeNeighbourhood: true,
  },
];

console.log(
  apartments.filter(
    (flat) => flat.price > 1500 && flat.bedrooms >= 1 && flat.safeNeighbourhood
  )
);

// 8.
const productsTwo = [
  {
    name: "Laptop",
    price: 800,
    onlineAvailability: true,
    category: "Electronics",
  },
  {
    name: "Book",
    price: 20,
    onlineAvailability: false,
    category: "Literature",
  },
  { name: "Book", price: 40, onlineAvailability: false, category: "Classic" },
  {
    name: "Headphones",
    price: 60,
    onlineAvailability: true,
    category: "Electronics",
  },
];

console.log(
  productsTwo.filter(
    (prod) =>
      prod.price < 50 &&
      prod.category !== "Electronics" &&
      prod.onlineAvailability
  )
);

// 9.
const jobApplicants = [
  {
    name: "Alice",
    experienceYears: 4,
    englishProficiency: true,
    relevantDegree: true,
  },

  {
    name: "Bob",
    experienceYears: 2,
    englishProficiency: false,
    relevantDegree: true,
  },

  {
    name: "Charlie",
    experienceYears: 5,
    englishProficiency: true,
    relevantDegree: false,
  },
];

console.log(
  jobApplicants.filter(
    (applicant) =>
      applicant.experienceYears > 3 &&
      applicant.englishProficiency &&
      applicant.relevantDegree
  )
);

// 10.
const restaurants = [
  {
    name: "Gourmet Grill",
    stars: 4.5,
    vegetarianOptions: true,
    location: "City",
  },

  {
    name: "Fast Noodles",
    stars: 3.8,
    vegetarianOptions: false,
    location: "Suburb",
  },

  {
    name: "Healthy Bites",
    stars: 4.2,
    vegetarianOptions: true,
    location: "City",
  },

  {
    name: "Chat Street",
    stars: 3.5,
    vegetarianOptions: false,
    location: "Suburb",
  },
];

console.log(
  restaurants.filter(
    (res) => res.stars > 4 && res.vegetarianOptions && res.location !== "City"
  )
);

// 11.
const booksTwice = [
  { title: "The Da Vinci Code", year: 2003, rating: 8.6, genre: "Mystery" },
  { title: "To Kill a Mockingbird", year: 1960, rating: 8.3, genre: "Drama" },
  { title: "Gone Girl", year: 2012, rating: 9.0, genre: "Thriller" },
];

console.log(
  booksTwice.filter(
    (book) =>
      book.year > 2000 &&
      book.rating > 7.5 &&
      (book.genre !== "Mystery" || book.genre !== "Thriller")
  )
);

// 12.
const employeesTwice = [
  {
    name: "David",
    experienceYears: 6,
    englishProficiency: true,
    department: "Engineering",
  },

  {
    name: "Emma",
    experienceYears: 4,
    englishProficiency: false,
    department: "Finance",
  },

  {
    name: "Alex",
    experienceYears: 7,
    englishProficiency: true,
    department: "Marketing",
  },
];

console.log(
  employeesTwice.filter(
    (employee) =>
      employee.experienceYears > 5 &&
      employee.englishProficiency &&
      (employee.department !== "Marketing" ||
        employee.department !== "Engineering")
  )
);
*/

// ------------------------------------------------------------
/*
const statuses = [
  { id: 1, title: "Task 1", status: "todo" },
  { id: 2, title: "Task 2", status: "inProgress" },
  { id: 3, title: "Task 3", status: "completed" },
  { id: 4, title: "Task 4", status: "todo" },
];

const selectedList = document.querySelector("#selectedList");
const appendingLists2 = document.querySelector("#appendingLists2");

const displayStatuses = (statuses, statusVal) => {
  appendingLists2.innerHTML =
    statusVal === "all"
      ? statuses.map(
          (status) => `
      <li>
      <span><strong>ID:</strong> ${status.id}</span><br>
          <span><strong>Title:</strong> ${status.title}</span><br>
              <span><strong>Status:</strong> ${status.status}</span><br>
              <hr>
      </li>
      `
        )
      : statuses
          .filter((status) => status.status === statusVal)
          .map(
            (status) => `
      <li>
      <span><strong>ID:</strong> ${status.id}</span><br>
          <span><strong>Title:</strong> ${status.title}</span><br>
              <span><strong>Status:</strong> ${status.status}</span><br>
              <hr>
      </li>
      `
          );
};

displayStatuses(statuses, "all");

selectedList.addEventListener("change", (e) => {
  const selectedListVal = e.target.value;
  displayStatuses(statuses, selectedListVal);
});
*/

// -------------------------------------------------------------
/*
const employeeData = [
  { id: 1, name: "Alice", experienceInYears: 2 },
  { id: 2, name: "Bob", experienceInYears: 9 },
  { id: 3, name: "Charlie", experienceInYears: 4 },
  { id: 4, name: "John", experienceInYears: 19 },
];

const checkedDesc = document.querySelector("#checkedDesc");
const appendingLists3 = document.querySelector("#appendingLists3");
const totalExperience = document.querySelector("#totalExperience");

const displayEmployees = (data, truthyVal) => {
  if (truthyVal) {
    const filteredData = data.filter((emp) => emp.experienceInYears > 5);

    appendingLists3.innerHTML = filteredData
      .filter((emp) => emp.experienceInYears > 5)
      .map(
        (emp) => `
      <li>
      <span><strong>ID:</strong> ${emp.id}</span><br>
      <span><strong>Name:</strong> ${emp.name}</span><br>
      <span><strong>Experience:</strong> ${emp.experienceInYears} years</span><br>
      <hr>
      </li>
      `
      );
    calcTotalExperience(filteredData);
  } else {
    appendingLists3.innerHTML = data.map(
      (emp) => `
        <li>
        <span><strong>ID:</strong> ${emp.id}</span><br>
        <span><strong>Name:</strong> ${emp.name}</span><br>
        <span><strong>Experience:</strong> ${emp.experienceInYears} years</span><br>
        <hr>
        </li>
        `
    );
    calcTotalExperience(data);
  }
};

displayEmployees(employeeData, false);

checkedDesc.addEventListener("change", (e) => {
  const { checked } = e.target;

  checked
    ? displayEmployees(employeeData, true)
    : displayEmployees(employeeData, false);
});

function calcTotalExperience(data) {
  const totalExperienceVal = data.reduce(
    (acc, curr) => (acc += curr.experienceInYears),
    0
  );

  totalExperience.innerHTML = `<strong>Total Experience:</strong> ${totalExperienceVal} years`;
}

calcTotalExperience(employeeData);
*/

// -------------------------------------------------------------
/*
const items = [
  { id: 1, item: "Item 1", status: "In Sale" },
  { id: 2, item: "Item 2", status: "New Release" },
  { id: 3, item: "Item 3", status: "New Release" },
  { id: 4, item: "Item 4", status: "In Sale" },
  { id: 5, item: "Item 5", status: "In Sale" },
];

const appendingLists4 = document.querySelector("#appendingLists4");
const radioElems = document.getElementsByName("status");

const displayItemsFunc = (data, filterVal) => {
  appendingLists4.innerHTML = "";

  const filteredItems =
    filterVal !== "All"
      ? data.filter((item) => item.status === filterVal)
      : items;

  const displayItems = filteredItems.map((item) => {
    const liElem = document.createElement("li");
    liElem.innerHTML = `<strong>Id: </strong> ${item.id} <br> <strong>Item:</strong> ${item.item}<br> <strong>Status:</strong> ${item.status} <hr>`;

    appendingLists4.appendChild(liElem);
  });
};

displayItemsFunc(items, "All");

radioElems.forEach((elem) => {
  elem.addEventListener("change", (e) => {
    const { value } = e.target;

    displayItemsFunc(items, value);
  });
});
*/
//-----------------------------------------------------

const numPositive = [-2, 3, 4, -5, 6];
console.log(
  numPositive.reduce((acc, curr) => {
    if (curr > 0) acc *= curr;
    return acc;
  }, 1)
);

const wordsLetter = ["apple", "banana", "kiwi", "orange", "grape"];
console.log(
  wordsLetter.reduce((acc, curr) => {
    curr = curr.charAt(0);
    acc[curr] = (acc[curr] || 0) + 1;

    return acc;
  }, {})
);

const stationeryWords = [
  "pen",
  "notebook",
  "eraser",
  "notebook",
  "pencil",
  "notebook",
  "pencil",
];
console.log(
  stationeryWords.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {})
);

const numbers = [1, 2, 3, 4, 5];
console.log(
  numbers.reduce((acc, curr) => {
    acc += curr ** 2;
    return acc;
  }, 0)
);

const wordsCaps = ["hello", "world", "how", "are", "you"];
console.log(
  wordsCaps.reduce(
    (acc, curr) => (acc += curr.charAt(0).toUpperCase() + curr.slice(1) + " "),
    ""
  )
);

const details = [
  { key: "category", value: "Electronics" },
  { key: "rating", value: 4.5 },
  { key: "available", value: true },
];
// Output: { category: 'Electronics', rating: 4.5, available: true }

console.log(
  details.reduce((acc, curr) => {
    acc[curr.key] = curr.value;

    return acc;
  }, {})
);

const groceryItems = [
  { item: "Fruit", name: "Apple" },
  { item: "Fruit", name: "Banana" },
  { item: "Fruit", name: "Orange" },
];

console.log(
  groceryItems.reduce((acc, curr) => {
    acc.push(curr.name);
    return acc;
  }, [])
);

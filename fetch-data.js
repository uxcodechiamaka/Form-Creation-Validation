// 1️⃣ Define an async function to fetch and display data
async function fetchUserData() {
  const apiUrl = 'https://jsonplaceholder.typicode.com/users'; // API endpoint
  const dataContainer = document.getElementById('api-data');   // Where we show users

  try {
    // 2️⃣ Fetch the data
    const response = await fetch(apiUrl);

    // 3️⃣ Check if response was successful
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    // 4️⃣ Parse the JSON data
    const users = await response.json();

    // 5️⃣ Clear the loading text and create a list
    dataContainer.innerHTML = '';
    const userList = document.createElement('ul');

    // 6️⃣ For each user, create a new list item with their name
    users.forEach(user => {
      const li = document.createElement('li');
      li.textContent = user.name;
      userList.appendChild(li);
    });

    // 7️⃣ Display the list on the page
    dataContainer.appendChild(userList);

  } catch (error) {
    // 8️⃣ On error, show a message
    dataContainer.innerHTML = '';
    dataContainer.textContent = 'Failed to load user data.';
    console.error('Fetch error:', error);
  }
}

// 9️⃣ Run the function when the page has fully loaded
document.addEventListener('DOMContentLoaded', fetchUserData);

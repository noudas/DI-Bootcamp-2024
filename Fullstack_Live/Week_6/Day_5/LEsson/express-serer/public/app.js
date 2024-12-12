// Fetch the users from the server and display them
async function fetchAndDisplayUsers() {
    try {
      const response = await fetch("http://localhost:3000/users");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const users = await response.json();
      const usersList = document.getElementById("users-list");
  
      // Clear the list in case of multiple calls
      usersList.innerHTML = "";
  
      // Populate the list with users
      users.forEach(user => {
        const li = document.createElement("li");
        li.textContent = `${user.name} (${user.email})`;
        usersList.appendChild(li);
      });
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  }
  
  // Call the function to fetch and display users
  fetchAndDisplayUsers();
  

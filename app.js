fetch('./vocab-data.json')
  .then(response => response.json())
  .then(data => {
    vocabBank = data;
    
    const categorySelect = document.getElementById("category-select");


    vocabBank.forEach(category => {
      const option = document.createElement("option");
      option.value = category.name;
      option.textContent = category.name;
      categorySelect.appendChild(option);
    });

    function displaySelectedCategory() {
      const selectedCategory = categorySelect.value;
      const category = vocabBank.find((category) => category.name === selectedCategory);

      if (category){
        const tableBody = document.getElementById("phrases-body");
        tableBody.innerHTML = "";

        category.phrases.forEach(phrase => {
          const row = tableBody.insertRow();
          row.insertCell().textContent = phrase.english;
          row.insertCell().textContent = phrase.cantonese;
          row.insertCell().textContent = phrase.vietnamese;
          row.insertCell().textContent = phrase.japanese;
        });
      }
    }

    categorySelect.addEventListener("change", displaySelectedCategory);
  })
  .catch(error => {
    console.error('Error loading vocabulary data:', error);
  });

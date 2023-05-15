const vocabBank = [
    {
        name: "Thanks",
        phrases: [
            {
            english: "Thank you",
            cantonese: "m4 goi1 saai3",
            vietnamese: "Cảm ơn nhiều lắm",
            japanese: "ありがとう"
            },
            {
            english: "Thank you (formal)",
            cantonese: "do1 ze6 saai3",
            vietnamese: "Xin cảm ơn",
            japanese: "ありがとうございます"
            },
            {
            english: "You're welcome",
            cantonese: "m4 sai2",
            vietnamese: "Không có gì",
            japanese: "どいたま / とんでもない"
            },
            {
            english: "You're welcome (formal)",
            cantonese: "m4 sai2 haak3 hei3",
            vietnamese: "Không có gì đâu ạ",
            japanese: "どう致しまして"
            },
        ]
    },
    {
        name: "Greetings",
        phrases: [
            {
            english: "Hello",
            cantonese: "nei5 hou2",
            vietnamese: "Xin chào",
            japanese: "こんにちは"
            },
            {
            english: "Good morning",
            cantonese: "zou2 san4",
            vietnamese: "Chào buổi sáng",
            japanese: "おはよう"
            },
            {
            english: "Good night",
            cantonese: "zou2 tau2",
            vietnamese: "Chào buổi tối",
            japanese: "おやすみ"
            },
        ]
    }
];

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
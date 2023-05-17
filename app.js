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
    },
    {
        name: "Repeat Request",
        phrases: [
            {
            english: "Say it again, please.",
            cantonese: "m4 goi1 gong2 do1 ci3",
            vietnamese: "Xin nói lại lần nữa.",
            japanese: "もう一度言ってください"
            },
            {
            english: "Please say it slowly.",
            cantonese: "m4 goi1 gong2 maan6 di1",
            vietnamese: "Xin nói chậm lại.",
            japanese: "ゆっくり言ってください"
            },
            {
            english: "Can you repeat, please?",
            cantonese: "m4 goi1 gong2 do1 ci3",
            vietnamese: "Bạn có thể nói lại được không?",
            japanese: "もう一度、お願いします"
            },
        ]
    }
    {
        name: "Numbers",
        phrases: [
            {
            english: "1",
            cantonese: "jat1",
            vietnamese: "Một",
            japanese: "一"
            },
            {
            english: "2",
            cantonese: "ji6",
            vietnamese: "Hai",
            japanese: "二"
            },
            {
            english: "3",
            cantonese: "saam1",
            vietnamese: "Ba",
            japanese: "三"
            },
            {
            english: "4",
            cantonese: "sei3",
            vietnamese: "Bốn",
            japanese: "四"
            },
            {
            english: "5",
            cantonese: "ng5",
            vietnamese: "Năm",
            japanese: "五"
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
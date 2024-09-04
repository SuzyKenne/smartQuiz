const CategoryData = [
    {
      "id": 1,
      "name": "General Knowledge",
      "topics": [
        {
          "id": 101,
          "name": "World Capitals",
          "difficulty_levels": [
            {
              "level": "easy",
              "questions": [
                {
                  "id": 10101,
                  "question_text": "What is the capital of Canada?",
                  "answers": ["Ottawa", "Toronto", "Vancouver", "Montreal"],
                  "correct_answer": "Ottawa"
                }
              ]
            },
            {
              "level": "medium",
              "questions": [
                {
                  "id": 10102,
                  "question_text": "What is the capital of Australia?",
                  "answers": ["Sydney", "Canberra", "Melbourne", "Perth"],
                  "correct_answer": "Canberra"
                }
              ]
            },
            {
              "level": "hard",
              "questions": [
                {
                  "id": 10103,
                  "question_text": "What is the capital of Kazakhstan?",
                  "answers": ["Almaty", "Astana", "Shymkent", "Aktobe"],
                  "correct_answer": "Astana"
                }
              ]
            }
          ]
        },
        {
          "id": 102,
          "name": "Famous Authors",
          "difficulty_levels": [
            {
              "level": "easy",
              "questions": [
                {
                  "id": 10201,
                  "question_text": "Who wrote 'Pride and Prejudice'?",
                  "answers": ["Jane Austen", "Charlotte Brontë", "Emily Brontë", "Mary Shelley"],
                  "correct_answer": "Jane Austen"
                }
              ]
            },
            {
              "level": "medium",
              "questions": [
                {
                  "id": 10202,
                  "question_text": "Who is the author of '1984'?",
                  "answers": ["George Orwell", "Aldous Huxley", "Ray Bradbury", "Philip K. Dick"],
                  "correct_answer": "George Orwell"
                }
              ]
            },
            {
              "level": "hard",
              "questions": [
                {
                  "id": 10203,
                  "question_text": "Who wrote 'In Search of Lost Time'?",
                  "answers": ["Marcel Proust", "James Joyce", "Virginia Woolf", "Franz Kafka"],
                  "correct_answer": "Marcel Proust"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": 2,
      "name": "Science",
      "topics": [
        {
          "id": 201,
          "name": "Physics",
          "difficulty_levels": [
            {
              "level": "easy",
              "questions": [
                {
                  "id": 20101,
                  "question_text": "What is the speed of light?",
                  "answers": ["299,792 km/s", "150,000 km/s", "1,080 km/s", "300 km/s"],
                  "correct_answer": "299,792 km/s"
                }
              ]
            },
            {
              "level": "medium",
              "questions": [
                {
                  "id": 20102,
                  "question_text": "What is the unit of electrical resistance?",
                  "answers": ["Ohm", "Volt", "Watt", "Ampere"],
                  "correct_answer": "Ohm"
                }
              ]
            },
            {
              "level": "hard",
              "questions": [
                {
                  "id": 20103,
                  "question_text": "What is the theoretical maximum speed according to Einstein's theory of relativity?",
                  "answers": ["Speed of light", "Speed of sound", "Escape velocity", "Hypervelocity"],
                  "correct_answer": "Speed of light"
                }
              ]
            }
          ]
        },
        {
          "id": 202,
          "name": "Chemistry",
          "difficulty_levels": [
            {
              "level": "easy",
              "questions": [
                {
                  "id": 20201,
                  "question_text": "What is the chemical formula for water?",
                  "answers": ["H2O", "O2", "CO2", "HO"],
                  "correct_answer": "H2O"
                }
              ]
            },
            {
              "level": "medium",
              "questions": [
                {
                  "id": 20202,
                  "question_text": "What is the atomic number of carbon?",
                  "answers": ["6", "8", "12", "14"],
                  "correct_answer": "6"
                }
              ]
            },
            {
              "level": "hard",
              "questions": [
                {
                  "id": 20203,
                  "question_text": "What is the molecular weight of NaCl?",
                  "answers": ["58.44 g/mol", "18.02 g/mol", "22.99 g/mol", "35.45 g/mol"],
                  "correct_answer": "58.44 g/mol"
                }
              ]
            }
          ]
        }
      ]
    }
  ];
  
  export default CategoryData;
  
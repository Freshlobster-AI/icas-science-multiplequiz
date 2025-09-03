document.addEventListener('DOMContentLoaded', () => {

    // ALL QUIZ DATA IS NOW INSIDE THIS ONE FILE
    const allQuizzes = [
        {
            title: "Text Comprehension 1",
            data: [
                {
                    question: "Maya walked into the kitchen and saw muddy paw prints all over the clean floor. Her dog, Rusty, was hiding under the table, his tail tucked between his legs. On the counter, an empty cake plate sat where a chocolate birthday cake had been just an hour ago. Maya sighed and put her hands on her hips. Why was Maya most likely sighing?",
                    options: ["She was very tired from school.", "She was disappointed about the mess and the missing cake.", "She was happy the dog had a snack.", "She wanted to clean the floor."],
                    correctAnswer: 1,
                    explanation: "The correct answer is B. The clues (muddy paws, hiding dog, empty cake plate) suggest she is upset about the situation."
                },
                {
                    question: "Maya walked into the kitchen and saw muddy paw prints all over the clean floor. Her dog, Rusty, was hiding under the table, his tail tucked between his legs. On the counter, an empty cake plate sat where a chocolate birthday cake had been just an hour ago. Maya sighed and put her hands on her hips. what character trait best describes Rusty in this story?",
                    options: ["Brave", "Guilty", "Angry", "Proud"],
                    correctAnswer: 1,
                    explanation: "The correct answer is B. Rusty is hiding with his tail between his legs, which shows he feels guilty."
                },
                {
                    question: "Maya walked into the kitchen and saw muddy paw prints all over the clean floor. Her dog, Rusty, was hiding under the table, his tail tucked between his legs. On the counter, an empty cake plate sat where a chocolate birthday cake had been just an hour ago. Maya sighed and put her hands on her hips. why did Rusty hide under the table?",
                    options: ["He was playing a game of hide-and-seek.", "He was scared of a loud noise outside.", "He knew he had done something wrong.", "He was waiting for Maya to feed him."],
                    correctAnswer: 2,
                    explanation: "The correct answer is C. Hiding is a common behaviour for a pet that knows it has misbehaved."
                },
                {
                    question: "Maya walked into the kitchen and saw muddy paw prints all over the clean floor. Her dog, Rusty, was hiding under the table, his tail tucked between his legs. On the counter, an empty cake plate sat where a chocolate birthday cake had been just an hour ago. Maya sighed and put her hands on her hips. what is the main problem in this short story?",
                    options: ["Maya has lost her school bag.", "The kitchen floor is too shiny.", "A birthday cake is missing and there is a mess.", "Rusty the dog is feeling sick."],
                    correctAnswer: 2,
                    explanation: "The correct answer is C. The central issue described is the missing cake and the muddy paw prints."
                },
                {
                    question: "Maya walked into the kitchen and saw muddy paw prints all over the clean floor. Her dog, Rusty, was hiding under the table, his tail tucked between his legs. On the counter, an empty cake plate sat where a chocolate birthday cake had been just an hour ago. Maya sighed and put her hands on her hips. what do you think Maya will do next?",
                    options: ["Bake another cake.", "Take Rusty for a walk.", "Give Rusty a treat.", "Clean up the mess and talk to Rusty."],
                    correctAnswer: 3,
                    explanation: "The correct answer is D. Based on her sighing and putting her hands on her hips, the most logical next step is to address the problem."
                },
                {
                    question: "'The Secret of the Hidden Waterfall' is a fantastic book! I was so impressed with the main character, a brave girl named Lily who isn't afraid of anything. The story is full of twists and turns, and I never knew what was going to happen next. This is a must-read for anyone who loves adventure. Don't miss it! What is the main purpose of this text?",
                    options: ["To tell the full story of the book.", "To complain about the book.", "To persuade people to read the book.", "To introduce the author of the book."],
                    correctAnswer: 2,
                    explanation: "The correct answer is C. The text is a book review, and its goal is to encourage others to read the book."
                },
                {
                    question: "From the book review, how does the writer feel about the book?",
                    options: ["Bored", "Confused", "Annoyed", "Excited"],
                    correctAnswer: 3,
                    explanation: "The correct answer is D. Words like 'fantastic' and 'impressed' show the writer's excitement."
                },
                {
                    question: "From the book review, which word shows the writer's positive feelings?",
                    options: ["afraid", "hidden", "secret", "fantastic"],
                    correctAnswer: 3,
                    explanation: "The correct answer is D. 'Fantastic' is a strongly positive adjective used to praise the book."
                },
                {
                    question: "From the book review, who would enjoy this book the most?",
                    options: ["People who like learning about science.", "People who like funny stories.", "People who like adventure stories.", "People who like books about animals."],
                    correctAnswer: 2,
                    explanation: "The correct answer is C. The review explicitly says it's a 'must-read for anyone who loves adventure'."
                },
                {
                    question: "From the book review, what does the reviewer mean by 'full of twists and turns'?",
                    options: ["The book has a lot of surprise events.", "The characters do a lot of spinning.", "The story is about a winding road.", "The pages of the book were bent."],
                    correctAnswer: 0,
                    explanation: "The correct answer is A. This is an idiom meaning the plot has many unexpected developments."
                },
                {
                    question: "A character bites their lip and looks at the ground while being asked a question. They are likely feeling:",
                    options: ["Confident", "Nervous", "Excited", "Silly"],
                    correctAnswer: 1,
                    explanation: "The correct answer is B. Biting a lip and avoiding eye contact are common signs of nervousness or anxiety."
                },
                {
                    question: "The purpose of a recipe is to:",
                    options: ["Entertain you", "Inform you about history", "Persuade you to buy something", "Instruct you on how to do something"],
                    correctAnswer: 3,
                    explanation: "The correct answer is D. A recipe provides step-by-step instructions for preparing food."
                },
                {
                    question: "If a science text explains how a caterpillar turns into a butterfly, its main purpose is to:",
                    options: ["Explain a process", "Tell a funny story", "Review a product", "Argue a point"],
                    correctAnswer: 0,
                    explanation: "The correct answer is A. This type of text is explanatory, detailing the steps of a biological process."
                },
                {
                    question: "A narrative about a lonely dragon who finds a friend is mainly about:",
                    options: ["Adventure", "Friendship", "History", "Science"],
                    correctAnswer: 1,
                    explanation: "The correct answer is B. The central theme described is the formation of a friendship."
                },
                {
                    question: "If a character in a story always shares their toys, they can be described as:",
                    options: ["Selfish", "Generous", "Grumpy", "Shy"],
                    correctAnswer: 1,
                    explanation: "The correct answer is B. Generosity is the quality of being kind and willing to share."
                },
                {
                    question: "'Sam slammed the door and stomped to his room.' Why is Sam likely upset?",
                    options: ["He is tired", "He is happy", "He is angry", "He is hungry"],
                    correctAnswer: 2,
                    explanation: "The correct answer is C. Slamming doors and stomping are actions that express anger."
                },
                {
                    question: "The title 'How to Build the Best Sandcastle' suggests the text will be:",
                    options: ["A poem", "A set of instructions", "A mystery story", "A biography"],
                    correctAnswer: 1,
                    explanation: "The correct answer is B. Titles beginning with 'How to' usually introduce instructional texts."
                },
                {
                    question: "In a story, two characters both refuse to give up during a difficult race. A shared character trait is:",
                    options: ["Laziness", "Determination", "Sadness", "Fear"],
                    correctAnswer: 1,
                    explanation: "The correct answer is B. Determination is the quality of continuing to try to do something, even when it is difficult."
                },
                {
                    question: "A review that says, 'The movie was a total waste of time,' shows the writer felt:",
                    options: ["Pleased", "Disappointed", "Confused", "Hopeful"],
                    correctAnswer: 1,
                    explanation: "The correct answer is B. The phrase 'waste of time' indicates strong disappointment and a negative opinion."
                },
                {
                    question: "A common outcome of planting a seed and watering it is:",
                    options: ["It disappears", "It turns into a rock", "It grows into a plant", "It melts"],
                    correctAnswer: 2,
                    explanation: "The correct answer is C. This is a basic cause-and-effect relationship in botany."
                }
            ]
        },
        {
            title: "Text Comprehension 2",
            data: [
                {
                    question: "Why would a character in a story stop running away from a scary monster?",
                    options: ["They decided the monster could be friendly", "They got tired", "They were not scared anymore", "All of the above"],
                    correctAnswer: 0,
                    explanation: "The correct answer is A. This suggests a change in the character's perception or understanding of the monster."
                },
                {
                    question: "What is the purpose of a sign that says 'Wet Paint'?",
                    options: ["To make you laugh", "To warn you", "To sell you paint", "To tell a story"],
                    correctAnswer: 1,
                    explanation: "The correct answer is B. The sign's purpose is to provide a warning to prevent people from touching the wet paint."
                },
                {
                    question: "A story about a mouse trying to get a piece of cheese from a trap is about:",
                    options: ["Solving a problem", "Going on holiday", "Playing a sport", "Building a house"],
                    correctAnswer: 0,
                    explanation: "The correct answer is A. The mouse has a goal (the cheese) and an obstacle (the trap), which sets up a problem-solving narrative."
                },
                {
                    question: "If a character helps an old lady cross the street, they are being:",
                    options: ["Sneaky", "Kind", "Mean", "Silly"],
                    correctAnswer: 1,
                    explanation: "The correct answer is B. Helping someone is an act of kindness."
                },
                {
                    question: "'The whole crowd cheered when Leo scored the goal.' How did Leo's actions make the crowd feel?",
                    options: ["Sad", "Angry", "Happy", "Bored"],
                    correctAnswer: 2,
                    explanation: "The correct answer is C. Cheering is an expression of happiness and excitement."
                },
                {
                    question: "What is the purpose of the table of contents in a book?",
                    options: ["To list the characters", "To tell the ending", "To help you find chapters", "To define difficult words"],
                    correctAnswer: 2,
                    explanation: "The correct answer is C. A table of contents lists the major parts of a book (like chapters) and their page numbers."
                },
                {
                    question: "A character who always tells lies is:",
                    options: ["Honest", "Trustworthy", "Brave", "Deceitful"],
                    correctAnswer: 3,
                    explanation: "The correct answer is D. Deceitful means guilty of or involving deceit; deceiving or misleading others."
                },
                {
                    question: "The final sentence of a review is 'I would not recommend this game.' The writer's feeling is:",
                    options: ["Positive", "Neutral", "Negative", "Confused"],
                    correctAnswer: 2,
                    explanation: "The correct answer is C. The phrase 'would not recommend' clearly states a negative opinion."
                },
                {
                    question: "A story describes a city with flying cars and robot helpers. The story is likely set in:",
                    options: ["The past", "The present", "The future", "A farm"],
                    correctAnswer: 2,
                    explanation: "The correct answer is C. Flying cars and advanced robots are common elements of futuristic or science-fiction settings."
                },
                {
                    question: "Two characters in a story work together to build a treehouse. They are being:",
                    options: ["Unhelpful", "Cooperative", "Lazy", "Grumpy"],
                    correctAnswer: 1,
                    explanation: "The correct answer is B. Cooperative means working together to achieve a common goal."
                },
                {
                    question: "What is the main message in the story of 'The Tortoise and the Hare'?",
                    options: ["It is best to be fast", "Slow and steady wins the race", "Hares are not good runners", "Winning is everything"],
                    correctAnswer: 1,
                    explanation: "The correct answer is B. The fable's moral is that consistency and perseverance can be more effective than speed and talent alone."
                },
                {
                    question: "A character receives a surprise party. They are most likely feeling:",
                    options: ["Upset", "Shocked and happy", "Bored", "Annoyed"],
                    correctAnswer: 1,
                    explanation: "The correct answer is B. A surprise party is intended to evoke feelings of shock and happiness."
                },
                {
                    question: "An advertisement for a new cereal is trying to:",
                    options: ["Persuade you to buy it", "Give you instructions", "Warn you about it", "Tell you a story about it"],
                    correctAnswer: 0,
                    explanation: "The correct answer is A. The primary purpose of advertising is to persuade consumers to purchase a product."
                },
                {
                    question: "'Mia stared at the huge mountain she had to climb. Her heart beat fast.' Mia is likely feeling:",
                    options: ["Calm", "Daunted", "Amused", "Sleepy"],
                    correctAnswer: 1,
                    explanation: "The correct answer is B. 'Daunted' means to feel intimidated or apprehensive. A fast-beating heart is a physical sign of this."
                },
                {
                    question: "In a narrative, if it starts to rain heavily during a picnic, this is a:",
                    options: ["Solution", "Character", "Problem", "Setting"],
                    correctAnswer: 2,
                    explanation: "The correct answer is C. The rain is an unexpected event that complicates the characters' situation, creating a problem."
                },
                {
                    question: "Why would a character in a story whisper?",
                    options: ["To make sure everyone hears them", "Because they have a sore throat", "To tell a secret or not be overheard", "Because they are singing"],
                    correctAnswer: 2,
                    explanation: "The correct answer is C. Whispering is used for quiet, private, or secretive communication."
                },
                {
                    question: "A science text describing the features of a shark is intended to:",
                    options: ["Entertain", "Inform", "Persuade", "Instruct"],
                    correctAnswer: 1,
                    explanation: "The correct answer is B. Such a text provides factual information about a subject."
                },
                {
                    question: "'Even though he was nervous, Tom walked onto the stage to sing.' This shows Tom is:",
                    options: ["Cowardly", "Brave", "Mean", "Loud"],
                    correctAnswer: 1,
                    explanation: "The correct answer is B. Acting in spite of fear is a key characteristic of bravery."
                },
                {
                    question: "The purpose of a joke book is to:",
                    options: ["Make you sad", "Teach you history", "Amuse you", "Give you news"],
                    correctAnswer: 2,
                    explanation: "The correct answer is C. The primary purpose of jokes is to cause amusement and laughter."
                },
                {
                    question: "A character who puts others' needs before their own is:",
                    options: ["Selfish", "Arrogant", "Selfless", "Impatient"],
                    correctAnswer: 2,
                    explanation: "The correct answer is C. 'Selfless' means being more concerned with the needs and wishes of others than with one's own."
                }
            ]
        },
        {
            title: "Writer's Craft 1",
            data: [
                {
                    question: "In the sentence, 'The sun was a golden coin in the sky,' what is this an example of?",
                    options: ["A question", "A metaphor", "A command", "A fact"],
                    correctAnswer: 1,
                    explanation: "The correct answer is B. A metaphor directly compares two unlike things without using 'like' or 'as'."
                },
                {
                    question: "'The angry storm clouds marched across the sky.' This is an example of personification because:",
                    options: ["The clouds are grey.", "Storms can be dangerous.", "The clouds are given a human action (marched).", "The sky is very big."],
                    correctAnswer: 2,
                    explanation: "The correct answer is C. Personification gives human qualities or actions to inanimate objects."
                },
                {
                    question: "An author writes, 'Suddenly, a loud CRASH echoed from the empty room!' Why did the author use capital letters for 'CRASH'?",
                    options: ["To show it is an important word.", "To make the sentence longer.", "To show the sound was very loud and sudden.", "To show the author likes that word."],
                    correctAnswer: 2,
                    explanation: "The correct answer is C. Using all caps is a form of emphasis to convey loudness and impact."
                },
                {
                    question: "Which of the following is a simile?",
                    options: ["The dog is happy.", "The dog's fur is like soft silk.", "The dog is a furry shadow.", "The dog ran."],
                    correctAnswer: 1,
                    explanation: "The correct answer is B. A simile compares two things using the words 'like' or 'as'."
                },
                {
                    question: "An author asks the question, 'Could he possibly escape?' in the middle of a tense scene. Why?",
                    options: ["Because the author doesn't know the answer.", "To make the reader think and create suspense.", "To end the story.", "To introduce a new character."],
                    correctAnswer: 1,
                    explanation: "The correct answer is B. A rhetorical question engages the reader and builds suspense by making them wonder about the outcome."
                },
                {
                    question: "What is it called when a writer gives human qualities to an object, like 'The old house groaned in the wind'?",
                    options: ["Simile", "Repetition", "Personification", "Metaphor"],
                    correctAnswer: 2,
                    explanation: "The correct answer is C. Personification gives a human action ('groaned') to a non-human object ('house')."
                },
                {
                    question: "'The car was a flash of red lightning.' This is a:",
                    options: ["Metaphor", "Simile", "Question", "Personification"],
                    correctAnswer: 0,
                    explanation: "The correct answer is A. It's a metaphor because it directly compares the car to lightning without using 'like' or 'as'."
                },
                {
                    question: "A writer repeats the line, 'He must be brave,' three times in one paragraph. This is to:",
                    options: ["Make the story longer.", "Show that being brave is important to the character.", "Confuse the reader.", "Fill up the page."],
                    correctAnswer: 1,
                    explanation: "The correct answer is B. Repetition is used for emphasis and to highlight a key idea or feeling."
                },
                {
                    question: "'Her smile was as bright as the sun.' The two things being compared are:",
                    options: ["Her smile and the sun", "Her smile and brightness", "A smile and a frown", "The sun and the moon"],
                    correctAnswer: 0,
                    explanation: "The correct answer is A. This is a simile, and it is comparing the smile to the sun."
                },
                {
                    question: "Using words like 'BOOM!' and 'POW!' in a story is an example of:",
                    options: ["Onomatopoeia", "Simile", "Personification", "Repetition"],
                    correctAnswer: 0,
                    explanation: "The correct answer is A. Onomatopoeia is a word that phonetically imitates the sound it describes."
                },
                {
                    question: "'The sneaky snake slithered silently.' The repetition of the 's' sound is called:",
                    options: ["Alliteration", "Metaphor", "Personification", "A command"],
                    correctAnswer: 0,
                    explanation: "The correct answer is A. Alliteration is the repetition of the same sound at the beginning of words in a sentence."
                },
                {
                    question: "Why would an author use very short sentences in an action scene?",
                    options: ["To slow the story down", "To create a fast, tense feeling", "Because they are easier to write", "To make the story boring"],
                    correctAnswer: 1,
                    explanation: "The correct answer is B. Short, punchy sentences increase the pace and create a sense of urgency and excitement."
                },
                {
                    question: "'The moon played hide-and-seek with the clouds.' What is being personified?",
                    options: ["The clouds", "The game", "The moon", "The sky"],
                    correctAnswer: 2,
                    explanation: "The correct answer is C. The moon is given the human action of playing a game."
                },
                {
                    question: "A writer describes a cake as 'a sugary mountain of delight.' This figurative language is used to:",
                    options: ["Make the cake sound unappetizing", "Make the cake sound large and delicious", "Tell you the ingredients", "Show the cake is healthy"],
                    correctAnswer: 1,
                    explanation: "The correct answer is B. This metaphor emphasizes the cake's size ('mountain') and taste ('delight')."
                },
                {
                    question: "In poetry, what is a stanza?",
                    options: ["A single line of a poem", "The title of a poem", "A group of lines forming a paragraph", "The rhyming word at the end"],
                    correctAnswer: 2,
                    explanation: "The correct answer is C. A stanza is a group of lines forming the basic recurring metrical unit in a poem; a verse."
                },
                {
                    question: "Which is an example of personification?",
                    options: ["The girl ran fast", "The leaves danced in the breeze", "The cat is black", "The rock is hard"],
                    correctAnswer: 1,
                    explanation: "The correct answer is B. 'Danced' is a human action given to the non-human leaves."
                },
                {
                    question: "'He was a lion in the fight.' This metaphor suggests he was:",
                    options: ["Scared and quiet", "Hairy and orange", "Fierce and brave", "Small and weak"],
                    correctAnswer: 2,
                    explanation: "The correct answer is C. The metaphor compares him to a lion to imply he has the qualities of a lion, like fierceness and bravery."
                },
                {
                    question: "Why would an author use lots of descriptive adjectives?",
                    options: ["To create a clear picture in the reader's mind", "To make the story shorter", "To make the text confusing", "To list facts"],
                    correctAnswer: 0,
                    explanation: "The correct answer is A. Adjectives add detail and help the reader visualize the setting, characters, and objects."
                },
                {
                    question: "'The silence in the room was a heavy blanket.' This is an example of a:",
                    options: ["Simile", "Metaphor", "Question", "Command"],
                    correctAnswer: 1,
                    explanation: "The correct answer is B. This metaphor directly compares the silence to a heavy blanket to suggest it was oppressive or comforting."
                },
                {
                    question: "A writer ends a chapter with 'She opened the door and screamed.' This is done to:",
                    options: ["Create suspense", "Finish the story", "Make the reader feel calm", "Introduce a new problem"],
                    correctAnswer: 0,
                    explanation: "The correct answer is A. This is a cliffhanger, designed to make the reader want to find out what happens next."
                }
            ]
        },
        {
            title: "Writer's Craft & Syntax",
            data: [
                {
                    question: "Which sentence contains a simile?",
                    options: ["The lake was glass", "The lake was a mirror", "The lake was as smooth as glass", "The lake was blue"],
                    correctAnswer: 2,
                    explanation: "The correct answer is C. It uses the word 'as' to compare the smoothness of the lake to glass."
                },
                {
                    question: "An author uses all caps for one word: 'It was HUGE.' This is for:",
                    options: ["Style", "Mistake", "Emphasis", "Rhyme"],
                    correctAnswer: 2,
                    explanation: "The correct answer is C. Capital letters are used to emphasize a word, making it seem louder or more significant."
                },
                {
                    question: "'The wind sang a sad song.' This is personification because:",
                    options: ["The wind was strong", "Wind can't sing", "The song was sad", "It was a windy day"],
                    correctAnswer: 1,
                    explanation: "The correct answer is B. The human quality of singing is given to the wind."
                },
                {
                    question: "An author uses the five senses (sight, sound, smell, taste, touch) to:",
                    options: ["Make the setting more vivid", "Tell the reader the time", "Hide the main point", "Confuse the reader"],
                    correctAnswer: 0,
                    explanation: "The correct answer is A. Appealing to the senses helps create a more immersive and vivid experience for the reader."
                },
                {
                    question: "The figurative language in 'My homework is a monster' suggests:",
                    options: ["The homework is fun", "The homework is easy", "The homework is large and difficult", "The homework is alive"],
                    correctAnswer: 2,
                    explanation: "The correct answer is C. The metaphor compares the homework to a monster to express that it is a large and challenging task."
                },
                {
                    question: "'Peter Piper picked a peck of pickled peppers' is an example of:",
                    options: ["Metaphor", "Simile", "Alliteration", "Personification"],
                    correctAnswer: 2,
                    explanation: "The correct answer is C. Alliteration is the repetition of the 'p' sound at the start of the words."
                },
                {
                    question: "A question in a narrative like 'What could be making that noise?' is designed to make the reader feel:",
                    options: ["Calm", "Curious", "Bored", "Sleepy"],
                    correctAnswer: 1,
                    explanation: "The correct answer is B. Such questions are designed to pique the reader's curiosity and build suspense."
                },
                {
                    question: "Which is a metaphor?",
                    options: ["He is like a snake", "He is a snake", "He saw a snake", "The snake is long"],
                    correctAnswer: 1,
                    explanation: "The correct answer is B. It is a direct comparison, stating he *is* a snake, implying he has snake-like qualities."
                },
                {
                    question: "'The house stood alone, a sad figure on the hill.' The house is being personified as:",
                    options: ["Happy", "Lonely", "Angry", "New"],
                    correctAnswer: 1,
                    explanation: "The correct answer is B. The words 'alone' and 'sad' give the house human emotions associated with loneliness."
                },
                {
                    question: "Repetition of a phrase like 'I'm falling, falling, falling' can show:",
                    options: ["The character is happy", "A sense of panic or a long action", "The character is flying", "The story is ending"],
                    correctAnswer: 1,
                    explanation: "The correct answer is B. Repetition can emphasize a prolonged action or a state of panic and helplessness."
                },
                {
                    question: "Choose the correct conjunction: 'I wanted to play outside, ___ it started to rain.'",
                    options: ["so", "but", "because", "and"],
                    correctAnswer: 1,
                    explanation: "The correct answer is B. 'But' is a conjunction used to show a contrast or contradiction."
                },
                {
                    question: "In the sentence, 'Maria kicked the ball. It flew into the goal,' what does the pronoun 'It' refer to?",
                    options: ["Maria", "the goal", "kicked", "the ball"],
                    correctAnswer: 3,
                    explanation: "The correct answer is D. 'It' is a pronoun that replaces the noun 'the ball'."
                },
                {
                    question: "Which sentence uses the conjunction 'and' correctly?",
                    options: ["The sun was hot and I wore a jacket.", "I like apples and I like bananas.", "She was tired and she went to the park.", "He fell over and he started to laugh."],
                    correctAnswer: 1,
                    explanation: "The correct answer is B. 'And' is used to connect two similar ideas or items in a list."
                },
                {
                    question: "'Dad washed the car until it was sparkling.' The pronoun 'it' refers to:",
                    options: ["Dad", "sparkling", "the car", "washed"],
                    correctAnswer: 2,
                    explanation: "The correct answer is C. 'It' is a pronoun that replaces the noun 'the car'."
                },
                {
                    question: "Choose the best conjunction: 'We can go to the beach ___ we can go to the movies.'",
                    options: ["but", "so", "or", "because"],
                    correctAnswer: 2,
                    explanation: "The correct answer is C. 'Or' is a conjunction used to present alternatives or choices."
                },
                {
                    question: "'The children were happy because they won the game.' The pronoun 'they' refers to:",
                    options: ["The game", "The children", "Happy", "Won"],
                    correctAnswer: 1,
                    explanation: "The correct answer is B. 'They' is a pronoun that replaces the noun 'The children'."
                },
                {
                    question: "Which word is the adjective in the sentence: 'The big dog barked'?",
                    options: ["The", "big", "dog", "barked"],
                    correctAnswer: 1,
                    explanation: "The correct answer is B. 'Big' is an adjective that describes the noun 'dog'."
                },
                {
                    question: "Choose the correct conjunction: 'He was hungry, ___ he ate a sandwich.'",
                    options: ["so", "but", "or", "yet"],
                    correctAnswer: 0,
                    explanation: "The correct answer is A. 'So' is a conjunction that shows a result or consequence."
                },
                {
                    question: "Find the pronoun in this sentence: 'She threw the frisbee to him.'",
                    options: ["threw", "frisbee", "She / him", "the"],
                    correctAnswer: 2,
                    explanation: "The correct answer is C. 'She' and 'him' are both pronouns, replacing the names of the people."
                },
                {
                    question: "Which word is the verb (action word) in the sentence: 'The cat climbed the tree quickly'?",
                    options: ["cat", "tree", "quickly", "climbed"],
                    correctAnswer: 3,
                    explanation: "The correct answer is D. 'Climbed' is the action that the cat is performing."
                }
            ]
        },
        {
            title: "Syntax & Vocabulary",
            data: [
                {
                    question: "'Is this book yours or mine?' The word 'mine' is a:",
                    options: ["Noun", "Verb", "Adjective", "Pronoun"],
                    correctAnswer: 3,
                    explanation: "The correct answer is D. 'Mine' is a possessive pronoun that takes the place of 'my book'."
                },
                {
                    question: "Which sentence is grammatically correct?",
                    options: ["We was going to the shop.", "We were going to the shop.", "Us were going to the shop.", "We is going to the shop."],
                    correctAnswer: 1,
                    explanation: "The correct answer is B. The plural pronoun 'We' requires the plural verb 'were'."
                },
                {
                    question: "'The puppy chased its tail.' The word 'its' is a pronoun that refers to:",
                    options: ["The tail", "Chased", "The puppy", "A person"],
                    correctAnswer: 2,
                    explanation: "The correct answer is C. 'Its' is a possessive pronoun referring to the puppy."
                },
                {
                    question: "Choose the correct conjunction: 'I can't go to the party ___ I am sick.'",
                    options: ["and", "but", "because", "so"],
                    correctAnswer: 2,
                    explanation: "The correct answer is C. 'Because' is a conjunction used to give a reason."
                },
                {
                    question: "'That one is my favourite.' The pronoun reference 'That one' points to:",
                    options: ["a person", "a place", "a specific object", "an idea"],
                    correctAnswer: 2,
                    explanation: "The correct answer is C. 'That one' is a demonstrative pronoun used to point out a specific item."
                },
                {
                    question: "'The crowd was ecstatic when their team won the championship.' What does 'ecstatic' mean?",
                    options: ["Very sad", "Very tired", "Very happy", "Very angry"],
                    correctAnswer: 2,
                    explanation: "The correct answer is C. 'Ecstatic' means feeling overwhelming happiness or joyful excitement."
                },
                {
                    question: "'After hiking all day, Jack was completely exhausted.' 'Exhausted' means:",
                    options: ["Full of energy", "Very thirsty", "Very tired", "Very clean"],
                    correctAnswer: 2,
                    explanation: "The correct answer is C. 'Exhausted' means to be drained of physical or mental energy."
                },
                {
                    question: "'The diamond was so luminous, it seemed to glow in the dark.' 'Luminous' means:",
                    options: ["Heavy", "Sharp", "Dull", "Shining or bright"],
                    correctAnswer: 3,
                    explanation: "The correct answer is D. 'Luminous' means emitting or reflecting light."
                },
                {
                    question: "'The little boy was oblivious to the mess he was making.' 'Oblivious' means:",
                    options: ["Proud of", "Unaware of", "Worried about", "Angry about"],
                    correctAnswer: 1,
                    explanation: "The correct answer is B. To be 'oblivious' is to not be aware of or concerned about what is happening around one."
                },
                {
                    question: "'She was impressed by how tall the skyscraper was.' 'Impressed' means:",
                    options: ["Feeling admiration and respect.", "Feeling scared and worried.", "Feeling bored and tired.", "Feeling confused."],
                    correctAnswer: 0,
                    explanation: "The correct answer is A. To be 'impressed' is to feel admiration for something or someone."
                },
                {
                    question: "'The ancient castle was so enormous that it took an hour to walk around it.' 'Enormous' means:",
                    options: ["Very old", "Very small", "Very large", "Very spooky"],
                    correctAnswer: 2,
                    explanation: "The correct answer is C. 'Enormous' is a synonym for very large or huge."
                },
                {
                    question: "'It is vital to drink water every day to stay healthy.' 'Vital' means:",
                    options: ["Not important", "A bad idea", "Absolutely necessary", "Sometimes fun"],
                    correctAnswer: 2,
                    explanation: "The correct answer is C. 'Vital' means something is essential or absolutely necessary."
                },
                {
                    question: "'The magician performed a remarkable trick.' 'Remarkable' means:",
                    options: ["Boring", "Usual", "Worthy of attention; striking", "Very slow"],
                    correctAnswer: 2,
                    explanation: "The correct answer is C. 'Remarkable' means something is unusual, surprising, or worthy of notice."
                },
                {
                    question: "'He was so hungry that the simple bread and cheese tasted exquisite.' 'Exquisite' means:",
                    options: ["Awful", "Extremely beautiful and delicate", "Very plain", "Salty"],
                    correctAnswer: 1,
                    explanation: "The correct answer is B. 'Exquisite' means extremely beautiful, delicate, or of high quality."
                },
                {
                    question: "'The path through the woods was treacherous after the rain, with slippery mud and roots.' 'Treacherous' means:",
                    options: ["Safe and easy", "Full of dangers or hazards", "Brightly lit", "Short and quick"],
                    correctAnswer: 1,
                    explanation: "The correct answer is B. 'Treacherous' means hazardous because of hidden or unpredictable dangers."
                },
                {
                    question: "'The shy cat was reluctant to come out from under the bed.' 'Relucant' means:",
                    options: ["Excited and eager", "Fast and quick", "Unwilling and hesitant", "Sleepy and slow"],
                    correctAnswer: 2,
                    explanation: "The correct answer is C. 'Reluctant' means to be unwilling to do something."
                },
                {
                    question: "'The instructions were very concise and easy to follow.' 'Concise' means:",
                    options: ["Long and confusing", "Giving a lot of information clearly and in a few words", "Written in a foreign language", "Containing many pictures"],
                    correctAnswer: 1,
                    explanation: "The correct answer is B. 'Concise' means brief but comprehensive."
                },
                {
                    question: "'The desert landscape looked barren and desolate.' 'Desolate' means:",
                    options: ["Full of life and colour", "Crowded with people", "Empty and miserable", "Covered in forest"],
                    correctAnswer: 2,
                    explanation: "The correct answer is C. 'Desolate' describes a place that is bleak, empty, and unwelcoming."
                },
                {
                    question: "'Winning the prize was the pinnacle of her career.' 'Pinnacle' means:",
                    options: ["The beginning", "The middle part", "The most successful point", "The end"],
                    correctAnswer: 2,
                    explanation: "The correct answer is C. The 'pinnacle' is the highest point or culmination of success."
                },
                {
                    question: "'The student was diligent and always completed his homework on time.' 'Diligent' means:",
                    options: ["Lazy", "Smart", "Hard-working and careful", "Playful"],
                    correctAnswer: 2,
                    explanation: "The correct answer is C. 'Diligent' means showing care and conscientiousness in one's work or duties."
                }
            ]
        },
        {
            title: "Science: Investigating",
            data: [
                {
                    question: "Mia wants to find out which type of soil is best for growing beans. To make it a fair test, what is the one thing she should change?",
                    options: ["The type of soil", "The amount of water", "The amount of sunlight", "The type of bean seed"],
                    correctAnswer: 0,
                    explanation: "To test the soil, the type of soil must be the only variable that changes. All other conditions should be controlled."
                },
                {
                    question: "In Mia's bean experiment, which of these things should she keep the same?",
                    options: ["The type of soil", "The height of the plant", "The amount of water and sunlight", "The number of leaves that grow"],
                    correctAnswer: 2,
                    explanation: "Water and sunlight are 'controls' or 'controlled variables'. They must be kept the same for all plants to ensure a fair test."
                },
                {
                    question: "Tom is testing how high different balls bounce. He drops a tennis ball, a basketball, and a golf ball from the same height. What is he measuring?",
                    options: ["The size of the balls", "The colour of the balls", "The height each ball bounces", "The time it takes to drop"],
                    correctAnswer: 2,
                    explanation: "He is measuring the outcome, which is the bounce height. This is the dependent variable."
                },
                {
                    question: "For Tom's bounce test to be fair, what is the most important thing to keep the same?",
                    options: ["The colour of the balls", "The height he drops them from", "The time of day", "The brand of the balls"],
                    correctAnswer: 1,
                    explanation: "The drop height is a critical control. If they are dropped from different heights, the results won't be comparable."
                },
                {
                    question: "What do we call the things you keep the same in an experiment to make it fair?",
                    options: ["Variables", "Controls", "Guesses", "Results"],
                    correctAnswer: 1,
                    explanation: "Controls (or controlled variables) are the factors that are kept constant to ensure a fair test."
                },
                {
                    question: "Ava wants to see if plants need sunlight to grow. She puts one plant on a sunny windowsill and another plant in a dark cupboard. What is the variable she is testing (changing)?",
                    options: ["The amount of water", "The type of plant", "The amount of sunlight", "The type of pot"],
                    correctAnswer: 2,
                    explanation: "The amount of sunlight is the independent variable, the one thing Ava is changing on purpose to see its effect."
                },
                {
                    question: "A scientist is testing a new fertiliser. She plants two fields of corn. Field A gets the fertiliser, and Field B does not. After the test, what is the next logical step?",
                    options: ["Sell the corn", "Compare the growth of corn in Field A and Field B", "Plant a different crop", "Water Field A more"],
                    correctAnswer: 1,
                    explanation: "The next step is to observe and measure the results to see if the fertiliser (the variable) had an effect compared to the control."
                },
                {
                    question: "Leo wants to design a fair test to see which of his toy cars is the fastest. What is the best way to do this?",
                    options: ["Push them all with different amounts of force", "Let them roll down the same ramp, one at a time", "Roll them on different surfaces like carpet and wood", "Give the red car a head start"],
                    correctAnswer: 1,
                    explanation: "Using the same ramp ensures the starting force and angle are the same for all cars, making it a fair test of their speed."
                },
                {
                    question: "In an experiment to see if sugar dissolves faster in hot or cold water, what is the variable you would change?",
                    options: ["The amount of sugar", "The size of the cup", "The temperature of the water", "The type of spoon used for stirring"],
                    correctAnswer: 2,
                    explanation: "The temperature of the water is the independent variable you are testing to see its effect on dissolving speed."
                },
                {
                    question: "In the sugar and water experiment, what is one thing you must keep the same?",
                    options: ["The time it takes to dissolve", "The temperature of the water", "The amount of sugar", "The source of the heat"],
                    correctAnswer: 2,
                    explanation: "The amount of sugar must be a controlled variable. Using different amounts would make it an unfair test."
                },
                {
                    question: "A controlled variable is something you...",
                    options: ["Change", "Measure", "Keep the same", "Guess"],
                    correctAnswer: 2,
                    explanation: "Controlled variables are kept the same to ensure that only the independent variable is affecting the outcome."
                },
                {
                    question: "To test which paper towel is most absorbent, you should...",
                    options: ["Use different amounts of water for each towel", "Use the same amount of water for each towel", "Use towels of different sizes", "Fold one towel and not the others"],
                    correctAnswer: 1,
                    explanation: "Using the same amount of water is a key control for a fair comparison of absorbency."
                },
                {
                    question: "What would be the next step after you form a hypothesis (a scientific guess)?",
                    options: ["Stop the experiment", "Design a test", "Announce your discovery", "Change your guess"],
                    correctAnswer: 1,
                    explanation: "After making a prediction (hypothesis), the next step in the scientific method is to design an experiment to test it."
                },
                {
                    question: "A student wants to test if a pendulum's swing is affected by the weight on the end. What is the one thing they should change?",
                    options: ["The length of the string", "The weight on the end", "How high they start the swing", "The time of day"],
                    correctAnswer: 1,
                    explanation: "The weight is the independent variable; the student will change it to see if it affects the swing."
                },
                {
                    question: "In the pendulum experiment, what should the student measure?",
                    options: ["The length of the string", "The number of swings in one minute", "The colour of the weight", "The weight itself"],
                    correctAnswer: 1,
                    explanation: "The number of swings per minute is the dependent variable—the result that is measured to see the effect of changing the weight."
                },
                {
                    question: "To design a fair test about which shape of parachute falls the slowest, you must...",
                    options: ["Drop them from different heights", "Use different materials for each parachute", "Make sure the parachutes are the same size and weight, and drop them from the same height", "Add different weights to each parachute"],
                    correctAnswer: 2,
                    explanation: "To test only the shape, all other factors like size, weight, material, and drop height must be controlled."
                },
                {
                    question: "A fair test has how many independent variables (things you change on purpose)?",
                    options: ["Zero", "One", "Two", "As many as you want"],
                    correctAnswer: 1,
                    explanation: "A key principle of a fair test is to change only one independent variable at a time."
                },
                {
                    question: "Sarah is testing which liquid evaporates the fastest: water, orange juice, or milk. She puts 100mL of each in the same type of dish. What is she changing?",
                    options: ["The amount of liquid", "The type of liquid", "The type of dish", "The location"],
                    correctAnswer: 1,
                    explanation: "The type of liquid is the independent variable she is testing."
                },
                {
                    question: "To make Sarah's evaporation test fair, she must put all the dishes...",
                    options: ["In different rooms", "In the same location", "In the fridge", "Under a fan"],
                    correctAnswer: 1,
                    explanation: "The location must be kept the same to ensure they are all exposed to the same temperature and air flow."
                },
                {
                    question: "After an experiment, a scientist analyzes their...",
                    options: ["Hypothesis", "Equipment", "Data and results", "Questions"],
                    correctAnswer: 2,
                    explanation: "Analyzing the collected data and results allows the scientist to draw a conclusion."
                }
            ]
        },
        {
            title: "Science: Investigating & Interpreting",
            data: [
                {
                    question: "What is a key variable to control in a seed germination test?",
                    options: ["The colour of the seeds", "The day you plant them", "The amount of water and temperature", "The brand of the pot"],
                    correctAnswer: 2,
                    explanation: "Water and temperature are critical environmental factors for germination and must be kept the same for all seeds being tested."
                },
                {
                    question: "If you want to see if salt affects the freezing point of water, what do you measure?",
                    options: ["The amount of salt", "The amount of water", "The temperature at which the water freezes", "How long it takes to boil"],
                    correctAnswer: 2,
                    explanation: "The freezing temperature is the dependent variable—it's the result you measure to see the effect of adding salt."
                },
                {
                    question: "What is the first step of a scientific investigation?",
                    options: ["Conclusion", "Experiment", "Question", "Results"],
                    correctAnswer: 2,
                    explanation: "All scientific investigations start with a question or an observation about the world."
                },
                {
                    question: "To test the strength of different magnets, what could you measure?",
                    options: ["Their colour", "Their size", "How many paperclips they can hold", "How much they weigh"],
                    correctAnswer: 2,
                    explanation: "The number of paperclips is a good way to quantify (measure) the magnet's strength."
                },
                {
                    question: "For the magnet test to be fair, you must use...",
                    options: ["Different types of paperclips", "The same type of paperclips", "Magnets of different sizes", "A different method for each magnet"],
                    correctAnswer: 1,
                    explanation: "Using the same type of paperclips ensures that the weight and material of each clip is a controlled variable."
                },
                {
                    question: "You want to see if a plant grows taller with pop music or classical music. What is the dependent variable (the thing you measure)?",
                    options: ["The type of music", "The volume of the music", "The height of the plant", "The type of plant"],
                    correctAnswer: 2,
                    explanation: "The height of the plant is the result you measure. The type of music is the independent variable."
                },
                {
                    question: "To test which material is the best insulator, you could...",
                    options: ["Wrap different materials around cups of hot water and measure the temperature after 20 minutes", "Pour different amounts of hot water into identical cups", "Use cups made of different materials", "Place the cups in different rooms"],
                    correctAnswer: 0,
                    explanation: "This setup correctly identifies the material as the variable and measures the temperature change, a valid test of insulation."
                },
                {
                    question: "In an experiment, the 'conclusion'...",
                    options: ["Is the first step", "Is your equipment list", "Summarises what you found out", "Is the question you asked"],
                    correctAnswer: 2,
                    explanation: "The conclusion is the final summary where you state whether your hypothesis was supported by the results."
                },
                {
                    question: "To design a fair test about which brand of battery lasts the longest in a torch, you must use...",
                    options: ["Different types of torches", "The same type of torch", "New and old batteries", "Different brands of torches"],
                    correctAnswer: 1,
                    explanation: "Using the same type of torch ensures the power draw is a controlled variable for all batteries being tested."
                },
                {
                    question: "The purpose of a 'control group' in an experiment (e.g., a plant with no fertiliser) is to...",
                    options: ["Have a backup", "Have something to compare your results to", "Make the experiment faster", "Use up extra materials"],
                    correctAnswer: 1,
                    explanation: "The control group provides a baseline to see if the variable being tested actually had an effect."
                },
                {
                    question: "Which state of matter has particles that are packed tightly together and vibrate in place?",
                    options: ["Gas", "Liquid", "Solid", "Plasma"],
                    correctAnswer: 2,
                    explanation: "In the solid state, particles have a fixed position and definite shape."
                },
                {
                    question: "In which state of matter are the particles spread far apart and moving very fast?",
                    options: ["Gas", "Liquid", "Solid", "Water"],
                    correctAnswer: 0,
                    explanation: "In the gaseous state, particles have no fixed shape or volume and move randomly."
                },
                {
                    question: "A pie chart shows the favourite pets of Year 4 students. 50% is Cats, 25% is Dogs, 15% is Fish, 10% is Hamsters. Which pet is the most popular?",
                    options: ["Dog", "Fish", "Cat", "Hamster"],
                    correctAnswer: 2,
                    explanation: "Cats have the largest percentage (50%), making them the most popular."
                },
                {
                    question: "Using the pet pie chart, which two pets, when added together, make up the same percentage as dogs?",
                    options: ["Cats and Fish", "Fish and Hamsters", "Cats and Hamsters", "Dogs and Fish"],
                    correctAnswer: 1,
                    explanation: "Fish (15%) + Hamsters (10%) = 25%, which is the same percentage as Dogs."
                },
                {
                    question: "A line graph shows temperature starting at 10°C at 6 am, rising to 25°C at 2 pm, and falling to 15°C at 8 pm. What was the highest temperature recorded?",
                    options: ["10°C", "15°C", "25°C", "6°C"],
                    correctAnswer: 2,
                    explanation: "The peak of the line graph is at 25°C at 2 pm."
                },
                {
                    question: "According to the temperature line graph, the day is generally...",
                    options: ["Getting warmer", "Getting cooler", "Warmest in the afternoon", "Coldest in the afternoon"],
                    correctAnswer: 2,
                    explanation: "The graph shows the temperature peaking at 2 pm, which is in the afternoon."
                },
                {
                    question: "A diagram of the water cycle shows water turning into vapour from a lake. This process is called:",
                    options: ["Condensation", "Precipitation", "Evaporation", "Collection"],
                    correctAnswer: 2,
                    explanation: "Evaporation is the process of a liquid turning into a gas."
                },
                {
                    question: "An audiogram shows how well someone can hear. If the line on the graph is very low, it means the person has difficulty hearing sounds that are:",
                    options: ["Loud", "Quiet", "High", "Low"],
                    correctAnswer: 1,
                    explanation: "A lower line on an audiogram indicates that a sound needs to be louder for the person to hear it, meaning they have difficulty hearing quiet sounds."
                },
                {
                    question: "A food web shows arrows pointing from a grasshopper to a frog. This means:",
                    options: ["The frog is eaten by the grasshopper", "The grasshopper is eaten by the frog", "They eat the same food", "They are friends"],
                    correctAnswer: 1,
                    explanation: "The arrow in a food web points in the direction of energy flow, from the organism being eaten to the organism that eats it."
                },
                {
                    question: "On a weather map, a sun symbol means the weather will be:",
                    options: ["Rainy", "Windy", "Sunny", "Cloudy"],
                    correctAnswer: 2,
                    explanation: "A sun symbol is a standard icon used on weather maps to indicate clear, sunny conditions."
                }
            ]
        },
        {
            title: "Science: Interpreting & Reasoning",
            data: [
                {
                    question: "A bar chart shows the rainfall for four months. If June has the tallest bar, which month was the wettest?",
                    options: ["May", "June", "July", "August"],
                    correctAnswer: 1,
                    explanation: "On a bar chart, the height of the bar represents the quantity being measured, so the tallest bar indicates the largest amount."
                },
                {
                    question: "A diagram of a flower shows the petals, stem, leaves, and roots. Which part absorbs water from the soil?",
                    options: ["Petals", "Stem", "Leaves", "Roots"],
                    correctAnswer: 3,
                    explanation: "The roots are the primary structure for absorbing water and nutrients from the soil."
                },
                {
                    question: "A table lists the properties of four rocks. To find the hardest rock, you would look for the one with the highest number on the 'hardness scale'. If Rock D has a score of 8, and the others are lower, which is the hardest?",
                    options: ["Rock A", "Rock B", "Rock C", "Rock D"],
                    correctAnswer: 3,
                    explanation: "Interpreting the table, the highest number (8) on the hardness scale corresponds to the hardest rock, which is Rock D."
                },
                {
                    question: "A diagram shows the life cycle of a butterfly. What comes just before the adult butterfly stage?",
                    options: ["Egg", "Larva (caterpillar)", "Pupa (chrysalis)", "Another butterfly"],
                    correctAnswer: 2,
                    explanation: "The butterfly life cycle is Egg -> Larva -> Pupa -> Adult. The pupa stage comes directly before the adult."
                },
                {
                    question: "A sector graph of Earth's atmosphere shows it is mostly Nitrogen (78%) and Oxygen (21%). Which gas is there most of?",
                    options: ["Oxygen", "Nitrogen", "Argon", "Carbon Dioxide"],
                    correctAnswer: 1,
                    explanation: "Nitrogen makes up 78%, which is the largest portion of the atmosphere."
                },
                {
                    question: "If you interpret a diagram showing the inside of a volcano, the hot molten rock is called:",
                    options: ["Water", "Lava", "Ash", "Magma"],
                    correctAnswer: 3,
                    explanation: "Molten rock located beneath the Earth's surface is called magma. Once it erupts, it is called lava."
                },
                {
                    question: "A timeline shows events in the life of a scientist. To find out when they were born, you would look at:",
                    options: ["The end of the timeline", "The middle", "The start of the timeline", "The pictures"],
                    correctAnswer: 2,
                    explanation: "A timeline is organized chronologically, so a person's birth would be at the start."
                },
                {
                    question: "A diagram shows a simple electrical circuit. For the light bulb to work, the circuit must be:",
                    options: ["Open", "Closed", "Short", "Broken"],
                    correctAnswer: 1,
                    explanation: "A closed circuit is a complete, unbroken path that allows electricity to flow."
                },
                {
                    question: "An audiogram tests different frequencies (pitch). A high frequency sound is:",
                    options: ["Loud", "Quiet", "A low pitch, like a drum", "A high pitch, like a whistle"],
                    correctAnswer: 3,
                    explanation: "Frequency corresponds to pitch. High frequency equals high pitch."
                },
                {
                    question: "Looking at a table of planet sizes, you can conclude that Jupiter is the...",
                    options: ["Smallest planet", "Largest planet", "Hottest planet", "Farthest from the sun"],
                    correctAnswer: 1,
                    explanation: "Jupiter is the largest planet in our solar system by a significant margin."
                },
                {
                    question: "A diagram of a skeleton shows the skull protects the...",
                    options: ["Heart", "Lungs", "Stomach", "Brain"],
                    correctAnswer: 3,
                    explanation: "The skull is the bony structure that encases and protects the brain."
                },
                {
                    question: "A pie chart shows how a student spends their day. If the biggest slice is 'Sleep', what do they do most?",
                    options: ["Play", "Eat", "School", "Sleep"],
                    correctAnswer: 3,
                    explanation: "The largest slice of a pie chart represents the largest category."
                },
                {
                    question: "A food chain shows: grass -> rabbit -> fox. What does the rabbit eat?",
                    options: ["Fox", "Grass", "Other rabbits", "Nothing"],
                    correctAnswer: 1,
                    explanation: "The arrow points from the grass to the rabbit, meaning the rabbit eats the grass."
                },
                {
                    question: "A diagram shows a thermometer. If the red line is halfway between 20 and 30, the temperature is:",
                    options: ["20°C", "30°C", "25°C", "10°C"],
                    correctAnswer: 2,
                    explanation: "The midpoint between 20 and 30 on a linear scale is 25."
                },
                {
                    question: "Interpreting a diagram of the solar system, which planet is closest to the Sun?",
                    options: ["Earth", "Mars", "Venus", "Mercury"],
                    correctAnswer: 3,
                    explanation: "Mercury is the first planet from the Sun."
                },
                {
                    question: "Why do we have day and night on Earth?",
                    options: ["Because the Earth moves around the Sun.", "Because the Earth spins on its axis.", "Because the Moon blocks the Sun.", "Because the Sun turns off at night."],
                    correctAnswer: 1,
                    explanation: "The Earth's rotation on its axis causes different parts of the planet to face the Sun (day) or face away from it (night)."
                },
                {
                    question: "Why do we have different seasons (summer, winter)?",
                    options: ["Because the Earth gets closer to and further from the Sun.", "Because of the tilt of the Earth's axis as it orbits the Sun.", "Because the clouds block the heat.", "Because the ocean temperature changes."],
                    correctAnswer: 1,
                    explanation: "The tilt of the Earth's axis means that at different times of the year, either the Northern or Southern Hemisphere is tilted more directly towards the Sun."
                },
                {
                    question: "A polar bear has thick white fur. The thick fur is for warmth. What is the reason for the white colour?",
                    options: ["To look pretty", "To absorb heat better", "For camouflage in the snow", "To reflect sunlight"],
                    correctAnswer: 2,
                    explanation: "The white fur helps the polar bear blend in with its snowy and icy environment, which is an advantage for hunting."
                },
                {
                    question: "If one tree produces enough oxygen for two people, how many people can get oxygen from 4 trees?",
                    options: ["2 people", "4 people", "6 people", "8 people"],
                    correctAnswer: 3,
                    explanation: "This is a simple multiplication problem: 4 trees x 2 people per tree = 8 people."
                },
                {
                    question: "You see lightning and then hear thunder a few seconds later. Why?",
                    options: ["Thunder is louder than lightning.", "Light travels much faster than sound.", "Sound travels much faster than light.", "They happen at different times."],
                    correctAnswer: 1,
                    explanation: "Light travels so fast it reaches you almost instantly, while sound travels much more slowly through the air."
                }
            ]
        },
        {
            title: "Science: Reasoning & Problem Solving",
            data: [
                {
                    question: "Which of these is a producer in a food web?",
                    options: ["A lion", "A mushroom", "A patch of grass", "A rabbit"],
                    correctAnswer: 2,
                    explanation: "Producers, like plants (grass), create their own food through photosynthesis. The others are consumers or decomposers."
                },
                {
                    question: "When you mix sand and water, the sand sinks to the bottom. This is because sand is...",
                    options: ["Heavier than water", "More dense than water", "Lighter than water", "Less dense than water"],
                    correctAnswer: 1,
                    explanation: "Density is the key property. Because sand is denser than water, a grain of sand will sink."
                },
                {
                    question: "It's summer in Australia. What season is it in the United Kingdom?",
                    options: ["Summer", "Autumn", "Winter", "Spring"],
                    correctAnswer: 2,
                    explanation: "Australia is in the Southern Hemisphere and the UK is in the Northern Hemisphere. Their seasons are opposite due to the Earth's tilt."
                },
                {
                    question: "If a baker needs 2 cups of flour for one cake, how many cups will he need for 3 cakes?",
                    options: ["2 cups", "3 cups", "4 cups", "6 cups"],
                    correctAnswer: 3,
                    explanation: "This is a simple multiplication problem: 3 cakes x 2 cups per cake = 6 cups."
                },
                {
                    question: "Why would a desert plant, like a cactus, have a thick, waxy skin?",
                    options: ["To attract animals", "To reduce water loss", "To absorb more sunlight", "To look shiny"],
                    correctAnswer: 1,
                    explanation: "The waxy skin is an adaptation that helps the cactus conserve water in its dry environment by preventing evaporation."
                },
                {
                    question: "Why are the planets in our solar system shaped like a sphere (ball)?",
                    options: ["Because of gravity", "Because they are hot", "It's just a coincidence", "They were made that way"],
                    correctAnswer: 0,
                    explanation: "For a large celestial body, gravity pulls equally from all sides towards the center, which naturally forms a sphere."
                },
                {
                    question: "A shadow is longest when the sun is...",
                    options: ["High in the sky (midday)", "Low in the sky (morning/evening)", "Behind a cloud", "Not visible"],
                    correctAnswer: 1,
                    explanation: "When the sun is low on the horizon, it casts long shadows."
                },
                {
                    question: "If it takes 10 minutes to boil one egg, how long will it take to boil three eggs in the same pot?",
                    options: ["3 minutes", "10 minutes", "20 minutes", "30 minutes"],
                    correctAnswer: 1,
                    explanation: "The time to boil an egg depends on the temperature of the water, not the number of eggs. They will all cook simultaneously in 10 minutes."
                },
                {
                    question: "Why does a metal spoon feel colder than a wooden spoon, even if they are the same temperature?",
                    options: ["Metal is always cold", "Wood is a good insulator, and metal is a good conductor", "Wood is heavier", "The metal spoon is wet"],
                    correctAnswer: 1,
                    explanation: "Metal is a good conductor of heat, so it quickly draws heat away from your hand, making it feel cold. Wood is an insulator and doesn't."
                },
                {
                    question: "Which position of the Sun, Earth, and Moon would cause a solar eclipse?",
                    options: ["Sun-Moon-Earth", "Sun-Earth-Moon", "Earth-Sun-Moon", "Moon-Sun-Earth"],
                    correctAnswer: 0,
                    explanation: "A solar eclipse happens when the Moon passes between the Sun and Earth, and the Moon fully or partially blocks the Sun."
                },
                {
                    question: "A giraffe has a very long neck. What is the most likely reason for this adaptation?",
                    options: ["To reach high leaves on trees", "To drink water", "To keep its head out of the sand", "To talk to birds"],
                    correctAnswer: 0,
                    explanation: "The giraffe's long neck is an adaptation that allows it to access a food source (high leaves) that other animals cannot reach."
                },
                {
                    question: "If a car is travelling at 60 kilometres per hour, how far will it travel in 30 minutes?",
                    options: ["60 km", "120 km", "30 km", "15 km"],
                    correctAnswer: 2,
                    explanation: "30 minutes is half an hour. In half an hour, the car will travel half the distance it would in a full hour: 60 km / 2 = 30 km."
                },
                {
                    question: "Why does ice float on water?",
                    options: ["Ice is warmer than water", "Ice is a solid", "Ice is less dense than liquid water", "Ice is white"],
                    correctAnswer: 2,
                    explanation: "When water freezes, its molecules arrange into a crystal structure that takes up more space, making it less dense than the liquid water around it."
                },
                {
                    question: "The Earth's Moon looks bright because it...",
                    options: ["Makes its own light", "Is on fire", "Reflects light from the Sun", "Is a giant light bulb"],
                    correctAnswer: 2,
                    explanation: "The Moon does not produce its own light; we see it because it reflects sunlight, just like the planets."
                },
                {
                    question: "What is the main reason an astronaut needs a helmet in space?",
                    options: ["To keep their hair tidy", "To provide oxygen and pressure", "To look cool", "To protect from rain"],
                    correctAnswer: 1,
                    explanation: "A helmet is a critical part of a spacesuit, providing a pressurized atmosphere with breathable oxygen in the vacuum of space."
                },
                {
                    question: "If a snail moves 5 centimetres every minute, how long will it take to move 20 centimetres?",
                    options: ["1 minute", "2 minutes", "4 minutes", "5 minutes"],
                    correctAnswer: 2,
                    explanation: "This is a simple division problem: 20 centimetres / 5 cm per minute = 4 minutes."
                },
                {
                    question: "Why does a puddle of water disappear on a hot, sunny day?",
                    options: ["It soaked into the ground", "It evaporated", "Animals drank it", "It melted"],
                    correctAnswer: 1,
                    explanation: "Evaporation is the process where a liquid turns into a gas. The heat from the sun provides the energy for this to happen."
                },
                {
                    question: "When the Northern Hemisphere is tilted towards the Sun, what season is it there?",
                    options: ["Winter", "Spring", "Autumn", "Summer"],
                    correctAnswer: 3,
                    explanation: "Being tilted towards the Sun means that hemisphere receives more direct sunlight, resulting in warmer temperatures and summer."
                },
                {
                    question: "Why can you see your reflection in a smooth lake but not in a rough, wavy one?",
                    options: ["The water is dirty", "Smooth water reflects light evenly", "Rough water is deeper", "There is no light"],
                    correctAnswer: 1,
                    explanation: "A smooth surface reflects light rays back in a single, coherent direction (specular reflection), forming an image. A rough surface scatters the light in all directions (diffuse reflection)."
                },
                {
                    question: "If 3 spiders have 8 legs each, how many legs are there in total?",
                    options: ["11", "18", "24", "32"],
                    correctAnswer: 2,
                    explanation: "This is a simple multiplication problem: 3 spiders x 8 legs per spider = 24 legs."
                }
            ]
        },
        {
            title: "Science: Predicting & Observing",
            data: [
                {
                    question: "Which material would be best for making a raincoat?",
                    options: ["Cotton, because it's soft", "Wool, because it's warm", "Plastic, because it's waterproof", "Paper, because it's light"],
                    correctAnswer: 2,
                    explanation: "The most important property for a raincoat is being waterproof, and plastic has this property."
                },
                {
                    question: "You drop a glass cup on a tile floor. What is the most likely observation?",
                    options: ["It will bounce", "It will shatter", "It will float", "It will melt"],
                    correctAnswer: 1,
                    explanation: "Glass is brittle, so the most predictable outcome when dropped on a hard surface is that it will shatter."
                },
                {
                    question: "Which property of a material would be most important for building a strong bridge?",
                    options: ["Colour", "Strength", "Smell", "Flexibility"],
                    correctAnswer: 1,
                    explanation: "A bridge must be strong enough to support its own weight and the weight of traffic."
                },
                {
                    question: "Look at a ruler. A measurement is taken from the '0' mark to the line marked '5'. The length is:",
                    options: ["5 millimetres", "5 metres", "5 centimetres", "5 kilometres"],
                    correctAnswer: 2,
                    explanation: "Standard rulers are marked in centimetres, and the number '5' represents 5 centimetres."
                },
                {
                    question: "You are observing a candle burning. Which of these is a physical change you would observe?",
                    options: ["The wax melting", "The flame producing light", "The wick turning black", "The smell of smoke"],
                    correctAnswer: 0,
                    explanation: "Melting is a physical change from a solid to a liquid. The burning itself (producing light, blackening the wick, smoke) is a chemical change."
                },
                {
                    question: "Based on its properties, which material is most suitable for making a cooking pot?",
                    options: ["Wood, because it burns", "Metal, because it conducts heat well", "Plastic, because it melts", "Glass, because it can break"],
                    correctAnswer: 1,
                    explanation: "A cooking pot needs to transfer heat efficiently from the stove to the food, so being a good heat conductor is the key property."
                },
                {
                    question: "An observation is something you find out by...",
                    options: ["Guessing", "Using your senses (sight, hearing, touch)", "Reading a book", "Asking a friend"],
                    correctAnswer: 1,
                    explanation: "Scientific observations are based on direct perception using the five senses, often aided by instruments."
                },
                {
                    question: "If you mix lemon juice and baking soda, you will observe fizzing and bubbles. This predicts that a...",
                    options: ["Solid is forming", "Liquid is freezing", "Gas is being produced", "Colour is changing"],
                    correctAnswer: 2,
                    explanation: "The fizzing and bubbles are the observation; they allow you to predict (or conclude) that a gas (carbon dioxide) is being created by a chemical reaction."
                },
                {
                    question: "A student measures the temperature of a cup of ice. The thermometer will most likely read:",
                    options: ["100°C", "50°C", "25°C", "0°C"],
                    correctAnswer: 3,
                    explanation: "The freezing/melting point of water is 0 degrees Celsius."
                },
                {
                    question: "Which of these is an observation, not an opinion?",
                    options: ["The flower is pretty.", "The flower has five red petals.", "I like flowers.", "This flower smells the best."],
                    correctAnswer: 1,
                    explanation: "Saying the flower has five red petals is a quantitative, factual observation. The other statements are opinions or feelings."
                },
                {
                    question: "If you leave an iron nail outside in the rain, what would you predict will happen to it over time?",
                    options: ["It will get bigger", "It will turn into gold", "It will rust", "It will get lighter"],
                    correctAnswer: 2,
                    explanation: "Based on knowledge of chemical properties, iron reacts with water and oxygen to form iron oxide, or rust."
                },
                {
                    question: "You observe a dark cloud in the sky. What weather might you predict?",
                    options: ["Sunshine", "Rain", "A very hot day", "A calm night"],
                    correctAnswer: 1,
                    explanation: "Dark clouds are often full of water droplets and are a common indicator that rain is likely."
                },
                {
                    question: "A material that is magnetic will be attracted to...",
                    options: ["Wood", "Plastic", "Iron", "Glass"],
                    correctAnswer: 2,
                    explanation: "Magnetism is a property that affects certain metals, most notably iron."
                },
                {
                    question: "To measure the volume of a small amount of water accurately, you would use a...",
                    options: ["Ruler", "Measuring cylinder", "Scale", "Thermometer"],
                    correctAnswer: 1,
                    explanation: "A measuring cylinder (or graduated cylinder) is the standard laboratory tool for accurate liquid volume measurement."
                },
                {
                    question: "You observe that a plant on the windowsill is leaning towards the window. You can conclude that the plant is growing towards the...",
                    options: ["Heat", "Sound", "Light", "Dark"],
                    correctAnswer: 2,
                    explanation: "This phenomenon is called phototropism. Plants grow towards a light source to maximize photosynthesis."
                },
                {
                    question: "Which property is most important for a material used to make a window?",
                    options: ["It must be strong", "It must be a good insulator", "It must be transparent (see-through)", "It must be flexible"],
                    correctAnswer: 2,
                    explanation: "The primary function of a window is to let light in, so transparency is its most critical property."
                },
                {
                    question: "An observation of a solid is that it...",
                    options: ["Takes the shape of its container", "Can be poured easily", "Keeps its own shape", "Has no shape"],
                    correctAnswer: 2,
                    explanation: "A defining property of a solid is that it has a definite shape and volume, unlike liquids and gases."
                },
                {
                    question: "You measure the length of a book with a ruler. This is an example of...",
                    options: ["A prediction", "A quantitative observation", "A qualitative observation", "A conclusion"],
                    correctAnswer: 1,
                    explanation: "It is a quantitative observation because it involves a number (a quantity) obtained through measurement."
                },
                {
                    question: "Based on the property of 'elasticity', which object is most likely to return to its original shape after being stretched?",
                    options: ["A rubber band", "A piece of paper", "A lump of clay", "A piece of string"],
                    correctAnswer: 0,
                    explanation: "Elasticity is the ability of a material to resume its normal shape after being stretched or compressed. A rubber band is highly elastic."
                },
                {
                    question: "You are observing your pet cat. Which of the following is an observation of its behaviour?",
                    options: ["The cat is happy", "The cat has soft fur", "The cat is chasing a toy mouse", "The cat is my favourite pet"],
                    correctAnswer: 2,
                    explanation: "Chasing a toy mouse is an observable action or behaviour. The softness of its fur is a physical attribute, while the other options are opinions or inferences."
                }
            ]
        }
    ];

    // DOM Elements
    const selectionScreen = document.getElementById('selection-screen');
    const quizScreen = document.getElementById('quiz-screen');
    const resultsScreen = document.getElementById('results-screen');

    const quizSelectionGrid = document.getElementById('quiz-selection-grid');
    const nextButton = document.getElementById('next-button');
    const playAgainButton = document.getElementById('play-again-button');

    const quizTitleEl = document.getElementById('quiz-title');
    const questionNumberEl = document.getElementById('question-number');
    const questionTextEl = document.getElementById('question-text');
    const optionsContainer = document.getElementById('options-container');
    const feedbackContainer = document.getElementById('feedback-container');
    const feedbackResultEl = document.getElementById('feedback-result');
    const feedbackExplanationEl = document.getElementById('feedback-explanation');
    const finalScoreEl = document.getElementById('final-score');

    // Quiz State
    let currentQuestionIndex = 0;
    let score = 0;
    let currentQuizData = [];

    // --- Functions ---

    function showSelectionScreen() {
        selectionScreen.classList.remove('hide');
        quizScreen.classList.add('hide');
        resultsScreen.classList.add('hide');
    }

    function populateQuizSelection() {
        quizSelectionGrid.innerHTML = ''; 
        allQuizzes.forEach((quiz, index) => {
            const button = document.createElement('button');
            button.innerText = quiz.title;
            button.classList.add('topic-btn');
            button.dataset.index = index;
            button.addEventListener('click', selectQuiz);
            quizSelectionGrid.appendChild(button);
        });
    }
    
    function selectQuiz(e) {
        const selectedQuizIndex = parseInt(e.target.dataset.index);
        currentQuizData = allQuizzes[selectedQuizIndex].data;
        quizTitleEl.textContent = allQuizzes[selectedQuizIndex].title;
        startQuiz();
    }

    function startQuiz() {
        currentQuestionIndex = 0;
        score = 0;
        selectionScreen.classList.add('hide');
        resultsScreen.classList.add('hide');
        quizScreen.classList.remove('hide');
        nextButton.classList.add('hide');
        showQuestion();
    }

    function showQuestion() {
        resetState();
        const question = currentQuizData[currentQuestionIndex];
        questionNumberEl.textContent = `Question ${currentQuestionIndex + 1} of ${currentQuizData.length}`;
        questionTextEl.textContent = question.question;

        question.options.forEach((option, index) => {
            const button = document.createElement('button');
            button.innerText = option;
            button.classList.add('option-btn');
            button.dataset.index = index;
            button.addEventListener('click', selectAnswer);
            optionsContainer.appendChild(button);
        });
    }

    function resetState() {
        while (optionsContainer.firstChild) {
            optionsContainer.removeChild(optionsContainer.firstChild);
        }
        feedbackContainer.classList.add('hide');
        nextButton.classList.add('hide');
    }

    function selectAnswer(e) {
        const selectedButton = e.target;
        const selectedIndex = parseInt(selectedButton.dataset.index);
        const correctIndex = currentQuizData[currentQuestionIndex].correctAnswer;

        Array.from(optionsContainer.children).forEach(button => {
            button.disabled = true;
        });

        if (selectedIndex === correctIndex) {
            score++;
            selectedButton.classList.add('correct');
            feedbackResultEl.textContent = 'Correct! 🎉';
        } else {
            selectedButton.classList.add('wrong');
            feedbackResultEl.textContent = 'Not quite... 🤔';
            optionsContainer.children[correctIndex].classList.add('correct');
        }

        feedbackExplanationEl.textContent = currentQuizData[currentQuestionIndex].explanation;
        feedbackContainer.classList.remove('hide');

        if (currentQuestionIndex < currentQuizData.length - 1) {
            nextButton.textContent = 'Next Question';
        } else {
            nextButton.textContent = 'Show Results';
        }
        nextButton.classList.remove('hide');
    }

    function handleNextButton() {
        currentQuestionIndex++;
        if (currentQuestionIndex < currentQuizData.length) {
            showQuestion();
        } else {
            showResults();
        }
    }

    function showResults() {
        quizScreen.classList.add('hide');
        resultsScreen.classList.remove('hide');
        finalScoreEl.textContent = `${score} / ${currentQuizData.length}`;
    }

    // --- Event Listeners ---
    nextButton.addEventListener('click', handleNextButton);
    playAgainButton.addEventListener('click', showSelectionScreen);

    // --- Initial App Load ---
    populateQuizSelection();
    showSelectionScreen();
});



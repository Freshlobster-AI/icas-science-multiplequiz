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
                    question: "From the first passage, what character trait best describes Rusty in this story?",
                    options: ["Brave", "Guilty", "Angry", "Proud"],
                    correctAnswer: 1,
                    explanation: "The correct answer is B. Rusty is hiding with his tail between his legs, which shows he feels guilty."
                },
                {
                    question: "From the first passage, why did Rusty hide under the table?",
                    options: ["He was playing a game of hide-and-seek.", "He was scared of a loud noise outside.", "He knew he had done something wrong.", "He was waiting for Maya to feed him."],
                    correctAnswer: 2,
                    explanation: "The correct answer is C. Hiding is a common behaviour for a pet that knows it has misbehaved."
                },
                {
                    question: "From the first passage, what is the main problem in this short story?",
                    options: ["Maya has lost her school bag.", "The kitchen floor is too shiny.", "A birthday cake is missing and there is a mess.", "Rusty the dog is feeling sick."],
                    correctAnswer: 2,
                    explanation: "The correct answer is C. The central issue described is the missing cake and the muddy paw prints."
                },
                {
                    question: "From the first passage, what do you think Maya will do next?",
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
                    question: "'The shy cat was reluctant to come out from under the bed.' 'Reluctant' means:",
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


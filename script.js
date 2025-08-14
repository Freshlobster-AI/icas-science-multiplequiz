document.addEventListener('DOMContentLoaded', () => {

    // ALL QUIZ DATA IS NOW INSIDE THIS ONE FILE
    const allQuizzes = [
        { 
            title: "Life Science & Ecosystems", 
            data: [
                {
                    question: "What is the name of the process where plants use sunlight, water, and carbon dioxide to create their own food?",
                    options: ["Respiration", "Photosynthesis", "Transpiration", "Decomposition"],
                    correctAnswer: 1,
                    explanation: "Photosynthesis is the process plants use to convert light energy into chemical energy, creating sugars for food. Respiration is how they use that food for energy."
                },
                {
                    question: "Which of the following is the 'powerhouse' of an animal cell, responsible for generating energy?",
                    options: ["Nucleus", "Cell Membrane", "Mitochondria", "Vacuole"],
                    correctAnswer: 2,
                    explanation: "The mitochondria are the organelles responsible for cellular respiration, which generates most of the cell's supply of adenosine triphosphate (ATP), used as a source of chemical energy."
                },
                {
                    question: "In a food web, an organism that eats only plants is called a:",
                    options: ["Carnivore", "Decomposer", "Producer", "Herbivore"],
                    correctAnswer: 3,
                    explanation: "A herbivore is an animal that gets its energy from eating plants. A carnivore eats other animals, and a producer (like a plant) makes its own food."
                },
                {
                    question: "What is the main difference between vertebrates and invertebrates?",
                    options: ["Vertebrates lay eggs", "Invertebrates have exoskeletons", "Vertebrates have a backbone", "Invertebrates live in water"],
                    correctAnswer: 2,
                    explanation: "The defining characteristic of a vertebrate is having a vertebral column, or backbone. Invertebrates, which make up the vast majority of animal species, do not have one."
                },
                {
                    question: "A desert, a forest, and a pond are all examples of different:",
                    options: ["Populations", "Communities", "Ecosystems", "Species"],
                    correctAnswer: 2,
                    explanation: "An ecosystem includes all the living organisms (biotic factors) in an area, as well as the non-living (abiotic) components of the environment, like soil, water, and sunlight."
                },
                {
                    question: "What is the role of a decomposer, like a mushroom or bacteria, in an ecosystem?",
                    options: ["To produce food using sunlight", "To control the population of herbivores", "To break down dead organic matter", "To provide shelter for animals"],
                    correctAnswer: 2,
                    explanation: "Decomposers are essential for recycling nutrients. They break down dead plants and animals, returning vital nutrients to the soil for producers to use."
                },
                {
                    question: "A camel's hump, a cactus's spines, and a penguin's waterproof feathers are all examples of:",
                    options: ["Habitats", "Adaptations", "Life cycles", "Fossils"],
                    correctAnswer: 1,
                    explanation: "An adaptation is a special trait or feature that helps an organism survive and reproduce in its specific environment."
                },
                {
                    question: "Which kingdom of life do organisms like yeast, mold, and mushrooms belong to?",
                    options: ["Plantae", "Animalia", "Fungi", "Protista"],
                    correctAnswer: 2,
                    explanation: "Fungi are a distinct kingdom of organisms that are not plants because they do not photosynthesize. They absorb nutrients from their surroundings."
                },
                {
                    question: "The movement of animals from one region to another and back again, usually for food or breeding, is called:",
                    options: ["Hibernation", "Migration", "Camouflage", "Evolution"],
                    correctAnswer: 1,
                    explanation: "Migration is the seasonal movement of animals. Hibernation is a state of inactivity to conserve energy, and camouflage is blending in with the environment."
                },
                {
                    question: "What do we call the passing of traits from parents to offspring?",
                    options: ["Heredity", "Environment", "Instinct", "Learning"],
                    correctAnswer: 0,
                    explanation: "Heredity is the process by which genetic information (traits) is passed down from one generation to the next through genes."
                },
                {
                    question: "Which part of the flower is designed to attract pollinators like bees and butterflies?",
                    options: ["Sepal", "Pistil", "Stamen", "Petal"],
                    correctAnswer: 3,
                    explanation: "Petals are often brightly colored, scented, and shaped to attract specific pollinators to the flower for reproduction."
                },
                {
                    question: "A relationship between two different species where at least one benefits is called:",
                    options: ["Competition", "Symbiosis", "Predation", "Isolation"],
                    correctAnswer: 1,
                    explanation: "Symbiosis is a close and long-term interaction between two different biological species. Examples include mutualism, commensalism, and parasitism."
                },
                {
                    question: "What is the largest organ in the human body?",
                    options: ["The brain", "The liver", "The skin", "The heart"],
                    correctAnswer: 2,
                    explanation: "The skin is the largest organ, serving as a protective barrier, regulating temperature, and providing the sense of touch."
                },
                {
                    question: "Which of these is NOT a characteristic of all living things?",
                    options: ["They grow and develop", "They respond to their environment", "They need a brain", "They are made of cells"],
                    correctAnswer: 2,
                    explanation: "While many animals have brains, not all living things do. Plants, fungi, and simple organisms like bacteria do not have brains but are still alive."
                },
                {
                    question: "The process of a seed sprouting and beginning to grow is called:",
                    options: ["Pollination", "Fertilization", "Germination", "Photosynthesis"],
                    correctAnswer: 2,
                    explanation: "Germination is the process by which a plant grows from a seed. It requires the right conditions, such as water, oxygen, and a suitable temperature."
                },
                {
                    question: "What is the primary gas that humans and other animals breathe out during respiration?",
                    options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
                    correctAnswer: 2,
                    explanation: "We breathe in air that is rich in oxygen and breathe out air that has more carbon dioxide, which is a waste product of cellular respiration."
                },
                {
                    question: "A group of organisms of the same species living in the same area is called a:",
                    options: ["Community", "Population", "Ecosystem", "Family"],
                    correctAnswer: 1,
                    explanation: "A population refers to a group of individuals of the same species. A community is made up of all the different populations in an area."
                },
                {
                    question: "What type of joint allows for movement in all directions, like your shoulder and hip?",
                    options: ["Hinge joint", "Pivot joint", "Ball-and-socket joint", "Fixed joint"],
                    correctAnswer: 2,
                    explanation: "A ball-and-socket joint, where the rounded end of one bone fits into a cup-like socket of another, allows for the greatest range of motion."
                },
                {
                    question: "Which of these animals is a mammal?",
                    options: ["Shark", "Frog", "Dolphin", "Penguin"],
                    correctAnswer: 2,
                    explanation: "Dolphins are mammals. They are warm-blooded, breathe air with lungs, and give birth to live young which they feed with milk."
                },
                {
                    question: "What is the hard outer layer of an insect, which provides support and protection, called?",
                    options: ["Skeleton", "Skin", "Shell", "Exoskeleton"],
                    correctAnswer: 3,
                    explanation: "An exoskeleton is an external skeleton that supports and protects an animal's body, common in arthropods like insects, spiders, and crustaceans."
                }
            ]
        },
        { 
            title: "Earth Science & Weather", 
            data: [
                {
                    question: "What are the three main types of rock in the rock cycle?",
                    options: ["Hard, Soft, and Brittle", "Volcanic, Sedimentary, and Fossil", "Igneous, Sedimentary, and Metamorphic", "Granite, Marble, and Sandstone"],
                    correctAnswer: 2,
                    explanation: "The rock cycle describes how Igneous (from cooled magma), Sedimentary (from compacted sediments), and Metamorphic (changed by heat and pressure) rocks are formed and transformed."
                },
                {
                    question: "What causes the Earth's seasons?",
                    options: ["The Earth's distance from the Sun", "The tilt of the Earth's axis", "The speed of the Earth's rotation", "The phases of the Moon"],
                    correctAnswer: 1,
                    explanation: "The Earth is tilted on its axis. As it orbits the Sun, different parts of the Earth receive more direct sunlight, causing the change in seasons."
                },
                {
                    question: "The process of water turning from a liquid into a gas (water vapor) is called:",
                    options: ["Condensation", "Precipitation", "Evaporation", "Collection"],
                    correctAnswer: 2,
                    explanation: "Evaporation is a key part of the water cycle, where heat from the sun turns surface water into water vapor, which then rises into the atmosphere."
                },
                {
                    question: "Which layer of the Earth is composed of solid iron and nickel at the very center?",
                    options: ["Crust", "Mantle", "Outer Core", "Inner Core"],
                    correctAnswer: 3,
                    explanation: "The Earth has four main layers. The Inner Core is a solid, dense ball of metal, despite being incredibly hot, due to the immense pressure."
                },
                {
                    question: "What type of cloud is often associated with thunderstorms, hail, and heavy rain?",
                    options: ["Cirrus", "Stratus", "Cumulus", "Cumulonimbus"],
                    correctAnswer: 3,
                    explanation: "Cumulonimbus clouds are dense, towering vertical clouds. Their name comes from the Latin 'cumulus' (heap) and 'nimbus' (rainstorm)."
                },
                {
                    question: "The breaking down of rocks into smaller pieces by wind, water, or ice is called:",
                    options: ["Erosion", "Weathering", "Deposition", "Compaction"],
                    correctAnswer: 1,
                    explanation: "Weathering is the process that breaks down rocks. Erosion is the process that moves those broken pieces (sediments) to a new location."
                },
                {
                    question: "What instrument is used to measure wind speed?",
                    options: ["Thermometer", "Barometer", "Anemometer", "Hygrometer"],
                    correctAnswer: 2,
                    explanation: "An anemometer typically has spinning cups that catch the wind, and the speed of their rotation corresponds to the wind speed. A barometer measures air pressure."
                },
                {
                    question: "The sudden shaking of the ground caused by the movement of tectonic plates is known as:",
                    options: ["A volcano", "A hurricane", "An earthquake", "A tsunami"],
                    correctAnswer: 2,
                    explanation: "Earthquakes occur when there is a sudden release of energy in the Earth's crust, creating seismic waves that cause the ground to shake."
                },
                {
                    question: "What is the name for the preserved remains or traces of ancient organisms?",
                    options: ["Minerals", "Fossils", "Sediments", "Artifacts"],
                    correctAnswer: 1,
                    explanation: "Fossils provide evidence of past life. They can be bones, shells, imprints, or even footprints that have been preserved in rock for millions of years."
                },
                {
                    question: "Which of these is the best example of a renewable resource?",
                    options: ["Coal", "Natural Gas", "Petroleum", "Solar Power"],
                    correctAnswer: 3,
                    explanation: "A renewable resource is one that can be replenished naturally over a short period. Solar power, from the sun, is considered virtually inexhaustible."
                },
                {
                    question: "The large body of air with similar temperature and humidity throughout is called an:",
                    options: ["Air Front", "Air Mass", "Jet Stream", "Low-Pressure System"],
                    correctAnswer: 1,
                    explanation: "An air mass acquires its characteristics from the area where it originates. The boundary where two different air masses meet is called a front."
                },
                {
                    question: "What is the process of water vapor in the air turning back into liquid water, forming clouds?",
                    options: ["Evaporation", "Transpiration", "Condensation", "Precipitation"],
                    correctAnswer: 2,
                    explanation: "Condensation happens when warm, moist air rises and cools. The water vapor condenses around tiny dust particles to form water droplets, which make up clouds."
                },
                {
                    question: "The layer of gases surrounding the Earth is known as the:",
                    options: ["Hydrosphere", "Lithosphere", "Atmosphere", "Biosphere"],
                    correctAnswer: 2,
                    explanation: "The atmosphere is composed mainly of nitrogen and oxygen and protects life on Earth by absorbing ultraviolet radiation and regulating temperature."
                },
                {
                    question: "A mountain that forms when magma from within the Earth reaches the surface is called a:",
                    options: ["Plateau", "Canyon", "Volcano", "Glacier"],
                    correctAnswer: 2,
                    explanation: "A volcano is a vent in the Earth's crust through which lava, rock fragments, hot vapor, and gas are or have been erupted from the Earth's crust."
                },
                {
                    question: "What is the scale used to measure the magnitude (strength) of an earthquake?",
                    options: ["Celsius Scale", "Beaufort Scale", "Richter Scale", "Fahrenheit Scale"],
                    correctAnswer: 2,
                    explanation: "The Richter scale measures the magnitude of an earthquake by measuring the size of the seismic waves produced. It is a logarithmic scale."
                },
                {
                    question: "Which planet is known as the 'Red Planet' due to its rusty, iron-rich soil?",
                    options: ["Venus", "Mars", "Jupiter", "Saturn"],
                    correctAnswer: 1,
                    explanation: "Mars has a reddish-orange appearance because of the iron oxide (rust) on its surface. It is the fourth planet from the Sun."
                },
                {
                    question: "The scientific study of weather and the atmosphere is called:",
                    options: ["Geology", "Biology", "Meteorology", "Astronomy"],
                    correctAnswer: 2,
                    explanation: "Meteorology is the science that deals with the atmosphere and its phenomena, especially with weather and weather forecasting. A scientist who studies it is a meteorologist."
                },
                {
                    question: "What is a tsunami?",
                    options: ["A tropical cyclone", "A large, rotating storm", "A series of powerful ocean waves", "A type of tornado"],
                    correctAnswer: 2,
                    explanation: "A tsunami is a series of large waves typically caused by underwater earthquakes, volcanic eruptions, or landslides, not by wind."
                },
                {
                    question: "The slow movement of the Earth's continents over millions of years is known as:",
                    options: ["Continental Drift", "Plate Tectonics", "Seafloor Spreading", "All of the above"],
                    correctAnswer: 3,
                    explanation: "All these terms are related. Continental Drift is the idea, Plate Tectonics is the theory explaining how it happens, and Seafloor Spreading is a key mechanism."
                },
                {
                    question: "What is the name for the imaginary line that runs around the center of the Earth, dividing it into the Northern and Southern Hemispheres?",
                    options: ["Prime Meridian", "Tropic of Cancer", "Equator", "Axis"],
                    correctAnswer: 2,
                    explanation: "The Equator is at 0 degrees latitude. It is the longest line of latitude and is the location on Earth that receives the most direct sunlight throughout the year."
                }
            ]
        },
        {
            title: "Physical Science & Energy",
            data: [
                {
                    question: "Which of the following is a measure of the amount of matter in an object?",
                    options: ["Weight", "Volume", "Mass", "Density"],
                    correctAnswer: 2,
                    explanation: "Mass is the measure of how much 'stuff' is in an object. Weight is the measure of the force of gravity on that mass."
                },
                {
                    question: "Energy that is stored and ready to be used is called:",
                    options: ["Kinetic Energy", "Potential Energy", "Chemical Energy", "Thermal Energy"],
                    correctAnswer: 1,
                    explanation: "Potential energy is stored energy. A ball held at the top of a hill has potential energy. When it rolls down, that is converted to kinetic energy (the energy of motion)."
                },
                {
                    question: "What is the force that opposes motion when two surfaces rub against each other?",
                    options: ["Gravity", "Magnetism", "Inertia", "Friction"],
                    correctAnswer: 3,
                    explanation: "Friction is a force that resists motion. Rough surfaces create more friction than smooth surfaces."
                },
                {
                    question: "Which of the three states of matter has particles that are packed tightly together and vibrate in place?",
                    options: ["Solid", "Liquid", "Gas", "Plasma"],
                    correctAnswer: 0,
                    explanation: "In a solid, particles are in a fixed position and have a definite shape and volume. In a liquid, particles can slide past each other, and in a gas, they move freely."
                },
                {
                    question: "The transfer of heat through direct contact is called:",
                    options: ["Conduction", "Convection", "Radiation", "Insulation"],
                    correctAnswer: 0,
                    explanation: "Conduction occurs when heat moves from one object to another through touch, like a hot pan handle. Convection is heat transfer through fluids (liquids/gases), and radiation is through waves."
                },
                {
                    question: "A simple machine made of a wheel with a rope or chain wrapped around it is a:",
                    options: ["Lever", "Inclined Plane", "Wedge", "Pulley"],
                    correctAnswer: 3,
                    explanation: "A pulley is used to lift heavy objects by changing the direction of the force, making the work easier."
                },
                {
                    question: "What happens when light bounces off a smooth, shiny surface like a mirror?",
                    options: ["Refraction", "Absorption", "Reflection", "Diffraction"],
                    correctAnswer: 2,
                    explanation: "Reflection is the bouncing of light off a surface. Refraction is the bending of light as it passes from one medium to another, like through a lens."
                },
                {
                    question: "An object's tendency to resist a change in its state of motion is called:",
                    options: ["Acceleration", "Velocity", "Inertia", "Force"],
                    correctAnswer: 2,
                    explanation: "Inertia is why you feel pushed forward when a car stops suddenly. Your body wants to keep moving. This is Newton's First Law of Motion."
                },
                {
                    question: "Which of these is an example of a chemical change?",
                    options: ["Melting an ice cube", "Tearing a piece of paper", "Baking a cake", "Boiling water"],
                    correctAnswer: 2,
                    explanation: "Baking a cake involves chemical reactions that change the ingredients into a new substance. The other options are physical changes, where the substance's form changes but not its chemical identity."
                },
                {
                    question: "Sound is caused by:",
                    options: ["Light waves", "Vibrations", "Heat", "Empty space"],
                    correctAnswer: 1,
                    explanation: "Sound is a form of mechanical energy that travels as waves through a medium (like air, water, or solids) caused by vibrations."
                },
                {
                    question: "A material that does NOT allow electricity to pass through it easily is called:",
                    options: ["A conductor", "An insulator", "A semiconductor", "A circuit"],
                    correctAnswer: 1,
                    explanation: "Insulators, like rubber, plastic, and glass, are used to protect us from electric shock. Conductors, like copper and other metals, allow electricity to flow easily."
                },
                {
                    question: "What is the unit of measurement for force?",
                    options: ["Joule", "Watt", "Newton", "Gram"],
                    correctAnswer: 2,
                    explanation: "Force is measured in Newtons (N), named after Sir Isaac Newton. A Joule is a unit of energy, a Watt is a unit of power, and a Gram is a unit of mass."
                },
                {
                    question: "A push or a pull on an object is known as a:",
                    options: ["Force", "Mass", "Energy", "Work"],
                    correctAnswer: 0,
                    explanation: "A force can cause an object to accelerate, change direction, or change shape. Examples include gravity, friction, and magnetism."
                },
                {
                    question: "The energy we get from the Sun is a form of:",
                    options: ["Geothermal energy", "Nuclear energy", "Electromagnetic radiation", "Chemical energy"],
                    correctAnswer: 2,
                    explanation: "The Sun emits energy in the form of electromagnetic waves, which include visible light, ultraviolet (UV) light, and infrared (heat) radiation."
                },
                {
                    question: "If you dissolve salt in water, you have created a:",
                    options: ["Mixture", "Solution", "Suspension", "Compound"],
                    correctAnswer: 1,
                    explanation: "A solution is a special type of mixture where one substance (the solute, like salt) dissolves completely into another (the solvent, like water) and does not settle out."
                },
                {
                    question: "Which simple machine would be most helpful for splitting a log of wood?",
                    options: ["A lever", "A pulley", "A wedge", "A screw"],
                    correctAnswer: 2,
                    explanation: "A wedge is essentially two inclined planes back-to-back. It is used to separate two objects or portions of an object by applying force."
                },
                {
                    question: "The flow of electric charge is called:",
                    options: ["Voltage", "Resistance", "Electric Current", "Power"],
                    correctAnswer: 2,
                    explanation: "Electric current is the rate of flow of electric charge, measured in amperes (amps). It's what powers our electronic devices."
                },
                {
                    question: "What form of energy is stored in a battery?",
                    options: ["Kinetic Energy", "Mechanical Energy", "Thermal Energy", "Chemical Energy"],
                    correctAnswer: 3,
                    explanation: "Batteries store energy in a chemical form. When you use a battery, a chemical reaction occurs that releases this energy as electrical energy."
                },
                {
                    question: "The bending of light as it passes through a magnifying glass is an example of:",
                    options: ["Reflection", "Refraction", "Absorption", "Shadowing"],
                    correctAnswer: 1,
                    explanation: "Refraction is the bending of a wave when it enters a medium where its speed is different. The lens of a magnifying glass bends light to make objects appear larger."
                },
                {
                    question: "According to Newton's Third Law of Motion, for every action, there is an equal and ________ reaction.",
                    options: ["opposite", "similar", "greater", "smaller"],
                    correctAnswer: 0,
                    explanation: "This law explains why rockets work. The rocket pushes hot gas down (action), and the gas pushes the rocket up (opposite reaction)."
                }
            ]
        },
        {
            title: "The Human Body",
            data: [
                {
                    question: "Which organ is responsible for pumping blood throughout the entire body?",
                    options: ["Lungs", "Brain", "Heart", "Liver"],
                    correctAnswer: 2,
                    explanation: "The heart is a muscular organ that acts as a pump for the circulatory system, sending oxygen-rich blood to all tissues and organs."
                },
                {
                    question: "What is the main function of the skeletal system?",
                    options: ["To digest food", "To provide structure and protect organs", "To send messages to muscles", "To create energy"],
                    correctAnswer: 1,
                    explanation: "The skeleton provides a framework for the body, supports muscles, and protects vital internal organs like the brain (skull) and heart (rib cage)."
                },
                {
                    question: "The brain, spinal cord, and nerves are all parts of which body system?",
                    options: ["Circulatory System", "Respiratory System", "Nervous System", "Digestive System"],
                    correctAnswer: 2,
                    explanation: "The nervous system is the body's command center, controlling all actions, thoughts, and senses by sending electrical signals."
                },
                {
                    question: "Where in the body does the process of digestion primarily begin?",
                    options: ["Stomach", "Small Intestine", "Mouth", "Esophagus"],
                    correctAnswer: 2,
                    explanation: "Digestion starts in the mouth with mechanical breakdown (chewing) and chemical breakdown from enzymes in saliva."
                },
                {
                    question: "What is the main job of the respiratory system?",
                    options: ["To transport nutrients", "To filter waste from the blood", "To exchange oxygen and carbon dioxide", "To fight infections"],
                    correctAnswer: 2,
                    explanation: "The respiratory system, with the lungs as its main organ, allows you to breathe in oxygen and breathe out the waste gas, carbon dioxide."
                },
                {
                    question: "Which blood vessels carry blood AWAY from the heart?",
                    options: ["Veins", "Arteries", "Capillaries", "Ventricles"],
                    correctAnswer: 1,
                    explanation: "Arteries carry oxygenated blood away from the heart to the rest of the body. Veins carry deoxygenated blood back to the heart. (A helpful trick: 'Artery' and 'Away' both start with A)."
                },
                {
                    question: "What are the tiny air sacs in the lungs where gas exchange occurs?",
                    options: ["Bronchi", "Trachea", "Diaphragm", "Alveoli"],
                    correctAnswer: 3,
                    explanation: "The alveoli are microscopic air sacs where oxygen from the air you breathe in passes into your blood, and carbon dioxide from your blood passes out."
                },
                {
                    question: "Which part of the blood is responsible for fighting off infections and diseases?",
                    options: ["Red Blood Cells", "White Blood Cells", "Platelets", "Plasma"],
                    correctAnswer: 1,
                    explanation: "White blood cells are a key part of the immune system. They identify and destroy pathogens like bacteria and viruses."
                },
                {
                    question: "The muscles that you can control consciously, like those in your arms and legs, are called:",
                    options: ["Cardiac muscles", "Smooth muscles", "Involuntary muscles", "Voluntary muscles"],
                    correctAnswer: 3,
                    explanation: "Voluntary muscles are attached to your skeleton and are under your conscious control. Involuntary muscles, like your heart (cardiac) and stomach (smooth), work automatically."
                },
                {
                    question: "Which organ in the digestive system absorbs most of the nutrients from food?",
                    options: ["Stomach", "Large Intestine", "Small Intestine", "Liver"],
                    correctAnswer: 2,
                    explanation: "The small intestine is a long tube where most of the chemical digestion and absorption of nutrients into the bloodstream takes place."
                },
                {
                    question: "What connects muscles to bones?",
                    options: ["Ligaments", "Tendons", "Cartilage", "Joints"],
                    correctAnswer: 1,
                    explanation: "Tendons are tough, flexible bands of fibrous tissue that attach skeletal muscles to bones. Ligaments connect bones to other bones."
                },
                {
                    question: "The kidneys are the main organs of which body system?",
                    options: ["Endocrine System", "Urinary System", "Nervous System", "Skeletal System"],
                    correctAnswer: 1,
                    explanation: "The urinary system (also called the renal system) filters waste products from the blood and produces urine."
                },
                {
                    question: "What is the name of the large, dome-shaped muscle below the lungs that helps with breathing?",
                    options: ["Bicep", "Diaphragm", "Pectoral", "Abdominal"],
                    correctAnswer: 1,
                    explanation: "The diaphragm contracts and flattens when you inhale, creating a vacuum effect that pulls air into the lungs. When you exhale, it relaxes."
                },
                {
                    question: "Which part of the eye controls how much light enters by changing the size of the pupil?",
                    options: ["Retina", "Lens", "Cornea", "Iris"],
                    correctAnswer: 3,
                    explanation: "The iris is the colored part of the eye. In bright light, it closes the pupil to let less light in, and in dim light, it opens the pupil to let more light in."
                },
                {
                    question: "The five senses are sight, hearing, smell, taste, and:",
                    options: ["Thought", "Balance", "Touch", "Memory"],
                    correctAnswer: 2,
                    explanation: "The sense of touch is detected by nerve endings in the skin, which respond to pressure, temperature, and pain."
                },
                {
                    question: "What is the body's first line of defense against germs?",
                    options: ["Stomach acid", "White blood cells", "The skin", "Antibodies"],
                    correctAnswer: 2,
                    explanation: "The skin acts as a physical barrier, preventing harmful pathogens from entering the body."
                },
                {
                    question: "Which part of the brain is responsible for controlling balance, movement, and coordination?",
                    options: ["Cerebrum", "Cerebellum", "Brainstem", "Frontal Lobe"],
                    correctAnswer: 1,
                    explanation: "The cerebellum, located at the back of the brain, is crucial for coordinating voluntary movements and maintaining posture and balance."
                },
                {
                    question: "What is the liquid part of blood that carries cells, nutrients, and hormones?",
                    options: ["Serum", "Lymph", "Water", "Plasma"],
                    correctAnswer: 3,
                    explanation: "Plasma makes up about 55% of the blood's volume and is mostly water. It transports blood cells, nutrients, waste products, and hormones throughout the body."
                },
                {
                    question: "Where are new red blood cells made in the body?",
                    options: ["In the heart", "In the spleen", "In the bone marrow", "In the liver"],
                    correctAnswer: 2,
                    explanation: "Bone marrow, the spongy tissue inside some of your bones, is the factory for producing red blood cells, white blood cells, and platelets."
                },
                {
                    question: "The 'windpipe,' which carries air from the throat to the lungs, is also known as the:",
                    options: ["Esophagus", "Larynx", "Trachea", "Bronchus"],
                    correctAnswer: 2,
                    explanation: "The trachea is a tube reinforced by rings of cartilage that leads to the bronchi, which then branch out into the lungs. The esophagus carries food to the stomach."
                }
            ]
        },
        {
            title: "Space & Astronomy",
            data: [
                {
                    question: "What is the name of the galaxy that contains our Solar System?",
                    options: ["Andromeda", "Triangulum", "Whirlpool", "Milky Way"],
                    correctAnswer: 3,
                    explanation: "Our solar system is located in the Milky Way, a spiral galaxy that contains billions of stars, including our Sun."
                },
                {
                    question: "Which planet is the largest in our Solar System?",
                    options: ["Saturn", "Jupiter", "Neptune", "Earth"],
                    correctAnswer: 1,
                    explanation: "Jupiter is a gas giant and is so large that all of the other planets in the Solar System could fit inside it."
                },
                {
                    question: "What is a natural satellite that orbits a planet called?",
                    options: ["An asteroid", "A comet", "A moon", "A star"],
                    correctAnswer: 2,
                    explanation: "A moon is a natural satellite. Earth has one moon, while other planets like Jupiter and Saturn have dozens."
                },
                {
                    question: "What is at the center of our Solar System?",
                    options: ["A black hole", "The Earth", "The Sun", "A supernova"],
                    correctAnswer: 2,
                    explanation: "The Sun is a star, and its immense gravitational pull keeps all the planets and other objects in orbit around it."
                },
                {
                    question: "Which planet is famous for its prominent and beautiful ring system?",
                    options: ["Jupiter", "Uranus", "Mars", "Saturn"],
                    correctAnswer: 3,
                    explanation: "While other gas giants have rings, Saturn's are the largest and most visible. They are made of billions of small chunks of ice and rock."
                },
                {
                    question: "A 'shooting star' is actually a:",
                    options: ["Dying star", "Small moon", "Piece of a comet", "Meteoroid burning up in the atmosphere"],
                    correctAnswer: 3,
                    explanation: "When a small piece of rock or dust from space (a meteoroid) enters Earth's atmosphere at high speed, it burns up and creates a bright streak of light called a meteor."
                },
                {
                    question: "What force keeps the planets in orbit around the Sun?",
                    options: ["Magnetism", "Friction", "Gravity", "Nuclear Force"],
                    correctAnswer: 2,
                    explanation: "The Sun's powerful gravity constantly pulls the planets towards it, preventing them from flying off into space. This pull, combined with the planets' forward motion, creates a stable orbit."
                },
                {
                    question: "How long does it take for the Earth to complete one full orbit around the Sun?",
                    options: ["24 hours", "28 days", "365.25 days", "10 years"],
                    correctAnswer: 2,
                    explanation: "It takes about 365.25 days, which is why we have a year. The extra 0.25 day is why we add an extra day in a leap year every four years."
                },
                {
                    question: "What is a large group of stars, gas, and dust held together by gravity called?",
                    options: ["A solar system", "A constellation", "A galaxy", "A nebula"],
                    correctAnswer: 2,
                    explanation: "A galaxy is a massive system of stars. A solar system is typically one star and the objects orbiting it. A constellation is a pattern of stars as seen from Earth."
                },
                {
                    question: "Which planet is closest to the Sun?",
                    options: ["Venus", "Mercury", "Earth", "Mars"],
                    correctAnswer: 1,
                    explanation: "Mercury is the innermost planet in our Solar System. It is also the smallest planet."
                },
                {
                    question: "What is a tool used by astronomers to see faraway objects in space, like stars and galaxies?",
                    options: ["Microscope", "Periscope", "Telescope", "Stethoscope"],
                    correctAnswer: 2,
                    explanation: "A telescope works by collecting and focusing light from distant objects, making them appear closer, larger, and brighter."
                },
                {
                    question: "What is the name for a giant cloud of gas and dust in space, often called a 'star nursery'?",
                    options: ["A black hole", "A quasar", "An asteroid belt", "A nebula"],
                    correctAnswer: 3,
                    explanation: "A nebula is a region where new stars are born from the gravitational collapse of gas and dust."
                },
                {
                    question: "Which of these is an 'ice giant' planet?",
                    options: ["Jupiter", "Mars", "Venus", "Neptune"],
                    correctAnswer: 3,
                    explanation: "Uranus and Neptune are known as ice giants because they are composed of heavier elements than the gas giants (Jupiter and Saturn), such as oxygen, carbon, nitrogen, and sulfur."
                },
                {
                    question: "What causes the phases of the Moon (e.g., New Moon, Full Moon)?",
                    options: ["The Earth's shadow covering the Moon", "Clouds blocking our view", "The Moon's position relative to the Earth and Sun", "The Moon moving closer and farther away"],
                    correctAnswer: 2,
                    explanation: "We see the phases of the Moon because we are seeing different amounts of its sunlit half as it orbits the Earth."
                },
                {
                    question: "A pattern of stars in the night sky, like Orion or the Big Dipper, is called a:",
                    options: ["Galaxy", "Constellation", "Solar System", "Cluster"],
                    correctAnswer: 1,
                    explanation: "Constellations are patterns that ancient people imagined by connecting the dots between stars. They helped with navigation and telling time."
                },
                {
                    question: "What do we call a scientist who studies stars, planets, and the universe?",
                    options: ["Geologist", "Biologist", "Astronomer", "Chemist"],
                    correctAnswer: 2,
                    explanation: "An astronomer studies everything outside of the Earth's atmosphere. A geologist studies the Earth, and a biologist studies life."
                },
                {
                    question: "What is a 'light-year'?",
                    options: ["The time it takes light to travel around the Earth", "A unit of time equal to 365 days", "The distance light travels in one year", "The speed of a spacecraft"],
                    correctAnswer: 2,
                    explanation: "A light-year is a measure of distance, not time. Because distances in space are so vast, astronomers use light-years to measure them. It's about 9.5 trillion kilometers."
                },
                {
                    question: "What is a lunar eclipse?",
                    options: ["When the Moon passes between the Sun and Earth", "When the Earth passes between the Sun and Moon", "When a meteor hits the Moon", "Another name for a Full Moon"],
                    correctAnswer: 1,
                    explanation: "A lunar eclipse occurs when the Earth's shadow blocks the sun's light, which otherwise reflects off the moon. This can only happen during a Full Moon."
                },
                {
                    question: "Which celestial body is known for having a 'Great Red Spot,' which is a giant storm?",
                    options: ["Mars", "Saturn", "Jupiter", "The Sun"],
                    correctAnswer: 2,
                    explanation: "The Great Red Spot on Jupiter is a persistent high-pressure region in the atmosphere, producing an anticyclonic storm that is larger than Earth."
                },
                {
                    question: "What is a comet primarily made of?",
                    options: ["Rock and metal", "Hot liquid gas", "Ice, dust, and rock", "Solid iron"],
                    correctAnswer: 2,
                    explanation: "Comets are often called 'dirty snowballs.' As they get closer to the Sun, the ice turns to gas, creating a glowing head and a long tail."
                }
            ]
        },
        {
            title: "Environmental Science",
            data: [
                {
                    question: "Which of the 'Three R's' means to use less of something?",
                    options: ["Recycle", "Reuse", "Reduce", "Remake"],
                    correctAnswer: 2,
                    explanation: "Reduce means to cut down on the amount of waste we create in the first place, for example, by buying products with less packaging."
                },
                {
                    question: "What is the process of turning waste materials into new products called?",
                    options: ["Composting", "Landfilling", "Incinerating", "Recycling"],
                    correctAnswer: 3,
                    explanation: "Recycling helps to conserve resources, save energy, and reduce the amount of waste that goes into landfills. Paper, plastic, and glass are commonly recycled."
                },
                {
                    question: "The clearing of forests on a massive scale is known as:",
                    options: ["Afforestation", "Deforestation", "Reforestation", "Desertification"],
                    correctAnswer: 1,
                    explanation: "Deforestation is the removal of a forest or stand of trees from land which is then converted to a non-forest use. It is a major cause of habitat loss."
                },
                {
                    question: "Which of the following is a renewable energy source?",
                    options: ["Coal", "Oil", "Wind", "Natural Gas"],
                    correctAnswer: 2,
                    explanation: "Wind is a renewable resource because it is a natural process that will not run out. Coal, oil, and natural gas are fossil fuels, which are non-renewable."
                },
                {
                    question: "The contamination of air, water, or soil by harmful substances is called:",
                    options: ["Pollution", "Conservation", "Erosion", "Evaporation"],
                    correctAnswer: 0,
                    explanation: "Pollution can harm plants, animals, and humans. Examples include car exhaust in the air, oil spills in the ocean, and pesticides in the soil."
                },
                {
                    question: "A species that is at a very high risk of disappearing forever is called:",
                    options: ["A predator", "An invasive species", "An endangered species", "A keystone species"],
                    correctAnswer: 2,
                    explanation: "An endangered species is a species which has been categorized as very likely to become extinct in the near future. The giant panda and the blue whale are examples."
                },
                {
                    question: "What is the natural process that warms the Earth's surface, involving gases like carbon dioxide trapping heat?",
                    options: ["The Ozone Layer", "The Greenhouse Effect", "The Water Cycle", "Photosynthesis"],
                    correctAnswer: 1,
                    explanation: "The greenhouse effect is essential for life on Earth, but human activities have increased the concentration of greenhouse gases, leading to global warming."
                },
                {
                    question: "What is the term for protecting and managing natural resources and the environment?",
                    options: ["Consumption", "Development", "Conservation", "Extraction"],
                    correctAnswer: 2,
                    explanation: "Conservation involves the careful use and protection of natural resources like forests, water, and wildlife to prevent them from being lost or wasted."
                },
                {
                    question: "Breaking down organic waste like food scraps and yard trimmings into a rich soil-like material is called:",
                    options: ["Recycling", "Landfilling", "Composting", "Burying"],
                    correctAnswer: 2,
                    explanation: "Composting is a great way to reduce landfill waste and create a nutrient-rich fertilizer for gardens."
                },
                {
                    question: "What is the main cause of acid rain?",
                    options: ["Dust storms", "Volcanic eruptions", "Pollutants from burning fossil fuels", "Too much oxygen in the air"],
                    correctAnswer: 2,
                    explanation: "When fossil fuels like coal and oil are burned, they release sulfur dioxide and nitrogen oxides into the atmosphere. These chemicals react with water to form acids, which then fall as acid rain."
                },
                {
                    question: "A species that is not native to a specific location and can cause harm to the ecosystem is called:",
                    options: ["An endangered species", "A native species", "An invasive species", "A producer"],
                    correctAnswer: 2,
                    explanation: "Invasive species can outcompete native organisms for resources, disrupt food webs, and cause economic damage. The cane toad in Australia is a classic example."
                },
                {
                    question: "The variety of life in the world or in a particular habitat or ecosystem is known as:",
                    options: ["Biology", "Biodiversity", "Ecology", "Zoology"],
                    correctAnswer: 1,
                    explanation: "Biodiversity is crucial for the health of ecosystems. A high level of biodiversity makes an ecosystem more resilient to changes."
                },
                {
                    question: "What is a large area of land where garbage is buried called?",
                    options: ["A recycling center", "A compost pile", "A landfill", "A reservoir"],
                    correctAnswer: 2,
                    explanation: "A landfill is a site for the disposal of waste materials. Modern landfills are designed to contain the waste and prevent it from contaminating the surrounding environment."
                },
                {
                    question: "Which of these human activities helps to reduce soil erosion?",
                    options: ["Cutting down all the trees", "Ploughing in straight lines down a hill", "Planting trees and cover crops", "Overgrazing by cattle"],
                    correctAnswer: 2,
                    explanation: "The roots of plants help to hold the soil in place, preventing it from being washed or blown away by water and wind."
                },
                {
                    question: "The gradual increase in the overall temperature of the Earth's atmosphere is generally attributed to the greenhouse effect caused by increased levels of carbon dioxide. This is known as:",
                    options: ["The Ice Age", "Global Warming", "Seasonal Change", "An El Niño event"],
                    correctAnswer: 1,
                    explanation: "Global warming is a major aspect of climate change and is linked to the increased human emission of greenhouse gases."
                },
                {
                    question: "What is a 'carbon footprint'?",
                    options: ["A fossil of a foot", "The amount of carbon in the soil", "The total amount of greenhouse gases generated by our actions", "A type of shoe made from carbon fiber"],
                    correctAnswer: 2,
                    explanation: "A person's carbon footprint can be reduced by actions like using less electricity, driving less, and eating locally produced food."
                },
                {
                    question: "Why is the ozone layer important for life on Earth?",
                    options: ["It keeps the Earth warm", "It protects us from harmful ultraviolet (UV) radiation", "It provides the oxygen we breathe", "It creates the Earth's magnetic field"],
                    correctAnswer: 1,
                    explanation: "The ozone layer, located in the stratosphere, absorbs most of the Sun's harmful UV radiation, which can cause skin cancer and other health problems."
                },
                {
                    question: "Using a water bottle again instead of throwing it away is an example of which of the 'Three R's'?",
                    options: ["Reduce", "Reuse", "Recycle", "Rebuy"],
                    correctAnswer: 1,
                    explanation: "Reusing items extends their life and prevents them from becoming waste. It saves the energy and resources needed to recycle or create a new product."
                },
                {
                    question: "What is the term for all the water on the Earth's surface, such as in oceans, lakes, and rivers?",
                    options: ["Atmosphere", "Lithosphere", "Hydrosphere", "Biosphere"],
                    correctAnswer: 2,
                    explanation: "The hydrosphere includes all water on Earth, in any form: liquid, solid (ice), and gas (water vapor)."
                },
                {
                    question: "Energy generated from the heat of the Earth's core is called:",
                    options: ["Solar energy", "Hydroelectric energy", "Geothermal energy", "Biomass energy"],
                    correctAnswer: 2,
                    explanation: "Geothermal energy uses steam from underground reservoirs to spin turbines and generate electricity. It is a powerful and reliable renewable energy source."
                }
            ]
        },
        {
            title: "Technology & Simple Machines",
            data: [
                {
                    question: "A seesaw is a classic example of which simple machine?",
                    options: ["Pulley", "Lever", "Wheel and Axle", "Inclined Plane"],
                    correctAnswer: 1,
                    explanation: "A lever is a rigid bar that pivots around a fixed point called a fulcrum. A seesaw uses this principle to lift a weight on one end by pushing down on the other."
                },
                {
                    question: "Which simple machine would be most useful for lifting a flag to the top of a flagpole?",
                    options: ["Screw", "Wedge", "Pulley", "Lever"],
                    correctAnswer: 2,
                    explanation: "A pulley uses a wheel and a rope to change the direction of a force, making it easier to lift objects vertically."
                },
                {
                    question: "A ramp leading up to a doorway is an example of an:",
                    options: ["Inclined Plane", "Axle", "Fulcrum", "Wedge"],
                    correctAnswer: 0,
                    explanation: "An inclined plane is a flat supporting surface tilted at an angle, with one end higher than the other. It makes it easier to move an object to a higher or lower surface."
                },
                {
                    question: "A doorknob is a common example of which simple machine?",
                    options: ["Lever", "Screw", "Wedge", "Wheel and Axle"],
                    correctAnswer: 3,
                    explanation: "The knob is the 'wheel' and the shaft it turns is the 'axle'. Turning the larger wheel makes it easier to turn the smaller axle."
                },
                {
                    question: "What simple machine is essentially an inclined plane wrapped around a cylinder?",
                    options: ["A gear", "A wedge", "A screw", "A pulley"],
                    correctAnswer: 2,
                    explanation: "A screw converts rotational motion into linear motion. The threads are a form of inclined plane that helps to fasten objects together or lift materials."
                },
                {
                    question: "The sharp edge of an axe is an example of a:",
                    options: ["Lever", "Wedge", "Screw", "Pulley"],
                    correctAnswer: 1,
                    explanation: "A wedge is a triangular shaped tool, and is a portable inclined plane. It is used to separate two objects or portions of an object."
                },
                {
                    question: "What is the main purpose of a simple machine?",
                    options: ["To create energy", "To make work easier", "To increase the speed of an object", "To reduce the mass of an object"],
                    correctAnswer: 1,
                    explanation: "Simple machines make work easier by changing the direction or magnitude of a force. They don't reduce the amount of work, but they reduce the effort needed."
                },
                {
                    question: "In a lever, what is the name of the pivot point?",
                    options: ["Effort", "Load", "Fulcrum", "Arm"],
                    correctAnswer: 2,
                    explanation: "The fulcrum is the point on which a lever rests or is supported and on which it pivots."
                },
                {
                    question: "Two or more simple machines working together form a:",
                    options: ["Complex Machine", "Compound Machine", "Complicated Machine", "Engine"],
                    correctAnswer: 1,
                    explanation: "A compound machine is a machine made up of two or more simple machines. A bicycle, for example, uses wheels and axles, levers (handlebars, brakes), and pulleys (gears)."
                },
                {
                    question: "Which of these is NOT considered one of the six classical simple machines?",
                    options: ["Lever", "Pulley", "Gear", "Wedge"],
                    correctAnswer: 2,
                    explanation: "While a gear is a type of wheel and axle, the six classical simple machines identified by Renaissance scientists are the Lever, Wheel and Axle, Pulley, Inclined Plane, Wedge, and Screw."
                },
                {
                    question: "The step-by-step process engineers use to solve problems is called the:",
                    options: ["Scientific Method", "Engineering Design Process", "Manufacturing Cycle", "Invention Protocol"],
                    correctAnswer: 1,
                    explanation: "The Engineering Design Process typically includes steps like Ask, Imagine, Plan, Create, and Improve. It is a cycle that can be repeated to refine a solution."
                },
                {
                    question: "A prototype is:",
                    options: ["The final version of a product", "An early model of a product built for testing", "A detailed drawing of a product", "The marketing plan for a product"],
                    correctAnswer: 1,
                    explanation: "A prototype is a test version of an invention used to see if the design works as intended before moving on to full-scale production."
                },
                {
                    question: "What type of technology uses light to transmit information, often through fiber optic cables?",
                    options: ["Sonic technology", "Magnetic technology", "Optical technology", "Nuclear technology"],
                    correctAnswer: 2,
                    explanation: "Optical technology deals with light. Fiber optics use pulses of light to send huge amounts of data over long distances at very high speeds."
                },
                {
                    question: "What does the 'CAD' in CAD software, used by engineers, stand for?",
                    options: ["Computer-Aided Design", "Complex Algorithm Data", "Creative Art Display", "Calculated Architectural Drawing"],
                    correctAnswer: 0,
                    explanation: "Computer-Aided Design (CAD) software allows engineers and architects to create precise 2D and 3D models of their designs on a computer."
                },
                {
                    question: "In the context of technology, what is an 'algorithm'?",
                    options: ["A type of computer hardware", "A set of rules or instructions to be followed", "A computer virus", "A type of screen display"],
                    correctAnswer: 1,
                    explanation: "An algorithm is a step-by-step procedure for calculations or problem-solving, especially by a computer. It's like a recipe for the computer to follow."
                },
                {
                    question: "Which invention was most critical for the development of the internet?",
                    options: ["The telephone", "The radio", "The computer", "The television"],
                    correctAnswer: 2,
                    explanation: "While the telephone network was used for early internet connections, the computer itself is the fundamental device that processes and shares the information."
                },
                {
                    question: "A device that converts one form of energy into another is called a:",
                    options: ["Transducer", "Resistor", "Capacitor", "Diode"],
                    correctAnswer: 0,
                    explanation: "A transducer is a device that converts energy from one form to another. For example, a microphone is a transducer that converts sound energy into electrical energy."
                },
                {
                    question: "Using a pair of scissors to cut paper involves which two simple machines?",
                    options: ["Lever and Pulley", "Wedge and Screw", "Lever and Wedge", "Pulley and Wheel"],
                    correctAnswer: 2,
                    explanation: "The handles of the scissors act as levers, and the blades are wedges that push the paper apart."
                },
                {
                    question: "What is the primary function of a bridge?",
                    options: ["To generate electricity", "To span a physical obstacle without blocking the way underneath", "To store water", "To act as a landmark"],
                    correctAnswer: 1,
                    explanation: "The purpose of a bridge is to allow people or vehicles to cross an obstacle such as a river, valley, or road."
                },
                {
                    question: "What technology allows a device to determine its location on Earth using signals from satellites?",
                    options: ["Radar", "Sonar", "GPS (Global Positioning System)", "Wi-Fi"],
                    correctAnswer: 2,
                    explanation: "GPS works by receiving signals from multiple satellites orbiting the Earth. The receiver calculates its distance from these satellites to pinpoint its exact location."
                }
            ]
        },
        {
            title: "Chemistry Basics",
            data: [
                {
                    question: "What is the smallest unit of a chemical element?",
                    options: ["Molecule", "Atom", "Compound", "Cell"],
                    correctAnswer: 1,
                    explanation: "An atom is the basic building block of all matter. A molecule is formed when two or more atoms are joined together."
                },
                {
                    question: "Which of the following is a chemical property of a piece of paper?",
                    options: ["It is white", "It is flat", "It is flammable (can burn)", "It has a mass of 5 grams"],
                    correctAnswer: 2,
                    explanation: "A chemical property describes how a substance can change into a new substance. Flammability is a chemical property because burning changes the paper into ash and smoke."
                },
                {
                    question: "When you mix vinegar and baking soda, the fizzing and bubbling indicates that a ________ has occurred.",
                    options: ["physical change", "change of state", "chemical reaction", "solution"],
                    correctAnswer: 2,
                    explanation: "A chemical reaction has occurred, creating a new substance (carbon dioxide gas), which causes the fizzing. This is an irreversible change."
                },
                {
                    question: "The chemical symbol for water is H₂O. What does the '2' mean?",
                    options: ["There are two water molecules", "There are two hydrogen atoms", "There are two oxygen atoms", "The molecule has a mass of 2"],
                    correctAnswer: 1,
                    explanation: "The subscript '2' next to the 'H' (Hydrogen) indicates that there are two atoms of hydrogen for every one atom of oxygen ('O') in a water molecule."
                },
                {
                    question: "A substance that dissolves in a liquid is called a:",
                    options: ["Solute", "Solvent", "Solution", "Mixture"],
                    correctAnswer: 0,
                    explanation: "In a salt water solution, the salt is the solute (the substance being dissolved) and the water is the solvent (the substance doing the dissolving)."
                },
                {
                    question: "The measure of how acidic or basic a substance is can be found using the:",
                    options: ["Temperature scale", "pH scale", "Richter scale", "Mass scale"],
                    correctAnswer: 1,
                    explanation: "The pH scale ranges from 0 to 14. A pH of 7 is neutral (like pure water). A pH less than 7 is acidic (like lemon juice), and a pH greater than 7 is basic or alkaline (like soap)."
                },
                {
                    question: "Which of these is a compound?",
                    options: ["Oxygen (O)", "Gold (Au)", "Salt (NaCl)", "Helium (He)"],
                    correctAnswer: 2,
                    explanation: "A compound is a substance formed when two or more different chemical elements are chemically bonded together. Salt (Sodium Chloride) is made of sodium and chlorine atoms. Oxygen, gold, and helium are elements."
                },
                {
                    question: "The process of a liquid turning into a solid is called:",
                    options: ["Melting", "Freezing", "Evaporation", "Condensation"],
                    correctAnswer: 1,
                    explanation: "Freezing is a physical change of state. The temperature at which this happens is called the freezing point. For water, it is 0 degrees Celsius."
                },
                {
                    question: "What is a mixture?",
                    options: ["A substance made of only one type of atom", "A substance where atoms are chemically bonded", "A combination of two or more substances that are not chemically bonded", "A substance that has melted"],
                    correctAnswer: 2,
                    explanation: "In a mixture, like sand and water, the individual substances keep their own chemical properties and can usually be separated by physical means."
                },
                {
                    question: "The three states of matter are solid, liquid, and:",
                    options: ["Gas", "Plasma", "Water", "Energy"],
                    correctAnswer: 0,
                    explanation: "The three common states of matter are solid, liquid, and gas. The state of a substance depends on its temperature and pressure."
                },
                {
                    question: "What is the chemical symbol for the element Gold?",
                    options: ["Go", "Gd", "Ag", "Au"],
                    correctAnswer: 3,
                    explanation: "The symbol 'Au' for gold comes from its Latin name, 'aurum'. 'Ag' is the symbol for silver, from its Latin name 'argentum'."
                },
                {
                    question: "A substance that speeds up a chemical reaction without being used up itself is called a:",
                    options: ["Reactant", "Product", "Catalyst", "Inhibitor"],
                    correctAnswer: 2,
                    explanation: "Catalysts are very important in both industrial processes and in biology, where they are called enzymes."
                },
                {
                    question: "The ability of a substance to be stretched into a wire is called:",
                    options: ["Ductility", "Malleability", "Luster", "Conductivity"],
                    correctAnswer: 0,
                    explanation: "Ductility is a physical property of metals like copper, which is why it's used for electrical wiring. Malleability is the ability to be hammered into thin sheets."
                },
                {
                    question: "What happens to the total mass of the substances in a chemical reaction?",
                    options: ["It increases", "It decreases", "It stays the same", "It depends on the reaction"],
                    correctAnswer: 2,
                    explanation: "This is the Law of Conservation of Mass. Matter cannot be created or destroyed in a chemical reaction; the atoms are just rearranged to form new substances."
                },
                {
                    question: "Which of these is NOT a pure substance?",
                    options: ["Water (H₂O)", "Sugar (C₁₂H₂₂O₁₁)", "Air", "Iron (Fe)"],
                    correctAnswer: 2,
                    explanation: "Air is a mixture of different gases, primarily nitrogen, oxygen, argon, and carbon dioxide. Water, sugar, and iron are all pure substances (compounds or elements)."
                },
                {
                    question: "The process of separating a solid from a liquid by passing the mixture through a filter is called:",
                    options: ["Evaporation", "Distillation", "Filtration", "Decanting"],
                    correctAnswer: 2,
                    explanation: "Filtration is used in many applications, from making coffee to purifying water. The filter allows the liquid to pass through but traps the solid particles."
                },
                {
                    question: "What is the name for the substances that you start with in a chemical reaction?",
                    options: ["Products", "Reactants", "Catalysts", "Mixtures"],
                    correctAnswer: 1,
                    explanation: "Reactants are the starting materials that undergo a change. The new substances that are formed are called the products."
                },
                {
                    question: "The rusting of an iron nail is a chemical reaction between iron, oxygen, and:",
                    options: ["Sunlight", "Water", "Carbon Dioxide", "Nitrogen"],
                    correctAnswer: 1,
                    explanation: "Rust (iron oxide) forms when iron is exposed to both oxygen and water. This is a type of corrosion."
                },
                {
                    question: "A liquid's resistance to flowing is called its:",
                    options: ["Density", "Viscosity", "Buoyancy", "Surface Tension"],
                    correctAnswer: 1,
                    explanation: "Viscosity describes how 'thick' a liquid is. For example, honey has a high viscosity, while water has a low viscosity."
                },
                {
                    question: "What is the common name for the compound sodium chloride (NaCl)?",
                    options: ["Sugar", "Baking Soda", "Vinegar", "Table Salt"],
                    correctAnswer: 3,
                    explanation: "Sodium chloride is the chemical name for the salt we commonly use for seasoning food."
                }
            ]
        },
        {
            title: "Light & Sound",
            data: [
                {
                    question: "Sound travels fastest through which of these mediums?",
                    options: ["Air", "Water", "A steel beam", "A vacuum (empty space)"],
                    correctAnswer: 2,
                    explanation: "Sound is a mechanical wave, so it needs a medium to travel through. It travels fastest through solids because the particles are packed closely together, allowing vibrations to pass quickly."
                },
                {
                    question: "The bending of light as it passes from one substance to another (like from air to water) is called:",
                    options: ["Reflection", "Refraction", "Absorption", "Diffraction"],
                    correctAnswer: 1,
                    explanation: "Refraction is why a straw in a glass of water looks bent. The light from the straw bends as it leaves the water and enters the air."
                },
                {
                    question: "What property of a sound wave determines its pitch (how high or low it sounds)?",
                    options: ["Amplitude", "Frequency", "Wavelength", "Speed"],
                    correctAnswer: 1,
                    explanation: "Frequency is the number of vibrations per second, measured in Hertz (Hz). A high frequency results in a high-pitched sound, while a low frequency results in a low-pitched sound."
                },
                {
                    question: "Which color is NOT part of the visible light spectrum (the colors of the rainbow)?",
                    options: ["Red", "Indigo", "Green", "Brown"],
                    correctAnswer: 3,
                    explanation: "The colors of the visible spectrum are Red, Orange, Yellow, Green, Blue, Indigo, and Violet (ROYGBIV). Brown is a mixture of colors."
                },
                {
                    question: "An object that does not allow any light to pass through it is described as:",
                    options: ["Transparent", "Translucent", "Opaque", "Reflective"],
                    correctAnswer: 2,
                    explanation: "An opaque object, like a wooden door or a book, blocks all light and casts a dark shadow. Transparent objects (like glass) let all light through, and translucent objects (like frosted glass) let some light through."
                },
                {
                    question: "What property of a sound wave determines its loudness (volume)?",
                    options: ["Frequency", "Pitch", "Amplitude", "Timbre"],
                    correctAnswer: 2,
                    explanation: "Amplitude is the size or intensity of the sound wave's vibrations. A larger amplitude means a louder sound."
                },
                {
                    question: "When white light passes through a prism, it separates into the colors of the rainbow. This is called:",
                    options: ["Dispersion", "Reflection", "Interference", "Polarization"],
                    correctAnswer: 0,
                    explanation: "Dispersion happens because each color of light has a slightly different wavelength, and they bend (refract) at slightly different angles as they pass through the prism."
                },
                {
                    question: "A repeating sound caused by the reflection of sound waves from a surface is called:",
                    options: ["A pitch", "A frequency", "An echo", "A vibration"],
                    correctAnswer: 2,
                    explanation: "An echo is heard when a sound wave bounces off a hard, flat surface (like a wall or a cliff) and returns to the listener's ear."
                },
                {
                    question: "Why do we see a lightning flash before we hear the thunder?",
                    options: ["The lightning happens first", "Light travels much faster than sound", "Sound travels better in the dark", "Our eyes are more sensitive than our ears"],
                    correctAnswer: 1,
                    explanation: "Light travels at an incredible speed (about 300,000 kilometers per second), while sound travels much more slowly through the air (about 0.34 kilometers per second). So, the light from the strike reaches you almost instantly."
                },
                {
                    question: "An object that produces its own light is described as:",
                    options: ["Luminous", "Reflective", "Opaque", "Transparent"],
                    correctAnswer: 0,
                    explanation: "Luminous objects, like the Sun, a light bulb, or a candle flame, are sources of light. Non-luminous objects, like the Moon or a table, are only visible because they reflect light."
                },
                {
                    question: "The part of the ear that vibrates when sound waves hit it, like the skin of a drum, is the:",
                    options: ["Cochlea", "Anvil", "Eardrum", "Auditory Nerve"],
                    correctAnswer: 2,
                    explanation: "The eardrum (or tympanic membrane) is a thin piece of tissue that separates the outer ear from the middle ear. Its vibrations are passed on to the tiny bones of the middle ear."
                },
                {
                    question: "What color will a red apple appear to be if you shine a blue light on it in a dark room?",
                    options: ["Red", "Blue", "Green", "Black"],
                    correctAnswer: 3,
                    explanation: "A red apple appears red because it reflects red light and absorbs all other colors. If only blue light is available, the apple will absorb the blue light and reflect nothing, making it appear black."
                },
                {
                    question: "The unit used to measure the loudness of sound is the:",
                    options: ["Hertz (Hz)", "Decibel (dB)", "Watt (W)", "Joule (J)"],
                    correctAnswer: 1,
                    explanation: "The decibel scale is used to measure sound intensity. A whisper is about 30 dB, while a jet engine can be 150 dB or more."
                },
                {
                    question: "A lens that is thicker in the middle and thinner at the edges is called a:",
                    options: ["Concave lens", "Convex lens", "Flat lens", "Prism"],
                    correctAnswer: 1,
                    explanation: "A convex lens converges (brings together) light rays and can be used to magnify objects or correct farsightedness."
                },
                {
                    question: "What happens to sound in a vacuum (a space with no air or matter)?",
                    options: ["It travels faster", "It travels slower", "It cannot travel", "It becomes very high-pitched"],
                    correctAnswer: 2,
                    explanation: "Sound needs a medium (like a solid, liquid, or gas) to travel because it is a vibration of particles. In the vacuum of space, there are no particles to vibrate, so there is no sound."
                },
                {
                    question: "The range of colors created when white light is split is called a:",
                    options: ["Shadow", "Spectrum", "Wave", "Ray"],
                    correctAnswer: 1,
                    explanation: "The visible light spectrum is the portion of the electromagnetic spectrum that is visible to the human eye."
                },
                {
                    question: "The 'timbre' of a sound helps us to:",
                    options: ["Tell how loud it is", "Tell how high or low it is", "Distinguish between two different instruments playing the same note", "Know where the sound is coming from"],
                    correctAnswer: 2,
                    explanation: "Timbre (pronounced TAM-ber) is the quality or character of a sound. It's why a guitar and a piano sound different even when they play the same note at the same loudness."
                },
                {
                    question: "Why does a black t-shirt feel hotter in the sun than a white t-shirt?",
                    options: ["Black fabric is thicker", "White reflects all colors of light, while black absorbs them", "Black attracts more sunlight", "White fabric is more breathable"],
                    correctAnswer: 1,
                    explanation: "Color is determined by which wavelengths of light are reflected. White reflects all wavelengths, while black absorbs all wavelengths, converting the light energy into heat."
                },
                {
                    question: "A lens that is thinner in the middle and thicker at the edges is called a:",
                    options: ["Convex lens", "Magnifying lens", "Concave lens", "Bifocal lens"],
                    correctAnswer: 2,
                    explanation: "A concave lens diverges (spreads out) light rays and is used to correct nearsightedness."
                },
                {
                    question: "The part of the eye that acts like the film in a camera, where the image is formed, is the:",
                    options: ["Pupil", "Iris", "Lens", "Retina"],
                    correctAnswer: 3,
                    explanation: "The retina is a layer of light-sensitive cells at the back of the eye. It detects the light and sends signals to the brain through the optic nerve, which the brain interprets as an image."
                }
            ]
        },
        {
            title: "Scientific Method",
            data: [
                {
                    question: "What is the first step in the scientific method?",
                    options: ["Form a hypothesis", "Conduct an experiment", "Ask a question or make an observation", "Analyze the data"],
                    correctAnswer: 2,
                    explanation: "The scientific method begins with an observation or a question about the natural world that you want to investigate."
                },
                {
                    question: "In an experiment, the factor that you purposely change or test is called the:",
                    options: ["Control", "Variable", "Hypothesis", "Conclusion"],
                    correctAnswer: 1,
                    explanation: "The independent variable is the one thing the scientist changes to see what effect it has. All other conditions (controls) should be kept the same."
                },
                {
                    question: "A hypothesis is best described as:",
                    options: ["A proven fact", "The final answer", "An educated guess or testable prediction", "A detailed procedure"],
                    correctAnswer: 2,
                    explanation: "A hypothesis is a proposed explanation for an observation. It must be testable through experimentation."
                },
                {
                    question: "Which piece of laboratory equipment is most suitable for accurately measuring the volume of a liquid?",
                    options: ["Beaker", "Flask", "Test Tube", "Graduated Cylinder"],
                    correctAnswer: 3,
                    explanation: "A graduated cylinder has markings (graduations) along the side that allow for precise measurement of liquid volume. Beakers and flasks are better for holding or mixing liquids."
                },
                {
                    question: "Who is credited with developing the theory of relativity (E=mc²)?",
                    options: ["Isaac Newton", "Galileo Galilei", "Albert Einstein", "Marie Curie"],
                    correctAnswer: 2,
                    explanation: "Albert Einstein was a theoretical physicist who developed the theory of relativity, one of the two pillars of modern physics."
                },
                {
                    question: "In an experiment to see how sunlight affects plant growth, what would be the control group?",
                    options: ["A plant given extra sunlight", "A plant given no sunlight", "A plant given a normal amount of sunlight", "A plant given extra water"],
                    correctAnswer: 2,
                    explanation: "The control group is used as a baseline for comparison. It experiences 'normal' conditions, against which the experimental groups are measured."
                },
                {
                    question: "The study of living organisms is called:",
                    options: ["Geology", "Chemistry", "Biology", "Physics"],
                    correctAnswer: 2,
                    explanation: "Biology is the natural science that studies life and living organisms, including their physical structure, chemical processes, and evolution."
                },
                {
                    question: "What does the 'P' in the safety acronym 'PASS' stand for when using a fire extinguisher?",
                    options: ["Push", "Point", "Pull", "Press"],
                    correctAnswer: 2,
                    explanation: "PASS stands for: Pull the pin, Aim at the base of the fire, Squeeze the handle, and Sweep from side to side."
                },
                {
                    question: "Who developed the three laws of motion and the law of universal gravitation?",
                    options: ["Albert Einstein", "Isaac Newton", "Stephen Hawking", "Nikola Tesla"],
                    correctAnswer: 1,
                    explanation: "Sir Isaac Newton's laws of motion form the basis of classical mechanics and describe the relationship between an object and the forces acting upon it."
                },
                {
                    question: "When you analyze the data from an experiment, you are:",
                    options: ["Changing your hypothesis", "Ignoring the results", "Looking for patterns and meaning in the results", "Starting the experiment over"],
                    correctAnswer: 2,
                    explanation: "Data analysis involves organizing and interpreting the information you collected to see whether it supports or refutes your hypothesis."
                },
                {
                    question: "A scientific theory is:",
                    options: ["Just a guess or an opinion", "A well-substantiated explanation of some aspect of the natural world", "An unproven idea", "The same as a hypothesis"],
                    correctAnswer: 1,
                    explanation: "In science, a theory is a very strong concept. It's an explanation that has been repeatedly tested and confirmed through observation and experimentation."
                },
                {
                    question: "Marie Curie was a pioneering scientist famous for her research on:",
                    options: ["Gravity", "Genetics", "Radioactivity", "Planetary motion"],
                    correctAnswer: 2,
                    explanation: "Marie Curie was the first woman to win a Nobel Prize and the only person to win the Nobel Prize in two different scientific fields (Physics and Chemistry) for her work on radioactivity."
                },
                {
                    question: "What is the most important rule in any science lab?",
                    options: ["To have fun", "To work quickly", "To follow all safety procedures", "To get the right answer"],
                    correctAnswer: 2,
                    explanation: "Safety is the number one priority in any laboratory setting to prevent accidents and injuries."
                },
                {
                    question: "An inference is:",
                    options: ["A direct observation using the five senses", "A conclusion based on evidence and reasoning", "A measurement taken with a tool", "A question to be tested"],
                    correctAnswer: 1,
                    explanation: "An observation is what you see, hear, or measure directly. An inference is an explanation you come up with based on those observations. (e.g., Observation: The grass is wet. Inference: It rained.)"
                },
                {
                    question: "The study of the Earth's physical structure and substance is called:",
                    options: ["Meteorology", "Geology", "Oceanography", "Paleontology"],
                    correctAnswer: 1,
                    explanation: "Geology is the science that deals with the Earth's history, as recorded in rocks. Paleontology, the study of fossils, is a part of geology."
                },
                {
                    question: "Why is it important to repeat an experiment multiple times?",
                    options: ["To make the experiment take longer", "To ensure the results are reliable and not just a fluke", "To use up all the materials", "It is not important"],
                    correctAnswer: 1,
                    explanation: "Repeating experiments (replication) is a key part of the scientific method. If you get the same results multiple times, you can be more confident that they are accurate."
                },
                {
                    question: "What tool would a biologist use to observe cells?",
                    options: ["Telescope", "Microscope", "Barometer", "Spectroscope"],
                    correctAnswer: 1,
                    explanation: "A microscope is an instrument used to see objects that are too small to be seen by the naked eye."
                },
                {
                    question: "A conclusion at the end of an experiment should state:",
                    options: ["Whether the data supports the hypothesis", "A new hypothesis to test", "All the raw data collected", "A list of materials used"],
                    correctAnswer: 0,
                    explanation: "The conclusion summarizes the experiment and explains whether the results confirmed or contradicted the initial hypothesis."
                },
                {
                    question: "Who is often called the 'father of genetics' for his work with pea plants?",
                    options: ["Charles Darwin", "Gregor Mendel", "Louis Pasteur", "James Watson"],
                    correctAnswer: 1,
                    explanation: "Gregor Mendel's experiments with pea plants in the 19th century laid the groundwork for our understanding of heredity and genetic traits."
                },
                {
                    question: "Data that is descriptive and based on observations (e.g., color, texture) is called:",
                    options: ["Quantitative data", "Qualitative data", "Variable data", "Control data"],
                    correctAnswer: 1,
                    explanation: "Qualitative data describes qualities or characteristics. Quantitative data is numerical and involves measurements (quantities)."
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

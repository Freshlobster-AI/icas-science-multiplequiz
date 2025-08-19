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
        },
        // --- NEW QUIZZES START HERE ---
        {
            title: "Advanced Human Body",
            data: [
                {
                    question: "What is the main role of the endocrine system?",
                    options: ["To send nerve signals", "To produce and regulate hormones", "To circulate blood", "To digest food"],
                    correctAnswer: 1,
                    explanation: "The endocrine system is a network of glands that produce hormones to regulate metabolism, growth, sleep, and mood."
                },
                {
                    question: "Which part of the digestive system is primarily responsible for absorbing water from undigested food?",
                    options: ["Stomach", "Small Intestine", "Large Intestine", "Liver"],
                    correctAnswer: 2,
                    explanation: "The large intestine absorbs water and electrolytes from the remaining indigestible food matter and then passes useless waste material from the body."
                },
                {
                    question: "What is the primary purpose of platelets in the blood?",
                    options: ["To carry oxygen", "To fight infection", "To help blood clot", "To transport nutrients"],
                    correctAnswer: 2,
                    explanation: "Platelets are tiny blood cells that rush to the site of an injury to form a plug, or clot, to stop bleeding."
                },
                {
                    question: "How do vaccines primarily work to protect you from diseases?",
                    options: ["By killing existing viruses in the body", "By strengthening your muscles", "By introducing a weakened or inactive germ to trigger an immune response", "By providing extra vitamins"],
                    correctAnswer: 2,
                    explanation: "Vaccines train your immune system to recognize and fight off specific germs, so if you're exposed to the real germ later, your body is ready to destroy it."
                },
                {
                    question: "The central nervous system (CNS) is made up of which two parts?",
                    options: ["The heart and lungs", "The bones and muscles", "The brain and spinal cord", "The arteries and veins"],
                    correctAnswer: 2,
                    explanation: "The brain and spinal cord are the main processing centers for the nervous system, controlling all the functions of the body."
                },
                {
                    question: "What are the essential building blocks of proteins?",
                    options: ["Fatty acids", "Sugars", "Amino acids", "Vitamins"],
                    correctAnswer: 2,
                    explanation: "Amino acids are molecules that combine to form proteins. Your body uses them to build muscle, repair tissue, and perform many other functions."
                },
                {
                    question: "Which type of nutrient is the body's main and quickest source of energy?",
                    options: ["Proteins", "Fats", "Carbohydrates", "Minerals"],
                    correctAnswer: 2,
                    explanation: "Carbohydrates are broken down into glucose (sugar), which is the primary fuel for your body's cells, tissues, and organs."
                },
                {
                    question: "What is the name of the muscular tube that carries food from the mouth to the stomach?",
                    options: ["Trachea", "Esophagus", "Aorta", "Intestine"],
                    correctAnswer: 1,
                    explanation: "The esophagus uses waves of muscle contractions (peristalsis) to push food down into the stomach. The trachea is the windpipe."
                },
                {
                    question: "Which organ in the body produces insulin, a hormone that regulates blood sugar?",
                    options: ["Liver", "Kidney", "Spleen", "Pancreas"],
                    correctAnswer: 3,
                    explanation: "The pancreas produces insulin, which helps your body use sugar from carbohydrates for energy or to store for future use."
                },
                {
                    question: "What are calories a measure of?",
                    options: ["The weight of food", "The amount of vitamins in food", "The amount of energy in food", "The saltiness of food"],
                    correctAnswer: 2,
                    explanation: "A calorie is a unit of energy. Your body needs calories from food and drink to function properly."
                },
                {
                    question: "The smallest bones in the human body, the malleus, incus, and stapes, are found where?",
                    options: ["In the toes", "In the fingers", "In the ear", "In the nose"],
                    correctAnswer: 2,
                    explanation: "These three tiny bones (ossicles) are in the middle ear. They transmit sound vibrations from the eardrum to the inner ear."
                },
                {
                    question: "Which of these is a primary function of the liver?",
                    options: ["Pumping blood", "Filtering waste and toxins from the blood", "Producing insulin", "Absorbing nutrients"],
                    correctAnswer: 1,
                    explanation: "The liver has many jobs, but one of its most important is to act as a filter for your blood, removing harmful substances."
                },
                {
                    question: "What is an antibiotic medication used to treat?",
                    options: ["Viral infections like the flu", "Bacterial infections like strep throat", "All types of infections", "Allergies"],
                    correctAnswer: 1,
                    explanation: "Antibiotics work by killing bacteria or preventing them from reproducing. They are not effective against viruses."
                },
                {
                    question: "What is the difference between the epidermis and the dermis?",
                    options: ["They are two types of muscle", "They are two different bones", "They are the outer and inner layers of the skin", "They are parts of the eye"],
                    correctAnswer: 2,
                    explanation: "The epidermis is the outermost, protective layer of skin, while the dermis is the thicker layer beneath it, containing nerves and blood vessels."
                },
                {
                    question: "What is the purpose of saliva in your mouth?",
                    options: ["To cool down food", "To start the digestion of carbohydrates", "To make your teeth white", "To help you speak"],
                    correctAnswer: 1,
                    explanation: "Saliva contains enzymes that begin the chemical breakdown of food, and it also lubricates the food to make it easier to swallow."
                },
                {
                    question: "What flexible connective tissue is found in your ears, nose, and at the ends of bones?",
                    options: ["Tendon", "Ligament", "Cartilage", "Marrow"],
                    correctAnswer: 2,
                    explanation: "Cartilage is a tough but flexible tissue that acts as a cushion between bones at the joints and provides structure to other parts of the body."
                },
                {
                    question: "What does your body's immune system do?",
                    options: ["It helps you breathe", "It pumps your blood", "It defends your body against germs and disease", "It digests your food"],
                    correctAnswer: 2,
                    explanation: "The immune system is a complex network of cells, tissues, and organs that work together to protect the body from harmful invaders like bacteria and viruses."
                },
                {
                    question: "What is pasteurization?",
                    options: ["A way to make pasta", "A process of heating liquids to kill harmful germs", "A method for exercising", "A type of surgery"],
                    correctAnswer: 1,
                    explanation: "Named after Louis Pasteur, pasteurization is used on milk, juice, and other foods to make them safer to consume and extend their shelf life."
                },
                {
                    question: "An infectious disease is one that is caused by:",
                    options: ["Genetics", "Poor diet", "Pathogens like bacteria or viruses", "Old age"],
                    correctAnswer: 2,
                    explanation: "Infectious diseases can be passed from one person to another. Non-infectious diseases, like heart disease, cannot be spread this way."
                },
                {
                    question: "What is the name of the body's largest artery, which carries blood from the heart?",
                    options: ["Vena Cava", "Pulmonary Artery", "Aorta", "Femoral Artery"],
                    correctAnswer: 2,
                    explanation: "The aorta is the main and largest artery in the body, originating from the left ventricle of the heart and extending down to the abdomen."
                }
            ]
        },
        {
            title: "Advanced Earth Science",
            data: [
                {
                    question: "What is the theory of plate tectonics?",
                    options: ["A theory that the Earth is flat", "A theory that Earth's outer shell is divided into plates that move", "A theory about how mountains are formed", "A theory about the Earth's core"],
                    correctAnswer: 1,
                    explanation: "Plate tectonics explains the large-scale motions of Earth's lithosphere, which is how continents drift, earthquakes happen, and volcanoes form."
                },
                {
                    question: "What is the main cause of the Earth's ocean tides?",
                    options: ["The wind", "The Earth's rotation", "The gravitational pull of the Moon and Sun", "Underwater earthquakes"],
                    correctAnswer: 2,
                    explanation: "The Moon's gravity pulls on the Earth's oceans, creating a bulge of water. As the Earth rotates, different areas pass through this bulge, causing high and low tides."
                },
                {
                    question: "What is the difference between magma and lava?",
                    options: ["Magma is hotter than lava", "They are made of different minerals", "Magma is molten rock beneath the Earth's surface; lava is on the surface", "Lava is solid, magma is liquid"],
                    correctAnswer: 2,
                    explanation: "It's all about location! When molten rock is underground, it's called magma. Once it erupts from a volcano, it's called lava."
                },
                {
                    question: "What is a seismograph used to measure?",
                    options: ["The speed of wind", "The depth of the ocean", "The vibrations of an earthquake", "The temperature of a volcano"],
                    correctAnswer: 2,
                    explanation: "A seismograph is an instrument that records the motion of the ground during an earthquake, allowing scientists to determine its strength and location."
                },
                {
                    question: "How are caves like limestone caverns typically formed?",
                    options: ["By wind erosion", "By ancient rivers carving them out", "By slightly acidic groundwater dissolving the rock over millions of years", "By volcanic activity"],
                    correctAnswer: 2,
                    explanation: "Rainwater picks up carbon dioxide from the air, forming a weak acid. This carbonic acid slowly dissolves limestone, creating vast underground cave systems."
                },
                {
                    question: "What is an aquifer?",
                    options: ["An underwater cave", "A type of cloud", "An underground layer of rock or sediment that holds groundwater", "A machine for cleaning water"],
                    correctAnswer: 2,
                    explanation: "Aquifers are a critical source of fresh water for many communities, which can be accessed by drilling wells."
                },
                {
                    question: "The Mohs scale is used by geologists to measure a mineral's:",
                    options: ["Weight", "Color", "Hardness", "Value"],
                    correctAnswer: 2,
                    explanation: "The Mohs scale of mineral hardness ranks minerals from 1 (softest, like Talc) to 10 (hardest, like Diamond) based on their ability to scratch one another."
                },
                {
                    question: "What is a delta?",
                    options: ["A deep part of the ocean", "A type of desert sand dune", "A landform created by the deposition of sediment at the mouth of a river", "A triangular-shaped mountain"],
                    correctAnswer: 2,
                    explanation: "As a river flows into a larger body of water like a lake or ocean, it slows down and drops the sediment it was carrying, building up a delta over time."
                },
                {
                    question: "How do glaciers shape the landscape?",
                    options: ["By melting and causing floods", "By pushing rocks and soil, carving out valleys and lakes", "By freezing the ground solid", "They do not affect the landscape"],
                    correctAnswer: 1,
                    explanation: "Massive glaciers act like giant bulldozers, scraping away rock and soil (erosion) and depositing it elsewhere, creating features like U-shaped valleys and moraines."
                },
                {
                    question: "What is a geyser?",
                    options: ["A small volcano that erupts mud", "A hot spring that periodically erupts, shooting a column of water and steam into the air", "A type of tornado", "An underground river"],
                    correctAnswer: 1,
                    explanation: "Geysers are formed when underground water is heated by magma and builds up pressure until it violently erupts through a vent on the surface."
                },
                {
                    question: "What is the Mid-Atlantic Ridge?",
                    options: ["A large bridge across the Atlantic", "A deep ocean trench", "An underwater mountain range where tectonic plates are spreading apart", "A shipping lane"],
                    correctAnswer: 2,
                    explanation: "This is a divergent plate boundary where new oceanic crust is formed as magma rises to the surface, pushing the continents of Europe/Africa and the Americas apart."
                },
                {
                    question: "What is the process of desalination?",
                    options: ["Removing pollution from the air", "Removing salt from seawater to make it drinkable", "Planting trees to stop desert growth", "Mapping the ocean floor"],
                    correctAnswer: 1,
                    explanation: "Desalination is an important technology for providing fresh water in arid regions of the world, though it can be energy-intensive."
                },
                {
                    question: "What is the Coriolis effect?",
                    options: ["The effect of the sun on the tides", "The way gravity changes with altitude", "The deflection of moving objects due to the Earth's rotation", "The process of rock formation"],
                    correctAnswer: 2,
                    explanation: "The Coriolis effect is why hurricanes and cyclones spin in different directions in the Northern and Southern Hemispheres."
                },
                {
                    question: "What is the difference between a mineral and a rock?",
                    options: ["Minerals are harder than rocks", "A mineral has a specific chemical composition, while a rock is made up of one or more minerals", "Minerals are valuable, rocks are not", "There is no difference"],
                    correctAnswer: 1,
                    explanation: "Think of minerals as the ingredients and rocks as the cake. A rock like granite is made up of different minerals like quartz, feldspar, and mica."
                },
                {
                    question: "What is bioluminescence, as seen in some deep-sea creatures?",
                    options: ["The ability to see in the dark", "The production and emission of light by a living organism", "A form of underwater communication", "The ability to withstand high pressure"],
                    correctAnswer: 1,
                    explanation: "Bioluminescence is created by a chemical reaction in an organism's body and is used for attracting prey, finding mates, or defense."
                },
                {
                    question: "What is permafrost?",
                    options: ["A type of winter storm", "A layer of soil, rock, or sediment that is frozen for more than two consecutive years", "A glacier that never melts", "The ice at the North Pole"],
                    correctAnswer: 1,
                    explanation: "Permafrost is found in polar regions and at high altitudes. Climate change is causing permafrost to thaw, which has significant environmental consequences."
                },
                {
                    question: "The abyssal zone of the ocean is known for being:",
                    options: ["Warm and full of coral reefs", "Shallow and near the coast", "Completely dark, with high pressure and cold temperatures", "A busy area for fishing"],
                    correctAnswer: 2,
                    explanation: "The abyssal zone is the pitch-black bottom layer of the ocean. Life here has adapted to survive in extreme conditions with no sunlight."
                },
                {
                    question: "What is a continental shelf?",
                    options: ["A deep trench in the ocean", "The edge of a continent that lies under the ocean", "A large glacier on land", "A type of rock formation"],
                    correctAnswer: 1,
                    explanation: "The continental shelf is the relatively shallow part of the ocean that extends from the coastline. It is rich in marine life."
                },
                {
                    question: "What is the name for the supercontinent that existed millions of years ago?",
                    options: ["Gondwana", "Laurasia", "Pangaea", "Eurasia"],
                    correctAnswer: 2,
                    explanation: "Pangaea was a supercontinent that incorporated almost all the landmasses on Earth before it began to break apart due to plate tectonics."
                },
                {
                    question: "What is a 'fossil fuel'?",
                    options: ["A type of renewable energy", "A fuel made from dinosaur bones", "A fuel formed from the remains of ancient plants and animals", "A fuel that does not cause pollution"],
                    correctAnswer: 2,
                    explanation: "Coal, oil, and natural gas are fossil fuels, formed over millions of years from the buried remains of living organisms."
                }
            ]
        },
        {
            title: "Advanced Physical Science",
            data: [
                {
                    question: "What is the difference between speed and velocity?",
                    options: ["There is no difference", "Velocity includes direction, while speed does not", "Velocity is measured in km/h, speed is in m/s", "Speed is for cars, velocity is for planes"],
                    correctAnswer: 1,
                    explanation: "Speed is how fast an object is moving (e.g., 60 km/h). Velocity is speed in a specific direction (e.g., 60 km/h North)."
                },
                {
                    question: "What is buoyancy?",
                    options: ["The tendency of an object to sink", "The upward force exerted by a fluid that opposes the weight of an immersed object", "The measure of an object's weight", "The speed at which an object falls"],
                    correctAnswer: 1,
                    explanation: "Buoyancy is the force that makes ships float and balloons rise. An object floats if the buoyant force is greater than its weight."
                },
                {
                    question: "Newton's First Law of Motion, the law of inertia, states that an object in motion will:",
                    options: ["Eventually stop on its own", "Speed up over time", "Stay in motion with the same speed and direction unless acted upon by an unbalanced force", "Change direction randomly"],
                    correctAnswer: 2,
                    explanation: "This law also states that an object at rest will stay at rest. It's the reason you lurch forward in a car when it suddenly stops."
                },
                {
                    question: "What is momentum?",
                    options: ["The amount of energy an object has", "The force of gravity on an object", "The quantity of motion of a moving body, measured as a product of its mass and velocity", "The top speed of an object"],
                    correctAnswer: 2,
                    explanation: "A heavy truck moving slowly can have the same momentum as a light car moving quickly. It is a measure of how hard it is to stop an object."
                },
                {
                    question: "What is static electricity?",
                    options: ["Electricity that flows through wires", "A build-up of electric charge on the surface of an object", "The electricity in a battery", "A type of magnetism"],
                    correctAnswer: 1,
                    explanation: "Static electricity is what causes a balloon to stick to a wall after you rub it on your hair, or the shock you sometimes get from a doorknob."
                },
                {
                    question: "What is the difference between a parallel circuit and a series circuit?",
                    options: ["A parallel circuit is safer", "In a series circuit, there is only one path for the current; in a parallel circuit, there are multiple paths", "A series circuit uses more power", "There is no difference"],
                    correctAnswer: 1,
                    explanation: "This is why if one light bulb burns out in an old string of Christmas lights (a series circuit), they all go out. In your house (a parallel circuit), one bulb burning out doesn't affect the others."
                },
                {
                    question: "The law of conservation of energy states that energy:",
                    options: ["Can be created from nothing", "Can be completely destroyed", "Can be lost as heat", "Cannot be created or destroyed, only changed from one form to another"],
                    correctAnswer: 3,
                    explanation: "For example, when you drop a ball, its potential energy is converted into kinetic energy as it falls."
                },
                {
                    question: "What is density?",
                    options: ["How heavy an object is", "How large an object is", "The amount of mass per unit of volume", "The ability of an object to float"],
                    correctAnswer: 2,
                    explanation: "A block of lead is denser than a block of wood of the same size because it has more mass packed into the same volume."
                },
                {
                    question: "What is terminal velocity?",
                    options: ["The speed at which an object starts to fall", "The fastest possible speed in the universe", "The constant speed that a freely falling object eventually reaches when air resistance equals the force of gravity", "The speed needed to escape Earth's gravity"],
                    correctAnswer: 2,
                    explanation: "When a skydiver reaches terminal velocity, they stop accelerating and fall at a constant speed because the upward force of air resistance balances the downward force of gravity."
                },
                {
                    question: "What is an electromagnet?",
                    options: ["A naturally occurring magnetic rock", "A permanent magnet made of iron", "A magnet created by passing an electric current through a coil of wire", "A magnet that works on wood"],
                    correctAnswer: 2,
                    explanation: "Electromagnets are temporary and can be turned on and off. They are used in everything from scrapyard cranes to electric motors."
                },
                {
                    question: "What is acceleration?",
                    options: ["How fast something is going", "The rate of change of an object's velocity", "The top speed of an object", "The distance an object travels"],
                    correctAnswer: 1,
                    explanation: "Acceleration can mean speeding up, slowing down (deceleration), or changing direction."
                },
                {
                    question: "What is surface tension?",
                    options: ["The stress on the surface of a solid", "The property of the surface of a liquid that allows it to resist an external force", "The temperature of a liquid's surface", "The pressure deep inside a liquid"],
                    correctAnswer: 1,
                    explanation: "Surface tension is caused by the attraction of liquid molecules to each other and is why some insects can walk on water."
                },
                {
                    question: "What is air resistance, or drag?",
                    options: ["The force that pulls objects down", "The force that opposes the motion of an object through the air", "The weight of the air", "The speed of wind"],
                    correctAnswer: 1,
                    explanation: "Drag is a type of friction. It's why a parachute works and why a flat piece of paper falls slower than a crumpled one."
                },
                {
                    question: "What is the difference between AC (Alternating Current) and DC (Direct Current)?",
                    options: ["AC is more powerful than DC", "DC is used in homes, AC is for cars", "DC flows in one direction, while AC changes direction periodically", "AC is safer than DC"],
                    correctAnswer: 2,
                    explanation: "Batteries provide DC electricity. The power outlets in your home provide AC electricity."
                },
                {
                    question: "What is the relationship between force, mass, and acceleration as described by Newton's Second Law?",
                    options: ["Force = mass / acceleration", "Force = mass x acceleration (F=ma)", "Mass = force x acceleration", "They are not related"],
                    correctAnswer: 1,
                    explanation: "This famous equation means that it takes more force to accelerate a heavier object, and more force is needed for a greater acceleration."
                },
                {
                    question: "What is centripetal force?",
                    options: ["The force that pushes objects away from the center", "The force that keeps an object moving in a circular path", "The force of gravity", "A type of friction"],
                    correctAnswer: 1,
                    explanation: "When you swing a ball on a string, the tension in the string provides the centripetal force that keeps the ball moving in a circle."
                },
                {
                    question: "In physics, what is 'work'?",
                    options: ["Any activity that requires effort", "The amount of energy an object has", "When a force is applied to an object and causes it to move a distance", "The power of an engine"],
                    correctAnswer: 2,
                    explanation: "Scientifically, if you push against a wall, you are doing no work because the wall doesn't move. Work is only done when the force causes displacement."
                },
                {
                    question: "What is a magnetic field?",
                    options: ["A field where magnets are grown", "The area around a magnet where its magnetic force can be felt", "The metal part of a magnet", "A type of electric circuit"],
                    correctAnswer: 1,
                    explanation: "You can visualize a magnetic field by sprinkling iron filings on a piece of paper over a magnet; they will line up along the field lines."
                },
                {
                    question: "What is the difference between potential and kinetic energy?",
                    options: ["Potential is energy of motion, kinetic is stored energy", "Kinetic is energy of motion, potential is stored energy", "They are both types of heat energy", "There is no difference"],
                    correctAnswer: 1,
                    explanation: "A roller coaster at the top of a hill has maximum potential energy. As it goes down the hill, this is converted to kinetic energy."
                },
                {
                    question: "What is sound insulation?",
                    options: ["Making sounds louder", "The process of preventing sound from passing from one place to another", "A type of musical instrument", "Recording sound"],
                    correctAnswer: 1,
                    explanation: "Insulation materials are often soft and porous, which helps to absorb sound waves and prevent them from traveling through walls."
                }
            ]
        },
        {
            title: "Advanced Astronomy",
            data: [
                {
                    question: "What is a black hole?",
                    options: ["A hole in space that leads to another dimension", "A dead star that emits no light", "A region of spacetime where gravity is so strong that nothing, not even light, can escape", "A dark-colored planet"],
                    correctAnswer: 2,
                    explanation: "Black holes are formed from the remnants of massive stars that have collapsed under their own gravity."
                },
                {
                    question: "What is the main difference between a solar eclipse and a lunar eclipse?",
                    options: ["Solar eclipses happen at night", "A solar eclipse is when the Moon blocks the Sun; a lunar eclipse is when the Earth's shadow covers the Moon", "Lunar eclipses are more common", "A lunar eclipse is when the Sun blocks the Moon"],
                    correctAnswer: 1,
                    explanation: "In a solar eclipse, the Moon is between the Sun and Earth. In a lunar eclipse, the Earth is between the Sun and Moon."
                },
                {
                    question: "The asteroid belt is a region of space located between the orbits of which two planets?",
                    options: ["Earth and Mars", "Mars and Jupiter", "Jupiter and Saturn", "Saturn and Uranus"],
                    correctAnswer: 1,
                    explanation: "The asteroid belt contains millions of asteroids of various sizes, remnants from the early formation of the solar system."
                },
                {
                    question: "What is a supernova?",
                    options: ["A very large star", "The powerful and luminous explosion of a star", "A new star being born", "A type of galaxy"],
                    correctAnswer: 1,
                    explanation: "A supernova occurs during the last stages of a massive star's life and can briefly outshine entire galaxies."
                },
                {
                    question: "What makes a dwarf planet, like Pluto, different from a regular planet?",
                    options: ["It is made of ice", "It does not have any moons", "It has not 'cleared its orbital neighborhood' of other objects", "It is smaller than Earth's Moon"],
                    correctAnswer: 2,
                    explanation: "According to the official definition, a planet must be large enough to have cleared its orbit of other debris. Pluto shares its orbital region with other objects in the Kuiper Belt."
                },
                {
                    question: "What was the primary purpose of the Apollo missions in the 1960s and 70s?",
                    options: ["To explore Mars", "To launch the Hubble Telescope", "To land humans on the Moon and return them safely to Earth", "To build the International Space Station"],
                    correctAnswer: 2,
                    explanation: "The Apollo program, run by NASA, successfully achieved this goal with Apollo 11 in 1969."
                },
                {
                    question: "What are the auroras (like the Northern Lights) caused by?",
                    options: ["Reflections from the polar ice caps", "Weather patterns in the upper atmosphere", "Charged particles from the solar wind interacting with Earth's magnetic field and atmosphere", "Satellites orbiting the Earth"],
                    correctAnswer: 2,
                    explanation: "These particles excite atoms in the upper atmosphere, causing them to glow in beautiful, colorful displays."
                },
                {
                    question: "What is the difference between rotation and revolution in astronomy?",
                    options: ["Rotation is moving in a circle, revolution is moving in a straight line", "Rotation is a planet spinning on its axis; revolution is a planet orbiting a star", "They mean the same thing", "Revolution is spinning, rotation is orbiting"],
                    correctAnswer: 1,
                    explanation: "Earth's rotation on its axis causes day and night (takes 24 hours). Earth's revolution around the Sun causes the seasons (takes 365 days)."
                },
                {
                    question: "What is the International Space Station (ISS)?",
                    options: ["A space telescope", "A base on the Moon", "A large, habitable artificial satellite in low Earth orbit", "A mission to Mars"],
                    correctAnswer: 2,
                    explanation: "The ISS is a multinational collaborative project and serves as a microgravity and space environment research laboratory."
                },
                {
                    question: "What is the difference between a meteoroid, a meteor, and a meteorite?",
                    options: ["They are different sizes", "They are made of different materials", "It depends on their location: meteoroid is in space, meteor is in the atmosphere, meteorite is on the ground", "There is no difference"],
                    correctAnswer: 2,
                    explanation: "A meteoroid is a space rock. When it enters Earth's atmosphere and burns up ('a shooting star'), it's a meteor. If any part of it survives and hits the ground, it's a meteorite."
                },
                {
                    question: "What is the Oort Cloud believed to be?",
                    options: ["A cloud of gas surrounding Jupiter", "A theoretical, vast spherical shell of icy objects surrounding the Solar System", "Another name for the Milky Way", "A type of nebula"],
                    correctAnswer: 1,
                    explanation: "The Oort Cloud is thought to be the origin of most long-period comets. It is extremely far from the Sun."
                },
                {
                    question: "What is a red giant star?",
                    options: ["A very young, hot star", "A star that is about to be born", "A dying star in a late stage of stellar evolution", "The largest type of star in the universe"],
                    correctAnswer: 2,
                    explanation: "In a few billion years, our own Sun will swell up to become a red giant as it runs out of hydrogen fuel in its core."
                },
                {
                    question: "The Kuiper Belt is a region of the solar system beyond the planets, extending from the orbit of:",
                    options: ["Mars", "Jupiter", "Saturn", "Neptune"],
                    correctAnswer: 3,
                    explanation: "The Kuiper Belt is similar to the asteroid belt but far larger and is home to dwarf planets like Pluto, as well as many comets."
                },
                {
                    question: "What is a 'galaxy cluster'?",
                    options: ["A small group of stars", "A structure that consists of hundreds to thousands of galaxies bound together by gravity", "Another name for a solar system", "The center of a galaxy"],
                    correctAnswer: 1,
                    explanation: "Our Milky Way galaxy is part of a galaxy cluster called the Local Group."
                },
                {
                    question: "What are the Mars rovers, like Curiosity and Perseverance?",
                    options: ["Manned spacecraft that orbit Mars", "Telescopes that look at Mars from Earth", "Robotic, car-sized vehicles designed to explore the surface of Mars", "Satellites that map the Martian surface"],
                    correctAnswer: 2,
                    explanation: "These rovers are remotely operated from Earth and carry a suite of scientific instruments to analyze the Martian geology and environment."
                },
                {
                    question: "What is the primary mission of the Hubble Space Telescope?",
                    options: ["To search for aliens", "To take high-resolution images of astronomical objects and make deep-space observations", "To land on other planets", "To monitor Earth's weather"],
                    correctAnswer: 1,
                    explanation: "By being in orbit above the Earth's distorting atmosphere, Hubble can see the universe with far greater clarity than ground-based telescopes."
                },
                {
                    question: "What is a 'binary star system'?",
                    options: ["A solar system with two suns", "A star that has a twin planet", "Two stars that orbit around a common center of mass", "A star that flashes on and off"],
                    correctAnswer: 2,
                    explanation: "Binary star systems are very common in our galaxy. Sometimes the stars are far apart, and sometimes they are so close they can exchange material."
                },
                {
                    question: "What is an 'exoplanet'?",
                    options: ["A planet within our Solar System", "A planet that orbits a star outside our Solar System", "A planet that has been ejected from its solar system", "A type of dwarf planet"],
                    correctAnswer: 1,
                    explanation: "Astronomers have discovered thousands of exoplanets, which helps us understand how common planetary systems are in the universe."
                },
                {
                    question: "What is the 'cosmic microwave background' (CMB)?",
                    options: ["The light from the nearest stars", "A type of radiation from black holes", "The faint, leftover radiation from the Big Bang", "The dust between galaxies"],
                    correctAnswer: 2,
                    explanation: "The CMB is considered the oldest light in the universe and provides strong evidence for the Big Bang theory."
                },
                {
                    question: "What is a 'light sail' in the context of space travel?",
                    options: ["A special light on a spacecraft", "A method of propulsion that uses radiation pressure from stars to push large, ultra-thin mirrors", "A landing parachute for Mars", "A type of solar panel"],
                    correctAnswer: 1,
                    explanation: "Light sails offer a potential way to travel between stars without needing to carry heavy fuel, as they are pushed by the light from the sun itself."
                }
            ]
        },
        {
            title: "Everyday Chemistry",
            data: [
                {
                    question: "What is the chemical process of burning called?",
                    options: ["Melting", "Oxidation", "Combustion", "Evaporation"],
                    correctAnswer: 2,
                    explanation: "Combustion is a rapid reaction between a substance with an oxidant, usually oxygen, to produce heat and light. A fire is an example of combustion."
                },
                {
                    question: "What gas is dissolved in water to make fizzy drinks?",
                    options: ["Oxygen", "Nitrogen", "Hydrogen", "Carbon Dioxide"],
                    correctAnswer: 3,
                    explanation: "Carbon dioxide (CO₂) gas is forced into the liquid under pressure. When you open the bottle, the pressure is released, and the gas escapes as bubbles."
                },
                {
                    question: "Why does baking powder or baking soda make cakes and bread rise?",
                    options: ["It makes the batter lighter", "It releases a gas (carbon dioxide) when heated or mixed with acid", "It absorbs air from the oven", "It expands when it gets hot"],
                    correctAnswer: 1,
                    explanation: "The bubbles of carbon dioxide gas get trapped in the batter or dough, causing it to expand and become light and fluffy."
                },
                {
                    question: "An alloy is a:",
                    options: ["Type of plastic", "Pure chemical element", "Mixture of a metal with at least one other element", "Type of ceramic"],
                    correctAnswer: 2,
                    explanation: "Alloys are made to give metals improved properties. For example, steel is an alloy of iron and carbon, which is much stronger than pure iron."
                },
                {
                    question: "What is the main chemical in vinegar that gives it its sour taste and sharp smell?",
                    options: ["Citric acid", "Hydrochloric acid", "Acetic acid", "Sulfuric acid"],
                    correctAnswer: 2,
                    explanation: "Vinegar is a dilute solution of acetic acid, which is produced by the fermentation of ethanol by acetic acid bacteria."
                },
                {
                    question: "The process of iron rusting is a type of chemical reaction called:",
                    options: ["Reduction", "Combustion", "Neutralization", "Oxidation"],
                    correctAnswer: 3,
                    explanation: "Oxidation is a reaction that involves a substance reacting with oxygen. When iron oxidizes, it forms iron oxide, which we call rust."
                },
                {
                    question: "How does soap work to clean your hands?",
                    options: ["It physically scrapes the dirt off", "It has molecules with one end that attracts water and another that attracts oil and grease", "It dissolves the dirt", "It kills all germs with acid"],
                    correctAnswer: 1,
                    explanation: "The soap molecules trap the oily dirt in tiny bubbles, which can then be washed away by water."
                },
                {
                    question: "What is happening at a molecular level when water boils and turns to steam?",
                    options: ["The water molecules are breaking apart into hydrogen and oxygen", "The water molecules are gaining enough energy to escape from the liquid and become a gas", "The water molecules are shrinking", "The water molecules are burning"],
                    correctAnswer: 1,
                    explanation: "This is a physical change of state. The molecules themselves don't change, they just move much faster and farther apart."
                },
                {
                    question: "The process of using yeast to turn sugar into alcohol and carbon dioxide is called:",
                    options: ["Distillation", "Pasteurization", "Fermentation", "Oxidation"],
                    correctAnswer: 2,
                    explanation: "Fermentation is used to make many foods and drinks, including bread (the CO₂ makes it rise), yogurt, beer, and wine."
                },
                {
                    question: "Why do some fruits, like apples and bananas, turn brown after you cut them?",
                    options: ["They are drying out", "An enzyme in the fruit reacts with oxygen in the air", "They are reacting with the metal in the knife", "They are rotting instantly"],
                    correctAnswer: 1,
                    explanation: "This process is called enzymatic browning. It's a chemical reaction that can be slowed down by adding an acid like lemon juice."
                },
                {
                    question: "What is polymerization?",
                    options: ["The process of making things magnetic", "The process of joining many small molecules (monomers) together to form a long chain (a polymer)", "The process of separating mixtures", "The process of nuclear fission"],
                    correctAnswer: 1,
                    explanation: "Polymerization is how plastics, rubber, and even natural substances like DNA and proteins are formed."
                },
                {
                    question: "What is a pH indicator, like litmus paper, used for?",
                    options: ["To measure temperature", "To measure the mass of a chemical", "To show whether a substance is an acid or a base", "To measure the speed of a reaction"],
                    correctAnswer: 2,
                    explanation: "A pH indicator is a substance that changes color in the presence of an acid or a base. Litmus paper, for example, turns red in acid and blue in base."
                },
                {
                    question: "What is an emulsion?",
                    options: ["A type of solution", "A stable mixture of two liquids that do not normally mix, like oil and water", "A chemical reaction that produces light", "A type of solid"],
                    correctAnswer: 1,
                    explanation: "Mayonnaise is a classic example of an emulsion, where an emulsifier (lecithin from egg yolk) keeps tiny droplets of oil suspended in vinegar."
                },
                {
                    question: "What is happening when salt dissolves in water?",
                    options: ["The salt is melting", "The salt is reacting with the water to form a new chemical", "The salt crystals are breaking apart into ions that are surrounded by water molecules", "The salt is disappearing"],
                    correctAnswer: 2,
                    explanation: "This is a physical process of forming a solution. The salt and water are still there, just mixed together at a molecular level."
                },
                {
                    question: "What is a hydrocarbon?",
                    options: ["A chemical made from water and carbon", "A compound containing only hydrogen and carbon atoms", "A type of carbohydrate", "A liquid that contains hydrogen"],
                    correctAnswer: 1,
                    explanation: "Hydrocarbons are the main components of fossil fuels like petroleum and natural gas. Methane (CH₄) is the simplest hydrocarbon."
                },
                {
                    question: "The process of distillation is used to separate liquids based on their different:",
                    options: ["Colors", "Densities", "Boiling points", "Viscosities"],
                    correctAnswer: 2,
                    explanation: "In distillation, a mixture of liquids is heated. The liquid with the lower boiling point evaporates first, and its vapor is then cooled and condensed back into a separate container."
                },
                {
                    question: "What is a catalyst?",
                    options: ["A substance that is used up in a chemical reaction", "A substance that slows down a chemical reaction", "A substance that speeds up a chemical reaction without being consumed", "The final product of a chemical reaction"],
                    correctAnswer: 2,
                    explanation: "Catalysts make reactions happen faster or at lower temperatures. Enzymes in your body are biological catalysts that help with digestion."
                },
                {
                    question: "Which of these is a chemical change?",
                    options: ["Chopping wood", "Boiling water", "A firework exploding", "Melting ice"],
                    correctAnswer: 2,
                    explanation: "A firework exploding involves rapid combustion reactions that create new substances (light, heat, sound, smoke). The other options are physical changes."
                },
                {
                    question: "What does it mean if a liquid is 'volatile'?",
                    options: ["It is very thick", "It is dangerous", "It evaporates easily at room temperature", "It does not mix with water"],
                    correctAnswer: 2,
                    explanation: "Volatile liquids, like rubbing alcohol or gasoline, have a strong smell because they are constantly turning into a gas that you can inhale."
                },
                {
                    question: "What is the main difference between a saturated and an unsaturated fat?",
                    options: ["Their color", "Their taste", "The type of chemical bonds in their fatty acid chains", "Where they come from"],
                    correctAnswer: 2,
                    explanation: "Saturated fats have only single bonds between carbon atoms and are typically solid at room temperature (like butter). Unsaturated fats have one or more double bonds and are typically liquid (like olive oil)."
                }
            ]
        },
        {
            title: "Scientists & Inventions",
            data: [
                {
                    question: "Who is credited with inventing the first practical telephone?",
                    options: ["Thomas Edison", "Nikola Tesla", "Alexander Graham Bell", "Guglielmo Marconi"],
                    correctAnswer: 2,
                    explanation: "Alexander Graham Bell was awarded the first U.S. patent for the telephone in 1876."
                },
                {
                    question: "Who discovered penicillin, the first widely used antibiotic?",
                    options: ["Marie Curie", "Louis Pasteur", "Alexander Fleming", "Jonas Salk"],
                    correctAnswer: 2,
                    explanation: "Alexander Fleming discovered penicillin in 1928 when he noticed that a mold had accidentally contaminated one of his experiments and was killing bacteria."
                },
                {
                    question: "Which scientist is most famous for his work on gravity and the three laws of motion?",
                    options: ["Albert Einstein", "Galileo Galilei", "Isaac Newton", "Johannes Kepler"],
                    correctAnswer: 2,
                    explanation: "Sir Isaac Newton's laws of motion and law of universal gravitation are cornerstones of classical physics."
                },
                {
                    question: "Who developed the first successful polio vaccine?",
                    options: ["Jonas Salk", "Albert Sabin", "Louis Pasteur", "Robert Koch"],
                    correctAnswer: 0,
                    explanation: "Jonas Salk's inactivated polio vaccine was declared safe and effective in 1955, helping to nearly eradicate the devastating disease."
                },
                {
                    question: "What is Thomas Edison's most famous invention?",
                    options: ["The radio", "The airplane", "The long-lasting, practical electric light bulb", "The television"],
                    correctAnswer: 2,
                    explanation: "While others had developed earlier forms of electric lighting, Edison's invention was the first to be commercially practical and long-lasting."
                },
                {
                    question: "James Watson and Francis Crick are credited with discovering the structure of what important molecule?",
                    options: ["Protein", "Water", "DNA (Deoxyribonucleic acid)", "Glucose"],
                    correctAnswer: 2,
                    explanation: "In 1953, they published their model of the DNA double helix, which was a monumental discovery in the history of biology."
                },
                {
                    question: "What did the Wright brothers, Orville and Wilbur, invent?",
                    options: ["The automobile", "The first successful airplane", "The steam engine", "The helicopter"],
                    correctAnswer: 1,
                    explanation: "They are credited with inventing, building, and flying the world's first successful motor-operated airplane on December 17, 1903."
                },
                {
                    question: "Marie Curie was a pioneering physicist and chemist known for her research on:",
                    options: ["Genetics", "Radioactivity", "Black holes", "Plate tectonics"],
                    correctAnswer: 1,
                    explanation: "She was the first woman to win a Nobel Prize and the only person to win it in two different scientific fields (Physics and Chemistry)."
                },
                {
                    question: "What was Galileo Galilei's primary contribution to astronomy?",
                    options: ["He discovered gravity", "He was the first to use a telescope for astronomical observations, discovering Jupiter's moons and the phases of Venus", "He invented the telescope", "He proved the Earth was flat"],
                    correctAnswer: 1,
                    explanation: "His observations provided strong evidence for the Copernican theory that the Earth revolves around the Sun."
                },
                {
                    question: "Who proposed the theory of evolution by natural selection?",
                    options: ["Gregor Mendel", "Charles Darwin", "Alfred Russel Wallace", "Both B and C"],
                    correctAnswer: 3,
                    explanation: "Both Charles Darwin and Alfred Russel Wallace independently conceived of the theory of evolution by natural selection, though Darwin's book 'On the Origin of Species' made it famous."
                },
                {
                    question: "Louis Pasteur developed a process for heating liquids to kill germs. What is this process called?",
                    options: ["Filtration", "Distillation", "Pasteurization", "Fermentation"],
                    correctAnswer: 2,
                    explanation: "Pasteurization is still used today for milk, juice, and other foods to make them safe and extend their shelf life."
                },
                {
                    question: "Johannes Gutenberg is credited with inventing what transformative technology in the 15th century?",
                    options: ["The steam engine", "The mechanical printing press", "The compass", "The clock"],
                    correctAnswer: 1,
                    explanation: "His invention of the printing press with movable type sparked a revolution in communication and the spread of knowledge throughout Europe."
                },
                {
                    question: "Who is considered the 'father of modern genetics' for his experiments with pea plants?",
                    options: ["Charles Darwin", "James Watson", "Gregor Mendel", "Francis Crick"],
                    correctAnswer: 2,
                    explanation: "Gregor Mendel's work demonstrated that the inheritance of certain traits follows particular patterns, now referred to as the laws of Mendelian inheritance."
                },
                {
                    question: "Nikola Tesla was a brilliant inventor whose work was crucial for the development of what system?",
                    options: ["The direct current (DC) electrical system", "The alternating current (AC) electrical system", "The internet", "The telephone network"],
                    correctAnswer: 1,
                    explanation: "Tesla's AC system allowed for the efficient transmission of electricity over long distances and is the basis for the power grid we use today."
                },
                {
                    question: "Who is credited with inventing the World Wide Web?",
                    options: ["Bill Gates", "Steve Jobs", "Tim Berners-Lee", "Vint Cerf"],
                    correctAnswer: 2,
                    explanation: "In 1989, British scientist Tim Berners-Lee invented the World Wide Web while working at CERN. It is different from the internet, which is the network it runs on."
                },
                {
                    question: "Rosalind Franklin's work was critical to understanding the structure of DNA because she produced:",
                    options: ["The first model of DNA", "The first vaccine using DNA", "High-resolution X-ray diffraction images of DNA", "The chemical formula for DNA"],
                    correctAnswer: 2,
                    explanation: "Her famous 'Photo 51' provided crucial evidence for Watson and Crick to develop their double helix model."
                },
                {
                    question: "What did Alfred Nobel, the founder of the Nobel Prizes, invent?",
                    options: ["The Nobel Prize", "The telegraph", "Dynamite", "The machine gun"],
                    correctAnswer: 2,
                    explanation: "Nobel invented dynamite, a safer and more manageable explosive than nitroglycerin. He established the prizes in his will."
                },
                {
                    question: "Who invented the first battery, known as the voltaic pile?",
                    options: ["Benjamin Franklin", "Michael Faraday", "Alessandro Volta", "Luigi Galvani"],
                    correctAnswer: 2,
                    explanation: "In 1800, Alessandro Volta created the first device to produce a steady electric current, paving the way for the field of electrochemistry."
                },
                {
                    question: "What was Stephen Hawking's primary area of scientific research?",
                    options: ["The study of dinosaurs", "The development of computers", "Cosmology, particularly the study of black holes", "The discovery of new elements"],
                    correctAnswer: 2,
                    explanation: "Hawking is famous for his theoretical prediction that black holes emit radiation, often called Hawking radiation."
                },
                {
                    question: "Dmitri Mendeleev is a famous chemist credited with creating the first version of the:",
                    options: ["pH scale", "Periodic Table of Elements", "Geologic time scale", "Atomic model"],
                    correctAnswer: 1,
                    explanation: "Mendeleev arranged the known elements by atomic mass and was able to predict the properties of elements that had not yet been discovered."
                }
            ]
        },
        {
            title: "Mixed Science Challenge",
            data: [
                {
                    question: "What is the most abundant gas in Earth's atmosphere?",
                    options: ["Oxygen", "Argon", "Carbon Dioxide", "Nitrogen"],
                    correctAnswer: 3,
                    explanation: "The Earth's atmosphere is composed of about 78% nitrogen, 21% oxygen, and small amounts of other gases."
                },
                {
                    question: "What is the scientific term for the study of fungi?",
                    options: ["Botany", "Zoology", "Mycology", "Geology"],
                    correctAnswer: 2,
                    explanation: "Mycology is the branch of biology concerned with the study of fungi, including their genetic and biochemical properties."
                },
                {
                    question: "What is absolute zero?",
                    options: ["The freezing point of water", "The temperature at the center of the Sun", "The lowest possible temperature, where all molecular motion ceases", "A temperature of 0 degrees Celsius"],
                    correctAnswer: 2,
                    explanation: "Absolute zero is 0 Kelvin, which is equivalent to -273.15 degrees Celsius or -459.67 degrees Fahrenheit."
                },
                {
                    question: "What is a keystone species?",
                    options: ["The most common species in an ecosystem", "The largest species in an ecosystem", "A species on which other species in an ecosystem largely depend, such that if it were removed the ecosystem would change drastically", "A species that has been introduced to an ecosystem"],
                    correctAnswer: 2,
                    explanation: "For example, sea otters are a keystone species because they eat sea urchins, which would otherwise destroy the kelp forests that support many other animals."
                },
                {
                    question: "What is the main difference between weather and climate?",
                    options: ["Weather is what happens in the summer, climate is in the winter", "Weather describes short-term atmospheric conditions, while climate is the long-term average", "Climate is easier to predict than weather", "There is no difference"],
                    correctAnswer: 1,
                    explanation: "A common saying is: 'Climate is what you expect, weather is what you get.'"
                },
                {
                    question: "What is SONAR technology primarily used for?",
                    options: ["Communicating with satellites", "Taking X-ray images", "Using sound waves to navigate, communicate, or detect objects underwater", "Measuring the speed of light"],
                    correctAnswer: 2,
                    explanation: "SONAR (Sound Navigation and Ranging) is used by ships, submarines, and scientists to map the ocean floor and locate objects."
                },
                {
                    question: "What is the scientific name for the human species?",
                    options: ["Homo erectus", "Homo habilis", "Homo sapiens", "Homo neanderthalensis"],
                    correctAnswer: 2,
                    explanation: "In Latin, Homo sapiens means 'wise man'."
                },
                {
                    question: "What is the Doppler effect?",
                    options: ["The way light bends through a prism", "The change in frequency of a wave in relation to an observer who is moving relative to the wave source", "The resistance of an object to a change in motion", "The process of nuclear fusion"],
                    correctAnswer: 1,
                    explanation: "The Doppler effect is why the pitch of a siren on a passing ambulance sounds higher as it approaches you and lower as it moves away."
                },
                {
                    question: "What is dendrochronology?",
                    options: ["The study of ancient teeth", "The scientific method of dating tree rings to analyze past events", "The study of rock layers", "The mapping of stars"],
                    correctAnswer: 1,
                    explanation: "By studying the width and characteristics of tree rings, scientists can learn about past climate conditions like rainfall and temperature."
                },
                {
                    question: "What is the primary function of a plant's xylem and phloem?",
                    options: ["To produce flowers and seeds", "To perform photosynthesis", "To transport water and nutrients throughout the plant", "To anchor the plant in the soil"],
                    correctAnswer: 2,
                    explanation: "The xylem transports water and minerals up from the roots, while the phloem transports food (sugars) created during photosynthesis down to the rest of the plant."
                },
                {
                    question: "What does a litmus test indicate?",
                    options: ["The temperature of a liquid", "The presence of sugar", "Whether a substance is an acid or a base", "The density of a substance"],
                    correctAnswer: 2,
                    explanation: "A litmus test is a simple way to determine acidity. Blue litmus paper turns red under acidic conditions, and red litmus paper turns blue under basic (alkaline) conditions."
                },
                {
                    question: "What is the main difference between an endoskeleton and an exoskeleton?",
                    options: ["An endoskeleton is stronger", "An exoskeleton is for insects only", "An endoskeleton is an internal skeleton, while an exoskeleton is an external skeleton", "An endoskeleton is made of bone, an exoskeleton is made of shell"],
                    correctAnswer: 2,
                    explanation: "Humans and other vertebrates have an endoskeleton. Insects, crustaceans, and other arthropods have a hard, protective exoskeleton."
                },
                {
                    question: "What is the unit of measurement for electrical resistance?",
                    options: ["Volt", "Ampere", "Watt", "Ohm"],
                    correctAnswer: 3,
                    explanation: "Resistance, measured in Ohms (Ω), is a measure of the opposition to current flow in an electrical circuit."
                },
                {
                    question: "What is a biennial plant?",
                    options: ["A plant that lives for only one year", "A plant that takes two years to complete its biological lifecycle", "A plant that flowers twice a year", "A plant that lives for many years"],
                    correctAnswer: 1,
                    explanation: "In the first year, a biennial plant typically grows leaves, stems, and roots, then it goes dormant for the winter. In the second year, it flowers, produces seeds, and then dies. Carrots are an example."
                },
                {
                    question: "What is the chemical formula for table sugar (sucrose)?",
                    options: ["C₆H₁₂O₆", "H₂O", "NaCl", "C₁₂H₂₂O₁₁"],
                    correctAnswer: 3,
                    explanation: "Sucrose is a compound made of 12 carbon atoms, 22 hydrogen atoms, and 11 oxygen atoms. C₆H₁₂O₆ is the formula for glucose."
                },
                {
                    question: "Approximately how fast does sound travel through air at sea level?",
                    options: ["343 meters per second", "3,430 meters per second", "34 meters per second", "The speed of light"],
                    correctAnswer: 0,
                    explanation: "The speed of sound can vary with temperature, humidity, and altitude, but it is roughly 343 m/s, or about 1,235 kilometers per hour."
                },
                {
                    question: "What is the process of a solid changing directly into a gas, bypassing the liquid state?",
                    options: ["Evaporation", "Condensation", "Deposition", "Sublimation"],
                    correctAnswer: 3,
                    explanation: "An example of sublimation is dry ice (solid carbon dioxide) turning directly into carbon dioxide gas at room temperature."
                },
                {
                    question: "What is the name for the part of a wave from one peak to the next?",
                    options: ["Amplitude", "Frequency", "Trough", "Wavelength"],
                    correctAnswer: 3,
                    explanation: "Wavelength is the distance over which a wave's shape repeats. Amplitude is the height of the wave, and frequency is how many waves pass a point per second."
                },
                {
                    question: "What is the primary purpose of a catalyst in a chemical reaction?",
                    options: ["To be consumed by the reaction", "To slow the reaction down", "To increase the rate of the reaction without being consumed", "To change the color of the products"],
                    correctAnswer: 2,
                    explanation: "Catalysts work by lowering the activation energy needed for a reaction to occur, making it happen more easily and quickly."
                },
                {
                    question: "What is the name of the theory that proposes the universe began from a single point of infinite density and temperature?",
                    options: ["The String Theory", "The Theory of Relativity", "The Big Bang Theory", "The Steady State Theory"],
                    correctAnswer: 2,
                    explanation: "The Big Bang theory is the leading cosmological model describing how the universe expanded from an initial state of high density and temperature."
                }
            ]
        },
        // --- NEW YEAR 6 QUIZZES START HERE ---
        {
            title: "Mixed Science Challenge 2",
            data: [
                {
                    question: "What is the main function of the cell nucleus?",
                    options: ["To produce energy", "To control the cell's activities and store DNA", "To control what enters and leaves the cell", "To store water"],
                    correctAnswer: 1,
                    explanation: "The nucleus acts as the 'brain' or command center of the cell, containing the genetic material (DNA) that directs all of the cell's functions."
                },
                {
                    question: "What type of energy transformation occurs when you turn on a battery-powered torch?",
                    options: ["Chemical to Electrical to Light", "Electrical to Mechanical to Light", "Kinetic to Potential to Light", "Light to Heat to Chemical"],
                    correctAnswer: 0,
                    explanation: "The battery stores chemical energy, which is converted to electrical energy in the circuit, and then the bulb converts the electrical energy into light and heat energy."
                },
                {
                    question: "What is the primary cause of wind?",
                    options: ["The spinning of the Earth", "The gravitational pull of the Moon", "Uneven heating of the Earth's surface by the sun", "Trees moving back and forth"],
                    correctAnswer: 2,
                    explanation: "The sun heats some parts of the Earth more than others. This creates differences in air pressure, and air moves from high-pressure areas to low-pressure areas, creating wind."
                },
                {
                    question: "Is saltwater a mixture or a compound?",
                    options: ["Compound, because the salt is bonded to the water", "Mixture, because the salt and water are not chemically bonded", "Neither", "Both"],
                    correctAnswer: 1,
                    explanation: "Saltwater is a mixture (specifically, a solution) because the salt and water can be separated by physical means, like evaporation, and they retain their original properties."
                },
                {
                    question: "Why does the planet Mars appear red?",
                    options: ["It is very hot", "It is covered in red plants", "Its surface contains a lot of iron oxide, or rust", "It has a red atmosphere"],
                    correctAnswer: 2,
                    explanation: "The iron minerals in the Martian soil have rusted over billions of years, giving the surface its characteristic reddish color."
                },
                {
                    question: "Which of these is a key difference between an amphibian and a reptile?",
                    options: ["Amphibians have backbones, reptiles do not", "Amphibians have smooth, moist skin, while reptiles have scales", "Reptiles lay eggs, amphibians do not", "Reptiles are warm-blooded"],
                    correctAnswer: 1,
                    explanation: "Amphibians (like frogs) typically have permeable skin and live part of their lives in water, while reptiles (like lizards) have dry, scaly skin to prevent water loss."
                },
                {
                    question: "What is the unit of measurement for electric current?",
                    options: ["Volt", "Ohm", "Watt", "Ampere (Amp)"],
                    correctAnswer: 3,
                    explanation: "Amperes measure the rate of flow of electric charge. Volts measure electric potential, and Ohms measure resistance."
                },
                {
                    question: "The process of a gas changing directly into a solid, skipping the liquid phase, is called:",
                    options: ["Sublimation", "Condensation", "Deposition", "Evaporation"],
                    correctAnswer: 2,
                    explanation: "Deposition is the opposite of sublimation. An example is frost forming on a cold window on a winter morning."
                },
                {
                    question: "A substance with a pH of 2 is considered:",
                    options: ["Strongly acidic", "Slightly acidic", "Neutral", "Strongly basic"],
                    correctAnswer: 0,
                    explanation: "The pH scale runs from 0 to 14. Anything below 7 is acidic, and the lower the number, the stronger the acid. Lemon juice has a pH of about 2."
                },
                {
                    question: "What is a light-year a measure of?",
                    options: ["Time", "Speed", "Brightness", "Distance"],
                    correctAnswer: 3,
                    explanation: "A light-year is the vast distance that light travels in one year. It's used to measure the immense distances between stars and galaxies."
                },
                {
                    question: "What are the main parts of the human circulatory system?",
                    options: ["Brain, spinal cord, nerves", "Stomach, intestines, liver", "Heart, blood vessels, blood", "Lungs, trachea, diaphragm"],
                    correctAnswer: 2,
                    explanation: "The circulatory system is responsible for transporting oxygen, nutrients, and hormones to cells and removing waste products like carbon dioxide."
                },
                {
                    question: "A staircase is a modified form of which simple machine?",
                    options: ["Lever", "Pulley", "Inclined Plane", "Wheel and Axle"],
                    correctAnswer: 2,
                    explanation: "A staircase is essentially a series of inclined planes (the steps) that make it easier to move between different heights."
                },
                {
                    question: "What is the name for the molten rock that erupts from a volcano?",
                    options: ["Magma", "Lava", "Sediment", "Igneous rock"],
                    correctAnswer: 1,
                    explanation: "When molten rock is beneath the Earth's surface, it is called magma. Once it reaches the surface, it is called lava."
                },
                {
                    question: "What is the chemical symbol for the element Helium?",
                    options: ["H", "He", "Hm", "Hl"],
                    correctAnswer: 1,
                    explanation: "He is the symbol for Helium, the second most abundant element in the universe. H is the symbol for Hydrogen."
                },
                {
                    question: "A group of stars that form a recognizable pattern in the sky is called a:",
                    options: ["Galaxy", "Solar System", "Constellation", "Nebula"],
                    correctAnswer: 2,
                    explanation: "Constellations, like Orion or the Big Dipper, are patterns that humans have identified for thousands of years to help with navigation and storytelling."
                },
                {
                    question: "What is the primary role of chlorophyll in plants?",
                    options: ["To absorb water", "To give the plant structure", "To absorb sunlight for photosynthesis", "To attract insects"],
                    correctAnswer: 2,
                    explanation: "Chlorophyll is the green pigment in plants that captures the light energy needed to convert carbon dioxide and water into food (glucose)."
                },
                {
                    question: "What is the force that pulls objects towards the center of the Earth?",
                    options: ["Magnetism", "Friction", "Air Resistance", "Gravity"],
                    correctAnswer: 3,
                    explanation: "Gravity is the universal force of attraction between all matter. The Earth's large mass creates a strong gravitational pull."
                },
                {
                    question: "The preserved remains of an ancient organism, often found in rock, are called:",
                    options: ["A mineral", "A fossil", "A sediment", "A crystal"],
                    correctAnswer: 1,
                    explanation: "Fossils give us clues about life on Earth millions of years ago, including what dinosaurs looked like and how they lived."
                },
                {
                    question: "What are the three most common states of matter on Earth?",
                    options: ["Rock, Water, Air", "Solid, Liquid, Gas", "Ice, Water, Steam", "Metal, Wood, Plastic"],
                    correctAnswer: 1,
                    explanation: "The state of a substance is determined by how its particles are arranged and how they move. Solid, liquid, and gas are the three fundamental states."
                },
                {
                    question: "What is the name of the largest planet in our solar system?",
                    options: ["Saturn", "Jupiter", "Earth", "Neptune"],
                    correctAnswer: 1,
                    explanation: "Jupiter is a gas giant so massive that all the other planets in the solar system could fit inside it."
                }
            ]
        },
        {
            title: "Mixed Science Challenge 3",
            data: [
                {
                    question: "The Law of Conservation of Energy states that energy cannot be created or destroyed, only...",
                    options: ["...lost as heat.", "...changed from one form to another.", "...used up completely.", "...made more powerful."],
                    correctAnswer: 1,
                    explanation: "This fundamental principle means the total amount of energy in an isolated system remains constant over time."
                },
                {
                    question: "What is a key difference between warm-blooded (endothermic) and cold-blooded (ectothermic) animals?",
                    options: ["Warm-blooded animals live in hot climates", "Cold-blooded animals have colder blood", "Warm-blooded animals generate their own body heat, while cold-blooded animals rely on the environment", "Cold-blooded animals do not need heat"],
                    correctAnswer: 2,
                    explanation: "Mammals and birds are warm-blooded, maintaining a constant internal body temperature. Reptiles and fish are cold-blooded, and their body temperature changes with their surroundings."
                },
                {
                    question: "An element is a pure substance that...",
                    options: ["...is made of two or more types of atoms.", "...can be broken down into simpler substances by chemical means.", "...cannot be broken down into simpler substances by chemical means.", "...is always a metal."],
                    correctAnswer: 2,
                    explanation: "Elements, like oxygen, iron, and gold, are the basic building blocks of matter. They are defined by the number of protons in their atoms."
                },
                {
                    question: "What is the difference between weathering and erosion?",
                    options: ["Weathering is caused by wind, erosion is by water", "Weathering breaks down rocks, while erosion moves the broken pieces", "Erosion happens to mountains, weathering happens to rivers", "They are the same process"],
                    correctAnswer: 1,
                    explanation: "Weathering is the 'breaking' process (e.g., ice cracking a rock), and erosion is the 'taking' process (e.g., a river carrying the pieces away)."
                },
                {
                    question: "A nebula is a giant cloud of dust and gas in space and is often referred to as a:",
                    options: ["'Star Graveyard'", "'Star Nursery'", "'Galactic Center'", "'Black Hole'"],
                    correctAnswer: 1,
                    explanation: "Gravity can cause clumps of dust and gas in a nebula to collapse, eventually forming new stars and planetary systems."
                },
                {
                    question: "What is the difference between an electrical conductor and an insulator?",
                    options: ["Conductors are metals, insulators are plastics", "Conductors allow electricity to flow easily, while insulators resist the flow of electricity", "Insulators are used in power lines", "Conductors are safer than insulators"],
                    correctAnswer: 1,
                    explanation: "Metals like copper are good conductors, which is why they are used in wires. Rubber and plastic are good insulators, used for safety."
                },
                {
                    question: "What is the primary function of the human respiratory system?",
                    options: ["To pump blood", "To break down food", "To bring oxygen into the body and remove carbon dioxide", "To control movement"],
                    correctAnswer: 2,
                    explanation: "The lungs are the main organs of the respiratory system, where the vital exchange of gases between the air and the blood takes place."
                },
                {
                    question: "What happens to water molecules when water freezes into ice?",
                    options: ["They move faster", "They stop moving completely", "They arrange themselves into a fixed, crystalline structure", "They break apart"],
                    correctAnswer: 2,
                    explanation: "As water cools, the molecules slow down and lock into a hexagonal lattice structure, which is why ice is less dense than liquid water and floats."
                },
                {
                    question: "What are tectonic plates?",
                    options: ["A type of dinner plate", "Large pieces of Earth's lithosphere that move slowly over the mantle", "Layers of sedimentary rock", "The different layers of the atmosphere"],
                    correctAnswer: 1,
                    explanation: "The movement, collision, and separation of these plates are responsible for earthquakes, volcanoes, and the formation of mountains."
                },
                {
                    question: "A solar eclipse occurs when...",
                    options: ["...the Earth passes between the Sun and Moon.", "...the Moon passes between the Sun and Earth.", "...a planet passes in front of the Sun.", "...the Sun gets dimmer."],
                    correctAnswer: 1,
                    explanation: "During a total solar eclipse, the Moon completely blocks the Sun's light, casting a shadow on a small part of the Earth."
                },
                {
                    question: "How does a lever, like a crowbar, make it easier to lift a heavy object?",
                    options: ["It reduces the object's weight", "It increases the force you apply over a longer distance", "It uses magnetism", "It gets rid of friction"],
                    correctAnswer: 1,
                    explanation: "A lever provides a mechanical advantage by allowing you to apply a smaller force over a larger distance to move a heavy load a shorter distance."
                },
                {
                    question: "In genetics, a dominant trait is one that...",
                    options: ["...is the most common in a population.", "...is always the best trait to have.", "...will appear in an offspring if at least one parent contributes the allele for it.", "...can only appear if both parents contribute the allele for it."],
                    correctAnswer: 2,
                    explanation: "For example, the allele for brown eyes is dominant over the allele for blue eyes. A recessive trait (like blue eyes) only appears if an individual inherits two copies of the recessive allele."
                },
                {
                    question: "A solution, such as sugar dissolved in water, is a type of:",
                    options: ["Compound", "Element", "Homogeneous mixture", "Heterogeneous mixture"],
                    correctAnswer: 2,
                    explanation: "It is a homogeneous mixture because the dissolved substance (solute) is evenly distributed throughout the solvent, and you cannot see the individual components."
                },
                {
                    question: "The greenhouse effect is a natural process where certain gases in the atmosphere...",
                    options: ["...block sunlight from reaching Earth.", "...trap heat, keeping the planet warm.", "...create holes in the ozone layer.", "...produce oxygen."],
                    correctAnswer: 1,
                    explanation: "While essential for life, an excess of greenhouse gases from human activity is causing the planet to warm at an accelerated rate."
                },
                {
                    question: "What is the name of the spiral galaxy that contains our solar system?",
                    options: ["Andromeda", "Triangulum", "The Milky Way", "Centaurus A"],
                    correctAnswer: 2,
                    explanation: "Our sun is just one of billions of stars in the vast, swirling collection of stars, gas, and dust known as the Milky Way."
                },
                {
                    question: "Friction is a force that...",
                    options: ["...pulls objects downward.", "...pushes objects upward.", "...opposes motion between two surfaces in contact.", "...keeps planets in orbit."],
                    correctAnswer: 2,
                    explanation: "Friction is what allows you to walk without slipping and what slows down a rolling ball. It converts kinetic energy into heat."
                },
                {
                    question: "Besides anchoring the plant, what is the other main function of a plant's roots?",
                    options: ["To perform photosynthesis", "To absorb water and nutrients from the soil", "To produce seeds", "To store sunlight"],
                    correctAnswer: 1,
                    explanation: "Roots have tiny root hairs that greatly increase their surface area, allowing them to efficiently absorb the water and minerals the plant needs to survive."
                },
                {
                    question: "What is the chemical formula for carbon dioxide?",
                    options: ["CO", "H₂O", "O₂", "CO₂"],
                    correctAnswer: 3,
                    explanation: "The formula CO₂ indicates that each molecule of carbon dioxide is made of one carbon atom chemically bonded to two oxygen atoms."
                },
                {
                    question: "Which of the following is an example of a non-renewable resource?",
                    options: ["Wind power", "Solar energy", "Coal", "Geothermal energy"],
                    correctAnswer: 2,
                    explanation: "Coal is a fossil fuel that formed over millions of years and cannot be replaced on a human timescale, making it non-renewable."
                },
                {
                    question: "A dwarf planet, like Pluto, is different from a planet because it...",
                    options: ["...does not orbit the Sun.", "...is not spherical.", "...has not cleared its orbital path of other objects.", "...has no moons."],
                    correctAnswer: 2,
                    explanation: "One of the key criteria for being a planet is that it must have enough gravitational dominance to clear its orbit of other debris. Pluto shares its orbit with other objects in the Kuiper Belt."
                }
            ]
        },
        {
            title: "Mixed Science Challenge 4",
            data: [
                {
                    question: "What is the main difference between an atom and a molecule?",
                    options: ["Molecules are smaller than atoms", "An atom is the smallest unit of an element, while a molecule is two or more atoms bonded together", "Atoms are only found in metals", "Molecules are always liquids"],
                    correctAnswer: 1,
                    explanation: "For example, you can have an atom of oxygen (O), but when two are bonded together, they form a molecule of oxygen (O₂), which is what we breathe."
                },
                {
                    question: "How is a metamorphic rock, like marble, formed?",
                    options: ["From the cooling of lava", "From the compaction of sediment", "From existing rock being changed by intense heat and pressure", "From the evaporation of water"],
                    correctAnswer: 2,
                    explanation: "Metamorphism occurs deep within the Earth's crust, transforming rocks like limestone into marble or shale into slate."
                },
                {
                    question: "What is the role of the cerebellum in the human brain?",
                    options: ["Controlling thoughts and memory", "Regulating heartbeat and breathing", "Coordinating voluntary movement, balance, and posture", "Processing vision and hearing"],
                    correctAnswer: 2,
                    explanation: "Located at the back of the brain, the cerebellum is crucial for smooth, coordinated movements like walking, writing, and playing sports."
                },
                {
                    question: "In a light or sound wave, what is the relationship between wavelength and frequency?",
                    options: ["They are not related", "As wavelength increases, frequency increases", "As wavelength increases, frequency decreases", "They are the same thing"],
                    correctAnswer: 2,
                    explanation: "For a wave traveling at a constant speed, a longer wavelength means fewer wave crests will pass a point each second (lower frequency), and vice versa."
                },
                {
                    question: "What is a black hole's 'event horizon'?",
                    options: ["The center of the black hole", "The edge of the galaxy", "The 'point of no return,' beyond which nothing can escape the black hole's gravity", "A ring of stars around the black hole"],
                    correctAnswer: 2,
                    explanation: "Once an object or light crosses the event horizon, it is gravitationally bound to the black hole and cannot get out."
                },
                {
                    question: "A chemical reaction is a process that...",
                    options: ["...always produces heat.", "...rearranges the atoms of substances to form new substances.", "...mixes substances without changing them.", "...changes the state of a substance, like melting."],
                    correctAnswer: 1,
                    explanation: "In a chemical reaction, the original substances (reactants) are transformed into new substances (products) with different properties. Bonds between atoms are broken and new bonds are formed."
                },
                {
                    question: "What is the jet stream?",
                    options: ["The exhaust from a jet airplane", "A fast-flowing, narrow air current found in the atmosphere", "A warm ocean current", "A type of cloud"],
                    correctAnswer: 1,
                    explanation: "Jet streams are like rivers of wind high above the Earth that steer weather systems and affect air travel."
                },
                {
                    question: "What is the primary function of white blood cells in the human body?",
                    options: ["To carry oxygen", "To help blood clot", "To fight infection and disease", "To transport nutrients"],
                    correctAnswer: 2,
                    explanation: "White blood cells are a key part of the immune system, identifying and destroying foreign invaders like bacteria and viruses."
                },
                {
                    question: "Potential energy is...",
                    options: ["...the energy of motion.", "...the energy of heat.", "...the energy of light.", "...stored energy based on an object's position or state."],
                    correctAnswer: 3,
                    explanation: "A stretched rubber band, a book on a high shelf, and a battery all have potential energy that can be converted into other forms of energy."
                },
                {
                    question: "What is a key difference between a star and a planet?",
                    options: ["Stars are hotter than planets", "Stars produce their own light through nuclear fusion, while planets reflect light", "Planets are always larger than stars", "Stars are solid, while planets are made of gas"],
                    correctAnswer: 1,
                    explanation: "Our Sun is a star, generating immense energy. We see planets like Venus or Jupiter because they reflect the Sun's light."
                },
                {
                    question: "An acid is a substance that...",
                    options: ["...has a pH greater than 7.", "...tastes sweet.", "...produces hydrogen ions in water and has a pH less than 7.", "...feels slippery."],
                    correctAnswer: 2,
                    explanation: "Acids, like lemon juice and vinegar, typically have a sour taste. Bases, which are the opposite, often feel slippery and have a pH greater than 7."
                },
                {
                    question: "What is a watershed (or drainage basin)?",
                    options: ["A building that stores water", "An area of land where all the water drains into a common river, lake, or ocean", "A type of dam", "An underground lake"],
                    correctAnswer: 1,
                    explanation: "Watersheds can be very small, like the area that drains into a small creek, or very large, like the entire area that drains into the Mississippi River."
                },
                {
                    question: "The scientific system of naming and classifying organisms into groups is called:",
                    options: ["Taxonomy", "Genetics", "Ecology", "Evolution"],
                    correctAnswer: 0,
                    explanation: "Taxonomy organizes living things into a hierarchy of groups, such as Kingdom, Phylum, Class, Order, Family, Genus, and Species."
                },
                {
                    question: "Inertia is an object's...",
                    options: ["...attraction to other objects.", "...speed.", "...resistance to a change in its state of motion.", "...weight."],
                    correctAnswer: 2,
                    explanation: "Inertia is why it's harder to start pushing a heavy box than a light one, and also why it's harder to stop it once it's moving."
                },
                {
                    question: "A galaxy is a massive, gravitationally bound system of:",
                    options: ["Planets and moons", "Comets and asteroids", "Stars, stellar remnants, interstellar gas, dust, and dark matter", "Only solar systems"],
                    correctAnswer: 2,
                    explanation: "Galaxies range in size from dwarfs with a few billion stars to giants with one hundred trillion stars."
                },
                {
                    question: "A polymer is a large molecule made up of many repeating smaller units called:",
                    options: ["Atoms", "Monomers", "Crystals", "Alloys"],
                    correctAnswer: 1,
                    explanation: "Plastics are common synthetic polymers. Natural polymers include DNA, proteins, and starch."
                },
                {
                    question: "What is the main reason for the seasons on Earth?",
                    options: ["The Earth's changing distance from the Sun", "The tilt of the Earth's axis relative to its orbit", "The amount of cloud cover", "The changing speed of the Earth's rotation"],
                    correctAnswer: 1,
                    explanation: "When a hemisphere is tilted towards the Sun, it receives more direct sunlight and experiences summer. When it's tilted away, it experiences winter."
                },
                {
                    question: "Symbiosis is a close, long-term interaction between two different species. Mutualism is a type of symbiosis where:",
                    options: ["...one species benefits and the other is harmed.", "...both species benefit.", "...one species benefits and the other is unaffected.", "...both species are harmed."],
                    correctAnswer: 1,
                    explanation: "A classic example of mutualism is the relationship between bees and flowers; the bees get nectar, and the flowers get pollinated."
                },
                {
                    question: "Sound is a type of energy that travels as a:",
                    options: ["Light wave", "Transverse wave", "Mechanical wave that requires a medium", "Wave that can travel in a vacuum"],
                    correctAnswer: 2,
                    explanation: "Sound needs a medium (solid, liquid, or gas) to travel because it is the vibration of particles. This is why there is no sound in the vacuum of space."
                },
                {
                    question: "The Kuiper Belt is a region of the Solar System beyond Neptune that is home to:",
                    options: ["Gas giant planets", "Rocky terrestrial planets", "Many comets, asteroids, and dwarf planets like Pluto", "The Oort Cloud"],
                    correctAnswer: 2,
                    explanation: "The Kuiper Belt is a vast, icy debris field left over from the formation of the solar system."
                }
            ]
        },
        {
            title: "Mixed Science Challenge 5",
            data: [
                {
                    question: "What is DNA (Deoxyribonucleic acid)?",
                    options: ["A type of protein", "The powerhouse of the cell", "A molecule that carries the genetic instructions for life", "A sugar used for energy"],
                    correctAnswer: 2,
                    explanation: "DNA contains the blueprint for building and maintaining an organism, passed down from one generation to the next."
                },
                {
                    question: "What is the difference between mass and weight?",
                    options: ["They are the same thing", "Mass is the amount of matter in an object, while weight is the force of gravity on that mass", "Mass is measured in Newtons, weight is in kilograms", "Weight is constant, but mass can change"],
                    correctAnswer: 1,
                    explanation: "Your mass would be the same on Earth and the Moon, but your weight would be much less on the Moon because of its weaker gravity."
                },
                {
                    question: "A compound is a substance formed when...",
                    options: ["...two substances are mixed together.", "...an element dissolves in a liquid.", "...two or more different elements are chemically bonded together.", "...an element changes state."],
                    correctAnswer: 2,
                    explanation: "Water (H₂O) is a compound because hydrogen and oxygen atoms are chemically joined. Saltwater is a mixture, not a compound."
                },
                {
                    question: "What is the water table?",
                    options: ["A table for holding water", "The surface of the ocean", "The upper level of an underground surface in which the soil or rocks are permanently saturated with water", "A type of cloud"],
                    correctAnswer: 2,
                    explanation: "The water table can rise or fall depending on rainfall and how much groundwater is being used."
                },
                {
                    question: "A supernova is...",
                    options: ["...the birth of a new star.", "...a very large, stable star.", "...the explosive death of a massive star.", "...a cluster of galaxies."],
                    correctAnswer: 2,
                    explanation: "For a short time, a supernova can outshine its entire galaxy and radiate more energy than our sun will in its entire lifetime."
                },
                {
                    question: "What is the main difference between an artery and a vein?",
                    options: ["Arteries are larger than veins", "Arteries carry blood away from the heart, while veins carry blood toward the heart", "Arteries carry deoxygenated blood", "Veins are part of the nervous system"],
                    correctAnswer: 1,
                    explanation: "Arteries typically carry oxygen-rich blood (except for the pulmonary artery), while veins typically carry oxygen-poor blood (except for the pulmonary vein)."
                },
                {
                    question: "In physics, acceleration is defined as:",
                    options: ["The top speed of an object", "The distance an object travels", "The rate of change of velocity", "The force acting on an object"],
                    correctAnswer: 2,
                    explanation: "Acceleration can be speeding up, slowing down (deceleration), or changing direction. Even a car turning a corner at a constant speed is accelerating."
                },
                {
                    question: "The Periodic Table of Elements organizes elements based on their:",
                    options: ["Atomic number and chemical properties", "Date of discovery", "Abundance on Earth", "Color and shininess"],
                    correctAnswer: 0,
                    explanation: "Elements in the same column (group) have similar chemical properties because they have the same number of electrons in their outermost shell."
                },
                {
                    question: "A biome is a large community of vegetation and wildlife adapted to a specific:",
                    options: ["Country", "Continent", "Climate", "Mountain range"],
                    correctAnswer: 2,
                    explanation: "Examples of biomes include deserts, tropical rainforests, tundras, and grasslands, each with its own characteristic plants and animals."
                },
                {
                    question: "What is the difference between a meteoroid, a meteor, and a meteorite?",
                    options: ["They are different sizes", "A meteoroid is in space, a meteor is the 'shooting star' in the atmosphere, and a meteorite is what lands on Earth", "They are made of different materials", "They are all the same thing"],
                    correctAnswer: 1,
                    explanation: "A handy way to remember: 'oid' is out in the void, 'ite' is the one you might find on a site."
                },
                {
                    question: "A food web is a more realistic model of an ecosystem than a food chain because it shows that...",
                    options: ["...all animals eat plants.", "...most organisms eat more than one type of food and are eaten by more than one type of predator.", "...energy flows in a single line.", "...decomposers are not important."],
                    correctAnswer: 1,
                    explanation: "Food webs show the complex, interconnected feeding relationships within an ecosystem."
                },
                {
                    question: "Static electricity is the result of...",
                    options: ["...a continuous flow of electrons.", "...a chemical reaction.", "...an imbalance of positive and negative charges on the surface of an object.", "...magnetism."],
                    correctAnswer: 2,
                    explanation: "This imbalance is often created by two objects rubbing together (friction), which can transfer electrons from one object to the other."
                },
                {
                    question: "In chemistry, a catalyst is a substance that...",
                    options: ["...is the main product of a reaction.", "...slows down a reaction.", "...speeds up a reaction without being used up itself.", "...changes color during a reaction."],
                    correctAnswer: 2,
                    explanation: "Catalysts are like helpers for chemical reactions. Enzymes in your body are biological catalysts that speed up digestion."
                },
                {
                    question: "The Richter scale is a logarithmic scale used to measure the:",
                    options: ["Wind speed of a hurricane", "Magnitude (energy released) of an earthquake", "Loudness of a sound", "Acidity of a substance"],
                    correctAnswer: 1,
                    explanation: "Because it's logarithmic, a magnitude 6 earthquake is 10 times more powerful than a magnitude 5 earthquake."
                },
                {
                    question: "What are the main components of a comet?",
                    options: ["Liquid rock and metal", "A solid core of iron and nickel", "A nucleus of ice, dust, and rock, with a tail of gas and dust", "Pure hydrogen gas"],
                    correctAnswer: 2,
                    explanation: "Often called 'dirty snowballs,' comets develop a glowing coma (head) and a long tail when they get close to the Sun and the ice begins to vaporize."
                },
                {
                    question: "What is the primary function of the mitochondria in a cell?",
                    options: ["To store genetic information", "To control what enters and leaves the cell", "To perform cellular respiration and generate energy (ATP)", "To create proteins"],
                    correctAnswer: 2,
                    explanation: "The mitochondria are often called the 'powerhouses' of the cell because they convert food into usable energy."
                },
                {
                    question: "Buoyancy is the...",
                    options: ["...downward force of gravity.", "...upward force exerted by a fluid on a submerged object.", "...tendency of an object to resist motion.", "...stickiness of a liquid."],
                    correctAnswer: 1,
                    explanation: "An object will float if the buoyant force pushing it up is equal to or greater than the force of gravity pulling it down."
                },
                {
                    question: "Combustion is the scientific term for:",
                    options: ["Melting", "Freezing", "Dissolving", "Burning"],
                    correctAnswer: 3,
                    explanation: "Combustion is a chemical process that requires fuel, oxygen, and heat. It releases energy in the form of heat and light."
                },
                {
                    question: "The theory of continental drift, proposed by Alfred Wegener, suggests that...",
                    options: ["...the continents are fixed in place.", "...the continents were once joined together in a single supercontinent and have since drifted apart.", "...new continents are constantly being formed.", "...the oceans are getting smaller."],
                    correctAnswer: 1,
                    explanation: "This idea is now part of the broader theory of plate tectonics, which explains how and why the continents move."
                },
                {
                    question: "An exoplanet is defined as:",
                    options: ["A planet within our own Solar System", "A planet that has been proven to have life", "A planet that orbits a star outside of our Solar System", "A moon t

const explorers = [
    {
      name: "Explorer 1",
      exercises_completed: 10,
      rate: 99,
      city: "CDMX",
      stack: [
        "js",
        "c#"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: true,
          exercisesFinished: true
        }
      }
    },
    {
      name: "Explorer 2",
      exercises_completed: 9,
      city: "Veracruz",
      rate: 50,
      stack: [
        "js"
      ],
      missions: {
        onboarding: {
          isFinished: false,
          exercisesFinished: false
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    },
    {
      name: "Explorer 3",
      exercises_completed: 3,
      city: "Sonora",
      rate: 100,
      stack: [
        "elixir"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    }
   ]

   console.log("ejercicio 2.1")

   console.log("ejercicio 2.2")

   console.log("ejercicio 2.3")
   const explorers_stacks= explorers.map(mimapeo => mimapeo.stack)
   console.log(explorers_stacks)

   console.log("ejercicio 2.4")

   console.log("ejercicio 2.5")

   console.log("ejercicio 2.6")
   const all_exercise=explorers.reduce((acc,myexplorerinlist)=>acc+myexplorerinlist.exercises_completed,0)
   console.log(all_exercise)
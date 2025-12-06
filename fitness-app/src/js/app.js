const dayNames = {
    0: "Sunday",
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday"
};

const arabicDayNames = {
    "Sunday": "الأحد",
    "Monday": "الاثنين",
    "Tuesday": "الثلاثاء",
    "Wednesday": "الأربعاء",
    "Thursday": "الخميس",
    "Friday": "الجمعة",
    "Saturday": "السبت"
};

document.addEventListener('DOMContentLoaded', () => {
    // Get current date info
    const date = new Date();
    const dayIndex = date.getDay(); // 0-6
    const englishDayName = dayNames[dayIndex];

    // Update Header Date
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('current-date').textContent = date.toLocaleDateString('ar-EG', options);

    // Load Workout Data
    loadWorkout(englishDayName);

    // Load Random Nutrition Tip
    loadNutritionTip();
});

function loadWorkout(dayName) {
    const workoutData = fitnessData.exercises[dayName];
    const exercisesList = document.getElementById('exercises-list');
    const muscleGroupTitle = document.getElementById('muscle-group');

    if (!workoutData) {
        muscleGroupTitle.textContent = "يوم راحة";
        exercisesList.innerHTML = "<p>استمتع بيومك!</p>";
        return;
    }

    // Set Muscle Group Title
    muscleGroupTitle.textContent = workoutData.muscle;

    // Clear previous
    exercisesList.innerHTML = '';

    // Create Exercise Items
    workoutData.list.forEach(exercise => {
        const item = document.createElement('div');
        item.className = 'exercise-item';

        let difficultyColor = '#4caf50'; // Green
        if (exercise.difficulty === 'متوسط') difficultyColor = '#ff9800';
        if (exercise.difficulty === 'صعب') difficultyColor = '#f44336';

        const imageHtml = exercise.image
            ? `<div class="ex-image"><img src="${exercise.image}" alt="${exercise.name}" loading="lazy"></div>`
            : '';

        item.innerHTML = `
            ${imageHtml}
            <div class="ex-content">
                <div class="ex-info">
                    <h3>${exercise.name}</h3>
                    <div class="tags">
                        <span class="tag" style="background:${difficultyColor}20; color:${difficultyColor}">${exercise.difficulty}</span>
                    </div>
                </div>
                <div class="ex-stats">
                    <div class="stat">
                        <span class="label">مجموعات</span>
                        <span class="val">${exercise.sets}</span>
                    </div>
                    <div class="stat">
                        <span class="label">تكرار</span>
                        <span class="val">${exercise.reps}</span>
                    </div>
                </div>
            </div>
        `;
        exercisesList.appendChild(item);
    });
}

function loadNutritionTip() {
    const tips = fitnessData.nutritionTips;
    // Get a random tip based on the date to keep it consistent for the day, or just random every load?
    // User requested "studies based", so let's just pick one randomly for now.
    const randomTip = tips[Math.floor(Math.random() * tips.length)];
    document.getElementById('nutrition-tip').textContent = randomTip;
}

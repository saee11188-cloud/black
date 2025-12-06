const dayNames = {
    0: "Sunday",
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday"
};

// Track completed exercises
let completedExercises = [];
let totalExercises = 0;

document.addEventListener('DOMContentLoaded', () => {
    const date = new Date();
    const dayIndex = date.getDay();
    const englishDayName = dayNames[dayIndex];

    // Update Header Date
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('current-date').textContent = date.toLocaleDateString('ar-EG', options);

    // Load saved progress from localStorage
    loadSavedProgress(englishDayName);

    // Load Workout Data
    loadWorkout(englishDayName);

    // Load Random Nutrition Tip
    loadNutritionTip();

    // Setup modal close button
    document.getElementById('close-modal').addEventListener('click', () => {
        document.getElementById('completion-modal').classList.remove('show');
    });
});

function loadSavedProgress(dayName) {
    const savedData = localStorage.getItem(`fitness_${dayName}`);
    if (savedData) {
        const parsed = JSON.parse(savedData);
        const today = new Date().toDateString();
        if (parsed.date === today) {
            completedExercises = parsed.completed || [];
        } else {
            // New day, reset progress
            localStorage.removeItem(`fitness_${dayName}`);
            completedExercises = [];
        }
    }
}

function saveProgress(dayName) {
    const data = {
        date: new Date().toDateString(),
        completed: completedExercises
    };
    localStorage.setItem(`fitness_${dayName}`, JSON.stringify(data));
}

function loadWorkout(dayName) {
    const workoutData = fitnessData.exercises[dayName];
    const exercisesList = document.getElementById('exercises-list');
    const muscleGroupTitle = document.getElementById('muscle-group');

    if (!workoutData) {
        muscleGroupTitle.textContent = "يوم راحة 😴";
        exercisesList.innerHTML = `
            <div style="text-align: center; padding: 30px;">
                <div style="font-size: 3rem; margin-bottom: 15px;">🧘</div>
                <p style="color: var(--text-secondary);">استرخِ واستعد ليوم غد! الراحة جزء أساسي من التدريب.</p>
            </div>
        `;
        // Hide progress for rest day
        document.querySelector('.progress-section').style.display = 'none';
        return;
    }

    totalExercises = workoutData.list.length;
    muscleGroupTitle.textContent = workoutData.muscle;
    exercisesList.innerHTML = '';

    workoutData.list.forEach((exercise, index) => {
        const isCompleted = completedExercises.includes(index);
        const item = document.createElement('div');
        item.className = `exercise-item ${isCompleted ? 'completed' : ''}`;
        item.id = `exercise-${index}`;

        let difficultyColor = '#4caf50';
        if (exercise.difficulty === 'متوسط') difficultyColor = '#ff9800';
        if (exercise.difficulty === 'صعب') difficultyColor = '#f44336';

        const videoHtml = exercise.videoId
            ? `<div class="ex-video">
                <iframe 
                    src="https://www.youtube.com/embed/${exercise.videoId}" 
                    title="${exercise.name}"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen
                    loading="lazy">
                </iframe>
               </div>`
            : '';

        item.innerHTML = `
            ${videoHtml}
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
            <button class="complete-btn ${isCompleted ? 'completed' : ''}" data-index="${index}" onclick="toggleComplete(${index}, '${dayName}')">
                <span class="icon">${isCompleted ? '✅' : '⬜'}</span>
                <span>${isCompleted ? 'تم الإكمال' : 'اكتمل التمرين'}</span>
            </button>
        `;
        exercisesList.appendChild(item);
    });

    updateProgress();
}

function toggleComplete(index, dayName) {
    const exerciseItem = document.getElementById(`exercise-${index}`);
    const btn = exerciseItem.querySelector('.complete-btn');

    if (completedExercises.includes(index)) {
        // Remove from completed
        completedExercises = completedExercises.filter(i => i !== index);
        exerciseItem.classList.remove('completed');
        btn.classList.remove('completed');
        btn.innerHTML = `<span class="icon">⬜</span><span>اكتمل التمرين</span>`;
    } else {
        // Add to completed
        completedExercises.push(index);
        exerciseItem.classList.add('completed');
        btn.classList.add('completed');
        btn.innerHTML = `<span class="icon">✅</span><span>تم الإكمال</span>`;
    }

    saveProgress(dayName);
    updateProgress();
}

function updateProgress() {
    const percent = totalExercises > 0 ? Math.round((completedExercises.length / totalExercises) * 100) : 0;

    document.getElementById('progress-percent').textContent = `${percent}%`;
    document.getElementById('progress-fill').style.width = `${percent}%`;

    // Check if all exercises are completed
    if (percent === 100 && totalExercises > 0) {
        showCompletionModal();
    }
}

function showCompletionModal() {
    const quotes = fitnessData.motivationalQuotes;
    // Use day of year to get consistent quote for the day
    const dayOfYear = Math.floor((new Date() - new Date(new Date().getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));
    const quoteIndex = dayOfYear % quotes.length;

    document.getElementById('motivational-quote').textContent = `"${quotes[quoteIndex]}"`;
    document.getElementById('completion-modal').classList.add('show');
}

function loadNutritionTip() {
    const tips = fitnessData.nutritionTips;
    const dayOfYear = Math.floor((new Date() - new Date(new Date().getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));
    const tipIndex = dayOfYear % tips.length;
    document.getElementById('nutrition-tip').textContent = tips[tipIndex];
}

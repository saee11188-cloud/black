const fitnessData = {
    exercises: {
        "Sunday": {
            muscle: "صدر وترايسبس (Chest & Triceps)",
            list: [
                { name: "ضغط صدر مستوي (Bench Press)", difficulty: "صعب", sets: "4", reps: "10-12" },
                { name: "ضغط صدر عالي بالدمبل (Incline Dumbbell Press)", difficulty: "متوسط", sets: "3", reps: "12" },
                { name: "تفتيح بالدمبل (Dumbbell Flyes)", difficulty: "متوسط", sets: "3", reps: "15" },
                { name: "متوازي (Dips)", difficulty: "صعب", sets: "3", reps: "حتى الفشل" },
                { name: "سحب كابل لأسفل (Tricep Pushdown)", difficulty: "سهل", sets: "4", reps: "15" },
                { name: "ترايسبس خلف الرأس (Overhead Extension)", difficulty: "متوسط", sets: "3", reps: "12" }
            ]
        },
        "Monday": {
            muscle: "ظهر وبايسبس (Back & Biceps)",
            list: [
                { name: "عقلة (Pull-ups)", difficulty: "صعب", sets: "4", reps: "8-12" },
                { name: "سحب أرضي (Seated Cable Row)", difficulty: "متوسط", sets: "4", reps: "12" },
                { name: "منشار بالدمبل (One Arm Dumbbell Row)", difficulty: "متوسط", sets: "3", reps: "12" },
                { name: "سحب أمامي واسع (Lat Pulldown)", difficulty: "سهل", sets: "3", reps: "15" },
                { name: "تبادل بايسبس (Bicep Curls)", difficulty: "سهل", sets: "4", reps: "12" },
                { name: "بايسبس مطرقة (Hammer Curls)", difficulty: "سهل", sets: "3", reps: "12" }
            ]
        },
        "Tuesday": {
            muscle: "أرجل وبطن (Legs & Abs)",
            list: [
                { name: "سكوات (Squat)", difficulty: "صعب", sets: "4", reps: "8-10" },
                { name: "دفع أرجل (Leg Press)", difficulty: "متوسط", sets: "3", reps: "12" },
                { name: "رفرفة أرجل أمامي (Leg Extension)", difficulty: "سهل", sets: "3", reps: "15" },
                { name: "رفرفة أرجل خلفي (Leg Curl)", difficulty: "سهل", sets: "3", reps: "15" },
                { name: "سمانة واقف (Standing Calf Raise)", difficulty: "سهل", sets: "4", reps: "20" },
                { name: "بلانك (Plank)", difficulty: "متوسط", sets: "3", reps: "دقيقة واحدة" }
            ]
        },
        "Wednesday": null, // Rest day
        "Thursday": {
            muscle: "أكتاف (Shoulders)",
            list: [
                { name: "ضغط أكتاف بالبار (Overhead Press)", difficulty: "صعب", sets: "4", reps: "8-12" },
                { name: "رفرفة جانبي (Lateral Raise)", difficulty: "متوسط", sets: "4", reps: "15" },
                { name: "رفرفة أمامي (Front Raise)", difficulty: "سهل", sets: "3", reps: "12" },
                { name: "رفرفة خلفي (Reverse Fly)", difficulty: "متوسط", sets: "3", reps: "15" },
                { name: "ترابيس بالبار (Barbell Shrugs)", difficulty: "سهل", sets: "4", reps: "15" }
            ]
        },
        "Friday": {
            muscle: "كارديو ولياقة (Cardio & Fitness)",
            list: [
                { name: "جري خفيف (Jogging)", difficulty: "متوسط", sets: "1", reps: "20 دقيقة" },
                { name: "نط الحبل (Jump Rope)", difficulty: "صعب", sets: "5", reps: "دقيقة عمل / دقيقة راحة" },
                { name: "بيربي (Burpees)", difficulty: "صعب", sets: "3", reps: "15" },
                { name: "تمرين متسلق الجبال (Mountain Climbers)", difficulty: "متوسط", sets: "3", reps: "20 لكل رجل" }
            ]
        },
        "Saturday": {
            muscle: "جسم كامل (Full Body)",
            list: [
                { name: "ديف ليفت (Deadlift)", difficulty: "صعب", sets: "3", reps: "8" },
                { name: "ضغط صدر بالدمبل (Dumbbell Bench Press)", difficulty: "متوسط", sets: "3", reps: "12" },
                { name: "طعن (Lunges)", difficulty: "متوسط", sets: "3", reps: "12 لكل رجل" },
                { name: "سحب ظهر (Pull-down)", difficulty: "سهل", sets: "3", reps: "15" },
                { name: "تمرين ضغط (Push-ups)", difficulty: "سهل", sets: "3", reps: "حتى الفشل" }
            ]
        }
    },
    nutritionTips: [
        "شرب الماء بانتظام يساعد على تحسين الأداء البدني والذهني. (المصدر: Mayo Clinic)",
        "البروتين ضروري لبناء وإصلاح الأنسجة العضلية بعد التمرين. (المصدر: Harvard Health)",
        "النوم الجيد لا يقل أهمية عن التمرين والتغذية في عملية الاستشفاء. (المصدر: Sleep Foundation)",
        "تناول الكربوهيدرات المعقدة قبل التمرين يمد الجسم بالطاقة اللازمة. (المصدر: Healthline)",
        "الخضروات الورقية غنية بالفيتامينات والمعادن التي تدعم الصحة العامة. (المصدر: WebMD)",
        "تجنب السكريات المصنعة يساعد في الحفاظ على مستويات طاقة مستقرة. (المصدر: AHA)",
        "الدهون الصحية (مثل الافوكادو والمكسرات) ضرورية لوظائف المخ والهرمونات. (المصدر: WHO)"
    ]
};

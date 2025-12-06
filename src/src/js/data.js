const fitnessData = {
    exercises: {
        "Sunday": {
            muscle: "صدر وترايسبس (Chest & Triceps)",
            list: [
                { name: "ضغط صدر مستوي (Bench Press)", difficulty: "صعب", sets: "4", reps: "10-12", videoId: "rT7DgCr-3pg" },
                { name: "ضغط صدر عالي بالدمبل (Incline Dumbbell Press)", difficulty: "متوسط", sets: "3", reps: "12", videoId: "8iPEnn-ltC8" },
                { name: "تفتيح بالدمبل (Dumbbell Flyes)", difficulty: "متوسط", sets: "3", reps: "15", videoId: "eozdVDA78K0" },
                { name: "متوازي (Dips)", difficulty: "صعب", sets: "3", reps: "حتى الفشل", videoId: "2z8JmcrW-As" },
                { name: "سحب كابل لأسفل (Tricep Pushdown)", difficulty: "سهل", sets: "4", reps: "15", videoId: "2-LAMcpzODU" },
                { name: "ترايسبس خلف الرأس (Overhead Extension)", difficulty: "متوسط", sets: "3", reps: "12", videoId: "YbX7Wd8jQ-Q" }
            ]
        },
        "Monday": {
            muscle: "ظهر وبايسبس (Back & Biceps)",
            list: [
                { name: "عقلة (Pull-ups)", difficulty: "صعب", sets: "4", reps: "8-12", videoId: "eGo4IYlbE5g" },
                { name: "سحب أرضي (Seated Cable Row)", difficulty: "متوسط", sets: "4", reps: "12", videoId: "GZbfZ033f74" },
                { name: "منشار بالدمبل (One Arm Dumbbell Row)", difficulty: "متوسط", sets: "3", reps: "12", videoId: "pYcpY20QaE8" },
                { name: "سحب أمامي واسع (Lat Pulldown)", difficulty: "سهل", sets: "3", reps: "15", videoId: "CAwf7n6Luuc" },
                { name: "تبادل بايسبس (Bicep Curls)", difficulty: "سهل", sets: "4", reps: "12", videoId: "ykJmrZ5v0Oo" },
                { name: "بايسبس مطرقة (Hammer Curls)", difficulty: "سهل", sets: "3", reps: "12", videoId: "zC3nLlEvin4" }
            ]
        },
        "Tuesday": {
            muscle: "أرجل وبطن (Legs & Abs)",
            list: [
                { name: "سكوات (Squat)", difficulty: "صعب", sets: "4", reps: "8-10", videoId: "ultWZbUMPL8" },
                { name: "دفع أرجل (Leg Press)", difficulty: "متوسط", sets: "3", reps: "12", videoId: "IZxyjW7MPJQ" },
                { name: "رفرفة أرجل أمامي (Leg Extension)", difficulty: "سهل", sets: "3", reps: "15", videoId: "YyvSfVjQeL0" },
                { name: "رفرفة أرجل خلفي (Leg Curl)", difficulty: "سهل", sets: "3", reps: "15", videoId: "1Tq3QdYUuHs" },
                { name: "سمانة واقف (Standing Calf Raise)", difficulty: "سهل", sets: "4", reps: "20", videoId: "gwLzBJYoWlI" },
                { name: "بلانك (Plank)", difficulty: "متوسط", sets: "3", reps: "دقيقة واحدة", videoId: "ASdvN_XEl_c" }
            ]
        },
        "Wednesday": null,
        "Thursday": {
            muscle: "أكتاف (Shoulders)",
            list: [
                { name: "ضغط أكتاف بالبار (Overhead Press)", difficulty: "صعب", sets: "4", reps: "8-12", videoId: "2yjwXTZQDDI" },
                { name: "رفرفة جانبي (Lateral Raise)", difficulty: "متوسط", sets: "4", reps: "15", videoId: "3VcKaXpzqRo" },
                { name: "رفرفة أمامي (Front Raise)", difficulty: "سهل", sets: "3", reps: "12", videoId: "-t7fuZ0KhDA" },
                { name: "رفرفة خلفي (Reverse Fly)", difficulty: "متوسط", sets: "3", reps: "15", videoId: "lPt0GqwaqEw" },
                { name: "ترابيس بالبار (Barbell Shrugs)", difficulty: "سهل", sets: "4", reps: "15", videoId: "cJRVVxmytaM" }
            ]
        },
        "Friday": {
            muscle: "كارديو ولياقة (Cardio & Fitness)",
            list: [
                { name: "جري خفيف (Jogging)", difficulty: "متوسط", sets: "1", reps: "20 دقيقة", videoId: "7kQGWYFpVP8" },
                { name: "نط الحبل (Jump Rope)", difficulty: "صعب", sets: "5", reps: "دقيقة عمل / دقيقة راحة", videoId: "FJmRQ5iTXKE" },
                { name: "بيربي (Burpees)", difficulty: "صعب", sets: "3", reps: "15", videoId: "dZgVxmf6jkA" },
                { name: "تمرين متسلق الجبال (Mountain Climbers)", difficulty: "متوسط", sets: "3", reps: "20 لكل رجل", videoId: "nmwgirgXLYM" }
            ]
        },
        "Saturday": {
            muscle: "جسم كامل (Full Body)",
            list: [
                { name: "ديف ليفت (Deadlift)", difficulty: "صعب", sets: "3", reps: "8", videoId: "op9kVnSso6Q" },
                { name: "ضغط صدر بالدمبل (Dumbbell Bench Press)", difficulty: "متوسط", sets: "3", reps: "12", videoId: "VmB1G1K7v94" },
                { name: "طعن (Lunges)", difficulty: "متوسط", sets: "3", reps: "12 لكل رجل", videoId: "QOVaHwm-Q6U" },
                { name: "سحب ظهر (Pull-down)", difficulty: "سهل", sets: "3", reps: "15", videoId: "CAwf7n6Luuc" },
                { name: "تمرين ضغط (Push-ups)", difficulty: "سهل", sets: "3", reps: "حتى الفشل", videoId: "IODxDxX7oi4" }
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
    ],
    motivationalQuotes: [
        "النجاح ليس نهائياً، والفشل ليس قاتلاً: إنها الشجاعة للاستمرار هي ما يهم. - ونستون تشرشل",
        "جسمك قادر على فعل أي شيء تقريباً. عقلك هو الذي عليك إقناعه.",
        "لا تتوقف عندما تتعب، توقف عندما تنتهي.",
        "التغيير لن يأتي إذا انتظرناه. نحن التغيير الذي نسعى إليه.",
        "الجسم يحقق ما يؤمن به العقل.",
        "اليوم صعب، الغد أصعب، لكن بعد غد سيكون جميلاً.",
        "لا تقارن نفسك بالآخرين. قارن نفسك بنفسك بالأمس."
    ]
};

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

    // جدول غذائي أسبوعي مبني على توصيات WHO, Harvard Health, و Mayo Clinic
    // يغطي جميع الفيتامينات والمعادن الأساسية
    mealPlans: {
        "Sunday": {
            subtitle: "غني بالبروتين لبناء العضلات",
            totalCalories: 2200,
            totalProtein: 150,
            totalCarbs: 220,
            totalFat: 70,
            vitamins: ["A", "B12", "C", "D", "E", "حديد", "زنك", "كالسيوم"],
            meals: [
                {
                    type: "الإفطار",
                    icon: "🌅",
                    time: "7:00 - 8:00",
                    foods: ["بيض مسلوق (3 حبات)", "خبز أسمر", "أفوكادو", "عصير برتقال طازج"],
                    calories: 450,
                    protein: 25,
                    carbs: 40,
                    fat: 22
                },
                {
                    type: "وجبة خفيفة",
                    icon: "🍎",
                    time: "10:30",
                    foods: ["زبادي يوناني", "توت مشكل", "لوز (حفنة)"],
                    calories: 250,
                    protein: 15,
                    carbs: 25,
                    fat: 10
                },
                {
                    type: "الغداء",
                    icon: "☀️",
                    time: "1:00 - 2:00",
                    foods: ["صدر دجاج مشوي (200غ)", "أرز بني", "سلطة خضراء", "بروكلي مطهو"],
                    calories: 650,
                    protein: 55,
                    carbs: 60,
                    fat: 15
                },
                {
                    type: "وجبة خفيفة",
                    icon: "🥤",
                    time: "4:30",
                    foods: ["سموذي موز وفول سوداني", "تمر (3 حبات)"],
                    calories: 300,
                    protein: 15,
                    carbs: 40,
                    fat: 10
                },
                {
                    type: "العشاء",
                    icon: "🌙",
                    time: "7:00 - 8:00",
                    foods: ["سمك سلمون مشوي (150غ)", "بطاطا حلوة", "سبانخ مطهوة", "زيت زيتون"],
                    calories: 550,
                    protein: 40,
                    carbs: 55,
                    fat: 18
                }
            ]
        },
        "Monday": {
            subtitle: "متوازن للطاقة المستدامة",
            totalCalories: 2100,
            totalProtein: 130,
            totalCarbs: 250,
            totalFat: 65,
            vitamins: ["B1", "B6", "C", "K", "مغنيسيوم", "بوتاسيوم", "فوسفور"],
            meals: [
                {
                    type: "الإفطار",
                    icon: "🌅",
                    time: "7:00 - 8:00",
                    foods: ["شوفان بالحليب", "موز", "عسل طبيعي", "جوز"],
                    calories: 420,
                    protein: 18,
                    carbs: 65,
                    fat: 12
                },
                {
                    type: "وجبة خفيفة",
                    icon: "🍎",
                    time: "10:30",
                    foods: ["تفاح", "زبدة لوز (ملعقة)"],
                    calories: 200,
                    protein: 5,
                    carbs: 30,
                    fat: 8
                },
                {
                    type: "الغداء",
                    icon: "☀️",
                    time: "1:00 - 2:00",
                    foods: ["لحم بقري مفروم قليل الدهن", "معكرونة قمح كامل", "صلصة طماطم", "جبن بارميزان"],
                    calories: 620,
                    protein: 45,
                    carbs: 70,
                    fat: 18
                },
                {
                    type: "وجبة خفيفة",
                    icon: "🥤",
                    time: "4:30",
                    foods: ["حمص", "خضروات مقطعة", "خبز بيتا"],
                    calories: 280,
                    protein: 12,
                    carbs: 35,
                    fat: 10
                },
                {
                    type: "العشاء",
                    icon: "🌙",
                    time: "7:00 - 8:00",
                    foods: ["تونا طازجة مشوية", "كينوا", "خضروات مشوية", "ليمون"],
                    calories: 480,
                    protein: 45,
                    carbs: 40,
                    fat: 14
                }
            ]
        },
        "Tuesday": {
            subtitle: "غني بالألياف لصحة الجهاز الهضمي",
            totalCalories: 2000,
            totalProtein: 120,
            totalCarbs: 260,
            totalFat: 55,
            vitamins: ["A", "C", "E", "K", "حمض الفوليك", "ألياف", "منغنيز"],
            meals: [
                {
                    type: "الإفطار",
                    icon: "🌅",
                    time: "7:00 - 8:00",
                    foods: ["توست أفوكادو", "بيض مخفوق", "طماطم كرزية", "عصير جريب فروت"],
                    calories: 400,
                    protein: 18,
                    carbs: 35,
                    fat: 22
                },
                {
                    type: "وجبة خفيفة",
                    icon: "🍎",
                    time: "10:30",
                    foods: ["برتقال", "كاجو (حفنة)"],
                    calories: 180,
                    protein: 5,
                    carbs: 25,
                    fat: 8
                },
                {
                    type: "الغداء",
                    icon: "☀️",
                    time: "1:00 - 2:00",
                    foods: ["فاصوليا سوداء", "أرز بسمتي", "ذرة", "فلفل ملون", "كزبرة"],
                    calories: 580,
                    protein: 25,
                    carbs: 90,
                    fat: 10
                },
                {
                    type: "وجبة خفيفة",
                    icon: "🥤",
                    time: "4:30",
                    foods: ["سموذي سبانخ وتفاح وزنجبيل"],
                    calories: 180,
                    protein: 5,
                    carbs: 40,
                    fat: 2
                },
                {
                    type: "العشاء",
                    icon: "🌙",
                    time: "7:00 - 8:00",
                    foods: ["دجاج تندوري", "سلطة ملفوف", "خبز نان كامل", "رايتا"],
                    calories: 560,
                    protein: 45,
                    carbs: 55,
                    fat: 16
                }
            ]
        },
        "Wednesday": {
            subtitle: "يوم راحة - وجبات خفيفة متوازنة",
            totalCalories: 1800,
            totalProtein: 100,
            totalCarbs: 220,
            totalFat: 60,
            vitamins: ["B2", "B3", "D", "أوميغا 3", "سيلينيوم", "يود"],
            meals: [
                {
                    type: "الإفطار",
                    icon: "🌅",
                    time: "8:00 - 9:00",
                    foods: ["بانكيك شوفان", "فراولة طازجة", "عسل", "شاي أخضر"],
                    calories: 380,
                    protein: 15,
                    carbs: 55,
                    fat: 12
                },
                {
                    type: "وجبة خفيفة",
                    icon: "🍎",
                    time: "11:00",
                    foods: ["زبادي بالجرانولا"],
                    calories: 200,
                    protein: 10,
                    carbs: 30,
                    fat: 5
                },
                {
                    type: "الغداء",
                    icon: "☀️",
                    time: "1:00 - 2:00",
                    foods: ["سلطة نيسواز", "تونا معلبة", "بيض مسلوق", "زيتون", "فاصوليا خضراء"],
                    calories: 480,
                    protein: 35,
                    carbs: 25,
                    fat: 25
                },
                {
                    type: "وجبة خفيفة",
                    icon: "🥤",
                    time: "4:00",
                    foods: ["شوكولاتة داكنة (مربعين)", "مكسرات مشكلة"],
                    calories: 220,
                    protein: 5,
                    carbs: 20,
                    fat: 14
                },
                {
                    type: "العشاء",
                    icon: "🌙",
                    time: "7:00 - 8:00",
                    foods: ["شوربة عدس", "خبز أسمر محمص", "سلطة خضراء بالليمون"],
                    calories: 420,
                    protein: 22,
                    carbs: 60,
                    fat: 10
                }
            ]
        },
        "Thursday": {
            subtitle: "داعم لصحة العظام والمفاصل",
            totalCalories: 2150,
            totalProtein: 140,
            totalCarbs: 230,
            totalFat: 70,
            vitamins: ["D", "K", "كالسيوم", "مغنيسيوم", "فوسفور", "B12", "كولاجين"],
            meals: [
                {
                    type: "الإفطار",
                    icon: "🌅",
                    time: "7:00 - 8:00",
                    foods: ["جبن قريش", "خيار وطماطم", "زيت زيتون", "خبز كامل", "بيض أومليت"],
                    calories: 450,
                    protein: 30,
                    carbs: 30,
                    fat: 25
                },
                {
                    type: "وجبة خفيفة",
                    icon: "🍎",
                    time: "10:30",
                    foods: ["حليب لوز", "تمر محشو لوز"],
                    calories: 220,
                    protein: 8,
                    carbs: 35,
                    fat: 8
                },
                {
                    type: "الغداء",
                    icon: "☀️",
                    time: "1:00 - 2:00",
                    foods: ["سردين مشوي", "سلطة طحينة", "تبولة", "خبز عربي"],
                    calories: 600,
                    protein: 40,
                    carbs: 50,
                    fat: 25
                },
                {
                    type: "وجبة خفيفة",
                    icon: "🥤",
                    time: "4:30",
                    foods: ["إيدامامي", "ماء جوز الهند"],
                    calories: 200,
                    protein: 12,
                    carbs: 20,
                    fat: 6
                },
                {
                    type: "العشاء",
                    icon: "🌙",
                    time: "7:00 - 8:00",
                    foods: ["كباب دجاج", "سلطة فتوش", "حمص", "مخلل"],
                    calories: 580,
                    protein: 45,
                    carbs: 50,
                    fat: 20
                }
            ]
        },
        "Friday": {
            subtitle: "طاقة للكارديو",
            totalCalories: 2300,
            totalProtein: 130,
            totalCarbs: 280,
            totalFat: 65,
            vitamins: ["B1", "B5", "C", "حديد", "نحاس", "كروم", "بوتاسيوم"],
            meals: [
                {
                    type: "الإفطار",
                    icon: "🌅",
                    time: "7:00 - 8:00",
                    foods: ["سموذي أخضر", "توست زبدة فول سوداني", "موز"],
                    calories: 480,
                    protein: 18,
                    carbs: 65,
                    fat: 18
                },
                {
                    type: "وجبة خفيفة",
                    icon: "🍎",
                    time: "10:30",
                    foods: ["بار طاقة طبيعي", "ماء"],
                    calories: 200,
                    protein: 8,
                    carbs: 30,
                    fat: 6
                },
                {
                    type: "الغداء",
                    icon: "☀️",
                    time: "1:00 - 2:00",
                    foods: ["برغر دجاج صحي", "بطاطا مشوية", "سلطة كول سلو صحية"],
                    calories: 680,
                    protein: 45,
                    carbs: 70,
                    fat: 22
                },
                {
                    type: "وجبة خفيفة",
                    icon: "🥤",
                    time: "4:30",
                    foods: ["فواكه مجففة", "زبادي"],
                    calories: 280,
                    protein: 10,
                    carbs: 50,
                    fat: 5
                },
                {
                    type: "العشاء",
                    icon: "🌙",
                    time: "7:00 - 8:00",
                    foods: ["ستيك لحم مشوي", "أرز أبيض", "فطر سوتيه", "هليون"],
                    calories: 600,
                    protein: 50,
                    carbs: 50,
                    fat: 20
                }
            ]
        },
        "Saturday": {
            subtitle: "تعويض وإصلاح شامل",
            totalCalories: 2250,
            totalProtein: 160,
            totalCarbs: 210,
            totalFat: 75,
            vitamins: ["A", "B6", "B12", "C", "E", "زنك", "سيلينيوم", "أوميغا 3"],
            meals: [
                {
                    type: "الإفطار",
                    icon: "🌅",
                    time: "7:00 - 8:00",
                    foods: ["فول مدمس", "بيض مقلي", "زيت زيتون", "خبز بلدي", "طماطم"],
                    calories: 520,
                    protein: 28,
                    carbs: 45,
                    fat: 25
                },
                {
                    type: "وجبة خفيفة",
                    icon: "🍎",
                    time: "10:30",
                    foods: ["شيك بروتين طبيعي", "فراولة"],
                    calories: 280,
                    protein: 30,
                    carbs: 25,
                    fat: 8
                },
                {
                    type: "الغداء",
                    icon: "☀️",
                    time: "1:00 - 2:00",
                    foods: ["سمك مشوي (تيلابيا)", "أرز بالشبت", "سلطة طماطم وخيار", "طحينة"],
                    calories: 620,
                    protein: 50,
                    carbs: 55,
                    fat: 20
                },
                {
                    type: "وجبة خفيفة",
                    icon: "🥤",
                    time: "4:30",
                    foods: ["جوز برازيلي (3 حبات)", "تفاح أخضر"],
                    calories: 200,
                    protein: 5,
                    carbs: 25,
                    fat: 12
                },
                {
                    type: "العشاء",
                    icon: "🌙",
                    time: "7:00 - 8:00",
                    foods: ["صدر ديك رومي", "بطاطا حلوة مهروسة", "بروكلي مشوي", "صوص مستردة"],
                    calories: 580,
                    protein: 50,
                    carbs: 50,
                    fat: 15
                }
            ]
        }
    },

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

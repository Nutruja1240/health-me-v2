// Evaluation functions
function evaluateBMI(bmi) {
    let level, description, recommendation;
    
    if (bmi < 18.5) {
        level = 'ต่ำมาก';
        description = 'น้ำหนักน้อย / ผอม';
        recommendation = 'ควรรับประทานอาหารที่มีพลังงานสูง เพิ่มปริมาณอาหารในแต่ละมื้อ และออกกำลังกายเพื่อเพิ่มมวลกล้ามเนื้อ';
    } else if (bmi >= 18.5 && bmi < 23) {
        level = 'ดี';
        description = 'ปกติ (สุขภาพดี)';
        recommendation = 'รักษาน้ำหนักให้อยู่ในระดับนี้ด้วยการรับประทานอาหารที่สมดุลและออกกำลังกายสม่ำเสมอ';
    } else if (bmi >= 23 && bmi < 25) {
        level = 'ปานกลาง';
        description = 'ท้วม / โรคอ้วนระดับ 1';
        recommendation = 'ควรควบคุมอาหารและออกกำลังกายเพื่อลดน้ำหนัก';
    } else if (bmi >= 25 && bmi < 30) {
        level = 'ต่ำ';
        description = 'อ้วน / โรคอ้วนระดับ 2';
        recommendation = 'ควรปรึกษาแพทย์หรือนักโภชนาการเพื่อวางแผนลดน้ำหนักอย่างถูกวิธี';
    } else {
        level = 'ต่ำมาก';
        description = 'อ้วนมาก / โรคอ้วนระดับ 3';
        recommendation = 'ควรปรึกษาแพทย์โดยด่วนเพื่อรับการดูแลที่เหมาะสม';
    }
    
    return { level, description, recommendation };
}

function evaluateWaist(gender, waist) {
    let level, description, recommendation;
    const threshold = gender === 'male' ? 90 : 80;
    
    if (waist < threshold) {
        level = 'ดี';
        description = 'ปกติ';
        recommendation = 'รักษารอบเอวให้อยู่ในระดับนี้ด้วยการควบคุมอาหารและออกกำลังกายสม่ำเสมอ';
    } else {
        level = 'ต่ำ';
        description = 'เสี่ยงต่อโรคเมตาบอลิก';
        recommendation = 'ควรลดรอบเอวด้วยการควบคุมอาหารและออกกำลังกายแบบแอโรบิกอย่างน้อย 150 นาทีต่อสัปดาห์';
    }
    
    return { level, description, recommendation };
}

function evaluateGrip(gender, age, gripRatio) {
    const ageGroup = calculateAgeGroup(age);
    let level, description, recommendation;
    
    if (gender === 'male') {
        switch(ageGroup) {
            case '19-24':
                if (gripRatio <= 0.50) level = 'ต่ำมาก';
                else if (gripRatio <= 0.60) level = 'ต่ำ';
                else if (gripRatio <= 0.69) level = 'ปานกลาง';
                else if (gripRatio <= 0.79) level = 'ดี';
                else level = 'ดีมาก';
                break;
            case '25-29':
                if (gripRatio <= 0.51) level = 'ต่ำมาก';
                else if (gripRatio <= 0.61) level = 'ต่ำ';
                else if (gripRatio <= 0.70) level = 'ปานกลาง';
                else if (gripRatio <= 0.80) level = 'ดี';
                else level = 'ดีมาก';
                break;
            // Add other age groups for male
            default:
                level = 'ไม่ทราบเกณฑ์';
        }
    } else {
        switch(ageGroup) {
            case '19-24':
                if (gripRatio <= 0.40) level = 'ต่ำมาก';
                else if (gripRatio <= 0.48) level = 'ต่ำ';
                else if (gripRatio <= 0.55) level = 'ปานกลาง';
                else if (gripRatio <= 0.63) level = 'ดี';
                else level = 'ดีมาก';
                break;
            case '25-29':
                if (gripRatio <= 0.40) level = 'ต่ำมาก';
                else if (gripRatio <= 0.49) level = 'ต่ำ';
                else if (gripRatio <= 0.58) level = 'ปานกลาง';
                else if (gripRatio <= 0.67) level = 'ดี';
                else level = 'ดีมาก';
                break;
            // Add other age groups for female
            default:
                level = 'ไม่ทราบเกณฑ์';
        }
    }
    
    description = 'แรงบีบมือเทียบกับน้ำหนักตัว';
    
    if (level === 'ต่ำมาก' || level === 'ต่ำ') {
        recommendation = 'ควรฝึกความแข็งแรงของมือและแขนด้วยอุปกรณ์เช่น hand grip หรือการออกกำลังกายที่เสริมสร้างกล้ามเนื้อส่วนบน';
    } else if (level === 'ปานกลาง') {
        recommendation = 'สามารถพัฒนาความแข็งแรงของมือและแขนให้ดีขึ้นได้ด้วยการฝึกความแข็งแรงเป็นประจำ';
    } else {
        recommendation = 'รักษาระดับความแข็งแรงนี้ด้วยการฝึกความแข็งแรงอย่างสม่ำเสมอ';
    }
    
    return { level, description, recommendation };
}

// Implement other evaluation functions similarly
function evaluateSitAndReach(gender, age, value) {
    // Implementation based on criteria
    return { level: 'ปานกลาง', description: 'ความอ่อนตัว', recommendation: 'ควรยืดเหยียดร่างกายเป็นประจำ' };
}

function evaluateSitUp(gender, age, value) {
    // Implementation based on criteria
    return { level: 'พอใช้', description: 'ความแข็งแรงกล้ามเนื้อท้อง', recommendation: 'ฝึกซิตอัพอย่างน้อย 3 ครั้งต่อสัปดาห์' };
}

function evaluateChairStand(gender, age, value) {
    // Implementation based on criteria
    return { level: 'ดี', description: 'ความแข็งแรงขา', recommendation: 'รักษาระดับความแข็งแรงด้วยการฝึกยืน-นั่งเป็นประจำ' };
}

function evaluateStepTest(gender, age, value) {
    // Implementation based on criteria
    return { level: 'ดีมาก', description: 'ความทนทานของหัวใจและปอด', recommendation: 'รักษาสมรรถภาพด้วยการออกกำลังกายแบบแอโรบิกสม่ำเสมอ' };
}
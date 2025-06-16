// Main application logic
document.addEventListener('DOMContentLoaded', function() {
    // Initialize event listeners
    document.getElementById('calculate-btn').addEventListener('click', calculateResults);
    document.getElementById('save-btn').addEventListener('click', saveResults);
    document.getElementById('share-btn').addEventListener('click', shareResults);
});

function calculateResults() {
    // Get input values
    const age = parseInt(document.getElementById('age').value);
    const gender = document.getElementById('gender').value;
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const waist = parseFloat(document.getElementById('waist').value);
    
    const grip = document.getElementById('grip').value ? parseFloat(document.getElementById('grip').value) : null;
    const sit_and_reach = document.getElementById('sit_and_reach').value ? parseInt(document.getElementById('sit_and_reach').value) : null;
    const sit_up = document.getElementById('sit_up').value ? parseInt(document.getElementById('sit_up').value) : null;
    const chair_stand = document.getElementById('chair_stand').value ? parseInt(document.getElementById('chair_stand').value) : null;
    const step_test = document.getElementById('step_test').value ? parseInt(document.getElementById('step_test').value) : null;
    
    // Validate inputs
    if (!age || !gender || !weight || !height || !waist) {
        alert('กรุณากรอกข้อมูลพื้นฐานให้ครบถ้วน');
        return;
    }
    
    // Calculate BMI
    const bmi = calculateBMI(weight, height);
    const bmiResult = evaluateBMI(bmi);
    
    // Evaluate waist circumference
    const waistResult = evaluateWaist(gender, waist);
    
    // Evaluate physical tests
    let gripResult = null;
    let sitAndReachResult = null;
    let sitUpResult = null;
    let chairStandResult = null;
    let stepTestResult = null;
    
    if (grip !== null) {
        const gripRatio = calculateGripRatio(grip, weight);
        gripResult = evaluateGrip(gender, age, gripRatio);
    }
    
    if (sit_and_reach !== null) {
        sitAndReachResult = evaluateSitAndReach(gender, age, sit_and_reach);
    }
    
    if (sit_up !== null) {
        sitUpResult = evaluateSitUp(gender, age, sit_up);
    }
    
    if (chair_stand !== null) {
        chairStandResult = evaluateChairStand(gender, age, chair_stand);
    }
    
    if (step_test !== null) {
        stepTestResult = evaluateStepTest(gender, age, step_test);
    }
    
    // Display results
    displayResult('bmi-result', 'ดัชนีมวลกาย (BMI)', bmi.toFixed(1), bmiResult);
    displayResult('waist-result', 'รอบเอว', waist + ' ซม.', waistResult);
    
    if (gripResult) {
        const gripRatio = (grip/weight).toFixed(2);
        displayResult('grip-result', 'แรงบีบมือ', grip + ' กก. (' + gripRatio + ' เท่าของน้ำหนักตัว)', gripResult);
    } else {
        displayNoData('grip-result', 'แรงบีบมือ');
    }
    
    if (sitAndReachResult) {
        displayResult('sit_and_reach-result', 'การนั่งงอตัวไปข้างหน้า', sit_and_reach + ' ซม.', sitAndReachResult);
    } else {
        displayNoData('sit_and_reach-result', 'การนั่งงอตัวไปข้างหน้า');
    }
    
    if (sitUpResult) {
        displayResult('sit_up-result', 'การซิตอัพ 30 วินาที', sit_up + ' ครั้ง', sitUpResult);
    } else {
        displayNoData('sit_up-result', 'การซิตอัพ 30 วินาที');
    }
    
    if (chairStandResult) {
        displayResult('chair_stand-result', 'ยืน-นั่งบนเก้าอี้ 60 วินาที', chair_stand + ' ครั้ง', chairStandResult);
    } else {
        displayNoData('chair_stand-result', 'ยืน-นั่งบนเก้าอี้ 60 วินาที');
    }
    
    if (stepTestResult) {
        displayResult('step_test-result', 'ยืนยกเข่าขึ้นลง 3 นาที', step_test + ' ครั้ง', stepTestResult);
    } else {
        displayNoData('step_test-result', 'ยืนยกเข่าขึ้นลง 3 นาที');
    }
    
    // Show result section
    document.getElementById('result-section').style.display = 'block';
    
    // Scroll to results
    document.getElementById('result-section').scrollIntoView({ behavior: 'smooth' });
}

function displayResult(elementId, title, value, result) {
    const emoji = getEmoji(result.level);
    
    document.getElementById(elementId).innerHTML = `
        <div class="result-title">${title}</div>
        <div class="result-value">${emoji} ${value} - ${result.level} (${result.description})</div>
        <div class="result-recommendation"><strong>คำแนะนำ:</strong> ${result.recommendation}</div>
    `;
}

function displayNoData(elementId, title) {
    document.getElementById(elementId).innerHTML = `
        <div class="result-title">${title}</div>
        <div class="result-value">- ไม่มีข้อมูล -</div>
    `;
}

function getEmoji(level) {
    switch(level) {
        case 'ต่ำมาก':
        case 'ต่ำ':
            return '😟';
        case 'ปานกลาง':
        case 'พอใช้':
            return '😐';
        case 'ดี':
            return '😊';
        case 'ดีมาก':
            return '😃';
        default:
            return '❓';
    }
}

function saveResults() {
    alert('บันทึกผลเรียบร้อยแล้ว');
    // In a real app, you would save to local storage or a database
}

function shareResults() {
    alert('แชร์ผลการประเมิน');
    // In a real app, you would implement social sharing
}
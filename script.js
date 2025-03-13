// المتغيرات العامة للتطبيق
let textSizeLevel = 0; // 0: عادي، 1: كبير، 2: أكبر
let imageSizeLevel = 0; // 0: عادي، 1: كبير، 2: أكبر
let isVisuallyImpairedMode = false; // وضع ضعاف البصر

// المتغيرات الأخرى
let cart = {
    items: [],
    total: 0
};

// أسعار العملات
const exchangeRates = {
    'JOD': 1,      // دينار أردني
    'USD': 1.41,   // دولار أمريكي
    'EUR': 1.52,   // يورو
    'SAR': 0.38    // ريال سعودي
};

// دالة تغيير حجم النص
function toggleTextSize() {
    textSizeLevel = (textSizeLevel + 1) % 3;
    const sizes = ['100%', '120%', '140%'];
    document.documentElement.style.fontSize = sizes[textSizeLevel];
    localStorage.setItem('textSizeLevel', textSizeLevel);
}

// دالة تغيير حجم الصور
function toggleImageSize() {
    imageSizeLevel = (imageSizeLevel + 1) % 3;
    const scales = ['1', '1.2', '1.4'];
    document.querySelectorAll('img').forEach(img => img.style.transform = `scale(${scales[imageSizeLevel]})`);
    localStorage.setItem('imageSizeLevel', imageSizeLevel);
}

// دالة تبديل وضع ضعاف البصر
function toggleVisuallyImpairedMode() {
    isVisuallyImpairedMode = !isVisuallyImpairedMode;
    document.body.classList.toggle('visually-impaired-mode');
    localStorage.setItem('visuallyImpairedMode', isVisuallyImpairedMode);
}

// استرجاع القيم المخزنة عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function () {
    textSizeLevel = parseInt(localStorage.getItem('textSizeLevel')) || 0;
    toggleTextSize();
    imageSizeLevel = parseInt(localStorage.getItem('imageSizeLevel')) || 0;
    toggleImageSize();
    isVisuallyImpairedMode = localStorage.getItem('visuallyImpairedMode') === 'true';
    if (isVisuallyImpairedMode) document.body.classList.add('visually-impaired-mode');
});

// زر وضع ضعاف البصر
const accessibilityButton = document.createElement('button');
accessibilityButton.textContent = 'وضع ضعاف البصر';
accessibilityButton.className = 'accessibility-btn';
accessibilityButton.onclick = toggleVisuallyImpairedMode;
document.body.appendChild(accessibilityButton);

// زر التحكم في حجم النص
const textSizeButton = document.createElement('button');
textSizeButton.textContent = 'تكبير النص';
textSizeButton.className = 'text-size-btn';
textSizeButton.onclick = toggleTextSize;
document.body.appendChild(textSizeButton);

// زر التحكم في حجم الصور
const imageSizeButton = document.createElement('button');
imageSizeButton.textContent = 'تكبير الصور';
imageSizeButton.className = 'image-size-btn';
imageSizeButton.onclick = toggleImageSize;
document.body.appendChild(imageSizeButton);



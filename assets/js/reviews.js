/**
 * Reviews Section - Al-Fares Center Website
 * Handles Google Reviews display with filtering (≥3.5 stars)
 */

// Reviews data (from Google Reviews)
const reviewsData = [
  {
    author: "Mohammed",
    rating: 5,
    text: "محل قمة في الاحترام في التعامل وشغل احترافي لي أكتر من ١٢ سنة بتعامل معاهم.",
    textEn: "Excellent service and professional work. I've been dealing with them for over 12 years.",
    date: "2025-01-15"
  },
  {
    author: "Mohammed Elnoor",
    rating: 5,
    text: "ناس محترمه والله تعامل راقي وغير كده اسعار فرق من السوق انصح بيهم.",
    textEn: "Very respectful people with excellent service and competitive prices. Highly recommended.",
    date: "2025-01-10"
  },
  {
    author: "فيصل الغامدي",
    rating: 4,
    text: "انصح بالتعامل ناس فاهمين في شغلهم بكل صراحة.",
    textEn: "Highly recommend. They really know what they're doing.",
    date: "2025-01-08"
  },
  {
    author: "Menam Salman",
    rating: 4,
    text: "محل ممتاز وفي مصداقية في المواعيد ربنا يبارك فيكم ويوفقكم.",
    textEn: "Excellent shop with reliable timing. May God bless you and grant you success.",
    date: "2025-01-05"
  },
  {
    author: "محمد الشهري",
    rating: 5,
    text: "مشاءالله تبارك الرحمن خدمة وقطع متوفره عندهم بنسبه لي الموضف محمد الأزهري قمة الأخلاق.",
    textEn: "Excellent service and parts availability. Special thanks to Mohamed Al-Azhari for his outstanding professionalism.",
    date: "2024-12-28"
  },
  {
    author: "mohamed noor alsharif",
    rating: 4,
    text: "‏تم زيارة المحل المحل ممتاز جدا في التعامل في كل شيء صيانة وبرمجة. ❤️",
    textEn: "Visited the shop - excellent in everything: repair and programming. ❤️",
    date: "2024-12-20"
  },
  {
    author: "redwan مرغلاني",
    rating: 5,
    text: "اشكركم جداً على تعاونكم و سرعة انجازكم و دقتكم شكرا شكرا شكرا كذالك شكرا للأخ محمد الازهري.",
    textEn: "Thank you very much for your cooperation, quick completion, and accuracy. Special thanks to Mohamed Al-Azhari.",
    date: "2024-12-15"
  },
  {
    author: "Queen Eman",
    rating: 4,
    text: "خدمة ممتازه وتعامل راقي.",
    textEn: "Excellent service and professional treatment.",
    date: "2024-12-10"
  },
  {
    author: "KONSTANTINOS LAPPAS",
    rating: 4,
    text: "Very fast service, everything as they told before and very pleasant staff.",
    textEn: "Very fast service, everything as they told before and very pleasant staff.",
    date: "2024-12-05"
  },
  {
    author: "Kamal Ali",
    rating: 5,
    text: "Professional work, amazing service and reasonable price 👍🏻👍🏻",
    textEn: "Professional work, amazing service and reasonable price 👍🏻👍🏻",
    date: "2024-11-28"
  },
  {
    author: "Mohamed Abdelhadi",
    rating: 4,
    text: "خدمه ممتازة في وقت قصير الله يوفقهم للخير والنجاح الدائم.",
    textEn: "Excellent service in a short time. May God grant them success.",
    date: "2024-11-20"
  },
  {
    author: "Nawaf Al Shehri",
    rating: 4,
    text: "ممتاز جداً وفاهم وأشكر المهندس أحمد على أخلاقه وشغله الزين.",
    textEn: "Excellent and knowledgeable. Thanks to Engineer Ahmed for his ethics and great work.",
    date: "2024-11-15"
  },
  {
    author: "Ahmed Elkhateeb",
    rating: 4,
    text: "ممتاز في الصيانه والتعامل.",
    textEn: "Excellent in repair and service.",
    date: "2024-11-10"
  },
  {
    author: "ابو ريان",
    rating: 5,
    text: "ناس متمكنين من شغلهم كان عندي هاردسك قديم فوق العشرين سنه وشبه معدوم وقدرو يستخرجو المعلومات منه وفقهم الله.",
    textEn: "Very skilled professionals. They recovered data from my 20+ year old hard drive that seemed impossible. May God bless them.",
    date: "2024-11-05"
  },
  {
    author: "Abdulkader Mohameed",
    rating: 4,
    text: "يعطيه العافية ماقصرو وكانت التجربة ممتازة معهم 👍.",
    textEn: "Great job! The experience was excellent with them 👍.",
    date: "2024-10-28"
  },
  {
    author: "عبدالله الزهراني",
    rating: 5,
    text: "اشكر المهندس محمد الازهري على تعاملة الجميل وخبرته في المهنه تفوق على الجميع.",
    textEn: "Thanks to Engineer Mohamed Al-Azhari for his excellent service and outstanding expertise.",
    date: "2024-10-20"
  },
  {
    author: "عبدالله بصفر",
    rating: 5,
    text: "استاذ محمد اخلاق وشغل ورجال امين بصراحة من واقع تجربة 10/10 ❤️",
    textEn: "Mr. Mohamed - ethics, work, and trustworthy. Honestly from experience 10/10 ❤️",
    date: "2024-10-15"
  },
  {
    author: "Abdulqader Almohsny",
    rating: 4,
    text: "انصح بشده شباب بجد محترمين ومتعاونين ربنا يوفقهم.",
    textEn: "Highly recommend. Very respectful and cooperative team. May God grant them success.",
    date: "2024-10-10"
  },
  {
    author: "ابو ياسين الديكورات الخشبيه",
    rating: 4,
    text: "جدا ممتاز.",
    textEn: "Very excellent.",
    date: "2024-10-05"
  },
  {
    author: "حامد موسى العيسي",
    rating: 4,
    text: "تعامل ممتاز وخدمة سريعة واسعار مناسبة.",
    textEn: "Excellent service, fast delivery, and reasonable prices.",
    date: "2024-09-28"
  },
  {
    author: "Ahmed Romyai",
    rating: 4,
    text: "معاملة محترمة وأمين وسرعة فى التنفيذ.",
    textEn: "Respectful treatment, trustworthy, and fast execution.",
    date: "2024-09-20"
  }
];

// Filter reviews (≥3.5 stars)
const filteredReviews = reviewsData.filter(review => review.rating >= 3.5);

// Initial display count
let displayedReviewsCount = 6;

/**
 * Initialize Reviews Section
 */
function initReviews() {
  renderReviews();
  setupShowMoreButton();
  
  // Listen for language changes
  window.addEventListener('languageChanged', () => {
    renderReviews();
  });
  
  console.log('✅ Reviews section initialized');
}

/**
 * Render reviews
 */
function renderReviews() {
  const reviewsGrid = document.getElementById('reviews-grid');
  if (!reviewsGrid) return;
  
  const currentLang = window.AlfaresApp ? window.AlfaresApp.currentLang() : 'ar';
  const reviewsToShow = filteredReviews.slice(0, displayedReviewsCount);
  
  reviewsGrid.innerHTML = reviewsToShow.map(review => createReviewCard(review, currentLang)).join('');
  
  // Update show more button visibility
  updateShowMoreButton();
}

/**
 * Create review card HTML
 */
function createReviewCard(review, lang) {
  const text = lang === 'ar' ? review.text : review.textEn;
  const stars = generateStars(review.rating);
  const formattedDate = formatDate(review.date, lang);
  
  return `
    <div class="review-card">
      <div class="review-header">
        <span class="review-author">${review.author}</span>
        <span class="review-stars">${stars}</span>
      </div>
      <p class="review-text">${text}</p>
      <span class="review-date">${formattedDate}</span>
    </div>
  `;
}

/**
 * Generate stars HTML
 */
function generateStars(rating) {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStar;
  
  let starsHTML = '';
  
  for (let i = 0; i < fullStars; i++) {
    starsHTML += '★';
  }
  
  if (halfStar) {
    starsHTML += '★';
  }
  
  for (let i = 0; i < emptyStars; i++) {
    starsHTML += '☆';
  }
  
  return starsHTML;
}

/**
 * Format date
 */
function formatDate(dateString, lang) {
  const date = new Date(dateString);
  
  if (lang === 'ar') {
    return date.toLocaleDateString('ar-SA', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  } else {
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }
}

/**
 * Setup show more button
 */
function setupShowMoreButton() {
  const showMoreBtn = document.getElementById('show-more-reviews');
  if (!showMoreBtn) return;
  
  showMoreBtn.addEventListener('click', () => {
    if (displayedReviewsCount < filteredReviews.length) {
      displayedReviewsCount += 6;
    } else {
      displayedReviewsCount = 6;
    }
    renderReviews();
  });
}

/**
 * Update show more button text and visibility
 */
function updateShowMoreButton() {
  const showMoreBtn = document.getElementById('show-more-reviews');
  if (!showMoreBtn) return;
  
  const currentLang = window.AlfaresApp ? window.AlfaresApp.currentLang() : 'ar';
  
  if (displayedReviewsCount < filteredReviews.length) {
    showMoreBtn.style.display = 'block';
    showMoreBtn.textContent = window.AlfaresApp ? window.AlfaresApp.getTranslation('reviews.showMore') : (currentLang === 'ar' ? 'عرض المزيد' : 'Show More');
  } else if (filteredReviews.length > 6) {
    showMoreBtn.style.display = 'block';
    showMoreBtn.textContent = window.AlfaresApp ? window.AlfaresApp.getTranslation('reviews.showLess') : (currentLang === 'ar' ? 'عرض أقل' : 'Show Less');
  } else {
    showMoreBtn.style.display = 'none';
  }
}

/**
 * Calculate aggregate rating
 */
function calculateAggregateRating() {
  const totalRating = filteredReviews.reduce((sum, review) => sum + review.rating, 0);
  const averageRating = (totalRating / filteredReviews.length).toFixed(1);
  
  return {
    rating: averageRating,
    count: filteredReviews.length
  };
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initReviews);
} else {
  initReviews();
}

// Export
window.ReviewsSection = {
  init: initReviews,
  getAggregateRating: calculateAggregateRating
};


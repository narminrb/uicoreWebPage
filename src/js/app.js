document.addEventListener('DOMContentLoaded', function () {
  const modal = document.getElementById('adminModal');
  const closeBtn = document.querySelector('.close');
  const saveIconBtn = document.getElementById('saveIcon');
  const deleteIconBtn = document.getElementById('deleteIcon');
  let selectedBrand; 
  modal.style.display = 'none'; 

  document.querySelectorAll('.brand-name').forEach(brand => {
    const imgElement = brand.querySelector('img');
    if (imgElement) {
      imgElement.dataset.originalSrc = imgElement.src; 
    }
    
    brand.addEventListener('click', function () {
      selectedBrand = this; 
      modal.style.display = 'block'; 
    });
  });

  closeBtn.onclick = function () {
    modal.style.display = 'none'; 
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = 'none'; 
    }
  };

 
  saveIconBtn.addEventListener('click', function () {
    const iconInput = document.getElementById('iconInput');
    if (iconInput.files.length > 0) {
      const file = iconInput.files[0];
      const reader = new FileReader();

      reader.onload = function (e) {
        if (selectedBrand) {
          selectedBrand.querySelector('img').src = e.target.result; 
          modal.style.display = 'none'; 
        }
      };

      reader.readAsDataURL(file); 
    } else {
      alert('Please select an icon to upload.');
    }
  });

  deleteIconBtn.addEventListener('click', function () {
    if (selectedBrand) {
      const imgElement = selectedBrand.querySelector('img');
      if (imgElement && imgElement.dataset.originalSrc) {
        imgElement.src = imgElement.dataset.originalSrc; 
      }
      modal.style.display = 'none'; 
    }
  });
});

  //adimn html

  function openAdminPage(element) {
    const caseData = {
      id: element.dataset.id,
      title: element.querySelector("h2").innerText,
      description: element.querySelector("p").innerText,
      imgSrc: element.querySelector("img").src,
    };
    localStorage.setItem("selectedCase", JSON.stringify(caseData));
    window.location.href = "admin.html";
  }


  function updateCaseFromLocalStorage() {
    const updatedCaseData = JSON.parse(localStorage.getItem("selectedCase"));
    if (updatedCaseData) {
      const caseElement = document.querySelector(`.cases[data-id="${updatedCaseData.id}"]`);
      if (caseElement) {
        caseElement.querySelector("h2").innerText = updatedCaseData.title;
        caseElement.querySelector("p").innerText = updatedCaseData.description;
        caseElement.querySelector("img").src = updatedCaseData.imgSrc;
      }
    }
  }

  document.addEventListener("DOMContentLoaded", updateCaseFromLocalStorage);

  const initialCasesData = [
    {
      id: "1",
      title: "Flexible time",
      description: "Online education allows teachers and students to set their own pace of learning, and there is added flexibility in setting a schedule that fits.",
      imgSrc: "https://outgrid.uicore.co/elearning/wp-content/uploads/sites/5/2023/06/eLearning-Why-Icon-5.webp"
    },
    {
      id: "2",
      title: "Certificate",
      description: "Teachers and students to set their own pace of learning, and there is added flexibility in setting a schedule that fits everyone’s agenda.",
      imgSrc: "https://outgrid.uicore.co/elearning/wp-content/uploads/sites/5/2023/06/eLearning-Why-Icon-2.webp"
    },
    {
      id: "3",
      title: "Class program options",
      description: "Allows teachers and students to set their own pace of learning, and there is added flexibility in setting a schedule that fits everyone’s agenda.",
      imgSrc: "https://outgrid.uicore.co/elearning/wp-content/uploads/sites/5/2023/06/eLearning-Why-Icon-3.webp"
    },
    {
      id: "4",
      title: "Access anywhere",
      description: "Online education allows teachers and students to set their own pace of learning, and there is added flexibility in setting a schedule.",
      imgSrc: "https://outgrid.uicore.co/elearning/wp-content/uploads/sites/5/2023/06/eLearning-Why-Icon-4.webp"
    }
  ];


  if (!localStorage.getItem("initialCaseData")) {
    localStorage.setItem("initialCaseData", JSON.stringify(initialCasesData));
  }

  function openAdminPage(element) {
    const caseData = {
      id: element.dataset.id,
      title: element.querySelector("h2").innerText,
      description: element.querySelector("p").innerText,
      imgSrc: element.querySelector("img").src,
    };

    localStorage.setItem("selectedCase", JSON.stringify(caseData));
    window.location.href = "admin.html";
  }


  function updateCaseFromLocalStorage() {
    const updatedCaseData = JSON.parse(localStorage.getItem("selectedCase"));
    if (updatedCaseData) {
      const caseElement = document.querySelector(`.cases[data-id="${updatedCaseData.id}"]`);
      if (caseElement) {
        caseElement.querySelector("h2").innerText = updatedCaseData.title;
        caseElement.querySelector("p").innerText = updatedCaseData.description;
        caseElement.querySelector("img").src = updatedCaseData.imgSrc;
      }
    }
  }

 
  document.addEventListener("DOMContentLoaded", updateCaseFromLocalStorage);



  //categories html
  const defaultCategory = {
    1: {
      title: 'Business and Management',
      desc: '32 online courses',
      img: 'https://outgrid.uicore.co/elearning/wp-content/uploads/sites/5/2023/06/eLearning-Courses-Icon-1.webp',
    },
    2: {
      title: 'Technology and IT',
      desc: '24 online courses',
      img: 'https://outgrid.uicore.co/elearning/wp-content/uploads/sites/5/2023/06/eLearning-Courses-Icon-2.webp',
    },
    3: {
      title: 'Communication',
      desc: '11 online courses',
      img: 'https://outgrid.uicore.co/elearning/wp-content/uploads/sites/5/2023/06/eLearning-Courses-Icon-3.webp',
    },
    4: {
      title: 'Arts and Design',
      desc: '56 online courses',
      img: 'https://outgrid.uicore.co/elearning/wp-content/uploads/sites/5/2023/06/eLearning-Courses-Icon-4.webp',
    },
    5: {
      title: 'Marketing',
      desc: '20 online courses',
      img: 'https://outgrid.uicore.co/elearning/wp-content/uploads/sites/5/2023/06/eLearning-Courses-Icon-5.webp',
    },
    6: {
      title: 'Personal Development',
      desc: '17 online courses',
      img: 'https://outgrid.uicore.co/elearning/wp-content/uploads/sites/5/2023/06/eLearning-Courses-Icon-6.webp',
    }
  };

  function loadCategories() {
    const categoryIds = [1, 2, 3, 4, 5, 6];
    const categoryList = document.getElementById('category-list');
    categoryList.innerHTML = ''; 
  
    categoryIds.forEach((categoryId) => {
      const category = JSON.parse(localStorage.getItem(`category-${categoryId}`)) || defaultCategory[categoryId];
  
      const categoryCard = document.createElement('div');
      categoryCard.classList.add('col-xl-4');
      categoryCard.innerHTML = `
        <div class="categories-card" onclick="goToCategoryPage(${categoryId})">
          <div class="categories-image categories-image${categoryId}">
            <div class="categories-img-box">
              <img src="${category.img}" alt="${category.title}">
            </div>
          </div>
          <div class="categories-text-box">
            <h2>${category.title}</h2>
            <p>${category.desc}</p>
            <h3>View Lessons <span><i class="ri-arrow-drop-right-line"></i></span></h3>
          </div>
        </div>
      `;
      categoryList.appendChild(categoryCard);
    });
  }
  

  function goToCategoryPage(categoryId) {
    const url = `categories.html?category=${categoryId}`;
    window.location.href = url;
  }

  window.onload = loadCategories;

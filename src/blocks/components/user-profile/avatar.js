document.querySelector('.user-profile__button input[type="file"]').addEventListener('change', function(event) {
    const file = event.target.files[0];
  
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
  
      reader.onload = function(e) {
        const avatarImg = document.querySelector('.user-profile__avatar');
        avatarImg.src = e.target.result;
      };
  
      reader.readAsDataURL(file);
    } else {
      alert('Пожалуйста, выберите изображение.');
    }
  });
  
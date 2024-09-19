const profilePictureInput = document.getElementById('profile-picture-input');
const profilePictureImg = document.getElementById('profile-picture');
const changePictureBtn = document.getElementById('change-picture-btn');
const nameInput = document.getElementById('name-input');
const emailDisplay = document.getElementById('email-display');
const saveBtn = document.getElementById('save-btn');

const userSession = {
  profilePicture: 'profile.jpg',
  name: 'John Doe',
  email: 'john.doe@example.com'
};

// Atualizar a interface do usuário com os dados da sessão do usuário
profilePictureImg.src = userSession.profilePicture;
nameInput.value = userSession.name;
emailDisplay.textContent = userSession.email;

// Lidar com a alteração da foto de perfil
changePictureBtn.addEventListener('click', () => {
  profilePictureInput.click();
});

profilePictureInput.addEventListener('change', (event) => {
  const file = event.target.files[0];
  const imageUrl = URL.createObjectURL(file);
  profilePictureImg.src = imageUrl;
});

// Lidar com a atualização do nome
nameInput.addEventListener('input', () => {
  updateUserSession(profilePictureImg.src, nameInput.value, userSession.email);
});

// Lidar com o clique do botão de salvar
saveBtn.addEventListener('click', () => {
  updateUserSession(profilePictureImg.src, nameInput.value, userSession.email);
  // Adicionar qualquer lógica de salvamento adicional aqui
});

// Função para atualizar a sessão do usuário
function updateUserSession(profilePic, userName, userEmail) {
  userSession.profilePicture = profilePic;
  userSession.name = userName;
  userSession.email = userEmail;
}
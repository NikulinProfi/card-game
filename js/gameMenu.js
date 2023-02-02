import { startGame } from './startGame.js'

export const createGameMenu = () => {
  const title = document.createElement('h2')
  const gameSection = document.querySelector('.game-section__container')

  // Чистка контейнера
  gameSection.innerHTML = ''
  title.textContent = `Выбор сложности`
  title.classList.add('game-menu__title')

  document.querySelector('.confetti').innerHTML = ''

  // Создание кнопок для карт
  const createDifficultButton = (difficult) => {
    const button = document.createElement('button')
    // добавим класс для кнопки
    button.classList.add('game-menu__difficult-btn')
    button.textContent = `${difficult} карт`

    button.addEventListener('click', () => {
      startGame(difficult)
    })

    return button
  }

  gameSection.append(
    title,
    createDifficultButton(10),
    createDifficultButton(12),
    createDifficultButton(14),
    createDifficultButton(16)
  )
}

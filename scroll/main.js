document.addEventListener("DOMContentLoaded", () =>{
    window.scrollTo(0, 0)

    const homeButton = document.querySelector('.topNav button:nth-child(2)')
    const aboutButton = document.querySelector('.topNav button:nth-child(3)')
    const servicesButton = document.querySelector('.topNav button:nth-child(4)')
    const toursButton = document.querySelector('.topNav button:nth-child(5)')
    const exploreButton = document.querySelector('.firstCard button')

    homeButton.addEventListener('click', () => scrollToSection('.mainPage'))
    aboutButton.addEventListener('click', () => scrollToSection('.secondCard'))
    servicesButton.addEventListener('click', () => scrollToSection('.thirdCard'))
    toursButton.addEventListener('click', () => scrollToSection('.fourthCard'))
    exploreButton.addEventListener('click', () => scrollToSection('.fourthCard'))
})

const scrollToSection = (selector) => {
    const section = document.querySelector(selector)
    window.scrollTo({
        // 상단에서 얼마나 떨어져있는지 계산하는 메서드
        // first가 card중에서 제일 낮은 값, fourthCard가 제일 높은 값이 나올거임
        top: section.offsetTop,
        behavior : 'smooth'
    })
}

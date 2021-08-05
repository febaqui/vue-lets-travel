import gsap from 'gsap'
import { ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

const init = function () {
    const fadeIn = document.querySelectorAll('.animated--fade-in')
    if (fadeIn.length > 0){
        fadeIn.forEach(section => {
            let from = {opacity: 0, top: 40 }
            let to = {
                backgroundColor: "#24d152",
                top: 0,
                opacity: 1,
                duration: 0.7,
                scrollTrigger: {
                    start: "top 80%",
                    trigger: section,
                    toggleActions: "play none complete none"
                },
            }
            gsap.fromTo(section, from, to).delay(0.5)
        })
    }
}

export default init;
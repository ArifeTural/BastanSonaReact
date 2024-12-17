import React from 'react'
import cookie from "./images/cookies-8394894_1280.webp"

const Main = () => {
  return (
    <div>
        <p style={{color: "red"}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, suscipit? Atque ipsa facere quos tempore reiciendis? Nulla animi vitae delectus ipsam ipsa incidunt eius at voluptatum accusamus iste. Accusamus, nulla.</p>
        <div>
          <img className='img1' src="https://cdn.pixabay.com/photo/2023/01/08/18/11/plants-7705865_1280.jpg" alt="" />
          <img className="img2" src={cookie} alt="" />
          <img className="img3" src="/cat-8576777_1280.webp" alt="cat" />
        </div>
        <p style={{color: "green"}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio libero soluta nam dolorum. Exercitationem corporis quibusdam, iusto provident in recusandae nisi ullam labore! Similique ducimus ullam laboriosam illo, magnam placeat cumque voluptatibus eum alias minima hic recusandae, saepe totam eligendi. Expedita quo doloremque harum similique rem corrupti, quam in minus officiis debitis, obcaecati, hic vero vitae placeat possimus porro tenetur blanditiis architecto iusto ullam omnis asperiores sequi reprehenderit dolore! Qui officiis rerum eaque reiciendis doloribus vero ratione incidunt et soluta beatae molestias ducimus nulla sed tenetur facilis earum dolor perferendis, totam aliquid! Harum, eos dignissimos perspiciatis impedit nulla culpa iure?</p>
    </div>
  )
}

export default Main
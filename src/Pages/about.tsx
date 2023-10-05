import {Link } from 'react-router-dom'

export const About = ( ) =>{
    return (
        <>
        <div className="aboutH">
            <h1>About us</h1>
        </div>
        <div className="Taha">
            <h1>--Taha Ishaq</h1>
            <p>Hi, My name is Taha Ishaq, I am currently studying Software Engineering at NfC-IET Multan, I am the founder and Developer of this application made for the software depart as a test application of Social Media for the students , 
                I along with my team are willing to update this and bring the students of NFC a bit more closer to the events happening and the part time fun
            </p>
        </div>
        <div className="Abdullah">
            <h1>--Abdullah Sana</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque minus vero error deserunt sint sequi aut, fugit accusamus! Nulla rem, at dolorem aperiam quam accusantium. Aperiam, et quibusdam! Sapiente, eius!
            Voluptatibus, cupiditate praesentium? Aperiam necessitatibus odit suscipit debitis. Tempore recusandae nemo possimus sapiente quaerat corrupti veniam provident aliquam! Eos vitae saepe cumque perspiciatis expedita. Doloremque ratione aliquid voluptatum debitis autem!
            Veritatis dolorum similique assumenda animi quaerat porro, sit magnam soluta voluptas quam cumque asperiores debitis dolorem exercitationem iusto magni est eveniet voluptatem reiciendis expedita quos qui officiis, hic perferendis! Cum.
            </p>
        </div>

        <div className="huzaifa">
            <h1>--Huzaifa Siddque</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia alias unde eos ad aperiam facilis ea distinctio nobis, incidunt ut iure nisi odit natus aspernatur tenetur obcaecati excepturi? Eos, sequi?
            Maxime eaque commodi reiciendis? Aut odit minima, recusandae amet saepe, accusamus dolor quod sit eligendi ipsa ab, at quas debitis beatae esse cumque quasi? Rem, possimus accusantium? In, incidunt repudiandae?
            Hic error iure excepturi, reiciendis officiis debitis, ut sunt quos modi delectus odit pariatur. Minus neque necessitatibus temporibus dolorum, ipsum hic iure harum, explicabo optio quam beatae molestiae facere autem!</p>
        </div>
        <div className="footA">
            <>
            <footer>BSSE-2k21-Blog-Application</footer>
            <Link className='L' to='/'>Home</Link>
            <Link className='i' to='/createpost'>Create post</Link>
            <Link className='N' to='/contacts'>Contact Us</Link>
            </>
        </div>
        
        
        </>
    )
}